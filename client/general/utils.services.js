angular.module('motogat').factory ('utilsService',function (){

return {

getRandomNumber: ()=>{
    return (Math.ceil(Math.random() * 900000));
},
isLoggedIn: () =>{
  return !!Meteor.userId();
},
currentUser: () =>{
  return Meteor.user();
},

getjsonfile: (filename)=>{
  HTTP.get(Meteor.absoluteUrl(filename), function(err,result) {
        return result;
     });
}


}
})
