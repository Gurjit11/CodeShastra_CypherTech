import React, { Component } from "react";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

class Projects extends Component {
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

  render() {
    const { values, classes } = this.props;

    return (
      <div className="py-12 text-start dark:bg-gray-900 mx-auto max-w-3xl space-y-8">
        <div className="container space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Register Your Project</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Enter the details of your project below.
            </p>
          </div>
          <div className="space-y-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`project-${index}-title`}>
                      {`Project ${index} Title`}
                    </Label>
                    <Input
                      id={`project-${index}-title`}
                      required
                      value={values[`title${index}`]}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`project-${index}-link`}>
                      {`Project ${index} Link`}
                    </Label>
                    <Input
                      id={`project-${index}-link`}
                      placeholder="https://"
                      required
                      type="url"
                      value={values[`link${index}`]}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`project-${index}-description`}>
                    {`Project ${index} Description`}
                  </Label>
                  <Textarea
                    id={`project-${index}-description`}
                    placeholder="Enter a brief description of your project."
                    required
                    value={values[`projectDescription${index}`]}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-center flex">
          <Button className="mr-20" onClick={this.back}>
            Back
          </Button>
          <Button onClick={this.continue}>Next</Button>
        </div>
        {/* <Button onClick={this.save}>Save</Button> */}
      </div>
    );
  }
}

export default Projects;
