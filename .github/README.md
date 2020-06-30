# Decimal To Base
[heading__top]:
  #decimal-to-base
  "&#x2B06; Converts decimal to another base, eg. hex, octal, or binary"


Converts decimal to another base, eg. hex, octal, or binary

## [![Byte size of Decimal To Base][badge__main__decimal_to_base__source_code]][decimal_to_base__main__source_code] [![Open Issues][badge__issues__decimal_to_base]][issues__decimal_to_base] [![Open Pull Requests][badge__pull_requests__decimal_to_base]][pull_requests__decimal_to_base] [![Latest commits][badge__commits__decimal_to_base__main]][commits__decimal_to_base__main] [![decimal-to-base Demos][badge__gh_pages__decimal_to_base]][gh_pages__decimal_to_base]



------


- [:arrow_up: Top of Document][heading__top]

- [:building_construction: Requirements][heading__requirements]

- [:zap: Quick Start][heading__quick_start]

- [&#x1F9F0; Usage][heading__usage]

  - [NodeJS][heading__usage__nodejs]
  - [GitHub Pages][heading__usage__github_pages]
    - [:memo: Edit Your ReadMe File][heading__edit_your_readme_file]
    - [&#x1F578; Edit Your HTML][heading__edit_your_html]
    - [:floppy_disk: Commit and Push][heading__commit_and_push]

- [:scroll: Decimal to Base Reference][heading__api_reference]

- [&#x1F5D2; Notes][heading__notes]

- [:card_index: Attribution][heading__attribution]

- [:balance_scale: Licensing][heading__license]


------



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


NodeJS development dependencies may be installed via NPM...


```Bash
npm install
```


> Note, installing dependencies are only required for **development**, ie. this project is ready to use as is.


___


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."


Clone this project...


**Linux/MacOS**


```Bash
mkdir -vp ~/git/hub/javascript-utilities

cd ~/git/hub/javascript-utilities

git clone git@github.com:javascript-utilities/decimal-to-base.git
```


**Windows**


```Batch
set _organization_directory="%HOMEDRIVE%%HOMEPATH%\git\hub\javascript-utilities"

if not exists %_organization_directory (
  md %_organization_directory
)

CD /D %_organization_directory

git clone git@github.com:javascript-utilities/decimal-to-base.git
```


... then utilize the _`decimalToBase`_ function within the _`decimal-to-base.js`_ script within your application.


___


## Usage
[heading__usage]:
  #usage
  "&#x1F9F0; Tips on how to utilize this project"


The JavaScript source code of this project is transpiled for ECMAScript version 6 (`es2017`) by default, so _should_ be useful for either Web Browser or NodeJS applications.


### NodeJS
[heading__usage__nodejs]:
  #nodejs
  "Usage tips for NodeJS"


If utilizing NPM to track project dependencies it is possible to install this project via...


```Bash
npm install javascript-Utilizes/decimal-to-base
```


... Otherwise if not using NPM, then change directories to where this project was cloned, and start a NodeJS shell...


```Bash
cd git/hub/javascript-utilities/decimal-to-base

node
```


Either _`import`_ or _`require`_ the _`decimalToBase`_ function to preform conversions...


```JavaScript
const decimalToBase = require('./decimal-to-base.js');

decimalToBase(32, 16);
//> 0x20

decimalToBase(15, 16);
//> 0xF

//...
```


------


### GitHub Pages
[heading__usage__github_pages]:
  #github-pages
  "Usage tips for utilizing this project within a GitHub Pages repository"


For GitHub Pages it is recommended to utilize this project as a Git Submodule.


Change directories to the repository that will depend upon this project, and checkout the _`gh-pages`_ branch...


```Bash
cd git/hub/<name>/<repository>

git checkout gh-pages
```


Make a directory for Git Modules...


```Bash
mkdir -vp 'assets/js/modules'
```


Add this project as a Git Submodule...


```Bash
git submodule add -b 'main'\
  --name 'decimal-to-base'\
  'https://github.com/javascript-utilities/decimal-to-base.git'\
  'assets/js/modules/decimal-to-base'
```


Commit added Git Submodule...


```Bash
git commit -F- <<'EOF'
:heavy_plus_sign: Adds javascript-utilities/decimal-to-base#1 dependency



**Adds**

- `.gitmodules` file, tracks other Git repository code utilized by this project

- `assets/js/modules/decimal-to-base` submodule, Git tracked dependency
EOF
```


------


#### Edit Your ReadMe File
[heading__edit_your_readme_file]:
  #edit-your-readme-file
  "&#x1F4DD; Suggested additions so everyone has a good time with submodules"


**Quick Start Section**


```MarkDown
Clone with the following to avoid incomplete downloads



    git clone --recurse-submodules <url-for-your-project>
```


**Updates/Upgrades Section**


```MarkDown
Update/upgrade submodules via


    git submodule update --init --merge --recursive
```



Add `script` tag that sources the `decimal-to-base.js` script, eg...


```HTML
<script type="text/javascript" src="assets/js/modules/decimal-to-base/decimal-to-base.js"></script>
```


------


#### Edit Your HTML
[heading__edit_your_html]:
  #edit-your-html
  "&#x1F578; Source and utilize decimalToBase features"


**`index.html` (example)**


```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>Tests Decimal to Base</title>
    <meta charset="utf-8">

    <script type="text/javascript" src="assets/js/modules/decimal-to-base/decimal-to-base.js"></script>

    <script type="text/javascript">
      function updateOutput(_event) {
        const decimal = document.getElementById('decimal').value;
        const radix = document.getElementById('radix').value;
        const output_element = document.getElementById('output');

        let output_value = '';
        try {
          output_value = decimalToBase(decimal, radix)
        } catch (e) {
          if (e instanceof SyntaxError) {
            console.error(e);
          } else if (e instanceof RangeError) {
            console.error(e);
          } else {
            throw e;
          }
        }

        output_element.value = output_value;
      }

      window.addEventListener('load', (_event) => {
        document.getElementById('decimal').addEventListener('input', updateOutput);
        document.getElementById('radix').addEventListener('input', updateOutput);
      });
    </script>
  </head>


  <body>
    <div class="container">
      <span>Radix: </span>
      <input type="text" id="radix" value="16">
      <br>

      <span>Input: </span>
      <input type="text" id="decimal">
      <br>

      <span>Output: </span>
      <input id="output" type="text" readonly>
    </div>
  </body>
</html>
```


------


#### Commit and Push
[heading__commit_and_push]:
  #commit-and-push
  "&#x1F4BE; And congratulate yourself on not having to write something similar!"


```Bash
git add index.html
git add .github/README.md

git commit -F- <<'EOF'
:coffee: Utilizes javascript/decimal-to-base submodule


**Edits**


- `README.md` file, documentation updates for submodules
EOF
```


... And congratulate yourself on not having to write something similar!


___


## Decimal to Base Reference
[heading__api_reference]:
  #decimal-to-base-reference
  "&#x1F4DC; The incantations that decimalToBase understands"


The incantations that decimalToBase understands


**Parameters**


- decimal `{number|string}`

- radix `{number|string}` - default `16`

- verbose `{boolean}` - default `false`

- symbols_list `{string[]}` - default `[...'0123456789abcdefghijklmnopqrstuvwxyz']`


**Examples**


```JavaScript
decimalToBase(540, 16);
//> "0x21C"
```


___


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


This repository may not be feature complete and/or fully functional, Pull Requests that add features or fix bugs are certainly welcomed. For example this project converts **integers** only at this time, ie. floating point numbers are **not** supported.


- [Fork][decimal_to_base__fork_it] this repository to an account that you have write permissions for.

- Add remote for fork URL. The URL syntax is _`git@github.com:<NAME>/<REPO>.git`_...


```Bash
cd ~/git/hub/javascript-utilities/decimal-to-base

git remote add fork git@github.com:<NAME>/decimal-to-base.git
```


- Commit your changes and push to your fork, eg. to fix an issue...


```Bash
cd ~/git/hub/javascript-utilities/decimal-to-base


git commit -F- <<'EOF'
:bug: Fixes #42 Issue


**Edits**


- `<SCRIPT-NAME>` script, fixes some bug reported in issue
EOF


git push fork main
```


> Note, the `-u` option may be used to set `fork` as the default remote, eg. _`git push fork main`_ however, this will also default the `fork` remote for pulling from too! Meaning that pulling updates from `origin` must be done explicitly, eg. _`git pull orgin main`_


- Then on GitHub submit a Pull Request through the Web-UI, the URL syntax is _`https://github.com/<NAME>/<REPO>/pull/new/<BRANCH>`_


> Note; to decrease the chances of your Pull Request needing modifications before being accepted, please check the [dot-github](https://github.com/javascript-utilities/.github) repository for detailed contributing guidelines.


**Notice**, edits to source code should target **`.ts`** (TypeScript) files, because JavaScript (`.js`) files are overwritten during transpiling process.


___


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)

- [Wikipedia -- List of Numeral Systems](https://en.wikipedia.org/wiki/List_of_numeral_systems)

- [StackOverflow -- How to test type of thrown exception in Jest](https://stackoverflow.com/questions/46042613/)

- [Tutorials Point -- How to Convert Decimal to Hexadecimal](https://www.tutorialspoint.com/how-to-convert-decimal-to-hexadecimal)

- [ECMA International -- 11.8.3 Numeric Literals](https://www.ecma-international.org/ecma-262/6.0/#sec-literals-numeric-literals)

- [CodeReview StackExchange -- Suggestions from radarbob](https://codereview.stackexchange.com/questions/244488/javascript-convert-decimal-to-another-base?noredirect=1#comment480529_244488)


___


## License
[heading__license]:
  #license
  "&#x2696; Legal side of Open Source"


```
Documentation for converting decimal to another base, eg. hex, octal, or binary
Copyright (C) 2020 S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```


For further details review full length version of [AGPL-3.0][branch__current__license] License.



[branch__current__license]:
  /LICENSE
  "&#x2696; Full length version of AGPL-3.0 License"


[badge__commits__decimal_to_base__main]:
  https://img.shields.io/github/last-commit/javascript-utilities/decimal-to-base/main.svg

[commits__decimal_to_base__main]:
  https://github.com/javascript-utilities/decimal-to-base/commits/main
  "&#x1F4DD; History of changes on this branch"


[decimal_to_base__community]:
  https://github.com/javascript-utilities/decimal-to-base/community
  "&#x1F331; Dedicated to functioning code"

[decimal_to_base__gh_pages]:
  https://github.com/javascript-utilities/decimal-to-base/tree/
  "Source code examples hosted thanks to GitHub Pages!"

[badge__gh_pages__decimal_to_base]:
  https://img.shields.io/website/https/javascript-utilities.github.io/decimal-to-base/index.html.svg?down_color=darkorange&down_message=Offline&label=Demo&logo=Demo%20Site&up_color=success&up_message=Online

[gh_pages__decimal_to_base]:
  https://javascript-utilities.github.io/decimal-to-base/index.html
  "&#x1F52C; Check the example collection tests"

[issues__decimal_to_base]:
  https://github.com/javascript-utilities/decimal-to-base/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[decimal_to_base__fork_it]:
  https://github.com/javascript-utilities/decimal-to-base/
  "&#x1F531; Fork it!"

[pull_requests__decimal_to_base]:
  https://github.com/javascript-utilities/decimal-to-base/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[decimal_to_base__main__source_code]:
  https://github.com/javascript-utilities/decimal-to-base/
  "&#x2328; Project source!"

[badge__issues__decimal_to_base]:
  https://img.shields.io/github/issues/javascript-utilities/decimal-to-base.svg

[badge__pull_requests__decimal_to_base]:
  https://img.shields.io/github/issues-pr/javascript-utilities/decimal-to-base.svg

[badge__main__decimal_to_base__source_code]:
  https://img.shields.io/github/repo-size/javascript-utilities/decimal-to-base
