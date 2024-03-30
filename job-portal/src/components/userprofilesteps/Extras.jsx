import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { ShieldCloseIcon } from "lucide-react";

const Extras = ({ values, handleChange, nextStep, prevStep, save }) => {
  const [open, setOpen] = useState(false);

  const createAndDownloadPDF = () => {
    // Implement createAndDownloadPDF function here
  };

  const handleSave = (e) => {
    save();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <ShieldCloseIcon fontSize="small" />
      </Button>
    </React.Fragment>
  );

  return (
    <form className="space-y-8 mx-auto max-w-3xl ">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Skills/Languages</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Add the skills or languages you're interested in.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Skill 1"
            type="text"
            value={values.skill1}
            onChange={handleChange}
            name="skill1"
          />
          <Input
            placeholder="Skill 2"
            type="text"
            value={values.skill2}
            onChange={handleChange}
            name="skill2"
          />
          <Input
            placeholder="Skill 3"
            type="text"
            value={values.skill3}
            onChange={handleChange}
            name="skill3"
          />
          <Input
            placeholder="Skill 4"
            type="text"
            value={values.skill4}
            onChange={handleChange}
            name="skill4"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Interests</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Add your interests or hobbies.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Interest 1"
            type="text"
            value={values.interest1}
            onChange={handleChange}
            name="interest1"
          />
          <Input
            placeholder="Interest 2"
            type="text"
            value={values.interest2}
            onChange={handleChange}
            name="interest2"
          />
          <Input
            placeholder="Interest 3"
            type="text"
            value={values.interest3}
            onChange={handleChange}
            name="interest3"
          />
          <Input
            placeholder="Interest 4"
            type="text"
            value={values.interest4}
            onChange={handleChange}
            name="interest4"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
      <Button onClick={createAndDownloadPDF}>Download Resume</Button>
      <Button onClick={handleSave}>Save</Button>
    </form>
  );
};

export default Extras;
