getIP() {
 
     var params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
   
      return this.jsonp.get(this.ipUrl, {search: params})
            .map(res=> res.json())
     
      }
  getData(ip:string){
      var params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(this.api+this.APPKey+ip,{search: params})
            .map(res=> res.json())

  }


   this.getWeather.getIP().subscribe(res=>{
         this.getWeather.getData(res.ip).subscribe(data=>{
           this.Data = data.result;
                  this.items= data.result.future;
                   delete this.items[Object.keys(this.items)[0]];
                   for(const key of Object.keys(this.Data)) {
            if(this.Data.hasOwnProperty(key)) {
              console.log(key);
            }
                     }
                   console.log(this.items[1]);
                   this.isActive=true;
         });

    });