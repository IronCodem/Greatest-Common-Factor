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
    console.log(gcf(48, 64));
    // frok and edit the two numbers (^) to get a different answer
}());

// Ans: 16
