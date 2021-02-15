import React from 'react'
import { Route, Switch } from 'react-router-dom';
import {
    AboutPage, 
    CartPage, 
    CheckoutPage, 
    ErrorPage, 
    HomePage, 
    ProductsPage, 
    SingleProductPage} from '../../pages'

const Routes = () => {
    return ( 
        <Switch>
            <Route  exact path="/" component={HomePage} />
            <Route  exact path="/about" component={AboutPage} />
            <Route  exact path="/cart" component={CartPage} />
            <Route  exact path="/products" component={ProductsPage} />
            <Route  exact path="/products/:id" children={SingleProductPage} />
            <Route  exact path="/checkout" component={CheckoutPage} />
            <Route  path="*" component={ErrorPage} />
        </Switch>
     );
}
 
export default Routes;