import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

    function Imputpassword() {
        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show)
      
        return (
          <InputGroup size='md'>
            <Input
              pr='5.5rem'
              type={show ? 'text' : 'password'}
              placeholder='******'
              height="40px" 
              width="85%"
              borderRadius="15px"
            />
            <InputRightElement >
              <Button h="1.7rem"  mr="150px" mt="10px" size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        )
      }

export default Imputpassword