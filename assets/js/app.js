let cl = console.log;

const insertValue = document.getElementById("insertValue");

const search = document.getElementById("search");
 cl(search);
 const body = document.querySelector("body")
 cl(body)

 

function NiflexImg(arr){
    let result = "";
   
    arr.forEach((ele=>{
          result+=`
          <div class="col-md-3">
          <figure class="fig">
              <img src="${IMG_path}${ele.poster_path}" alt="" title="">
        
          <figcaption class="ficaption">
              <div class="row align-items-center">
                  <div class="col-md-9">
                      <h5 class="text-white p-3">${ele.title}</h5>
                  </div>
                  <div class="col-md-3">
                      <p class="${call(ele.vote_average)}">${ele.vote_average}</p>
                  </div>
              </div>
              
          </figcaption>
          <div class="overflow">
              <h6>overView</h6>
              <p>${ele.overview}</p>
          </div>
      </figure>
      </div>
          `;

     }));
  cl(result);
    return result;

};

insertValue.innerHTML = NiflexImg(results);



function onclick(e){
        let storeval = this.value;
                if(storeval.length){
                    if(e.keyCode === 13){
                        cl(storeval)
                            let arrName = results.filter((ele)=>{
                                return ele.title.toLowerCase().includes(storeval);
                            })
                        insertValue.innerHTML =  NiflexImg(arrName);
                     }
                }else{
                    insertValue.innerHTML = NiflexImg(results);
                }   
          
};

function call(arr){
       if(arr >= 8){
           return `text-white`
       } else if(arr >= 5 && arr<=7.5){
        return `text-primary`
      }else{
         return `text-danger`
      }
}

search .addEventListener("keyup", onclick)

