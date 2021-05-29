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
    console.log(gcf(90, 35));
}());

// Ans: 5
