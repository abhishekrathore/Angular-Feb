/**
 * Created by abhishekrathore on 5/20/17.
 */
angular.module('backend',['firebase'])
 .controller("testCtrl",testCtrl);




function testCtrl($firebaseObject,$scope,$firebaseArray,$firebaseStorage){

var test = this;
var imagesRef = firebase.storage().ref("images")
var pdfRef = firebase.storage().ref("pdf")
var dbRef = firebase.database().ref("files");
var filesArray = $firebaseArray(dbRef);


test.upload = function(){
      console.log("upload");
      var fileData = document.getElementById("file").files[0]
      console.log(fileData);
      if(fileData.type=="application/pdf"){
          var fileRef = pdfRef.child(fileData.name)
      }else{
         var fileRef = imagesRef.child(fileData.name)
      }
     var firebaseFile =    $firebaseStorage(fileRef);
     var uploadTask = firebaseFile.$put(fileData);
     uploadTask.$progress(function(snapshot) {
            var percentUploaded = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            test.percent = Math.round(percentUploaded);
      });
           uploadTask.$complete(function() {

                  firebaseFile.$getDownloadURL().then(function(url){
                              filesArray.$add({url:url})
                  })
           });
}


test.files = filesArray;




     
}