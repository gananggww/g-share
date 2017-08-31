
var dropzone = document.getElementById('drop-zone');
dropzone.ondrop = function(data){
  data.preventDefault();
  this.className = 'upload-drop-zone';
  // console.log(data.dataTransfer.files);
  return data.dataTransfer.files
}
var app = new Vue({
  el: '#app',
  data: {
    allfile:[],
    image: '',
  },
  methods:{
    findAll(){
      var self = this
      axios.get(`http://35.187.238.95:3000`)
      .then((files)=>{
        console.log(files.data);
        self.allfile = files.data
      })
      .catch(error =>{
        res.send(error)
      })
    },
    uploadData(e){
      var self = this
      var formData = new FormData()
      formData.append('image', document.getElementById('filename').files[0]);
      console.log(formData);
      axios.post('http://35.187.238.95:3000/upload',formData)
      .then(function (response) {
        console.log(response);
        self.allfile.push(response.data)
        $('#myModal').modal('hide')
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    uploadDataDrag(e){
      var self = this
      console.log('ini upload data drag',dropzone.ondrop());
      // var formData = new FormData()
      // formData.append('image', document.getElementById('filename').files[0]);
      // console.log(formData);
      // axios.post('http://localhost:3001/upload',formData)
      // .then(function (response) {
      //   console.log(response);
      //   self.allfile.push(response.data)
      //   $('#myModal').modal('hide')
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    },
    getData(){
      var self = this
      // return response()->download('...path to download file...');
      // return response()->download($pathToFile, $name, $headers);
      const getImagesUrl = self.$store.state.website + '/download';
      selft.$http.get(getImagesUrl)
        .then((response)=> {
            console.log(response.data);
        })
        .catch((error)=> {
            res.send(error)
        });
    },
    deleteData(id,index){
      var self = this
      axios.delete(`http://35.187.238.95:3000/${id}`)
      .then(response=>{
        console.log(response.data);
        self.allfile.splice(index, 1)
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  created(){
    this.findAll()
  },
  computed:{
    search: function(){
      // var value = this.findAll()
      // var value = $(this).val()
      var self = this
      return self.allfile.filter(value=>{
        console.log(value);
        // return value.filename.toLowerCase().indexOf(self.searchname)>=0;
      })
    }
  }
})
