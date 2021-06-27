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

# Logarithm of Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Evaluate the natural logarithm of the probability mass function (PMF) for a [binomial][binomial-distribution] distribution.

<section class="intro">

The [probability mass function][pmf] (PMF) for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_pmf" align="center" raw="f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a binomial distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:binomial_pmf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/binomial/logpmf/docs/img/equation_binomial_pmf.svg" alt="Probability mass function (PMF) for a binomial distribution.">
    <br>
</div>

<!-- </equation> -->

where `n` is the number of trials and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-binomial-logpmf
```

</section>

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats-base-dists-binomial-logpmf' );
```

#### logpmf( x, n, p )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF) for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = logpmf( 3.0, 20, 0.2 );
// returns ~-1.583

y = logpmf( 21.0, 20, 0.2 );
// returns -Infinity

y = logpmf( 5.0, 10, 0.4 );
// returns ~-1.606

y = logpmf( 0.0, 10, 0.4 );
// returns ~-5.108
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 20, 0.5 );
// returns NaN

y = logpmf( 0.0, NaN, 0.5 );
// returns NaN

y = logpmf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 1.5, 0.5 );
// returns NaN

y = logpmf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 20, -1.0 );
// returns NaN

y = logpmf( 2.0, 20, 1.5 );
// returns NaN
```

#### logpmf.factory( n, p )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var mylogpmf = logpmf.factory( 10, 0.5 );

var y = mylogpmf( 3.0 );
// returns ~-2.144

y = mylogpmf( 5.0 );
// returns ~-1.402
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var logpmf = require( '@stdlib/stats-base-dists-binomial-logpmf' );

var i;
var n;
var p;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 20.0 );
    n = round( randu() * 100.0 );
    p = randu();
    y = logpmf( x, n, p );
    console.log( 'x: %d, n: %d, p: %d, ln(P(X = x;n,p)): %d', x, n, p.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-binomial-logpmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-binomial-logpmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-binomial-logpmf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-binomial-logpmf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-binomial-logpmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-binomial-logpmf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-binomial-logpmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-binomial-logpmf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-logpmf/main/LICENSE

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
