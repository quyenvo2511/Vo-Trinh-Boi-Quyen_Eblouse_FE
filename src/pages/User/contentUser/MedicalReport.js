import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SaveIcon from "@material-ui/icons/Save";

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

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleJobChange = (e) => {
    setJob(e.target.value);
  };
  const handlePassportChange = (e) => {
    setPassportNum(e.target.value);
  };

  return (
    <div style={{ marginLeft: "10vw" }}>
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
            style={{ marginBottom: "10px" }}
          >
            Save
          </Button>
        </div>
      </form>{" "}
    </div>
  );
};

export default MedicalReport;
