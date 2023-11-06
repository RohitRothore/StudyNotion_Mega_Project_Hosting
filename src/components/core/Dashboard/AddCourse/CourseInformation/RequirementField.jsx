import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RequirementField = ({
  name,
  label,
  register,
  errors,
  setValue,
  getValues,
}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);
  const { editCourse, course } = useSelector((state) => state.course)


  useEffect(() =>{
    if (editCourse) {
      setRequirementList(course?.instructions)
    }
    register(name, {
        required:true,
        validate: (value) => value.length > 0
    })
  }, [])

  useEffect(() =>{
    setValue(name, requirementList)
  }, [requirementList])

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementList([...requirementList, requirement]);
      setRequirement("");
    }
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirementList = [...requirementList];
    updatedRequirementList.splice(index, 1);
    setRequirementList(updatedRequirementList);
  };
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      <div className="flex flex-col items-start space-y-2">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="w-full form-style"
        />

        <button
          type="button"
          className="font-semibold text-yellow-50"
          onClick={handleAddRequirement}
        >
          Add
        </button>
      </div>
      {requirementList.length > 0 && (
        <ul  className="mt-2 list-inside list-disc">
          {requirementList.map((requirement, index) => (
            <li key={index} className="flex items-center text-richblack-5">
              <span>{requirement}</span>
              <button
                type="button"
                onClick={() =>handleRemoveRequirement(index)}
                className=" ml-2 text-xs text-pure-greys-300"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
      {
        errors[name] &&(
            <span className="ml-2 text-xs tracking-wide text-pink-200">
                {label} is Required
            </span>
        )
      }
    </div>
  );
};

export default RequirementField;
