import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
// import Notification from '../notification/Notification';
import schoolImgPreview from '../../images/previewImage/schoolPreview.png'
import Error from '../errorPage/Error';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LoadingPage from '../loader/LoadingPage'

const url = 'https://hammerhead-app-iohau.ondigitalocean.app/';
const endPoint = 'school/insert';




const userId = localStorage.getItem('userId');

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schName: '',
            schAddress: '',
            contactNo: '',
            emailId: '',
            schType: '',
            board: '',
            type: '',
            coType: '',
            medium: '',
            eligibility: '',
            subject: '',
            school_description: '',
            thought: '',
            contactName: '',
            contactNumber: '',
            rmId: '',
            isLoading: false,

            schoolDp: '',
            dpPreview: schoolImgPreview,

            stream: '',

            noitficationMsg: '',
            noitficationColor: '',

            isData: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleSelect = this.handleSelect.bind(this)
        this.handleUploadImg = this.handleUploadImg.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleResetAllValue = this.handleResetAllValue.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.state.schoolDp === '')
            this.setState({ schoolDp: schoolImgPreview });

    }

    handleResetAllValue() {
        this.setState({
            schName: '',
            schAddress: '',
            contactNo: 91,
            emailId: '',
            schType: '',
            board: '',
            type: '',
            coType: '',
            medium: '',
            eligibility: '',
            subject: '',
            school_description: '',
            thought: '',
            contactName: '',
            contactNumber: 91,
            rmId: '',
            temp: 'This is temp variable',

            schoolDp: '',
            dpPreview: '',
            stream: ''

            // subjects: [''],
        })
    }



    handleSubmit(e) {
        this.setState({ isLoading: true })
        e.preventDefault();
        let { schName, schAddress, contactNo, emailId, schType, board, type, coType, medium, eligibility, subject, contactName, contactNumber, rmId, thought, school_description, stream } = this.state;

        // let empty = Boolean(schName) && Boolean(schAddress) && Boolean(contactNo) && Boolean(emailId) && Boolean(schType) && Boolean(type) && Boolean(medium) && Boolean(eligibility) && Boolean(subjects) && Boolean(contactNumber) && Boolean(rmId) && Boolean(thought) && Boolean(school_description);

        // console.log(empty)
        // this.setState({isData :!empty})

        axios.post(`${url}${endPoint}`, {
            name: schName,
            address: schAddress,
            officialNumber: contactNo,
            officialEmail: emailId,
            school_type: schType,
            classes: 12,
            board: board,
            type: type,
            subjects: subject,
            medium: medium,
            eligibility: eligibility,
            principleThought: thought,
            schoolDescription: school_description,
            contactInfo: {
                name: contactName,
                number: contactNumber,
                rmId: rmId,
            },
            stream: stream
        })
            .then(res => {
                console.log(res.data.data._id)
                const imgfile = this.state.schoolDp;

                let formData = new FormData();
                formData.append('image', imgfile)
                formData.append('who_upload', res.data.data._id)

                axios.post(`${url}school/dp`, formData)
                    .then(res => {
                        this.handleResetAllValue();
                        alert('New School-Data added Successfully')
                        this.setState({ isLoading: false })
                        // this.setState({ noitficationMsg: 'New School Added', noitficationColor: 'alert alert-success' })
                    })
                    .catch(res => {
                        console.log(res)
                        alert("Please Upload Img again ")
                    })


            })
            .catch(res => {
                // console.log(res)
                // this.setState({ noitficationMsg: 'Please Enter the correct Details', noitficationColor: 'alert alert-danger' })
                console.log(res)
            })
    }

    handleUploadImg(e) {
        let file = e.target.files[0];

        if (file instanceof Blob) {
            let reader = new FileReader();

            reader.onload = () => {
                this.setState({
                    dpPreview: reader.result, 
                    schoolDp: file
                })
            }

            reader.readAsDataURL(file);
        }
    }

    // handleImgFile(e) {
    //    const imgfile = this.state.schoolDp;

    //    let formData = new FormData();
    //    formData.append('image',)

    //    axios.post('http://34.29.141.94/school/dp',)
    // }


    render() {
        const { isLoading, schName, schAddress, contactNo, emailId, schType, board, type, coType,
            medium, eligibility, school_description, contactName, contactNumber, rmId, thought,
            noitficationMsg, noitficationColor, dpPreview, subject, stream } = this.state;
        return (
            <>

                {userId ?
                    (!isLoading) ? <div className="register-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="bg-white shadow-sm p-4">
                                        <h4 className="reg-heading"><b>School Information</b></h4>
                                        <p className="borderline"></p>
                                        <li>* All Fields are required</li>
                                        <br />

                                        <input type="file" onChange={this.handleUploadImg} className='mb-3' />

                                        <ImagePreviewCard img={dpPreview} />

                                        {/* <Button variant='contained' color='secondary' onClick={() => this.handleImgFile()}>Upload</Button> */}

                                        <form onSubmit={this.handleSubmit}>
                                            <TextField fullWidth id="school-name" label="School Name" variant="standard" margin="normal" className="label-font" onChange={(e) => this.setState({ schName: e.target.value })} value={schName} required />
                                            <TextField fullWidth id="school-address" label="Address Of The School" variant="standard" margin="normal" onChange={(e) => this.setState({ schAddress: e.target.value })} value={schAddress} required />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <TextField fullWidth id="school-contact" label="Official Contact Number" type='text' variant="standard" margin="normal" onChange={(e) => this.setState({ contactNo: e.target.value })} value={contactNo} required />
                                                </div>
                                                <div className="col-md-6">
                                                    <TextField fullWidth id="school-emailId" label="Official Email Id" variant="standard" margin="normal" onChange={(e) => this.setState({ emailId: e.target.value })} value={emailId} required />
                                                </div>
                                                <div className="col-md-6">
                                                    <FormControl variant="standard" fullWidth margin="normal" required>
                                                        <InputLabel id="school-type">School Type</InputLabel>
                                                        <Select
                                                            labelId="school-type"
                                                            id="select-school-type"
                                                            onChange={(e) => this.setState({ schType: e.target.value })}
                                                            value={schType}

                                                        >
                                                            <MenuItem value="Govt.">Govt.</MenuItem>
                                                            <MenuItem value="Private">Private</MenuItem>
                                                            <MenuItem value="Semi-Govt.">Semi-Govt.</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="col-md-6">
                                                    <TextField fullWidth label="Board" type='text' variant="standard" margin="normal" onChange={(e) => this.setState({ board: e.target.value })} value={board} required />
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <FormControl variant="standard" fullWidth margin="normal">
                                                        <InputLabel id="school-board">Board</InputLabel>
                                                        <Select
                                                            labelId="school-board"
                                                            id="select-school-board"
                                                            onChange={(e) => this.setState({ board: e.target.value })}
                                                            value={board}
                                                            required
                                                        >
                                                            <MenuItem value="CBSE">CBSE</MenuItem>
                                                            <MenuItem value="BSER">BSER</MenuItem>
                                                            <MenuItem value="CISCE">CISCE</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div> */}
                                                <div className="col-md-6">
                                                    <FormControl variant="standard" fullWidth margin="normal" required>
                                                        <InputLabel id="bg-co-type">Type</InputLabel>
                                                        <Select
                                                            labelId="type"
                                                            id="select-bg-co-type"
                                                            onChange={(e) => this.setState({ type: e.target.value })}
                                                            value={type}
                                                            required
                                                        >
                                                            <MenuItem value="Boys">Boys</MenuItem>
                                                            <MenuItem value="Girls">Girls</MenuItem>
                                                            <MenuItem value="Co-Ed">Co-Ed</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="col-md-6">
                                                    <FormControl variant="standard" fullWidth margin="normal" required>
                                                        <InputLabel id="school-medium">Medium</InputLabel>
                                                        <Select
                                                            labelId="school-medium"
                                                            id="select-school-medium"
                                                            onChange={(e) => this.setState({ medium: e.target.value })}
                                                            value={medium}
                                                            required
                                                        >
                                                            <MenuItem value="English" >English</MenuItem>
                                                            <MenuItem value="Hindi">Hindi</MenuItem>
                                                            <MenuItem value="English and Hindi">Both (English and Hindi)</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="col-md-6">
                                                    <TextField fullWidth id="classes" label="Enter Classes Details" variant="standard" margin="normal" onChange={(e) => this.setState({ eligibility: e.target.value })} value={eligibility} required />
                                                </div>
                                                <div className="col-md-6">
                                                    <TextField fullWidth id="Stream" label="Enter Stream " variant="standard" margin="normal" onChange={(e) => this.setState({ stream: e.target.value })} value={stream} />
                                                </div>

                                                {/* <ToDoList /> */}

                                                {/* <Tags
                                                    handleSelect1={this.handleSelect}
                                                /> */}

                                            </div>
                                            <TextField fullWidth id='subjects' label="Enter Multiple Subjects" variant="outlined" margin="normal" multiline
                                                rows={4}
                                                onChange={(e) => this.setState({ subject: e.target.value })}
                                                value={subject}
                                                required
                                            />
                                            <TextField fullWidth id="description" label="School Description" variant="outlined" margin="normal" multiline
                                                rows={5}
                                                onChange={(e) => this.setState({ school_description: e.target.value })}
                                                value={school_description}
                                                required
                                            />
                                            <TextField fullWidth id="thought" label="Principle Thought" variant="outlined" margin="normal" multiline
                                                rows={5}
                                                onChange={(e) => this.setState({ thought: e.target.value })}
                                                value={thought}
                                                required
                                            />


                                            <h4 className="reg-heading mt-4"><b>Contact Information</b></h4>
                                            <p className="borderline"></p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <TextField fullWidth id="contact-name" label="Name" variant="standard" margin="normal" className="label-font" value={contactName} onChange={(e) => {
                                                        this.setState({ contactName: e.target.value })
                                                    }} required />
                                                </div>

                                                <div className="col-md-6">
                                                    <TextField fullWidth id="contact-number" label="Mobile Number" type='number' variant="standard" margin="normal" className="label-font" value={contactNumber} onChange={(e) => {
                                                        this.setState({ contactNumber: e.target.value })
                                                    }} required />
                                                </div>
                                                <div className="col-md-6">
                                                    <FormControl variant="standard" fullWidth margin="normal" required>
                                                        <InputLabel id="rm-id">R.M ID</InputLabel>
                                                        <Select
                                                            labelId="rm-id"
                                                            id="select-rm-id"
                                                            value={rmId} onChange={(e) => {
                                                                this.setState({ rmId: e.target.value })
                                                            }}
                                                            required
                                                        >
                                                            <MenuItem value="578904">578904</MenuItem>
                                                            <MenuItem value="578905">578905</MenuItem>
                                                            <MenuItem value="578906">578906</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <Button variant="contained" className="submit-btn" type='submit'>
                                                Submit
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        : <LoadingPage msg='Submitting' />
                    : <Error
                        statusCode='404'
                        fText='Page Not Found'
                        lText='Try Again'
                    />
                }
            </>
        )
    }
}



// function Tags(props) {

//     const { handleSelect1 } = props;

//     function handleSelect(event, value) {

//         handleSelect1(value)
//     }


//     return (
//         <>
//             <Stack spacing={3} sx={{ width: 500 }} className='stackInfo'>
//                 <Autocomplete
//                     multiple
//                     id="tags-filled"
//                     options={subjectCollection.map((option) => option)}

//                     freeSolo
//                     onChange={handleSelect}
//                     renderTags={(value, getTagProps) =>
//                         value.map((option, index) => (
//                             <Chip variant="outlined" label={option} {...getTagProps({ index })} />
//                         ))
//                     }
//                     renderInput={(params) => (
//                         <TextField
//                             {...params}
//                             variant="filled"
//                             label="Select Subjects"
//                             placeholder="Subjects"
//                         />
//                     )}
//                 />
//             </Stack>
//         </>
//     );
// }

// Top 100 films as rated by IMDb users. 

// const subjectCollection = [
//     "English",
//     "Regional Language(s)",
//     "Maths",
//     "Science",
//     "Social Sciences",
//     "Physical Education",
//     "Computer Basics",
//     "Arts (Drawing)"
// ];


class ImagePreviewCard extends React.Component {
    render() {

        return (
            <>
                <Card sx={{ maxWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={this.props.img}
                            alt="green iguana"
                        />

                    </CardActionArea>
                </Card>
            </>
        )
    }
}