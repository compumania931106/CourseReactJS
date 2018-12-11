import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoursesList from './CoursesList';
import CourseAddForm from './CourseAddForm';


class App extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            courses: [
                {
                    id: 1,
                    name: 'React desde cero',
                    teacher: 'Jonathan MirCha'
                },
                {
                    id: 2,
                    name: 'Drupal 8 desde cero',
                    teacher: 'Alberto Quiroga'
                }
            ]
        }

        this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
    }

    handleOnAddCourse(e) {
        // alert('Evento en React');
        e.preventDefault();


        let form = e.target;
        let course = {
            id: form.id.value,
            name: form.name.value,
            teacher: form.teacher.value
        }

        this.setState({
            courses: this.state.courses.concat([course])
        })
        form.reset();
    }

    render() {
        return (
            <div>
                <CourseAddForm
                    onAddCourse={this.handleOnAddCourse}
                ></CourseAddForm>

                <CoursesList
                    courses={this.state.courses}
                    onAddCourse={this.handleOnAddCourse}
                ></CoursesList>
            </div>

        );
    }
}

App.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired
  }
App.defaultProps = {
    id: '',
    name: 'Curso Desconocido',
    teacher: 'Profesor no asignado'
}

export default App;