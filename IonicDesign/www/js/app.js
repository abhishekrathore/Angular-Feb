// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller("listCtrl",listCtrl)

function listCtrl($ionicModal,$timeout,$scope,$ionicPopup,$cordovaFlashlight,$cordovaCamera,$cordovaGeolocation,  $cordovaSocialSharing,$cordovaBarcodeScanner
){
  var list = this;

  list.items = ["india","sri lanka"];

  list.share = function(){
    alert("hi");
  }
  
  
   $ionicModal.fromTemplateUrl('partials/modal.html', {
    animation: 'slide-in-up',
    scope : $scope
  }).then(function(modal) {
    list.modal = modal;
  });

list.open = function(){
 list.modal.show()
   

}

list.flash = function(){
  $cordovaFlashlight.toggle()
    .then(function (success) { /* success */ },
      function (error) { /* error */ });
}

list.capture = function(){
      var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 250,
      targetHeight: 250,
      saveToPhotoAlbum: true,
	  correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('img');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
}


list.location = function(){
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      console.log(lat,long);

    }, function(err) {
      console.log(err);
    });

}

list.share = function(){
   $cordovaSocialSharing
    .share("message", "subject") // Share via native share sheet
    .then(function(result) {
      console.log(result)
    }, function(err) {
      console.log(err)
    });
}
list.scan = function(){
  $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        console.log(barcodeData);
        // Success! Barcode data is here
      }, function(error) {
        // An error occurred
      });
}



$scope.close = function(){
 list.modal.hide()
}


 var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          
  
        }
      }
    ]
  });





  



}