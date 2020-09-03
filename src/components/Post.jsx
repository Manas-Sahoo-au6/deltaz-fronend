import React from "react";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Axios from "axios";
import Chart from './Chart'
import TableData from './TableData'
const Api = `https://deltaz-backend.herokuapp.com`;
function Post() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [criteria, setCriteria] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [value, setValue] = React.useState(null);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange1 = (event) => {
    setCriteria(event.target.value);
  };
  console.log(name, email, value, criteria, state.checkedB);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let CreatePost = await Axios({
        url: `${Api}/post`,
        method:"POST",
        data: {
          Name: name,
          Criteria: criteria,
          Value: value,
          Everyday: state.checkedB,
          Email: email,
        },
      });
      if(CreatePost){
          alert('alert created sucessfully')
          window.location.replace('/')
      }

    } catch (err) {
      console.log("error");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-4 full border">
          <h3>Create Alert</h3>
          <form noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Name"
              className="mb-2 col-12"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="standard-basic"
              label="Email"
              className="mb-2 col-12"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="standard-basic"
              label="Value"
              className="mb-2 col-12"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </form>
          <FormControl className="mb-3 col-12">
            <InputLabel id="demo-simple-select-label">Criteria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={criteria}
              onChange={handleChange1}
            >
              <MenuItem value={"Greater"}>Greater</MenuItem>
              <MenuItem value={"Less"}>Less</MenuItem>
            </Select>
          </FormControl>
          <label htmlFor="Switch">Everyday</label>
          <Switch
            className="mb-2 col-12"
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        <div className="pl-2 col-8 full border"><Chart /></div>
        <div className=" mt-5 col-12 full border">
          <TableData />
        </div>
      </div>
    </>
  );
}

export default Post;
