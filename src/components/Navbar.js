import React from 'react'

//chakra imports
import {HStack, Heading, Center} from '@chakra-ui/react'

//router imports
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        
        <Center>
        <HStack spacing='150px' mt='50px' mb='50px'>

            <Link to='/'>
                <Heading>ABOUT</Heading>
            </Link>
            <Link to='/projects'>
                <Heading>PROJECTS</Heading>
            </Link>

        </HStack>
        </Center>
    

        

    )
}
