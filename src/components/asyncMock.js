import img from '../';

const products = [
    {
        id:'1',
        name:'Vestido 1',
        price:'1000',
        category:'vestido',
        img:'img/vestido1.jpeg',
        stock:'5',
        description:'Vestido1',
    },
    {
        id:'2',
        name:'Top 1',
        price:'500',
        category:'top',
        img: 'img/top1.jpeg',
        stock:'5',
        description:'Top1',
    },
    {
        id:'3',
        name:'Pollera1',
        price:'600',
        category:'pollera',
        img:'../img/pollera1.jpeg',
        stock:'5',
        description:'Pollera1',
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)

    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productCategory))
        }, 500)
    })
}