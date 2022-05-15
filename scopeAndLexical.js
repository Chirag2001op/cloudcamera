var c = 10;
function a(){
    b();
    function b(){
        console.log(c);
    }
}
a();
var c = 10;