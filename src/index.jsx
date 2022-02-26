import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider,Button,Input,IconButton,Box } from "@chakra-ui/react";
import theme from "./theme";

const wasm = import("../build/hackathon");



wasm.then((m) => {
    const App = () => {
        const [name, setName] = useState("");
		const [fibResult, setFibResult] = useState();

        const handleChange = (e) => {
            setName(e.target.value);
        };
        const handleClick = () => {
            m.welcome(name);
        };

		const compute = () => {
			setFibResult(m.fib(10));
		}

        return (
            <ChakraProvider theme={theme} bg={"#FCF5EF"} >
                <Box p={4}>
                <Button>DOES THIS HAVE TEXT</Button>
                <Input></Input>
                </Box>
                
            </ChakraProvider>
        );
    };

    ReactDOM.render(<App />, document.getElementById("root"));
});
