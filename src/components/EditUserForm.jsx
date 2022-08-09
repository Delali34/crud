import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EditUserForm(props) {
	const [name, setName] = useState(props.userBio.name);
	const [number, setGen] = useState(props.userBio.number);
	const [location, setEmail] = useState(props.userBio.location);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.editUser(props.userBio.id, { name, number, location });

		setName("");
		setGen("");
		setEmail("");
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
						type="email"
						placeholder="Enter number"
						value={number}
						onChange={(e) => {
							setEmail(e.target.value);
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
							setGen(e.target.value);
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

export default EditUserForm;