# :clipboard: OML - Outline Markup Language
- :date:**04-03-2023** :pushpin:**Alpha Version 1.0.1**
- :computer:<a href="https://github.com/n4j1Br4ch1D" target="_blank" title="NajibRachid: Agile full-stack developer">NajibRachid</a> :purple_circle:<a href="https://anmoonweb.com/?ref=oml" target="_blank" title="ANMOON: Right talents at the right place ">ANMOON</a> :office: <a href="https://x-hub.io/?ref=oml" target="_blank" title="XHUB: For Developers By Developers">XHUB</a>

OutlineML (or OutlineMarkup) is a lightweight, human-readable, and machine-parseable markup language based on outlines. It's designed for tasks such as outlining, organizing information, generating structured documents, and more. OML is extensible, allowing users to create custom outline types and features.

**keywords:** _OML, ListML, OutlineML, List markup language, Outline markup language, markup languages, Markdown list, Markdown outlines, YAML List, ListMarkup, list parser, nested lists, nested outlines, structured list, outlines parser, txt list to JSON, CSV, Comma-separated values._

---

<img src="https://raw.githubusercontent.com/n4j1Br4ch1D/oml/main/assets/oml.png" alt="Outline markup language" />

## Features

- [x] Lightweight, & No dependencies.
- [x] Supports deeply nested lists.
- [x] Supports MetaData/Properties.
- [x] Supports Comments.
- [x] Parse to a JSON Structured representation.
- [x] Customizable & Extensible. 
- [ ] Use as a pseudo language for AI(chatGPT).
- [ ] CRUD Methods.
- [ ] IDE Integrations.

## Usage
### Install

Install OML javascript parser:

```sh
#npm
npm i outlineml

#yarn
yarn add outlineml
```
### Syntax: Rules & Conventions
 img
 - indent:  convention: start from 0 and increase any subitems by 2 
 - indicator: is defined by 1st string before first space,  anythig can be used covention is to use symbols: -
 - name: its first string before , or a : symbol.
 - props are defined by key and value also can be singular if defined by a dictionary.
 - comments  typical is // for singular and /* */

### Methods

__ Extra methods __

### Config & Dictionary
So the idea behid oml is to custmise to ur needs
so you can set you help methods as such.


### Formating the Code

### IDE (CodeMirror)

## Demo

Lets parse the following list into json using the `toJSON` method:

```txt
- clients
  - John Doe, age 25, gender male, skills JavaScript CSS, hobbies Reading Sports
  - Jane Doe, age 23, gender female, skills Drawing Poetry // John's sister
- products
  - Stamp Markers, price 20$, qty 12
  - Web development learning pack, price 40$
    - Web hosting
    - React Course
    - Spring Boot Course
```

Once run you will get the following result:

```json

```

You can also reverse the parsing using the `toOML` method.

## Releases

```txt
  - Initial Version 1.0.0 : 26/03/2023
    - Project Setup.
    - Theory & prove of concept.
  - Alpha Version 1.0.1 : 04/03/2023
    - Develop essential methods.
    - Improv Data Structure.
  - [Agenda] Beta Version 1.0.x : xx/03/2023
    - Fix Extract indicator/name/metaData.
    - Fix name extractor space issue.
    - Fix empty metadata.
    - Improve Code.
    - Enable customization.
    - Fix comments in metadata.
    - Add comment extractor.
    - Add ordering.
    - Add toOML method.
    - Add Formating.
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository.

Tests included:

```sh
   npm test
```

### License

This project is licensed under the MIT License. See the LICENSE file for more information. Feel free to use it in your own projects, or contribute to its development on GitHub.
