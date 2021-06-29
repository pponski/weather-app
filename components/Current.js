import { Flex, Text, Image, Box, useColorModeValue, Divider } from "@chakra-ui/react"
import {FaWind} from 'react-icons/fa'
import {BsDroplet} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import moment from 'moment'


const Current = ({result}) => {

  const color = useColorModeValue("purple.400", "teal.300");


    return (
        <Flex mt={5}  mx='auto' maxW='400px' flexDirection='column' alignItems='center'>
{/* ------- WEATHER HEADER ---------- */}
          <Text color={color} fontSize='2xl' fontWeight='bold'>{result.location.name}</Text>
          <Text mb={3} fontSize='md' fontWeight='light'>{result.location.country}</Text>
          <Text fontSize='sm' fontWeight='light' fontStyle='italic'>{result.current.condition.text} - {moment(result.location.localtime).format('dddd, HH:mm')}</Text>
{/* ------- WEATHER IMAGE CONTAINER ---------- */}
          <Flex width='100vw' maxW='400px' justifyContent='center' mt={3} alignItems='center'>
            <Image d='block' width='100px' src={result.current.condition.icon} alt={result.current.condition.text} />
            <Text pl='10px' d='flex' alignItems='flex-start' fontSize='6xl'>{Math.round(result.current.temp_c)} <Text pt={3} fontSize='2xl' fontWeight='bold'>°C</Text></Text>
          </Flex>
{/* ------- WEATHER HIGHLIGHTS CONTAINER ---------- */}
          <Flex alignItems='center' textAlign='center' my={5} width='100vw' maxWidth='400px' justifyContent='space-around'>
            <Box textAlign='center'>
              <Box fontSize='16px' mb={1} align='center' color={color}>
                <BsDroplet />
              </Box>
              <Text mb={2} color={color} fontSize='xs' fontWeight='medium'>HUMIDITY</Text>
              <Text fontSize='sm' fontWeight='light'>{result.current.humidity}%</Text>
            </Box>
            <Divider orientation='vertical'/>
            <Box>
              <Box fontSize='16px' mb={1} align='center' color={color}>
                <HiDownload />
              </Box>
              <Text mb={2} color={color} fontSize='xs' fontWeight='medium'>PRESSURE</Text>
              <Text fontSize='sm' fontWeight='light'>{result.current.pressure_mb} hPa</Text>
            </Box>
            <Divider orientation='vertical'/>
            <Box>
              <Box fontSize='16px' mb={1} align='center' color={color}>
                <FaWind />
              </Box>
              <Text mb={2} color={color} fontSize='xs' fontWeight='medium'>WIND</Text>
              <Text fontSize='sm' fontWeight='light'>{result.current.wind_kph} km/h</Text>
            </Box>
          </Flex>
        
        </Flex>
    )
}

export default Current

