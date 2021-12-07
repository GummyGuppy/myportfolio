//chakra imports
import {Center, VStack, HStack, Text} from '@chakra-ui/react'
import {SiChakraui, SiReact, SiAmazonaws} from 'react-icons/si'

export default function About() {
    return (

        <Center mt='50px'>

            <VStack ml='50px' mr='50px'>
                
                <HStack spacing='25px' mb='50px'>
                        
                    <SiReact size='150px' color='#61DBFB'/>
                    <SiChakraui size='150px' color='#1fcecb'/>
                    <SiAmazonaws size='150px'color='#FF9900'/>

                </HStack>
                <Text align='left'>

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </Text>
            </VStack>

        </Center>
        
    )
}
