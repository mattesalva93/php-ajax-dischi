let app = new Vue ({
    el: '#miapp',
    data: {
        arrayDischi: [],
    },
    mounted : function(){
        this.generaArray();
        console.log(this.arrayDischi)
    },

    methods: {
        generaArray: function(){ 
            axios.get('http://localhost/api_dischi.php')
            .then((rispostaServer) => {
                this.arrayDischi = rispostaServer.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                
            });
        },
    },

});