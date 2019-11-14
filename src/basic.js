
export function testBasic(){

    /*標準出力*/
    console.log("Hello, World!");
    console.log("%sさんは%d歳です。", "yuki", 20);  // yukiさんは20歳です。
    
    /*カンマ区切りの場合*/
    console.log(100,200,300);  // 100 200 300

    /*コマンドライン引数の表示*/
    console.log(process.argv);

    /*変数*/
    var x = 100;
    var s = "abcdef";
    var a = [1,2,3];

    /*型を確認*/
    console.log(x, typeof(x));  // 100 'number'
    console.log(s, typeof(s));  // abcdef string
    console.log(a, typeof(a));  // [ 1, 2, 3 ] 'object'
       
}