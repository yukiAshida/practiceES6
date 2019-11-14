export function testBoolean(){

    /* Booleanへの変換 */
    console.log( Boolean(1) );           // true
    console.log( Boolean(0) );           // false
    console.log( Boolean("hello") );     // true
    console.log( Boolean("") );          // false
    console.log( Boolean(undefined) );   // false
    console.log( Boolean(null) );        // false
    console.log( Boolean(NaN) );         // false

    /*これでも可*/
    console.log( !!0 );                  // false
    console.log( !!"hello" );            // true   
}

