import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddPhoto = () => {
    const [data,setData] = useState(
        {
            "photoid":"",
            "photoname":"",
            "photodate":"",
            "category":"",
            "description":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
    }
    return (
        <div>
            <NavigationBar/>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">PHOTO ID</label>
                                <input type="text" className="form-control" name="photoid" value={data.photoid} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">PHOTO NAME</label>
                                <input type="text" className="form-control" name='photoname' value={data.photoname} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">PHOTO DATE</label>
                                <input type="date" id="" className="form-control" name="photodate" value={data.photodate} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">CATEGORY</label>
                                <select id="" className="form-control" name="category" value={data.category} onChange={inputHandler}>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Baby Shower">Baby Shower</option>
                                    <option value="Fest">Fest</option>
                                    <option value="Baptism">Baptism</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">DESCRIPTION</label>
                                <textarea id="" className="form-control" name="description" value={data.description} onChange={inputHandler}></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={readValue}>ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPhoto