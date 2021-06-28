import {useState} from "react"
import {Heading, Flex, CircularProgress, useColorMode, useColorModeValue, Divider} from "@chakra-ui/react"
import {FaSun} from 'react-icons/fa'


//components
import ThemeSwitch from "../components/ThemeSwitch"
import Form from "../components/Form"
import Weekly from "../components/Weekly"
import Current from "../components/Current"


const Index = () => {

  
  const [query, setQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState(null);

  const API = `https://api.weatherapi.com/v1/forecast.json?key=1a873a6567664b65bdd165048212106&q=${query}&days=3`;

  const fetchData = () => {
    setResult()
    setIsLoaded(false)
    fetch(API)
    .then(res => res.json())
    .then(data => (
      setResult({
        location: data.location,
        current: data.current,
        forecast: data.forecast
      })
    ))
    setIsLoaded(true)
    console.log(result)
  }

//------ STYLES -----------

  const { colorMode, toggleColorMode } = useColorMode()

  const title = useColorModeValue("purple.400", "teal.300");
  const color = useColorModeValue("#666", "#DDD");


  const iconStyles = {
    fontSize: 32, 
    marginRight: 10
  };

// ------------------------- 

  return (
    <Flex color={color} flexDirection="column" alignItems='center' h='100vh' maxW='100vw'>


      <Heading width='100%' display='flex' alignItems='center' justifyContent='center' bg={title} color='white' as="h2" size="lg" mb={10} textAlign="center" paddingY={5}>
        <FaSun style={iconStyles}/> Weather App
      </Heading>

      {/* ------------ MAIN SECTION ---------------- */}
      <Flex width='100vw' maxW='400px' overflowX='hidden' flexDirection="column" justifyContent='center' alignItems='center' paddingY={10} pb='80px' pt='180px'>
      <Form query={query} isLoaded={isLoaded} setIsLoaded={setIsLoaded} setQuery={setQuery} api={API} fetchData={fetchData}/>
       {!isLoaded ? null : (
         <>
           {result ? (
            <>
              <Current result={result}/>
              <Weekly result={result}/>
            </>
           ) : <CircularProgress d='block' mx='auto' isIndeterminate mt='100px' color={colorMode === "dark" ? 'teal.300' : 'pink.500'} />}
         </>
       )}
      </Flex>
      {/* ------------------------------------------ */}


      <ThemeSwitch toggleColorMode={toggleColorMode} colorMode={colorMode}/>
   </Flex>
  )
}

export default Index
