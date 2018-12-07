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
    }

    render() {
        return (
            <CoursesList courses={this.state.courses}></CoursesList>
        );
    }
}

App.propTypes = {}
App.defaultProps = {}

export default App;