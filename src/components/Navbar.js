import React, {useState} from "react"
import {Box, Button, Heading, Spacer, HStack, Flex, IconButton} from '@chakra-ui/react'
import {Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'

import {useColorMode} from '@chakra-ui/react'

//Router imports
import { Link } from "react-router-dom";

//Icon image imports
import { BsMoonStarsFill } from "react-icons/bs";
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar() {


    const { colorMode, toggleColorMode } = useColorMode()


    return (
        <>
                        <HStack w='100%'>
                {/*BLOCK 1*/}
                <Heading size='2xl'  pt='10px' pl='25px' alignSelf='center' whiteSpace='nowrap'>
                Earl Born
                </Heading>
                <Spacer/>
                {/*Hamburger*/}
                <HStack display={['flex', 'flex', 'none', 'none']}
                    pr='15px'>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<GiHamburgerMenu />}
                                variant='outline'
                            />
                            <MenuList>
                            <Link to='/' colorScheme='black'>
                                    <MenuItem justifyContent='center' to='/projects'>About</MenuItem>
                                </Link>
                                <Link to='/projects' colorScheme='black'>
                                    <MenuItem justifyContent='center' to='/projects'>Projects</MenuItem>
                                </Link>
                                <Link to='/Contact' colorScheme='black'>
                                    <MenuItem justifyContent='center' to='/projects'>Contact</MenuItem>
                                </Link>
                            </MenuList>

                        </Menu>
                        <IconButton variant='outline' 
                            onClick={toggleColorMode} 
                            icon={<BsMoonStarsFill/>}
                            color={colorMode === 'light' ? 'black' : 'yellow'}/>
                </HStack>
                {/* Nav Buttons */}
                <HStack display={['none', 'none', 'flex', 'flex']}
                pr='20px' spacing='20px'>
                    
                    <Link to='/' colorScheme='black'>About</Link>
                    <Link to='/projects' colorScheme='black'>Projects</Link>
                    <Link to='/contact' colorScheme='black'>Contact</Link>
                    <Button onClick={toggleColorMode}> 
                        <Heading size='sm' mr='5px'>{colorMode === 'light' ? 'Dark' : 'Light'} Mode</Heading>
                        <BsMoonStarsFill color={colorMode === 'light' ? 'black' : 'yellow'} as='button'/>
                        
                    </Button>
                </HStack>
            </HStack>



        </>
    )
}
