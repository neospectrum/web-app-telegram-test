import aceImg from '../images/ace.png';
import chopperImg from '../images/chopper.png';
import luffyImg from '../images/luffy.png';
import sanjiImg from '../images/sanji.png';
import namiImg from '../images/nami.png'

export function getData(){
    return [
        {title: 'Ace', price: 20.99, Image: aceImg, id: 1},
        {title: 'Chopper', price: 99.09, Image: chopperImg, id: 2},
        {title: 'Luffy', price: 120.99, Image: luffyImg, id: 3},
        {title: 'Sanji', price: 38.99, Image: sanjiImg, id: 4},
        {title: 'Nami', price: 61.29, Image: namiImg, id: 5}
    ];
}