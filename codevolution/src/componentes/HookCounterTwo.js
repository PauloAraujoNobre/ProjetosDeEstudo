import React, { useState } from 'react';

function HookCounterTwo () {
	
	const inicialCouint = 0
	const [count, setCount] = useState(inicialCouint)

	const incrimentFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1)
		} 
	}

	return (
		<div>
			Count: {count}
			<button onClick={() => setCount(inicialCouint)}>Reset</button>
			<button onClick={() => setCount(newCount => newCount + 1)}>Increment</button>
			<button onClick={() => setCount(newCount => newCount - 1)}>Decrement</button>

			<button onClick={incrimentFive}>Increment 5</button>
		</div>
	)
}

export default HookCounterTwo