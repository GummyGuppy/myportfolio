//chakra imports
import {VStack, HStack, Text, Avatar, Progress, Heading} from '@chakra-ui/react'

//icon imports
import {SiChakraui, SiReact, SiAmazonaws, SiNodedotjs} from 'react-icons/si'
import{FaGithubSquare, FaLinkedin, FaMedium} from 'react-icons/fa'

export default function About() {
    return (

        

            <VStack>

                
                <HStack w='90%' mt='50px' mb='50px'>

                    <VStack boxShadow='outline'>
                        <Avatar size='2x1'/>
                        <HStack>
                            <FaMedium size='50px'/>
                            <FaGithubSquare size='50px'/>
                            <FaLinkedin size='50px'/>
                        </HStack>
                    </VStack>
                    <Text padding='25px'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type 
                     specimen book. It has survived not only five centuries, but also the leap into 
                     electronic typesetting, remaining essentially unchanged. It was popularised in the 
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                     recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    

                </HStack>
                
                    
                <Progress size='sm' w='100%'/>
                <VStack >
                    
                

                <HStack spacing='50px' mt='50px' mb='50px' justify='flex-start'>
                        

                    <SiReact size='150px' color='#61DBFB' />
                    <Heading size='xl'>/</Heading>
                    <SiChakraui size='150px' color='#1fcecb'/>
                    <Heading size='xl'>/</Heading>
                    <SiAmazonaws size='150px' color='#FF9900'/>
                    <Heading size='xl'>/</Heading>
                    <SiNodedotjs size='150px' color='gray'/>
                    

                </HStack>

                
                </VStack>
                
            </VStack>

        
    )
}
