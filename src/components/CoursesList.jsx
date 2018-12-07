import React from 'react';
import Course from './Course';
import CourseAddForm from './CourseAddForm';

const CoursesList = (props) => (
    <div>
            <CourseAddForm
            onAddCourse={props.onAddCourse}
            ></CourseAddForm>

            <ul>
                {
                    props.courses.map( course => (
                        <Course 
                            key={course.id}
                            id={course.id} 
                            name={course.name} 
                            teacher={course.teacher}  >
                        </Course>
                    ))
                }
                
            </ul>
        </div>
);

export default CoursesList;