/*
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

/// <reference types="@stdlib/types"/>

import zeros = require( '@stdlib/ndarray-zeros' );
import ndarraylike2scalar = require( './index' );


// TESTS //

// The function returns a scalar...
{
	const x = zeros( [] );
	ndarraylike2scalar( x ); // $ExpectType number
}

// The compiler throws an error if the function is not provided an ndarray...
{
	ndarraylike2scalar( '5' ); // $ExpectError
	ndarraylike2scalar( 123 ); // $ExpectError
	ndarraylike2scalar( true ); // $ExpectError
	ndarraylike2scalar( false ); // $ExpectError
	ndarraylike2scalar( null ); // $ExpectError
	ndarraylike2scalar( [] ); // $ExpectError
	ndarraylike2scalar( {} ); // $ExpectError
	ndarraylike2scalar( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [] );
	ndarraylike2scalar(); // $ExpectError
	ndarraylike2scalar( x, 5 ); // $ExpectError
}
