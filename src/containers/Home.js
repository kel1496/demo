import React from 'react';
import{useDispatch, useSelector} from "react-redux"
import _ from 'lodash';
import {reduxForm} from 'redux-form';
import {GetActividades} from '../actions/resultAction';
import '../css/Home.css';
import banner from '../media/banner.jpg';
import LoginForm from '../Components/MyForm';
 
const Home = () => {
    const dispatch = useDispatch();
    const actionList = useSelector(state => state.Actions) 
    React.useEffect(() => {
        FetchData()
    }, [])

    const FetchData = () => {
        dispatch(GetActividades())
    }

    const ShowData = () => {
        console.log(actionList.data)
        if(!_.isEmpty(actionList.data)){
            const actions = []
            for (let i = 0; i < actionList.data.length; i++){
                actions[i] = actionList.data[i].description
            
            }

            return (
                <LoginForm actions={actions}>

                </LoginForm>
              )
        }
        else if(actionList.loading){
            return <p>loading</p>
        }
        else if(actionList.errorMsg !== ""){
            return <p>error</p>
        };

    }
    return (
        <div>
            <div className={"wrapper inner-wrapper"} >
                <div className={'banner banner-home'}>
                    <img src={banner} alt=""/>
                </div>
                <div className={'form-wrapper'}>
                    {ShowData()}
                    <ol className={"diagnosis-steps"}>
                        <li className={"diagnosis-steps__item"}>
                            <span className={"diagnosis-steps__hex"}>
                                <svg className={"icon diagnosis-steps__icon textWrite"} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <desc>Introduce el NIF y la actividad de tu negocio</desc>
                                    <g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.25,0.75 c1.5,0,9.5,0,9.5,0"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.25,35.25 c1.5,0,9.5,0,9.5,0"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="18" y1="0.845" x2="18" y2="35.25"></line></g>
                                </svg>
                            </span>
                            <p>Introduce el NIF y la actividad de tu negocio</p>
                        </li>
                        <li className={"diagnosis-steps__item"}>
                            <span className={"diagnosis-steps__hex"}>
                                <svg className="icon diagnosis-steps__icon tick" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    <desc>Contesta un breve cuestionario</desc><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="2.333,21.167 10.667,29.5 33.667,6.5 "></polyline>
                                </svg>
                            </span>
                            <p>Contesta un breve cuestionario</p>
                        </li>
                        <li className={"diagnosis-steps__item"}>
                            <span className={"diagnosis-steps__hex"}>
                                <svg className={"icon diagnosis-steps__icon grafic"} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><desc>Consigue una evaluación y consejos de mejora</desc><g><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="2.825,4.27 2.825,31.191 31.526,31.191   "></polyline><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="8.34,19.587 16.142,11.786 20.508,16.152 30.138,6.521  "></polyline><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="25.162,6.521 30.138,6.521 30.138,11.498   "></polyline></g>
                                </svg>
                            </span><p>Consigue una evaluación y consejos de mejora</p>
                        </li>
                    </ol>
                </div>

            </div>
        </div>
            
    )
};

export default reduxForm({form: 'loginForm'})(Home);