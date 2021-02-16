export const validation = (value,identifier)=>{
    console.log('im in');
    const regExp = {
        name : /^[A-Za-z]{2,10}/g,
        lastName : /^[A-Za-z]{2,10}/g,
        email : /ab+c/i,
        postalCode : /ab+c/i,
        
    }

    console.log(regExp[identifier]);
   

    if (value.match(regExp[identifier])) {
        console.log('good');
    }else{
        console.log('nanana');
    }











    // console.log('args from vlaidation function', args);
    // if (args.item.name != 'klkpasa') {
    //             console.log('updating error');
    //             args.cancel = true
    // }
    // if(args.item.name){

    // }
}

