var app = new Vue({
  el: '#app',
  data: {
    allfile:[],
    message : ''
  },
  methods:{
    findAll(){
      var self = this
      axios.get(`http://localhost:3000`)
      .then((files)=>{
        console.log(files.data);
        self.message = "apa adanya"
        self.allfile = files.data
      })
      .catch(error =>{
        res.send(error)
      })
    },
    uploadData(){

    },
    downloadData(){

    },
    deleteData(){

    }
  },
  created(){
    this.findAll()
  }
})
