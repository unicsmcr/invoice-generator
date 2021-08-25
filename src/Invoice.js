import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import InvoiceFile from "./InvoiceFile";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export default function Invoice() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    companyName: "",
    address1: "",
    address2: "",
    city: "",
    zip: "",
    country: "",
    eventName: "",
    tierName: "",
    value: "",
    invoiceNumber: "",
    issueDate: getCurrentDate(),
    paymentDate: getCurrentDate(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(2);
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {activeStep === 2 ? (
        <InvoiceFile {...formValues} />
      ) : (
        <>
          <CssBaseline />
          <AppBar
            position="absolute"
            color="default"
            className={classes.appBar}
          >
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                UniCS Invoice Generator
              </Typography>
            </Toolbar>
          </AppBar>
          <Box className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Generate Invoice
              </Typography>

              {activeStep === 0 ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="companyName"
                        name="companyName"
                        label="Company Name"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.companyName}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address Line 1"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.address1}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="address2"
                        name="address2"
                        label="Address Line 2"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.address2}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.city}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Postal Code"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.zip}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.country}
                      />
                    </Grid>
                  </Grid>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={() => {
                        setActiveStep(1);
                      }}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="eventName"
                        name="eventName"
                        label="Event"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.eventName}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="tierName"
                        name="tierName"
                        label="Tier"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.tierName}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="value"
                        name="value"
                        label="Value in GBP"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.value}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        required
                        id="invoiceNumber"
                        name="invoiceNumber"
                        label="Invoice Number"
                        onChange={handleChange}
                        fullWidth
                        value={formValues.invoiceNumber}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="issueDate"
                        name="issueDate"
                        label="Issue Date"
                        type="date"
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                        value={formValues.issueDate}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="paymentDate"
                        name="paymentDate"
                        label="Payment Date"
                        type="date"
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                        value={formValues.paymentDate}
                      />
                    </Grid>
                  </Grid>
                  <div className={classes.buttons}>
                    <Button
                      onClick={() => {
                        setActiveStep(0);
                      }}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={classes.button}
                    >
                      Generate PDF
                    </Button>
                  </div>
                </form>
              )}
            </Paper>
          </Box>
        </>
      )}
    </>
  );
}
