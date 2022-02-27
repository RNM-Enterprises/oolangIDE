# OOLANG
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/RNM-Enterprises/oolang/CI/main?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/RNM-Enterprises/oolang?style=for-the-badge)

OOLANG is an esoteric stack-based programming language where all instructions/commands are differnet unicode O characters

## Usage

We have a custom Web IDE at <https://oolang.tech>, for experimenting in the browser.

To run simply type
```
npm run build && serve -d dist
```

You can type any valid OOLANG syntax into the left text box. Pressing the interpret button then runs the program and the output is printed on the right. To make entering OOLANG easier we have provided buttons to insert the different types of Os.

## Language Specification

OOLANG emulates a [stack machine](https://en.wikipedia.org/wiki/Stack_machine), not dissimilar to how the JVM or Python's bytecode interpreter works.

The virtual machine consists of a stack of bytes, and 256 bytes of addressable memory. A valid OOLANG program may consist of any combination of the the following 10 commands:

| Command | Unicode Character Name                       | Command Name | Description                                                                                 |
| ------- | -------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| `O`     | Latin Capital Letter O                       | `PUSH`       | Push the value `1` onto the top of the stack                                                |
| `0`     | Digit Zero                                   | `POP`        | Pop the value from the top of the stack, discarding it                                      |
| `Ǿ`     | Latin Capital Letter O with Stroke and Acute | `INC`        | Pop the top stack value, increment it, push the result                                      |
| `Ꮻ`     | Cherokee Letter Wi                           | `DEC`        | Pop the top stack value, decrement it, push the result                                      |
| `⭕`    | Heavy Large Circle                           | `ADD`        | Pop the top two stack values, add them, push the result                                     |
| `𐍉`     | Gothic Letter Othal                          | `JNZ`        | Jump to the address at the top of the stack, if the 2nd-top value is non-zero               |
| `Ꝍ`     | Latin Capital Letter O with Loop             | `JZ`         | Jump to the address at the top of the stack, if the 2nd-top value is zero                   |
| `◎`     | Bullseye                                     | `LOAD`       | Pop from the stack, and push the value at the memory address specified                      |
| `◯`     | Large Circle                                 | `STORE`      | Pop the top two values from the stack, storing the 2nd at the address specified by the 1st  |
| `⒪`     | Parenthesized Latin Small Letter O           | `READ`       | Read the next byte from stdin, pushing it to the top of the stack, or `0` if stdin is empty |
| `ₒ`     | Latin Subscript Small Letter O               | `WRITE`      | Pop from the stack and write the value to stdin as an ascii character 

## Building

To build we need to compile the rust and add references to the resulting WebAssembly 

Typing:

```
cargo build
rustup target add wasm32-unknown-unknown
cargo build --target wasm32-unknown-unknown
wasm-bindgen target/wasm32-unknown-unknown/debug/hackathon.wasm --out-dir build
```

And then:

```
npm run dev
```

To run in development. 

## Architecture

We have written some basic rust functions which utilise the [Oolang Interpretter](https://github.com/RNM-Enterprises/oolang) we also wrote which takes valid Oolang syntax and returns the resulting element on the stack.

This rust is then compiled into WebAssembly and we interface it with our basic react app

The frontend is written with react from scratch. This enables the GUI to be dynamic and update the text boxes with the result from interpretting the Oolang