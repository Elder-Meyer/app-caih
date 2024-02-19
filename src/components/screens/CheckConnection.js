import React from 'react'
import { Link } from 'react-router-dom'
import { Detector } from 'react-detect-offline'
import {Wrapper, Content} from '../screens/Error/Error.elements'
import imageNoConection from '../../images/noConection.jpg'


const CheckConnection = props => {
  return (
    <div>
        <Detector
            render={({online})=> (
                online ? props.children:
                <div className='page'>
                    <Wrapper>
                        <Content style={{textAlign: "center"}}>
                            <h2>
                                ¡Whoops!
                            </h2>
                            <p>Parece que no tienes internet.</p>
                            <p>Revisa la conexión he intentalo mas tarde</p>
                        </Content>

                        <div>
                        <img src={imageNoConection} width="500px" alt="Error" />
                        </div>
                    </Wrapper>
                </div>

            )}
        />
    </div>
  )
}


export default CheckConnection;