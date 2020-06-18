import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminRoutes from './auth/helper/AdminRoutes';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import { UserDashBoard } from './user/UserDashBoard';
import { AdminDashBoard } from './user/AdminDashBoard';
import { AddCategory} from './admin/AddCategory';
import { Managecategories } from './admin/Managecategories';
import  AddProduct  from './admin/AddProduct';
import ManageProducts  from './admin/ManageProducts';
import  UpdateProduct  from './admin/UpdateProduct';





export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/signin' component={Signin} />
                    <PrivateRoutes path='/user/dashboard' component={UserDashBoard} />
                    <AdminRoutes path='/admin/dashboard' component={AdminDashBoard} />
                    <AdminRoutes path='/admin/create/category' component={AddCategory} />
                    <AdminRoutes path='/admin/categories' component={Managecategories} />
                    <AdminRoutes path='/admin/create/product' component={AddProduct} />
                    <AdminRoutes path='/admin/products' component={ManageProducts} />
                    <AdminRoutes path='/admin/product/update/:productId' component={UpdateProduct} />


                </Switch>
            </BrowserRouter>
        </div>
    )
}
