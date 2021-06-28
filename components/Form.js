import { FormControl, Input, InputRightElement, useColorModeValue } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';

const Form = ({ query, setQuery, fetchData }) => {

    const formSubmit = (e) => {
        e.preventDefault();
        fetchData();
        setQuery('');
    }

    const handleInput = e => {
        setQuery(e.target.value)
    }

// -----  STYLES  --------------------

    const border = useColorModeValue("2px solid violet","2px solid turquoise");

    const iconStyles = {
        fontSize: 16
    }
    

    return (
        <FormControl width='80vw' as="form" type="submit" onSubmit={formSubmit} maxW='400px' mx='auto' display="flex" alignItems="center">
            <Input _focus={{border: `${border}`}} placeholder="Type destination" onChange={handleInput} value={query} />
            <InputRightElement
                pointerEvents="none"
                d="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                px={4}
            >
                <FaSearch style={iconStyles} onClick={formSubmit}/>
                </InputRightElement>
        </FormControl>
    )
}

export default Form
