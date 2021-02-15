export const validation = (value,identifier)=>{
    console.log('im in');
    const regExp = {
        name : /caca/g,
        lastName : /ab+c/i,
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

