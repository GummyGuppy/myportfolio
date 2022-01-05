import React from 'react'

import { HStack, Heading, Text, Stack, Progress, VStack, Icon, Divider, Center} from '@chakra-ui/react'

import { FaAws } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import {SiRubyonrails, SiApollographql, SiFirebase, SiAuth0, SiNextdotjs} from 'react-icons/si'
import {BsTools} from 'react-icons/bs'

import { GrCertificate } from "react-icons/gr";

export default function About() {




    function Skill({ title, desc, icon, iconHex, progressValue, ...rest }) {
        return (
        
            <HStack  p={5} shadow='md' borderWidth='2px' w='25vw' h='100px' 
                    align='center' justify='space-between' {...rest}>  
                <Icon as={icon} color={iconHex} h='100px' w='100px'/>
                <VStack>
                  <Heading size='md'>{title}</Heading>
                  <Text align='endcd'>{desc}</Text>
                  {progressValue ? <Progress value={progressValue} isAnimated='true' hasStripe='true' w='100%' /> : null}
                </VStack>
            </HStack>

        )
      }
      
      function Skills() {
        return (

        
          <VStack spacing={4} p={16}>

            <Skill title="NextJS" icon={SiNextdotjs} iconHex='black'
            desc='My primary framework for front end development'/>
            <Skill title="Auth0" icon={SiAuth0} iconHex='red'
            desc='Authorization, role monitoring and protected routes'/>
            <Skill title="Firebase" icon={SiFirebase} iconHex='orange'
            desc='Used for quick access to a cloud database via Firestore'/>
            <Skill title="Apollo" icon={SiApollographql}
            desc='API data retrieval tool'/>

            
          </VStack>
        )
      }

        function Certifications(){
          return (

            <VStack>
              <Heading size='sm'>Associate:</Heading>
              <Skill title='Certified Solution Architect' icon={FaAws} iconHex='orange' progressValue={20}/>
              <Skill title='Certified Developer' icon={FaAws} iconHex='orange' progressValue={10}/>

            </VStack>

          )
        }


return (
    
    <>
    <Stack spacing='100px' direction={['column', 'column', 'row', 'row']} justify='center' p={6}>
        <VStack justify='center' align='center'>
            <Heading p={6} size='lg'>Tools I use:</Heading>
            <BsTools size={'15vw'} color='gray' />
        </VStack>
        <Skills/>
    </Stack>
    <Center>
    <Divider w='75vw'/>
    </Center>
    
    <Stack spacing='100px' direction={['column', 'column', 'row', 'row']} justify='center' p={6}>
        <VStack justify='center' align='center'>
            <Heading p={6} size='lg'>Certifications</Heading>
            <GrCertificate size={'15vw'}/>
        </VStack>
        <Certifications/>
    </Stack>
    </>
    



)
}
