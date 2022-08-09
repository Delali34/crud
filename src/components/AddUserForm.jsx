import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddUserForm(props) {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [location, setLocation] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// if (name === "" || gen === "" || email === "") {
		// 	alert("Please fill all the fields");
		// }

		props.newUser({ name, number, location });

		setName("");
		setLocation("");
		setNumber("");
	};
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Phone number</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter number"
						value={number}
						onChange={(e) => {
							setNumber(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Location</Form.Label>
					<Form.Control
						type="text"
						placeholder="location"
						value={location}
						onChange={(e) => {
							setLocation(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default AddUserForm; 