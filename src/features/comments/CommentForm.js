import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const CommentForm = ({campsiteId}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button outline onClick = {() => setModalOpen(true)} >
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            rating: undefined,
                            author: '',
                            commentText: ''
                        }}
                        onSubmit={handleSubmit()}
                    >
                        <Form>
                            <FormGroup>
                                <Label>Rating</Label>
                                <Field />

                            </FormGroup>
                            <FormGroup>
                                <Label>Your Name</Label>
                                <Field />
                            </FormGroup>
                            <FormGroup>
                                <Label>Comment</Label>
                                <Field />
                            </FormGroup>

                        </Form>
                        
                    </Formik>
                    campsite: {campsiteId}
                </ModalBody>
            </Modal>
        </>
    )
};

export default CommentForm;