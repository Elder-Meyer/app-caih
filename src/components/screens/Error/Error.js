import React from 'react'
import {Link} from 'react-router-dom';
import { Wrapper, Content } from './Error.elements';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import imagenError from '../../../images/imagenError404.png'

export const Error = () => {
  return (
    <div className='page'>
      <Wrapper>
        <Content>
          <h2>
            ¡Oops!
          </h2>
          <p>No hemos podido encontrar esa página</p>
          <p>:(</p>
          <div>
            <Link to="/inicio">
              <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
                volver al inicio
              </Button>
            </Link>
          </div>
        </Content>

        <div>
          <img src={imagenError} width="500px" alt="Error" />
        </div>
      </Wrapper>
      
    </div>
    
  )
}
