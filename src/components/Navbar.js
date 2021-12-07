import React from 'react'

//chakra imports
import {HStack, Heading, Center} from '@chakra-ui/react'

//router imports
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        
        <Center>
        <HStack spacing='50px' mt='50px'>

            <Link to='/'>
                <Heading>ABOUT</Heading>
            </Link>
            <Link to='/projects'>
                <Heading>PROJECTS</Heading>
            </Link>
            <Link to='/contact'>
                <Heading>CONTACT</Heading>
            </Link>

        </HStack>
        </Center>
    

        

    )
}
