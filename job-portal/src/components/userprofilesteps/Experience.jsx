import React, { Component } from "react";
// import { Button, Container, Divider } from "@material-ui/core";
// import { Paper, withStyles } from "@material-ui/core";
// import Snackbar from "@material-ui/core/Snackbar";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import MuiAlert from "@mui/material/Alert";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCloseIcon } from "lucide-react";

class Experience extends Component {
  state = {
    open: false,
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  save = (e) => {
    const promise = this.props.save();
    promise
      .then((res) => {
        if (res.status === 200) {
          this.setState((prevState) => ({
            open: true,
          }));
        }
      })
      .catch((err) => console.log(err));
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState((prevState) => ({
      open: false,
    }));
  };

  action = (
    <React.Fragment>
      <Button
        size="small"
        aria-label="close"
        color="inherit"
        onClick={this.handleClose}
      >
        <ShieldCloseIcon fontSize="small" />
      </Button>
    </React.Fragment>
  );

  render() {
    const { values, classes } = this.props;

    return (
      <section className="py-12 mx-auto max-w-3xl space-y-8 text-start dark:bg-gray-900">
        <div className="container space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Experience</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Enter the details of your experience below.
            </p>
          </div>
          <div className="space-y-8">
            {[1, 2].map((index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`experience-${index}-organization`}>
                      Experience {index}: Organization
                    </Label>
                    <Input
                      id={`experience-${index}-organization`}
                      required
                      value={values[`institute${index}`]}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`experience-${index}-position`}>
                      Experience {index}: Position
                    </Label>
                    <Input
                      id={`experience-${index}-position`}
                      required
                      value={values[`position${index}`]}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`experience-${index}-duration`}>
                      Experience {index}: Duration
                    </Label>
                    <Input
                      id={`experience-${index}-duration`}
                      required
                      value={values[`duration${index}`]}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`experience-${index}-description`}>
                    Experience {index}: Description
                  </Label>
                  <Textarea
                    id={`experience-${index}-description`}
                    placeholder="Enter a brief description of your experience."
                    required
                    value={values[`experienceDescription${index}`]}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center  ">
          <Button className="mr-20" onClick={this.back}>
            Back
          </Button>
          <Button onClick={this.continue}>Next</Button>
        </div>
      </section>
    );
  }
}

export default Experience;
