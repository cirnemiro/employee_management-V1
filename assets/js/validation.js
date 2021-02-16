export const validation = (value, identifier) => {
    console.log('im in');
    const regExp = {
        name: /^[A-Za-z]{2,10}/g,
        lastName: /^[A-Za-z]{2,10}/g,
        email: /^[a - zA - Z0 - 9.!#$ %&’* +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        city: /[A-Za-z]/g,
        age: /^[0-9]{2}/g,
        phone: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/g,
        state: /^[A-Za-z ]{2,10}/g,
        streetAddress: /^[A-Za-z0-9 ]{5,20}/g,
        postalCode: /[0 - 9]{5}/g,
    }

    console.log(regExp[identifier]);


    if (value.match(regExp[identifier])) {
        console.log('good');
    } else {
        console.log('nanana');
    }
}

