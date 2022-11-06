var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "jaipur";
    }
    User.prototype.deleteToken = function () {
        console.log("token Deleted");
    };
    Object.defineProperty(User.prototype, "getappleEmail", {
        get: function () {
            return " Apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var jags = new User("jags@gmail.com", 'jags');
// jags.deleteToken();
console.log(jags.courseCount);
