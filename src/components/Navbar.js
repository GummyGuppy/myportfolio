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
                <Heading>About</Heading>
            </Link>
            <Link to='/projects'>
                <Heading>Projects</Heading>
            </Link>
            <Link to='/contact'>
                <Heading>Contact</Heading>
            </Link>

        </HStack>
        </Center>
    

        

    )
}
