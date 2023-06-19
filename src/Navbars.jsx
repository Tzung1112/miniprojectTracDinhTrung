import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import "./App.css"
import { useState } from 'react';

function Navbars(props) {
    const [taskName, setTask]=useState("")
    const [list, setList]=useState("")
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    return (
        <Navbar className="bg-body-tertiary nuocmia">
            <Container>
                <Navbar.Brand href="#home">MINI PROJECT</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <InputGroup className="mb-3">
                            <InputGroup.Text><span class="material-symbols-outlined">
                                list
                            </span></InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" value={taskName} 
                            onChange={(e)=>{setTask(e.target.value)} }/>
                            <InputGroup.Text><button className='add' onClick={(event)=>{
                                event.preventDefault();
                                props.handleAddTask(
                                    {
                                        type:"add",newTask:{
                                           taskName,
                                           taskId:uuidv4()
                                        }
                                    }
                                )
                            }}> <span class="material-symbols-outlined">
                                add_circle
                            </span></button></InputGroup.Text>
                        </InputGroup>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;