let obj = {
    fname: "kulathil",
    lname: "sandha",
    get fullName(){
        return `${this.fname + this.lname}`
    },

    set fullName(value){
        [this.fname, this.lname] = value.split(" ")
    }
};

obj.fullName = "kadayadi babu"

console.log(obj.fname);

