var app = new Vue({
  el: '#app',
  data: {
    allfile:[],
    image: ''
  },
  methods:{
    findAll(){
      var self = this
      axios.get(`http://localhost:3000`)
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
      axios.post('http://localhost:3000/upload',formData)
      .then(function (response) {
        console.log(response);
        self.allfile.push(response.data)
        $('#myModal').modal('hide')
      })
      .catch(function (error) {
        console.log(error);
      });
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
      axios.delete(`http://localhost:3000/${id}`)
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
    search(){
      var search = $("input[name='search']")
      search.keyup(function (){
        let keyword = $(this).val();
        axios.get(`http://localhost:3000/search/${keyword}`)
        .then()
      }
    }
  }
})
