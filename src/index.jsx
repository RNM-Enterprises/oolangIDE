import React, { useState } from "react";
import ReactDOM from "react-dom";

import { ChakraProvider, Divider, HStack, Spacer, VStack, Textarea,  Text, Button, IconButton,Box, Center} from "@chakra-ui/react";
import { ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";

const wasm = import("../build/hackathon");



wasm.then((m) => {
    const App = () => {
		const test = "1 2 3 4 5 6 7 8 9 101112131415161718192021222"
		// const test = "010203040506070809101112131415161718192021222";
		const [fibResult, setFibResult] = useState();
        const [code,setCode] = useState("");

        const handleUserInput = (e) => {
            setCode(e.target.value)
        };

		const compute = () => {
            // if (fibResult != undefined){
            //     setFibResult(fibResult +'\n'+ m.fib(code));
            // }else{
            //     setFibResult(m.fib(code));
            // }
            // console.log(m.fib(code))
            setFibResult(m.run_result(code, ""))
			console.log(m.run_stdout(code, ""))
		}

        const os = ["O","0","Ǿ","Ꮻ","⭕","𐍉","Ꝍ","◎","◯","⒪","ₒ"];
		console.log(test)
        return (
            <ChakraProvider>
                <HStack
                    alignContent={"center"}
                    padding={1}
                    paddingRight={12}
                    paddingLeft={4}
                >
                    <Text
                        bgGradient="linear(to-l, #fea735, #fe7235)"
                        bgClip="text"
                        fontSize="4xl"
                        fontWeight="extrabold"
                    >
                        Ꮻ0lang
                    </Text>
                    <Spacer />
                    <IconButton
                        background={"#148d3c"}
                        size={"lg"}
                        aria-label="Run code"
                        icon={<ChevronRightIcon color={"white"} />}
                        onClick={compute}
                    />
                </HStack>

                <HStack p={4}>
                    <VStack w={"50%"}>
                        <HStack
                            alignContent={"center"}
                            
                        >
                            <Text fontSize="lg">Code</Text>
							<Spacer/>
                            <IconButton
                                bgGradient="linear(to-l, #fea735, #fe7235)"
                                size={"lg"}
                                aria-label="Run code"
                                icon={<CloseIcon color={"white"} />}
                                onClick={() => setCode("")}
                            />
                        </HStack>
                        <Textarea
                            h="65vh"
                            id="input"
                            resize={"none"}
                            value={code}
                            onChange={handleUserInput}
                        />
                    </VStack>

                    <VStack justifyContent={"flex-start"} w={"50%"}>
                        <HStack justifyContent={"center"}>
                            <Text fontSize="lg">Output</Text>
                            <Spacer />
                            <IconButton
                                bgGradient="linear(to-l, #fea735, #fe7235)"
                                size={"lg"}
                                aria-label="clear Output"
                                icon={<CloseIcon color={"white"} />}
                                onClick={() => setFibResult("")}
                            />
                        </HStack>

                        <Textarea
                            disabled
                            color={"#000000"}
                            h="65vh"
                            resize={"none"}
                            value={fibResult}
                        />
                    </VStack>
                </HStack>
                <HStack justifyContent={"space-between"} p={4}>
                    {os.map((o) => (
                        <Button
                            onClick={(e) => setCode(code + o)}
                            bg={"#0077ff"}
                            color={"#FFFFFF"}
                        >
                            {o}
                        </Button>
                    ))}
                </HStack>
                <Box
                    w={"100%"}
                    h={"50px"}
                    p={2}
                    bgGradient="linear(to-l, #fea735, #fe7235)"
                    position={"relative"}
                    top={"100%"}
                >
                    <Center>
                        <Text bold color={"#ffffff"}>
                            <a
                                target="_blank"
                                href="https://github.com/RNM-Enterprises/oolangIDE"
                            >
                                Check out the language spec here!
                            </a>
                        </Text>
                    </Center>
                </Box>
            </ChakraProvider>
        );
    };

    ReactDOM.render(<App />, document.getElementById("root"));
});
