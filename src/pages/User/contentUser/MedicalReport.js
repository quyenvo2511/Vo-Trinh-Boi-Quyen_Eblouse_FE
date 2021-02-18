import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SaveIcon from "@material-ui/icons/Save";
import { Table } from "react-bootstrap";
import clinicsReducer from "../../../redux/reducers/clinics.reducers";
import bookingsActions from "../../../redux/actions/bookings.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Other",
    label: "Other",
  },
];
const blood = [
  {
    value: "A Rh+",
    label: "A Rh+",
  },
  {
    value: "B Rh+",
    label: "B Rh+",
  },
  {
    value: "O Rh+",
    label: "O Rh+",
  },
  {
    value: "AB Rh+",
    label: "AB Rh+",
  },
  {
    value: "A Rh-",
    label: "A Rh-",
  },
  {
    value: "B Rh+",
    label: "B Rh+",
  },
  {
    value: "O Rh-",
    label: "O Rh+",
  },
  {
    value: "AB Rh-",
    label: "AB Rh-",
  },
];

const BookingListTable = ({ booking }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Clinic Name</th>
            <th>Specialization</th>
            <th>Booking date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>

            <td>{booking.clinic._id}</td>

            <td>{booking.clinic.name}</td>
            <td>@mdo</td>
            <td>pending</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
const MedicalReport = ({
  bookings,

  name,
  setName,
  gender,
  setGender,
  passportNum,
  setPassportNum,
  job,
  setJob,
  handleSubmitMedical,
}) => {
  const classes = useStyles();

  const [genderLocal, setGenderLocal] = useState("blood");

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleNameChange = (e, newName) => {
    setName(e.target.value);
  };
  const handleJobChange = (e) => {
    setJob(e.target.value);
  };
  const handlePassportChange = (e) => {
    setPassportNum(e.target.value);
  };

  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitMedical}
      >
        <div>
          <TextField
            id="standard-full-width"
            label="Full Name"
            style={{ margin: 8 }}
            placeholder={name}
            helperText="Please fill your full name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            id="standard-select-genders"
            select
            label="Your gender"
            value={gender}
            onChange={handleChangeGender}
            helperText="Please select your genders"
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="standard-full-width"
            label="Job"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            value={job}
            onChange={handleJobChange}
            helperText="Please fill your current job"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="standard-required"
            label="ID card/Passport Number"
            defaultValue="Eg: 25XXXX"
            value={passportNum}
            onChange={handlePassportChange}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </form>{" "}
      {bookings.map((booking) => (
        <BookingListTable booking={booking} key={booking._id} />
      ))}
    </>
  );
};

export default MedicalReport;
