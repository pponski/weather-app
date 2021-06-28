import { FormControl, FormLabel, Switch, useColorMode, Flex } from '@chakra-ui/react'
import {FaMoon} from 'react-icons/fa'

const ThemeSwitch = ({ colorMode, toggleColorMode }) => {

    const iconStyles = {
        fontSize: 24,
        marginRight: 10
    }

    return (
        <FormControl flexDirection='column' boxShadow='lg' height="90px" background={colorMode === "dark" ? "#1A212C" : "#FFFFFF"} position="fixed" bottom='0' width='100vw' z-index={100} py={5} display="flex" alignItems="center" justifyContent="center" borderTop={colorMode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #ddd"}>
            <Flex alignItems='center' pb={3}>
                <FaMoon style={iconStyles} />
                <FormLabel mb={0}>
                    Dark mode
                </FormLabel>
            </Flex>
            <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} size='md' colorScheme="green"/>
        </FormControl>
    )
}

export default ThemeSwitch
