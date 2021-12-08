import {VStack, Input, Text} from '@chakra-ui/react'

export default function Projects() {
    return (
        <VStack mt='50px'>
            <Text>
                
            These projects are rendered via GraphCMS, a headless content management system.
            </Text>

            <Input w='400px' variant='filled' placeholder='Search my projects'/>

        </VStack>
    )
}
