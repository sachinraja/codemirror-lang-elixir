# codemirror-lang-elixir

This repo is archived. Ownership of the `codemirror-lang-elixir` package has been transferred to https://github.com/livebook-dev/codemirror-lang-elixir.

A CodeMirror 6 mode for elixir. Most of the code is from [codemirror-mode-elixir](https://github.com/ianwalter/codemirror-mode-elixir), which was not compatible with v6.

## Installation
```shell
npm install codemirror-lang-elixir @codemirror/language
```

## Usage
Treat it the same way as a [legacy-modes](https://github.com/codemirror/legacy-modes) import:
```js
import { StreamLanguage } from '@codemirror/language'
import { elixir } from 'codemirror-lang-elixir'

const lang = StreamLanguage.define(elixir)
```
