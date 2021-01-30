import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import '../css/Q_AND_A.css'

const Q_AND_A = () => {
    return (
            <div>
                <section>
                    <article className="explain-block">
                        <h1 className="title explain-block__claim">Toma decisiones fudamentadas y contextualizadas</h1>
                        <div className="wrapper wrapper--inner">
                            <h2 className="title explain-block__title title--light title--secondary">¿Qué obtienes?</h2>
                            <div className="explain-block__description">
                                <p>INBONIS ofrece un diagnóstico detallado de la situación de tu empresa respecto de tu
                                sector y recomendaciones para rentabilizar tu negocio.</p>
                            </div>
                            <ul className="block-icons">
                                <li className="block-icons__item">
                                    <span className="block-icons__icon-container">
                                        <svg className="icon block-icons__icon search" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <desc>&lt;strong&gt;Evaluación&lt;/strong&gt; de tu pyme con criterios objetivos</desc>
                                            <g>
                                                <circle fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="15.133" cy="15.528" r="8.708">
                                                </circle>
                                                <polyline fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="20.861,22.116 27.736,28.934 28.997,27.673 22.179,20.855"></polyline>
                                            </g>
                                        </svg>
                                    </span>
                                    <p className="block-icons__description"><strong>Evaluación</strong> de tu pyme con criterios objetivos</p>
                                </li>
                                <li className="block-icons__item">
                                    <span className="block-icons__icon-container">
                                        <svg className="icon block-icons__icon validate" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <desc>&lt;strong&gt;Consejos&lt;/strong&gt; personalizados para mejorar tu estrategia</desc>
                                            <g>
                                                <polyline fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="12.542,17.291 18.667,23.182 26.683,7.864"></polyline>
                                                <ellipse fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="17.719" cy="18.737" rx="9.632" ry="9.266"></ellipse>
                                            </g>
                                        </svg>
                                    </span>
                                    <p className="block-icons__description"><strong>Consejos</strong> personalizados para mejorar tu estrategia</p>
                                </li>
                                <li className="block-icons__item">
                                    <span className="block-icons__icon-container">
                                        <svg className="icon block-icons__icon radios" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <desc>&lt;strong&gt;Comparativa&lt;/strong&gt; con tu sector</desc>
                                            <g>
                                                <g>
                                                    <path fill="currentColor" stroke="currentColor" stroke-width="0.0624" stroke-miterlimit="10" d="M11.539,14.987 c1.67,0,3.062,1.338,3.062,2.945c0,1.608-1.392,2.946-3.062,2.946s-3.062-1.338-3.062-2.946 C8.476,16.325,9.868,14.987,11.539,14.987 M11.539,13.916c-2.283,0-4.176,1.821-4.176,4.016c0,2.197,1.894,4.018,4.176,4.018 s4.175-1.821,4.175-4.018C15.714,15.737,13.821,13.916,11.539,13.916L11.539,13.916z"></path>
                                                </g>
                                                <g>
                                                    <path fill="currentColor" stroke="currentColor" stroke-width="0.0624" stroke-miterlimit="10" d="M26.85,14.987 c1.67,0,3.062,1.338,3.062,2.945c0,1.608-1.392,2.946-3.062,2.946c-1.671,0-3.062-1.338-3.062-2.946 C23.787,16.325,25.178,14.987,26.85,14.987 M26.85,13.916c-2.283,0-4.176,1.821-4.176,4.016c0,2.197,1.894,4.018,4.176,4.018 s4.175-1.821,4.175-4.018C31.025,15.737,29.188,13.916,26.85,13.916L26.85,13.916z"></path>
                                                </g>
                                                <ellipse fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="11.539" cy="17.933" rx="7.127" ry="6.855"></ellipse>
                                            </g>
                                        </svg>
                                    </span>
                                    <p className="block-icons__description"><strong>Comparativa</strong> con tu sector</p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="explain-block">
                        <h1 className="title explain-block__claim">Aprovecha las oportunidades del big data para gestionar tu negocio</h1>
                        <div className="wrapper wrapper--inner">
                            <h2 className="title explain-block__title title--light title--secondary">¿Para qué sirve?</h2>
                            <div className="explain-block__description">
                                <p>Para ayudarte a gestionar tu empresa sirviéndote de inteligencia artificial y el big data
                                gracias a nuestro algoritmo Refocal® que te permite:</p>
                            </div>
                            <ul className="block-icons">
                                <li className="block-icons__item">
                                    <span className="block-icons__icon-container">
                                        <svg className="icon block-icons__icon strongWeakPoints" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <desc>Conocer tus &lt;strong&gt;puntos débiles y fuertes&lt;/strong&gt; respecto a tus competidores</desc>
                                            <g>
                                                <ellipse fill="currentColor" cx="22.563" cy="8.748" rx="1.559" ry="1.499"></ellipse>
                                                <ellipse fill="currentColor" cx="17.774" cy="13.354" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="8.198" cy="17.906" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="8.198" cy="22.458" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="22.563" cy="22.458" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="27.351" cy="27.279" rx="1.559" ry="1.499"></ellipse>
                                                <ellipse fill="currentColor" cx="10.425" cy="10.944" rx="4.009" ry="3.856"></ellipse>
                                                <ellipse fill="currentColor" cx="15.492" cy="24.869" rx="4.009" ry="3.856"></ellipse>
                                                <ellipse fill="currentColor" cx="25.012" cy="15.71" rx="4.009" ry="3.856"></ellipse>
                                            </g>
                                        </svg>
                                    </span>
                                    <p className="block-icons__description">Conocer tus <strong>puntos débiles y fuertes</strong> respecto a tus competidores</p>
                                </li>
                                <li className="block-icons__item">
                                    <span className="block-icons__icon-container">
                                        <svg className="icon block-icons__icon sortedPoints" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <desc>&lt;strong&gt;Valorar&lt;/strong&gt; los diferentes aspectos de tu negocio</desc>
                                            <g>
                                                <g>
                                                    <ellipse fill="currentColor" cx="8.142" cy="8.775" rx="1.56" ry="1.499"></ellipse>
                                                    <ellipse fill="currentColor" cx="12.931" cy="8.775" rx="1.559" ry="1.499"></ellipse>
                                                    <ellipse fill="currentColor" cx="17.718" cy="8.775" rx="1.56" ry="1.499"></ellipse>
                                                    <ellipse fill="currentColor" cx="22.507" cy="8.775" rx="1.559" ry="1.499"></ellipse>
                                                    <ellipse fill="currentColor" cx="27.295" cy="8.775" rx="1.559" ry="1.499"></ellipse>
                                                </g>
                                            <g>
                                                <ellipse fill="currentColor" cx="8.142" cy="13.381" rx="1.56" ry="1.499"></ellipse>
                                                <ellipse fill="currentColor" cx="12.931" cy="13.381" rx="1.559" ry="1.499"></ellipse>
                                                <ellipse fill="currentColor" cx="17.718" cy="13.381" rx="1.56" ry="1.499"></ellipse>
                                                <ellipse fill="currentColor" cx="22.507" cy="13.381" rx="1.559" ry="1.499"></ellipse>
                                                <ellipse fill="currentColor" cx="27.295" cy="13.381" rx="1.559" ry="1.499"></ellipse>
                                            </g>
                                            <g>
                                                <ellipse fill="currentColor" cx="8.142" cy="17.933" rx="1.56" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="12.931" cy="17.933" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="17.718" cy="17.933" rx="1.56" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="22.507" cy="17.933" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="27.295" cy="17.933" rx="1.559" ry="1.5"></ellipse>
                                            </g>
                                            <g>
                                                <ellipse fill="currentColor" cx="8.142" cy="22.486" rx="1.56" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="12.931" cy="22.486" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="17.718" cy="22.486" rx="1.56" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="22.507" cy="22.486" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="27.295" cy="22.486" rx="1.559" ry="1.5"></ellipse>
                                            </g>
                                            <g>
                                                <ellipse fill="currentColor" cx="8.142" cy="27.091" rx="1.56" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="12.931" cy="27.091" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="17.718" cy="27.091" rx="1.56" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="22.507" cy="27.091" rx="1.559" ry="1.5"></ellipse>
                                                <ellipse fill="currentColor" cx="27.295" cy="27.091" rx="1.559" ry="1.5"></ellipse>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <p className="block-icons__description"><strong>Valorar</strong> los diferentes aspectos de tu negocio</p>
                            </li>
                            <li className="block-icons__item">
                                <span className="block-icons__icon-container">
                                    <svg className="icon block-icons__icon ia" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                        <desc>Gestionar con el apoyo de &lt;strong&gt;inteligencia artificial&lt;/strong&gt;</desc>
                                        <g>
                                            <rect x="5.637" y="6.312" fill="none" stroke="currentColor" stroke-width="0.2496" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-miterlimit="10" width="24.163" height="23.243"></rect>
                                            <g>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="8.254" y1="4.008" x2="8.254" y2="6.312"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="10.593" y1="4.008" x2="10.593" y2="6.312"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="12.986" y1="4.008" x2="12.986" y2="6.312"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-miterlimit="10" x1="15.325" y1="4.008" x2="15.325" y2="6.312"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="17.719" y1="4.008" x2="17.719" y2="6.312"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="20.113" y1="4.008" x2="20.113" y2="6.312"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="22.452" y1="4.008" x2="22.452" y2="6.312"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="24.846" y1="4.008" x2="24.846" y2="6.312"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="27.184" y1="4.008" x2="27.184" y2="6.312"></line>
                                            </g>
                                            <g>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="8.254" y1="29.555" x2="8.254" y2="31.858"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="10.593" y1="29.555" x2="10.593" y2="31.858"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="12.986" y1="29.555" x2="12.986" y2="31.858"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="15.325" y1="29.555" x2="15.325" y2="31.858"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-miterlimit="10" x1="17.719" y1="29.555" x2="17.719" y2="31.858"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="20.113" y1="29.555" x2="20.113" y2="31.858"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="22.452" y1="29.555" x2="22.452" y2="31.858"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="24.846" y1="29.555" x2="24.846" y2="31.858"></line>
                                                <line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-miterlimit="10" x1="27.184" y1="29.555" x2="27.184" y2="31.858"></line>
                                            </g>
                                            <g><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="8.828" x2="29.8" y2="8.828"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="11.078" x2="29.8" y2="11.078"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="13.38" x2="29.8" y2="13.38"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="15.63" x2="29.8" y2="15.63"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="17.932" x2="29.8" y2="17.932"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="20.235" x2="29.8" y2="20.235"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="22.486" x2="29.8" y2="22.486"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="24.789" x2="29.8" y2="24.789"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="32.194" y1="27.038" x2="29.8" y2="27.038"></line>
                                            </g>
                                            <g><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="8.828" x2="3.243" y2="8.828"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="11.078" x2="3.243" y2="11.078"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="13.38" x2="3.243" y2="13.38"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="15.63" x2="3.243" y2="15.63"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="17.932" x2="3.243" y2="17.932"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="20.235" x2="3.243" y2="20.235"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="22.486" x2="3.243" y2="22.486"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="24.789" x2="3.243" y2="24.789"></line><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="5.637" y1="27.038" x2="3.243" y2="27.038"></line>
                                            </g><ellipse fill="currentColor" cx="12.263" cy="12.684" rx="1.782" ry="1.713"></ellipse><ellipse fill="currentColor" cx="18.777" cy="23.931" rx="1.392" ry="1.339"></ellipse><ellipse fill="currentColor" cx="24.456" cy="12.523" rx="1.725" ry="1.66"></ellipse><polyline fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="12.263,13.755 12.263,23.932 17.385,23.932"></polyline><polyline fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="18.777,22.646 18.777,12.523 22.786,12.523"></polyline><line fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="24.456" y1="14.13" x2="24.456" y2="23.932"></line>
                                            </g>
                                        </svg>
                                    </span>
                                    <p className="block-icons__description">Gestionar con el apoyo de <strong>inteligencia artificial</strong></p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="explain-block"><h1 className="title explain-block__claim">Rápido, útil y eficaz</h1><div className="wrapper wrapper--inner"><h2 className="title explain-block__title title--light title--secondary">¿Cómo consigo mi Coach Pyme?</h2><div className="explain-block__description"><p>Puedes conseguir tu Coach Pyme de forma automática y gratuita en nuestra plataforma
                        online siguiendo los siguientes pasos:</p></div><ul className="block-icons"><li className="block-icons__item"><span className="block-icons__icon-container"><svg className="icon block-icons__icon nif" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><desc>Introduce tu &lt;strong&gt;NIF&lt;/strong&gt; y tu &lt;strong&gt;sector de negocio&lt;/strong&gt;</desc><g><g><path fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.158,14.88v7.177L9.924,14.88v8.248c0,0,0,6.856,7.516,6.856"></path><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="18.165" y1="22.11" x2="18.165" y2="14.88"></line><polyline fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="25.792,14.88 21.728,14.88 21.728,22.11"></polyline><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="25.792" y1="18.522" x2="21.728" y2="18.522"></line></g><path fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M5.192,17.932c0-6.64,5.623-12.049,12.527-12.049s12.527,5.409,12.527,12.049c0,6.642-5.623,12.051-12.527,12.051"></path></g></svg></span><p className="block-icons__description">Introduce tu <strong>NIF</strong> y tu <strong>sector de negocio</strong></p></li><li className="block-icons__item"><span className="block-icons__icon-container"><svg className="icon block-icons__icon checks" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><desc>&lt;strong&gt;Contesta a un breve cuestionario&lt;/strong&gt;</desc><g><g><rect x="13.321" y="0.099" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="9.409" height="9.051"></rect><rect x="13.321" y="13.434" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="9.409" height="9.053"></rect><rect x="13.321" y="26.717" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="9.409" height="9.051"></rect></g><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="12.875" y1="0.099" x2="21.728" y2="8.774"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="22.674" y1="0.099" x2="12.207" y2="7.918"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="13.321" y1="13.97" x2="22.674" y2="20.665"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="21.728" y1="13.434" x2="12.875" y2="21.79"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="13.321" y1="35.768" x2="22.674" y2="26.717"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="13.321" y1="26.717" x2="23.23" y2="34.858"></line></g></svg></span><p className="block-icons__description"><strong>Contesta a un breve cuestionario</strong></p></li><li className="block-icons__item"><span className="block-icons__icon-container"><svg className="icon block-icons__icon fullText" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><desc>&lt;strong&gt;Consigue tu evaluación&lt;/strong&gt; y consejos de mejora</desc><g><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" x1="6.806" y1="8.561" x2="28.631" y2="8.561"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" x1="6.806" y1="12.31" x2="28.631" y2="12.31"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" x1="6.806" y1="16.059" x2="28.631" y2="16.059"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" x1="6.806" y1="19.807" x2="28.631" y2="19.807"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" x1="6.806" y1="23.557" x2="28.631" y2="23.557"></line><line fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" x1="6.806" y1="27.306" x2="17.719" y2="27.306"></line></g></svg></span><p className="block-icons__description"><strong>Consigue tu evaluación</strong> y consejos de mejora</p></li></ul></div></article>
                        <section className="faq">
                            <div className="wrapper wrapper--inner">
                                <h1 className="title faq__title title--light">Preguntas frequentes</h1>
                                <Accordion className="collapsible">
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header" className="collapsible__heading">
                                        <h3 className="title accordion">¿En qué consiste el Coach Pyme?</h3>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            <li>El Coach Pyme es un diagnóstico sobre la situación de tu pyme, que incluye consejos para mejorar tu estrategia financiera y una comparativa con tu sector.</li>
                                            <li>CoachPYME evalúa tu empresa en base a los 7 aspectos siguientes: estabilidad de la
                                            empresa, calidad del negocio, equipo gestor, sector de actividad, endeudamiento,
                                            elementos financieros, reputación e impacto. El análisis de estos parámetros viene
                                            acompañado de consejos personalizados para ayudarte a gestionar tu pyme.</li>
                                            <li>Además, podrás conocer la situación de tu pyme frente a sus competidores en lo
                                            referente a aspectos como tasa de crecimiento, eficiencia, margen, solvencia, endeudamiento,
                                            generación de flujos de caja, etc. </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className="collapsible">
                                    <AccordionSummary expandIcon={<ExpandMoreIcon /> }
                                        aria-controls="panel1a-content"
                                        id="panel1a-header" className="collapsible__heading">
                                        <h3 className="title accordion">¿Cuánto tiempo tarda el Coach Pyme en darme su informe sobre mi empresa?</h3>
                                        
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            <li>El informe se genera en la misma pantalla instantáneamente, tan pronto como aprietes el
                                            botón “Generar informe”, tras haber introducido el NIF de tu empresa y haber contestado a
                                            un sencillo cuestionario.</li>
                                            <li><a href="mailto:info@inbonis.es" title="¿Quieres saber más?" target="_blank">¿Quieres saber más?</a></li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className="collapsible">
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header" className="collapsible__heading">
                                        <h3 className="title accordion">¿Cómo obtiene el Coach Pyme la información sobre mi empresa?</h3>
                                    
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            <li>En INBONIS hemos desarrollado una plataforma eficiente de agregación de información,
                                            que nos permite acceder a datos financieros, cualitativos y conductuales de todas las
                                            empresas de España, en base a su NIF. Se requiere, además, que respondas a unas 15
                                            preguntas (un clic por pregunta) en menos de 30 segundos para completar la evaluación.</li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className="collapsible">
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header" className="collapsible__heading">
                                        <h3 className="title accordion">¿Para quién está disponible el Coach Pyme?</h3>
                                        
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            <li>Para pymes con una facturación anual inferior a 10 millones de euros constituidas
                                            como S.L. o S.A.</li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </section>
                </section>
            </div>
    )
};

export default Q_AND_A;