# codemirror-lang-elixir
A codemirror.next mode for elixir. Uses the code from [codemirror-mode-elixir](https://github.com/ianwalter/codemirror-mode-elixir), which is not compatible with codemirror.next/codemirror 6.

## Installation
Run `npm install codemirror-lang-elixir`

## Usage
Treat the same way as a [legacy-modes](https://github.com/codemirror/legacy-modes) import:
```js
import { elixir } from 'codemirror-lang-elixir'

const lang = StreamLanguage.define(elixir)
```