var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//base class
var Facebook = /** @class */ (function () {
    function Facebook() {
    }
    return Facebook;
}());
//derived class
var FacebookAboutSection = /** @class */ (function (_super) {
    __extends(FacebookAboutSection, _super);
    //constructor
    function FacebookAboutSection(worksAt, previousCompanies, studiedAt, previousColleges, livesIn, from, family, phone, currentPlace, email, birthday) {
        var _this = 
        //calling base class constructor
        _super.call(this) || this;
        //functions
        _this.getWorksAt = function () {
            return _this.worksAt;
        };
        _this.getPreviousCompanies = function () {
            //for loop to display all previous companies
            for (var num in _this.previousCompanies) {
                console.log("Previous Company " + (num + 1) + "-" + _this.previousCompanies[num]);
            }
        };
        _this.getStudiedAt = function () {
            return _this.studiedAt;
        };
        _this.getPreviousColleges = function () {
            //for loop to display all previous colleges
            for (var num in _this.previousColleges) {
                console.log("Previous College " + (num + 1) + "-" + _this.previousColleges[num]);
            }
        };
        _this.getLivesIn = function () {
            return _this.livesIn;
        };
        _this.getFrom = function () {
            return _this.from;
        };
        _this.getFamilyMembers = function () {
            return _this.family.length;
        };
        _this.getFamily = function () {
            //for loop to display all family
            for (var num in _this.family) {
                console.log("Family " + (num + 1) + "-" + _this.family[num]);
            }
        };
        _this.getPhone = function () {
            return _this.phone;
        };
        _this.getCurrentPlace = function () {
            return _this.currentPlace;
        };
        _this.getEmail = function () {
            return _this.email;
        };
        _this.getBirthday = function () {
            return _this.birthday;
        };
        _this.worksAt = worksAt;
        _this.previousCompanies = previousCompanies;
        _this.studiedAt = studiedAt;
        _this.previousColleges = previousColleges;
        _this.livesIn = livesIn;
        _this.from = from;
        _this.family = family;
        _this.phone = phone;
        _this.currentPlace = currentPlace;
        _this.email = email;
        _this.birthday = birthday;
        return _this;
    }
    return FacebookAboutSection;
}(Facebook));
//creating object
var raviteja = new FacebookAboutSection("cts", ["Accenture"], "vit", ["sjcit"], "hyderabad", "hyderabad,telangana", ["ravi", "teja"], 123456789, "hyd,India", "ravi@gmail.com", "9 April,1988");
//calling functions with raviteja's object
console.log("Works At:" + raviteja.getWorksAt());
raviteja.getPreviousCompanies();
console.log("Studied At:" + raviteja.getStudiedAt());
raviteja.getPreviousColleges();
console.log("Lives In:" + raviteja.getLivesIn());
console.log("From:" + raviteja.getFrom());
console.log("Family Members:" + raviteja.getFamilyMembers());
raviteja.getFamily();
console.log("Phone:" + raviteja.getPhone());
console.log("Current Place:" + raviteja.getCurrentPlace());
console.log("Email:" + raviteja.getEmail());
console.log("Birthday:" + raviteja.getBirthday());
