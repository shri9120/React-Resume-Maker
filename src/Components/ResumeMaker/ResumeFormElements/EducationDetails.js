import React, { Component } from 'react'
import { Form, FormGroup, Label, Input,  FormText, Button } from 'reactstrap';

class EducationDetailsForm extends Component {

    toNextStep = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    toPrevStep = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">

                <div className="card-body">
                    <h3 className="card-title">Education Details</h3>
                    <hr />
                </div>
                <div className="container">
                    <Form>
                        <FormGroup>
                            <Label htmlFor="edu_institute_name_1">Institute Name</Label>
                            <Input 
                                type = "text" 
                                id = "edu_institute_name_1"
                                name = "edu_institute_name_1"
                                autoFocus = "on"
                                autoComplete = "off"
                                aria-describedby = "edu_institute_name_1-text"
                                value = {values.isSubmitted ? '' : values.edu_institute_name_1}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="edu_institute_name_1-text">Enter Your Institute Name</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="edu_course_name_1">Course</Label>
                            <Input 
                                type = "text" 
                                id = "edu_course_name_1"
                                name = "edu_course_name_1"
                                autoComplete = "off"
                                aria-describedby = "edu_course_name_1-text"
                                value = {values.isSubmitted ? '' : values.edu_course_name_1}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="edu_course_name_1-text">Enter Course Name</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="edu_course_year_1">Year</Label>
                            <Input 
                                type = "date" 
                                id = "edu_course_year_1"
                                name = "edu_course_year_1"
                                autoComplete = "off"
                                aria-describedby = "edu_course_year_1-text"
                                value = {values.isSubmitted ? '' : values.edu_course_year_1}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="edu_course_year_1-text">Enter Year of Completion</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="edu_course_score_1">Marks</Label>
                            <Input 
                                type = "text" 
                                id = "edu_course_score_1"
                                name = "edu_course_score_1"
                                autoComplete = "off"
                                aria-describedby = "edu_course_score_1-text"
                                value = {values.isSubmitted ? '' : values.edu_course_score_1}
                                onChange = {(e)=>handleChange(e)}
                            />
                            <FormText id="edu_course_year_1-text">Enter Score Like ( Obtained Marks / Total Marks  )</FormText>
                        </FormGroup>
                    </Form>
                </div>
                <div className="row text-center">
                    <div className="col-6 col-md-4">
                        <Button outline color="primary" onClick={(e)=>this.toPrevStep(e)} size="lg" block><i className="fa fa-chevron-circle-left"></i> Back</Button>
                    </div>
                    <div className="col-6 col-md-4 offset-md-4">
                        <Button outline color="danger" onClick={(e)=>this.toNextStep(e)} size="lg" block>Next <i className="fa fa-chevron-circle-right"></i></Button>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default EducationDetailsForm;