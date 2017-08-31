var app = new Vue({
  el: '#app',
  data: {
    allfile:[]
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
    uploadData(){

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
    deleteData(){

    }
  },
  created(){
    this.findAll()
  }
})
