import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
// import { Button } from '@material-ui/core/Button';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
// import { FormLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function Dashboard() {
    const History = useHistory()
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [body, setBody] = useState('');
    const [writer, setWriter] = useState('');
    const [images, setImages] = useState('');
    const [tags, setTags] = useState('');
    const [category, setCategory] = useState('');
    const [show, setShow] = useState(false);


    const hanleImage = (e) => {
        console.log(e.target.files[0])

        setImages(e.target.files[0])
        // setImage_Url(e.target.files[0])
    }

    const handleSubmit = async e => {

        e.preventDefault();
        let admin = JSON.parse(localStorage.getItem('admin'))

        let formdata = new FormData();
        formdata.append("title", title);
        formdata.append("caption", caption);
        formdata.append("imageUrl", images);
        formdata.append("body", body);
        formdata.append("tags", tags);
        formdata.append("writer", writer);
        formdata.append("category", category);

        axios.post('https://backend-news-app-api.herokuapp.com/api/stories',
            formdata,
            { headers: { "Authorization": `Bearer ${admin.token}` } },

        )
            .then((res) => {
                console.log('successful', res)
                setShow(true)
            })
            .catch(err => {
                console.log(err)
            });

    };
    const handleClick = async e => {
        e.preventDefault();
        localStorage.removeItem('user');
        History.push("/signIn")
        console.log('user')
    }
    return (
        <div>
            <main className="main-container">
                <div className="dash-blue-one">


                    <section className='admin-dash-logo'>
                        <img className="dash-img" style={{ width: "180px", marginLeft: "30px" }} src={process.env.PUBLIC_URL + '/Logo_Black 2.svg'} alt="..." />
                    </section>
                    <section className="admin-dash-right-panel">
                        <div className="dash-blue">
                            <Link to='dashboard' className="dash-links"> <img src={process.env.PUBLIC_URL + '/Home.png'} alt="..." />Dashboard</Link>
                            <Link to='/posts' className="dash-links"><img src={process.env.PUBLIC_URL + '/Post.png'} alt="..." />Posts</Link>
                            <Link to='pages' className="dash-links"> <img src={process.env.PUBLIC_URL + '/Pages.png'} alt="..." />Pages</Link>
                            <Link to='media' className="dash-links"> <img src={process.env.PUBLIC_URL + '/media.png'} alt="..." />Media</Link>
                            <Link to='edit' className="dash-links"> <img src={process.env.PUBLIC_URL + '/Edit  Pst.png'} alt="..." />Edit Post</Link>
                            <Link to='delete' className="dash-links"> <img src={process.env.PUBLIC_URL + '/delete.png'} alt="..." />Delete Post</Link>
                        </div>
                        <div className="dash-settings">
                            <Link to='settings' className='dash-links'><img src={process.env.PUBLIC_URL + '/Settings.png'} alt="..." />Settings</Link>
                        </div>
                    </section>
                </div>

                <div className="dash-body">
                    <div className="dash-welcome">
                        <div>
                            <h3 style={{ marginLeft: "10px" }}><strong>Welcome!</strong></h3>
                        </div>
                        {show && <div class="alert alert-success" role="alert">
                            News has been posted successfully
                        </div>}
                        <div>
                            <input type="search" className="dash-input" style={{ opacity: "35%" }} placeholder="Search" />
                            <button onClick={handleClick} style={{ width: "10px", marginRight: "35px" }} className="input-btn">X</button>
                        </div>
                    </div>
                    <div style={{ marginLeft: "-100px" }} className="dash-button">
                        <div>
                            <button> <i class="fas fa-plus"></i> &nbsp; &nbsp; Add New Post</button>
                        </div>
                        <div>
                            <button onClick={handleSubmit} style={{ marginRight: "60px" }} name="publish-botn"> <i class="far fa-calendar"></i> &nbsp; &nbsp; Publish</button>
                        </div>

                    </div>
                    <div className="dash-title">
                        <input value={title} type="text" style={{ width: "500px", height: "50px", marginLeft: "10px", marginTop: "10px" }} onChange={e => setTitle(e.target.value)} placeholder="TITLE: GOVERNOR IFEANYI OKOWA" />

                    </div>
                    <div className="dash-text-area">
                        <div>
                            <textarea value={body} style={{ width: "500px", height: "150px", allignItems: "center", marginLeft: "10px", marginTop: "10px" }} onChange={e => setBody(e.target.value)}>Type Your Story Here</textarea>
                        </div>
                        <div className="dash-flex">
                            <div className="dash-radio-buttons">
                                <FormControl component="fieldset">
                                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                                    <RadioGroup
                                        aria-label="gender"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value={category} onChange={e => setCategory(e.target.value)} control={<Radio />} label="Politics" />
                                        <FormControlLabel value={category} onChange={e => setCategory(e.target.value)} control={<Radio />} label="Sports" />
                                        <FormControlLabel value={category} onChange={e => setCategory(e.target.value)} control={<Radio />} label="Business" />
                                        <FormControlLabel value={category} onChange={e => setCategory(e.target.value)} control={<Radio />} label="Science & Tech" />
                                        <FormControlLabel value={category} onChange={e => setCategory(e.target.value)} control={<Radio />} label="Entertainment" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <bold><h6 style={{ opacity: "35%" }} >Tags</h6></bold>
                            <input onChange={e => setTags(e.target.value)}></input> <button className="dash-button-two">Add</button>
                            <bold><h6 style={{ opacity: "35%" }} >Post Date</h6></bold>
                            <input type="text" placeholder="08/10/2021  &nbsp; &nbsp; &#x1f4c5;" /> <input type="text" placeholder="18:00  &nbsp; &nbsp; &#x1f553;" />
                        </div>

                    </div>
                    <div className="dash-upload">
                        <div className="upload-div">
                            <p style={{ opacity: "35%" }} for="Uplaod Image*">Upload Image*</p>
                            <input onChange={hanleImage} className="upload" style={{ opacity: "35%" }} type="file" name="Upload" />

                        </div>
                        <div className="upload-div">
                            <p style={{ opacity: "35%" }} >Caption</p>
                            <input value={caption} className="dash-para" type="text" style={{ opacity: "35%" }} onChange={e => setCaption(e.target.value)} name='caption' />
                        </div>
                        <div className="upload-div">
                            <p style={{ opacity: "35%" }} >Writer</p>
                            <input value={writer} onChange={e => setWriter(e.target.value)} style={{ opacity: "45%",  marginLeft: '42px' }} className="dash-para" type="text"/>
                        </div>
                    </div>
                </div>


            </main>

        </div>
    )
}
