//base class
class Facebook{
    //facebook's main class
}
//derived class
class FacebookAboutSection extends Facebook{
    //properties
    worksAt : String;
    previousCompanies : String[];
    studiedAt : String;
    previousColleges : String[];
    livesIn : String;
    from : String;
    family : String[];
    private phone : number;
    currentPlace : String;
    private email : String;
    birthday : String;
    //constructor
    constructor( worksAt : String,previousCompanies : String[],studiedAt : String,previousColleges : String[],
        livesIn : String,from : String,family : String[],phone : number,
        currentPlace : String,email : String,birthday : String){
        //calling base class constructor
        super();
        this.worksAt = worksAt;
        this.previousCompanies = previousCompanies;
        this.studiedAt = studiedAt;
        this.previousColleges = previousColleges;
        this.livesIn = livesIn;
        this.from = from;
        this.family = family;
        this.phone = phone;
        this.currentPlace = currentPlace;
        this.email = email;
        this.birthday = birthday;
    }
    //functions
    getWorksAt = () =>{
        return this.worksAt;
    }
    getPreviousCompanies = () =>{
        //for loop to display all previous companies
        for(var num in this.previousCompanies){
            console.log("Previous Company "+(num+1)+"-"+this.previousCompanies[num]);
        }
    }
    getStudiedAt = () =>{
        return this.studiedAt;
    }
    getPreviousColleges = () =>{
     
        //for loop to display all previous colleges
        for(var num in this.previousColleges){
            console.log("Previous College "+(num+1)+"-"+this.previousColleges[num]);
        }
    }
    getLivesIn = () =>{
        return this.livesIn;
    }
    getFrom = () =>{
        return this.from;
    }
    getFamilyMembers = () =>{
        return this.family.length;
    }
    getFamily = () =>{
           //for loop to display all family
        for(var num in this.family){
            console.log("Family "+(num+1)+"-"+this.family[num]);
        }
    }
    getPhone = () =>{
        return this.phone;
    }
    getCurrentPlace = () =>{
        return this.currentPlace;
    }
    getEmail = () =>{
        return this.email;
    }
    getBirthday = () =>{
        return this.birthday;
    }
}
//creating object
let raviteja = new FacebookAboutSection("cts",["Accenture"],
"vit",["sjcit"],"hyderabad","hyderabad,telangana",
["ravi","teja"],123456789,"hyd,India","ravi@gmail.com","9 April,1988");
//calling functions with raviteja's object
console.log("Works At:"+raviteja.getWorksAt());
raviteja.getPreviousCompanies();
console.log("Studied At:"+raviteja.getStudiedAt());
raviteja.getPreviousColleges();
console.log("Lives In:"+raviteja.getLivesIn());
console.log("From:"+raviteja.getFrom());
console.log("Family Members:"+raviteja.getFamilyMembers());
raviteja.getFamily();
console.log("Phone:"+raviteja.getPhone());
console.log("Current Place:"+raviteja.getCurrentPlace());
console.log("Email:"+raviteja.getEmail());
console.log("Birthday:"+raviteja.getBirthday());