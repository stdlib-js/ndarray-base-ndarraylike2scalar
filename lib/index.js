/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Convert an ndarray-like object to a scalar value.
*
* @module @stdlib/ndarray-base-ndarraylike2scalar
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var ndarraylike2scalar = require( '@stdlib/ndarray-base-ndarraylike2scalar' );
*
* var x = scalar2ndarray( 1.0 );
* // returns <ndarray>
*
* var out = ndarraylike2scalar( x );
* // returns 1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
