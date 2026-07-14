import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewVolunteer = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-vol").then(

            (response) => {
                changeData(response.data)
            }

        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Volunteer ID</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Year of Study</th>
                                    <th scope="col">Camp Name</th>
                                    <th scope="col">Hours Completed</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Unit Number</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return (
                                                <tr>
                                                    <td>{value.volunteerId}</td>
                                                    <td>{value.fullName}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.phone}</td>
                                                    <td>{value.dateOfBirth}</td>
                                                    <td>{value.gender}</td>
                                                    <td>{value.bloodGroup}</td>
                                                    <td>{value.department}</td>
                                                    <td>{value.yearOfStudy}</td>
                                                    <td>{value.campName}</td>
                                                    <td>{value.hoursCompleted}</td>
                                                    <td>{value.address}</td>
                                                    <td>{value.unitNumber}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewVolunteer

