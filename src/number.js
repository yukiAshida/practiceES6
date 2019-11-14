export function testNumber(){

    /* 整数と浮動小数の判別 */
    console.log( Number.isInteger(100) );   // true
    console.log( Number.isInteger(99.9) );  // false
    console.log( Number.isInteger(100.0) );   // true

    /* number型じゃない場合は全てfalse */
    console.log( Number.isInteger("hello") );   // false    
    console.log( Number.isInteger("100") );   // false

    /* 切り上げ・切り捨て・四捨五入 */
    var pi = 3.141592;
    console.log( Math.ceil(pi) );   // 4
    console.log( Math.floor(pi) );  // 3
    console.log( Math.round(pi) );  // 3
    console.log( Math.round(pi, 3) );  // 3 (桁指定は意味ない)


    /* 数値と文字列の変換 */
    var s1 = "100"
    console.log( parseInt(s1) );     // 100
    console.log( parseFloat(s1) );     // 100

    var s2 = "3.14"
    console.log( parseInt(s2) );     // 3
    console.log( parseFloat(s2) );     // 3.14

    var x = 100;
    console.log( x.toString() );    // "100"


    /* 文字列の数値判定(false) */
    console.log( isNaN("100") ); 
    console.log( isNaN("3.1415") );
    console.log( isNaN(100) );
    console.log( isNaN(3.1415) );
    
    /* 文字列の数値判定(true) */    
    console.log( isNaN("abc") );
    console.log( isNaN("100abc") );
    
    /* 文字列の数値判定(false, 直感に反するパターン) */    
    console.log( isNaN(null) );
    console.log( isNaN([]) );
    console.log( isNaN(false) );
    
    
    
    


}