import React, { Component } from 'react';
import CoursesList from './CoursesList';

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
    }

    render() {
        return (
            <CoursesList 
                courses={this.state.courses}
                onAddCourse={this.handleOnAddCourse}
            ></CoursesList>
        );
    }
}

App.propTypes = {}
App.defaultProps = {}

export default App;