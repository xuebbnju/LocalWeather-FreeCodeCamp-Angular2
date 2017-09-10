getData(Data,items,isActive){
     var params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    this.jsonp.get(this.ipUrl, {search: params})
            .map(res=> res.json())
            .subscribe((response) => {
                this.jsonp.get(this.api+this.APPKey+response.ip,{search: params}).map(res=>res.json()).subscribe(data=>{
                  Data = data.result;
                  items= data.result.future;
                   delete items[Object.keys(items)[0]];
                   isActive=true;
                   console.log(Data);
                   console.log(items);
                });
               
            }, (error) => {
                console.error(error);
            });
  }

    this.getWeather.getData(this.Data,this.items,this.isActive);