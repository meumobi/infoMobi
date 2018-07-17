import { 
  Component, 
  Input, 
  Output, 
  EventEmitter,
  OnInit, 
  ViewChild, 
  ViewContainerRef,
  ComponentFactoryResolver, 
  OnDestroy
 } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommentDescription } from '@models/comment-description.interface';
import * as description from '../comment-description/.';

@Component({
  selector: 'comment-details',
  templateUrl: 'comment-details.html'
})
export class CommentDetailsComponent implements OnInit, OnDestroy  {
  
  @Input('comment') comment;
  @Output() update = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  @Output() open = new EventEmitter(false);
  @Output() promote = new EventEmitter(false);

  @ViewChild('description', { read: ViewContainerRef }) entry: ViewContainerRef;

  rootNavCtrl: NavController;
  componentRef: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl') || this.navCtrl;
  }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    this.componentRef.destroy(); 
  }

  getComponentName(name: string) {
    return name.charAt(0).toUpperCase() + name.substr(1) + 'Component';
  }

  loadComponent() {
    this.entry.clear();
    if (!this.comment.type) {
      this.comment["type"] = "Message";
    }
    let projectableNode = document.createElement('p');
    projectableNode.innerHTML = this.comment.description;

    const className = this.getComponentName(this.comment.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(description[className]);
    this.componentRef = this.entry.createComponent(componentFactory, this.entry.length, null, [[projectableNode]]);
    (<CommentDescription>this.componentRef.instance).data = this.comment.data;
    (<CommentDescription>this.componentRef.instance).channel = this.comment.channel;
  }

  openPost() {
    this.open.emit({});
  }

  togglePublished() {
    this.update.emit({
      published: !this.comment.published
    })
  }

  toggleAnswered() {
    this.update.emit({
      answered: !this.comment.answered
    })
  }

  promoteComment() {
    this.promote.emit({});
  }

  deleteComment() {
    this.delete.emit({});
  }

  pushDetailsPage(page: string, id: string) {
    if (id) {
      this.rootNavCtrl.push(page, {
        id: id,
        rootNavCtrl: this.rootNavCtrl
      });
    } else {
      console.log("missing id of author");
    }
  }
}