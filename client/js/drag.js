(function(){
  var dropzone = document.getElementById('drop-zone');

  var upload = function(files){
    var formData = new FormData(),
    xhr = new XMLHttpRequest(),
    x;

    // for (var x = 0; x < files.length; x = x+1) {
    //   formData.append('file[]', files[x])
    // }
    //
    // xhr.onload = function(){
    //   var data - this.responeText;
    //   console.log(data);
    // }
    //
    // xhr.open('post', 'index.html')
    // xhr.send();
  }

  dropzone.ondrop = function(data){
    data.preventDefault();
    this.className = 'upload-drop-zone';
    console.log(data.dataTransfer.files);
  }

  dropzone.ondragover = function(){
    this.className = 'upload-drop-zone drop-zone';
    return false;
  }

  dropzone.ondragleave = function(){
    this.className = 'upload-drop-zone';
    return false;
  }
} ());

// function($) {
//     'use strict';
//
//     // UPLOAD CLASS DEFINITION
//     // ======================
//
//     var dropZone = document.getElementById('drop-zone');
//     var uploadForm = document.getElementById('js-upload-form');
//
//     var startUpload = function(files) {
//         console.log(files)
//     }
//
//     uploadForm.addEventListener('submit', function(e) {
//         var uploadFiles = document.getElementById('js-upload-files').files;
//         e.preventDefault()
//
//         startUpload(uploadFiles)
//     })
//
//     dropZone.ondrop = function(e) {
//         e.preventDefault();
//         this.className = 'upload-drop-zone';
//
//         startUpload(e.dataTransfer.files)
//     }
//
//     dropZone.ondragover = function() {
//         this.className = 'upload-drop-zone drop';
//         return false;
//     }
//
//     dropZone.ondragleave = function() {
//         this.className = 'upload-drop-zone';
//         return false;
//     }
// }(jQuery);
