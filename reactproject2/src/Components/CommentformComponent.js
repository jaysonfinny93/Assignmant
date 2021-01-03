import React, { Component } from 'react';
import {  Nav,Button, Modal, ModalHeader, ModalBody, NavItem, FormGroup, Label,Input,Row,Col, } from 'reactstrap';
        import { Control, LocalForm, Errors, } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
    class Commentform extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isModalOpen: false
            };
           this.toggleModal = this.toggleModal.bind(this);
           this.handleSubmit=this.handleSubmit.bind(this);
        }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('current state'+JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);

       
        // event.preventDefault();
    }
      
       render(){
          return(
     <div>
         <br></br>
     <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit comment</Button>
                                </NavItem>
                            </Nav>
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                   
                    <LocalForm  onSubmit={(values) => this.handleSubmit(values)}>
                    <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating"
                                        className="form-control" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                    </FormGroup>
                     <FormGroup>
                                <Label htmlFor="yourname">Your Name</Label>
                                <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}/>
                                        <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                     </FormGroup>
                     <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model='.comment'id="comment" name="comment" rows="6"
                                        placeholder=""
                                        className="form-control"/>
                    </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                
    </div>
    );
    }
}
export default Commentform;