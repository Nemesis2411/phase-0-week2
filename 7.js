// var row1 = 5
// for (var i = 0; i<row1;i++){
//     console.log('*')
// }

// var row2 = 5
// for (var i = 0;i<row2;i++){
//     var temp = ''
//     for (var j = 0;j<row2;j++){
//         temp = temp + '*'
//     }
//     console.log(temp)
// }

// var row3 = 5
// for (var i = 0; i <row3; i++){
//     var temp = ''
//     for( var j = 0 ;j<=i; j++){
//         temp = temp +'*'
//     }
//     console.log(temp)
// }













// var row4 = 5
// for (var i = 0 ; i < row4;i++){
//     var temp = ''
//     for (var j = 0; j<row4-i;j++){
//         temp = temp+'*'
//     }
//     console.log(temp)
// }













var row5 = 5
for (var i= 0;i<row5;i++){
    var temp = ''
    for (var j = 0;j<row5;j++){
        if (i<=j){
            temp = temp + "*"
        } else {
            temp = temp + ' '
        }
    }
    console.log(temp)
}