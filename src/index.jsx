import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Text, Grid, GridItem, Input, Button, IconButton} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const wasm = import("../build/hackathon");

wasm.then((m) => {
    const App = () => {
        const [name, setName] = useState("");
		const [fibResult, setFibResult] = useState();

        const handleChange = (e) => {
            setName(e.target.value);
        };

		const compute = () => {
			setFibResult(m.fib(name));
		}

        return (
            <>
                <ChakraProvider>
                    <Grid templateColumns="repeat(12, 1fr)">
                        <GridItem colSpan={11}>
                            <Text fontSize="6xl">Oolang IDE</Text>
                        </GridItem>
                        <GridItem>
                            <IconButton
                                aria-label="Run code"
                                icon={<ChevronRightIcon />}
								onClick={compute}
                            />
                        </GridItem>
                    </Grid>
                    <Grid templateColumns="repeat(13, 1fr)">
                        <GridItem colSpan={6} w="100%">
                            <Input height="75vh" onChange={handleChange} textAlign="center"/>
                        </GridItem>
                        <GridItem>Middle</GridItem>
                        <GridItem colSpan={6} w="100%">
                            <Input height="75vh" value={fibResult}/>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns="repeat(10, 1fr)">
                        <GridItem>
                            <Button>Button 1</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 2</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 3</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 4</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 5</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 6</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 7</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 8</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 9</Button>
                        </GridItem>
                        <GridItem>
                            <Button>Button 10</Button>
                        </GridItem>
                    </Grid>
                    {/* <div>
                        <h1>Hi there</h1>
                        <button onClick={m.big_computation}>
                            Run Computation
                        </button>
                    </div>
                    <div>
                        <input type="text" onChange={handleChange} />
                        <button onClick={handleClick}>Say hello!</button>
                        <button onClick={compute}>Compute</button>
                        <span>{fibResult}</span>
                    </div> */}
                </ChakraProvider>
            </>
        );
    };

    ReactDOM.render(<App />, document.getElementById("root"));
});
