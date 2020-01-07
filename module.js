// module3.js is a gate sequencer, which takes as its only input a signal. It compares the input 	signal amplitude against 6 logical conditions, and sends a gate out of one of the 6 outputs. 

// Inputs: IN1
// Outputs: OUT1, OUT2, OUT3, OUT4, OUT5, OUT6


config.frameDivider = 1
config.bufferSize = 16

var phase = 0

function step(step){
	display('output: ' + step)
}

function process(block) {	
	// Set all samples in output buffer
	for (var i = 0; i < block.bufferSize; i++) {
		// IN1: signal input value ranges 0-10, and is thus tested against the switch case below
		let switcher = Math.floor(block.inputs[0][i])
		switch (switcher){
			// output 0
			case 0:
					step(0)
					block.outputs[0][i] = 20
					block.outputs[1][i] = 10
					block.outputs[2][i] = 0
					block.outputs[3][i] = 1 
					block.outputs[4][i] = 10
					block.outputs[5][i] = 0
			break;
			// output 1
			case 1:
			case 2:
					step(1)
					block.outputs[0][i] = 0
					block.outputs[1][i] = 10
					block.outputs[2][i] = 0
					block.outputs[3][i] = 0
					block.outputs[4][i] = 0
					block.outputs[5][i] = 0
			break;

			// output 2
			case 3:
				step(3)
				block.outputs[0][i] = 10
				block.outputs[5][i] = 10
			case 4:
					step(2)
					block.outputs[0][i] = 0
					block.outputs[1][i] = 0
					block.outputs[2][i] = 10
					block.outputs[3][i] = 0
					block.outputs[4][i] = 0
					block.outputs[5][i] = 0
			break;
			// output 3			
			case 5:
			case 6:
				step(3)
				block.outputs[0][i] = 0
				block.outputs[1][i] = 0
				block.outputs[2][i] = 0
				block.outputs[3][i] = 10
				block.outputs[4][i] = 0
				block.outputs[5][i] = 0
			break;
			// output 4
			case 7:
			case 8:
					step(4)
					block.outputs[0][i] = 0
					block.outputs[1][i] = 10
					block.outputs[2][i] = 0
					block.outputs[3][i] = 0
					block.outputs[4][i] = 10
					block.outputs[5][i] = 0
			break;
			// output 5
			case 9:
					step(5)
					block.outputs[0][i] = 0
					block.outputs[1][i] = rand(11); 
					block.outputs[2][i] = 10
					block.outputs[3][i] = 0
					block.outputs[4][i] = 0
					block.outputs[5][i] = rand(10)
			break;				
		}
	} 
	

}

function rand(n){
	return Math.floor(Math.random(n)); 
}
