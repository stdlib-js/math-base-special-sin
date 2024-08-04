<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Sine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [sine][sine] of a number.



<section class="usage">

## Usage

To use in Observable,

```javascript
sin = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var sin = require( 'path/to/vendor/umd/math-base-special-sin/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.sin;
})();
</script>
```

#### sin( x )

Computes the [sine][sine] of a `number` (in radians).

```javascript
var v = sin( 0.0 );
// returns ~0.0

v = sin( 3.141592653589793/2.0 );
// returns ~1.0

v = sin( -3.141592653589793/6.0 );
// returns ~-0.5
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = linspace( 0.0, TWO_PI, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( sin( x[ i ] ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/sinpi`][@stdlib/math/base/special/sinpi]</span><span class="delimiter">: </span><span class="description">compute sin(πx).</span>
-   <span class="package-name">[`@stdlib/math-base/special/tan`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-sin.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-sin

[test-image]: https://github.com/stdlib-js/math-base-special-sin/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-sin/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-sin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-sin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-sin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-sin/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-sin/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-sin/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-sin/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-sin/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-sin/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-sin/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-sin/blob/main/branches.md

[sine]: https://en.wikipedia.org/wiki/Sine

<!-- <related-links> -->

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos/tree/umd

[@stdlib/math/base/special/sinpi]: https://github.com/stdlib-js/math-base-special-sinpi/tree/umd

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math-base-special-tan/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
