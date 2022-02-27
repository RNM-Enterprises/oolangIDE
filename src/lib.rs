use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// pub struct OolangResult {
// 	pub value : u8,
// 	pub output : String,
// }

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn big_computation() {
    alert("Big computation in Rust");
}

#[wasm_bindgen]
pub fn welcome(name: &str) {
	alert(&format!("Hello {}, from Rust!", name));
}

#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
	if n == 0 || n == 1 {
		return n;
	}
	fib(n - 1) + fib(n - 2)
}

#[wasm_bindgen]
pub fn run_result(program: &str, input: &str) -> i32 {
	if let (Some(i) ,_ ) = oolang::run_buffered(program, input){i.into()}
	else { -1 }
}

#[wasm_bindgen]
pub fn run_stdout(program: &str, input: &str) -> String {
	oolang::run_buffered(program, input).1
}

// #[wasm_bindgen]
// pub fn run(program: &str, input: &str) -> Vec<String> {
// 	let result = oolang::run_buffered(program, input);
// 	vec![match result.0{None => String::new(), Some(i) => String::from(i)}, result.1]
// }