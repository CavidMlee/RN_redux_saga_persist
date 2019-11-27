import { NavigationActions } from "react-navigation";

type RouteName = "Main";

let navigator;

const setTopLevelNavigator=(navigatorRef)=>{
    navigator = navigatorRef
}

const navigate = (routeName: RouteName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName, params
        })
    );
};

const goBack = (key) => {
    navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    )
};

export default {
    setTopLevelNavigator,
    navigate,
    goBack
}