# Contributing
## Workflow

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Commit msg
### `<type>(<scope>): <subject>`

Write a [standardized commit message](https://conventionalcommits.org/). Adherence to these conventions is necessary because release notes are automatically generated from these messages.

Each commit message consists of a header, a body and a footer. The header has a special format that includes a [type](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type), a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- The subject is mandatory and the scope of the header is optional.
- A scope is a phrase describing a section of the codebase enclosed in parenthesis, e.g., `fix(parser):`

#### Subject
The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

#### Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Examples

See [examples](https://conventionalcommits.org/#examples)

## Branch naming
### `<type>/<name>`

#### `<name>`
Always use dashes to seperate words, and keep it short.

#### Examples
```
feat/renderer-cookies
fix/dockerfile-base-image
refactor/login-ie
```