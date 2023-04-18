async function utility(){
    let delhiMausam = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("delhi me bhut thand hai ");
        },3000);
    });

    let hydMausam= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hydrabad me bhut garmi hai ")
        },5000);
    });

    let dm=delhiMausam;
    let hm=hydMausam;

    return(dm,hm);

};

console.log(utility());

