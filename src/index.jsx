import React, { useState } from "react";
import ReactDOM from "react-dom";

import { ChakraProvider, Divider, HStack, Spacer, VStack, Textarea,  Text, Button, IconButton,Box} from "@chakra-ui/react";
import { ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";

const wasm = import("../build/hackathon");



wasm.then((m) => {
    const App = () => {
		const [fibResult, setFibResult] = useState();
        const [code,setCode] = useState("");

        const handleUserInput = (e) => {
            setCode(e.target.value)
        };

		const compute = () => {
            if (fibResult != undefined){
                setFibResult(fibResult +'\n'+ m.fib(code));
            }else{
                setFibResult(m.fib(code));
            }
            console.log(m.fib(code))
		}

    

        const os = ["o0","o1","o2","o3","o4","o5","o6","o7","o8","o9","o10","o11"];

        return (
                <ChakraProvider >
                    <HStack alignContent={"center"} padding={1} paddingRight={12} paddingLeft={4}>
                    
                        <Text fontSize="6xl">Oolang</Text>
                        <Spacer/>
                        <IconButton
                            background={"#148d3c"}
                            size={"lg"}
                            aria-label="Run code"
                            icon={<ChevronRightIcon color={"white"}/>}
                            onClick={compute}/>
                       
                    </HStack>
                    
                    <HStack p={4}>
                        <VStack justifyContent={"flex-start"} w={"50%"}>
                            <HStack justifyContent={"center"}>
                            <Text fontSize="lg">Code</Text>
                            <Spacer/>
                            <IconButton
                                background={"#cc0000"}
                                size={"lg"}
                                aria-label="Run code"
                                icon={<CloseIcon color={"white"}/>}
                                onClick={() => setCode("")}
								/>
                            </HStack>
                            
                        <Textarea h="75vh" id="input" resize={"none"} value={code} onChange={handleUserInput} />
                        </VStack>
                        
                        <VStack justifyContent={"flex-start"} w={"50%"}>
                        <HStack justifyContent={"center"}>
                            <Text fontSize="lg">Output</Text>
                            <Spacer/>
                            <IconButton
                                background={"#cc0000"}
                                size={"lg"}
                                aria-label="clear Output"
                                icon={<CloseIcon color={"white"}/>}
								onClick={() => setFibResult("")}/>
                            </HStack>

                            <Textarea h="75vh" resize={"none"} value={fibResult}/>  
                        </VStack>  
                    </HStack>
                    <HStack justifyContent={"space-between"} p={4}>
                        {os.map((o) => <Button bg={"#0077ff"} color={"#FFFFFF"}>{o}</Button>)}
                    </HStack>
                </ChakraProvider>
        
        );
    };

    ReactDOM.render(<App />, document.getElementById("root"));
});
