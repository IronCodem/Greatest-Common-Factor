(function () {
    var gcf = function (a, b) {
        return function () {
            if (b == 0) {
                return a;
            } else {
                return gcf(b, a % b);
            }
        }();
    };
    var int_1 = prompt("Enter 1 number: ")
    var int_2 = prompt("Enter another number: ")
    console.log(gcf(int_1, int_2));
}());
