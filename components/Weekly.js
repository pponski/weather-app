import {
    Box, Flex, Text, Tabs, TabList, Image, Tab, TabPanels, TabPanel, useColorModeValue, Divider
  } from "@chakra-ui/react"

  import moment from 'moment'
  
  const Weekly = ({ result }) => {
      
    const colorScheme = useColorModeValue("purple", "teal");

      return (
              <Box mt={5}>
                {/* <Heading as="h3" size='sm' textAlign="center" pb={5}>Weather for the next days:</Heading> */}
                <Tabs align='center'  variant="soft-rounded" colorScheme={colorScheme}>
                  <TabList>
                    <Tab _focus={{border: 'none'}} marginX='10px'>Monday</Tab>
                    <Tab _focus={{border: 'none'}} marginX='10px'>Tuesday</Tab>
                    <Tab _focus={{border: 'none'}} marginX='10px'>Wednesday</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Text fontSize='md' fontWeight='bold' mb={3}>{moment(result.forecast.forecastday[0].date).format('LL')}</Text>
                      <Flex borderRadius='50px' p='10px 0' width='100vw' maxW='500px' overflow='scroll' style={{}}>
                        {result.forecast.forecastday[0].hour.map(hour => (
                          <Box key={hour.time}>
                            <Image width="30px" src={hour.condition.icon} alt={hour.condition.text}/>
                            <Text px='5' as='p'>{Math.round(hour.temp_c)}°C</Text>                 <Text color='gray' fontSize='xs' px='5' as='p'>{moment(hour.time).format('HH:00')}</Text>
                          </Box>
                        ))}                               
                      </Flex>
                      <Flex flexDirection='column' fontSize='sm'>
                        <Divider/>
                        <Text padding='8px 0'><strong>Sunrise - </strong> {result.forecast.forecastday[0].astro.sunrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Sunset - </strong> {result.forecast.forecastday[0].astro.sunset}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonrise - </strong> {result.forecast.forecastday[0].astro.moonrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonset - </strong> {result.forecast.forecastday[0].astro.moonset}</Text>
                        </Flex> 
                    </TabPanel>
                    <TabPanel>
                    <Text fontSize='md' fontWeight='bold' mb={3}>{moment(result.forecast.forecastday[1].date).format('LL')}</Text>
                      <Flex borderRadius='50px' p='10px 0' width='100vw' maxW='500px' overflow='scroll' style={{}}>
                        {result.forecast.forecastday[1].hour.map(hour => (
                          <Box key={hour.time}>
                            <Image width="30px" src={hour.condition.icon} alt={hour.condition.text}/>
                            <Text px='5' as='p'>{Math.round(hour.temp_c)}°C</Text>                 <Text color='gray' fontSize='xs' px='5' as='p'>{moment(hour.time).format('HH:00')}</Text>
                          </Box>
                        ))}                                
                      </Flex>
                      <Flex flexDirection='column' fontSize='sm'>
                        <Divider/>
                        <Text padding='8px 0'><strong>Sunrise - </strong> {result.forecast.forecastday[1].astro.sunrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Sunset - </strong> {result.forecast.forecastday[1].astro.sunset}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonrise - </strong> {result.forecast.forecastday[1].astro.moonrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonset - </strong> {result.forecast.forecastday[1].astro.moonset}</Text>
                        </Flex> 
                    </TabPanel>
                    <TabPanel>
                    <Text fontSize='md' fontWeight='bold' mb={3}>{moment(result.forecast.forecastday[2].date).format('LL')}</Text>
                      <Flex borderRadius='50px' p='10px 0' width='100vw' maxW='500px' overflow='scroll' style={{}}>
                        {result.forecast.forecastday[2].hour.map(hour => (
                          <Box key={hour.time}>
                            <Image width="30px" src={hour.condition.icon} alt={hour.condition.text}/>
                            <Text px='5' as='p'>{Math.round(hour.temp_c)}°C</Text>                 <Text color='gray' fontSize='xs' px='5' as='p'>{moment(hour.time).format('HH:00')}</Text>
                          </Box>
                        ))}                             
                      </Flex>
                      <Flex flexDirection='column' fontSize='sm'>
                        <Divider/>
                        <Text padding='8px 0'><strong>Sunrise - </strong> {result.forecast.forecastday[2].astro.sunrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Sunset - </strong> {result.forecast.forecastday[2].astro.sunset}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonrise - </strong> {result.forecast.forecastday[2].astro.moonrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonset - </strong> {result.forecast.forecastday[2].astro.moonset}</Text>
                        </Flex> 
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>

      )
    }
  
  export default Weekly