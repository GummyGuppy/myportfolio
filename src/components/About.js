import React from 'react'

import { HStack, Heading, Text, Stack, Progress, VStack, Icon, Divider, Center} from '@chakra-ui/react'

import { FaAws, FaPhoenixFramework } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import {SiApollographql, SiFirebase, SiElixir, SiReact, SiJava} from 'react-icons/si'
import {BsTools} from 'react-icons/bs'

import { GrCertificate } from "react-icons/gr";

export default function About() {



  // Abstraction
    function Skill({ title, desc, icon, iconHex, progressValue, ...rest }) {
        return (
        
            <HStack  p={5} shadow='md' borderWidth='2px' w='25vw' 
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
      
      //Implementation
      function Skills() {
        return (

        
          <VStack spacing={4} p={16}>

            <Skill title="Java" icon={SiJava} iconHex={"red"} desc="Understanding of basic OOP principles and implementation."/>
            <Skill title="NextJS" icon={SiReact} iconHex='#61DBFB'
            desc='My primary framework for front end development'/>
            <Skill title="Firebase" icon={SiFirebase} iconHex='orange'
            desc='Cloud database and authentication resource'/>
            <Skill title="Apollo" icon={SiApollographql}
            desc='API data retrieval tool'/>
            <Skill title="Elixir" icon={SiElixir} iconHex={"purple"} desc='Develop solid Elixir fundamentals' 
            progressValue={20}/>
            <Skill title="Phoenix" icon={FaPhoenixFramework} iconHex={"orange"} desc='Build Liveview CRUD application' 
            progressValue={15}/>

            
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

<VStack justify="center" bg='tomato'>
<Heading>Current portfolio todos:</Heading>
      <Text>make mobile friendly</Text>
      <Text>compact skillset/stack descriptions</Text>
</VStack>



    <Stack spacing='100px' direction={['column', 'column', 'row', 'row']} justify='center' p={6}>
        <VStack justify='center' align='center'>
            <Heading p={6} size='lg'>Tools I'm familiar with: </Heading>
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
