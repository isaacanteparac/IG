import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from '../auth/Context';

export default function Public({children}){
   const {auth} = useContext(AuthContext);
    return auth.isLogin?<Navigate to="/"/>:children;
}