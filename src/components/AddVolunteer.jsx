import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'



const AddVolunteer = () => {

    const [input, changeInput] = useState(

        {
            volunteerId: "",
            fullName: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            gender: "",
            bloodGroup: "",
            department: "",
            yearOfStudy: "",
            campName: "",
            hoursCompleted: "",
            address: "",
            unitNumber: ""
        }

    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-vol", input).then(

            (response) => {
                console.log(response.data)
                alert("Volunteer Added Successfully")
            }

        ).catch(

            (error) => {
                console.error("Error Adding Course!", error)
                alert("Failed to Add Volunteer!")
            }

        )

    }


    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Volunteer ID : </label>
                                <input type="text" className="form-control" name="volunteerId" value={input.volunteerId} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Full Name: </label>
                                <input type="text" className="form-control" name="fullName" value={input.fullName} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email: </label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone: </label>
                                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of Birth: </label>
                                <input type="date" className="form-control" name="dateOfBirth" value={input.dateOfBirth} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender: </label>
                                <input type="text" className="form-control" name="gender" value={input.gender} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group: </label>
                                <input type="text" className="form-control" name="bloodGroup" value={input.bloodGroup} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Department: </label>
                                <input type="text" className="form-control" name="department" value={input.department} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Year of Study: </label>
                                <input type="text" className="form-control" name="yearOfStudy" value={input.yearOfStudy} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Camp Name: </label>
                                <input type="text" className="form-control" name="campName" value={input.campName} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Hours Completed: </label>
                                <input type="text" className="form-control" name="hoursCompleted" value={input.hoursCompleted} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address: </label>
                                <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Unit Number: </label>
                                <input type="text" className="form-control" name="unitNumber" value={input.unitNumber} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddVolunteer