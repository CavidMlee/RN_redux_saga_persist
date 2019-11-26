import {NavigationActions } from "react-navigation";

type RouteName = "Main";

let navigator;

const navigate=(routeName:RouteName,params)=>{
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,params
        })
    );
};

const goBack =(key)=>{
    navigator.dispatch(
        NavigationActions.back({
            key:key
        })
    )
};

export default {
    navigate,
    goBack
}