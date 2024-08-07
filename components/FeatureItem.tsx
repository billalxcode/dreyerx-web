import FeatureProps from '@/interface/props/featureProps'
import { Box, Button, Divider, Flex, Heading, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FeatureItem(props: FeatureProps) {
    return (
        <Flex bgColor={'card40'} borderWidth={1} borderColor={'white10'} borderRadius={20} flexDirection={'column'} flexBasis={'50%'} transition={'all .8s ease-in-out'} _hover={{ transform: 'translateY(-10px)' }} data-aos="fade-up">
            <Flex flexDirection={'column'} p={8} gap={'15px'}>
                <Flex gap={3} alignItems={'center'}>
                    <Image src={`assets/icons/${props.icon}`} w={'50px'} h={'50px'} />
                    <Heading size={'md'}>{props.title}</Heading>
                </Flex>
                <Divider opacity={.2} />
                <Text h={['full', 100]}>
                    {props.description}
                </Text>
                <LinkBox>
                    <LinkOverlay href={props.url}>
                        <Button p={5} w={['70%', '50%']} mt={3} bgColor={'primary'} color={'text'} justifySelf={'flex-end'} transition={'all .5s ease-in-out'} _hover={{ bgColor: 'hover.primary' }}>
                            <Flex gap={3} align={'center'} justify={'center'} h={'full'}>
                                <Text>Read More</Text>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Flex>
                        </Button>
                    </LinkOverlay>
                </LinkBox>
            </Flex>
        </Flex>
    )
}
