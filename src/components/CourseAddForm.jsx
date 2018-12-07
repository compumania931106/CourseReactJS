import React from 'react';

const CourseAddForm = (props) => (
    <div>
        <form onSubmit={props.onAddCourse} >
                <input type="text" placeholder="Nombre del Curso" name="name" required />
                <input type="text" placeholder="Profesor" name="teacher" required />
                <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
                <input type="submit" value="Guardar" />
            </form>
    </div>
);

export default CourseAddForm;