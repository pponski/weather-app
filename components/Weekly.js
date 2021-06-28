import {Box, Flex, Text, Tabs, TabList, Image, Tab, TabPanels, TabPanel, useColorModeValue, Divider} from "@chakra-ui/react"

import moment from 'moment'
  
const Weekly = ({ result }) => {
      
    const colorScheme = useColorModeValue("purple", "teal");

      return (
              <Flex width='100vw' maxWidth='400px' mx='auto' mt={5}>
{/* ----- TABS CONTAINER AND TAB LIST -------------- */}
                <Tabs width='100%' align='center'  variant="soft-rounded" colorScheme={colorScheme}>
                  <TabList width='100%' maxW='400px'>
                    {result.forecast.forecastday.map(day => (
                      <Tab key={day.time_epoch} _focus={{border: 'none'}} marginX='10px'>{moment(day.date).format('dddd')}</Tab>
                    ))}
                  </TabList>
{/* ----- TABS PANELS -------------- */}
                  <TabPanels>
{/* ----- SINGLE PANEL NO.1 -------------- */}
                    <TabPanel width='100vw' maxW='400px'>
                      <Text fontSize='md' fontWeight='bold' mb={3}>{moment(result.forecast.forecastday[0].date).format('LL')}</Text>
                      <Flex borderRadius='50px' p='10px 0' width='90vw' maxW='400px' overflowX='scroll'>
                        {result.forecast.forecastday[0].hour.map(hour => (
                          <Box key={hour.time}>
                            <Image width="30px" src={hour.condition.icon} alt={hour.condition.text}/>
                            <Text px='4'>{Math.round(hour.temp_c)}°C</Text> <Text color='gray' fontSize='xs'>{moment(hour.time).format('HH:00')}</Text>
                          </Box>
                        ))}                               
                      </Flex>
                      <Flex width='100%' maxW='400px' flexDirection='column' fontSize='sm'>
                        <Divider width='100%'/>
                        <Text padding='8px 0'><strong>Sunrise - </strong> {result.forecast.forecastday[0].astro.sunrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Sunset - </strong> {result.forecast.forecastday[0].astro.sunset}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonrise - </strong> {result.forecast.forecastday[0].astro.moonrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonset - </strong> {result.forecast.forecastday[0].astro.moonset}</Text>
                        </Flex> 
                    </TabPanel>
{/* ----- SINGLE PANEL NO.2 -------------- */}
                    <TabPanel width='100vw' maxW='400px'>
                      <Text fontSize='md' fontWeight='bold' mb={3}>{moment(result.forecast.forecastday[1].date).format('LL')}</Text>
                      <Flex borderRadius='50px' p='10px 0' width='90vw' maxW='400px' overflowX='scroll'>
                        {result.forecast.forecastday[1].hour.map(hour => (
                          <Box key={hour.time}>
                            <Image width="30px" src={hour.condition.icon} alt={hour.condition.text}/>
                            <Text px='4'>{Math.round(hour.temp_c)}°C</Text> <Text color='gray' fontSize='xs'>{moment(hour.time).format('HH:00')}</Text>
                          </Box>
                        ))}                               
                      </Flex>
                      <Flex width='100%' maxW='400px' flexDirection='column' fontSize='sm'>
                        <Divider width='100%'/>
                        <Text padding='8px 0'><strong>Sunrise - </strong> {result.forecast.forecastday[1].astro.sunrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Sunset - </strong> {result.forecast.forecastday[1].astro.sunset}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonrise - </strong> {result.forecast.forecastday[1].astro.moonrise}</Text>
                        <Divider/>
                        <Text padding='8px 0'><strong>Moonset - </strong> {result.forecast.forecastday[1].astro.moonset}</Text>
                        </Flex> 
                    </TabPanel>
{/* ----- SINGLE PANEL NO.3 -------------- */}
                    <TabPanel width='100vw' maxW='400px'>
                      <Text fontSize='md' fontWeight='bold' mb={3}>{moment(result.forecast.forecastday[2].date).format('LL')}</Text>
                      <Flex borderRadius='50px' p='10px 0' width='90vw' maxW='400px' overflowX='scroll'>
                        {result.forecast.forecastday[2].hour.map(hour => (
                          <Box key={hour.time}>
                            <Image width="30px" src={hour.condition.icon} alt={hour.condition.text}/>
                            <Text px='4'>{Math.round(hour.temp_c)}°C</Text> <Text color='gray' fontSize='xs'>{moment(hour.time).format('HH:00')}</Text>
                          </Box>
                        ))}                               
                      </Flex>
                      <Flex width='100%' maxW='400px' flexDirection='column' fontSize='sm'>
                        <Divider width='100%'/>
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
              </Flex>
      )
    }
  
  export default Weekly