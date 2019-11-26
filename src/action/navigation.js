import NavigationServices from '../navigation/navigationService'

export const navigateToHome=(params)=>{
    NavigationServices.navigate('Main',params)
}