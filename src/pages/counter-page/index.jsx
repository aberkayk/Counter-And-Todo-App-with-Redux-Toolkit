import React from 'react'
import { decrease, increase, setCounter } from "../../redux/counterSlice";
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';


export default function CounterPage() {
	const { counterState } = useSelector(state => state)
	const dispatch = useDispatch()

	return (
		<main>
			<h1 className={`py-3 ${counterState.counter === 0 && "text-secondary"} ${counterState.counter > 0 && "text-success"} ${counterState.counter < 0 && "text-danger"}`}>{counterState.counter}</h1>

			<div className="d-flex justify-content-center align-items-center">
				<Button onClick={event => {
					dispatch(increase())
				}} variant="success">Increase</Button>
				<Button onClick={event => {
					dispatch(setCounter(0))
				}} variant="secondary">Set to Zero</Button>
				<Button onClick={event => {
					dispatch(decrease())
				}} variant="danger">Decrease</Button>
			</div>
		</main>
	)
}
