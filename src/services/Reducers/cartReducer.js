const intialState ={
    products:[],
    totalprice:0,
    totalQuentity:0
}

const cartReducer = (state=intialState,action) => {
    let findproduct;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
            const {product,quentity} = action.payload;
            //console.log(product.id,quentity);
            //console.log(action.payload.product.id);
            const check =state.products.find(pr => pr.id === action.payload.product.id)
            if(check){
                return state;
            }else{
                const totprice = state.totalprice + product.price * quentity;
                //console.log(totprice)
                const totquentity = state.totalQuentity+quentity;
                product.quentity = quentity;
                return{
                    ...state, products: [...state.products, product],totalprice:totprice,totalQuentity:totquentity
                }
            }
            case 'INCREMENT':
                findproduct = state.products.find(product => product.id === action.payload)
                index = state.products.findIndex(product => product.id === action.payload)
                findproduct.quentity += 1
                state.products[index] = findproduct;
                return{
                    ...state,
                    totalprice: state.totalprice + findproduct.price, totalQuentity:state.totalQuentity+1
                }
            case 'DECREMENT':
                findproduct = state.products.find(product => product.id === action.payload)
                index = state.products.findIndex(product => product.id === action.payload)
                if(findproduct.quentity > 1){
                    findproduct.quentity -=1
                    state.products[index] = findproduct;
                    return{
                        ...state,
                        totalprice: state.totalprice - findproduct.price, totalQuentity:state.totalQuentity-1
                    }
                }
                else{
                    return state
                }
            case 'REMOVE':
                findproduct = state.products.find(product => product.id === action.payload)
                const filtered = state.products.filter(product => product.id !== action.payload)
                return{
                    ...state,
                    products:filtered,
                    totalprice: state.totalprice - findproduct.price * findproduct.quentity, totalQuentity:state.totalQuentity - findproduct.quentity
                }
        default:
            return state;
    }
}
export default cartReducer