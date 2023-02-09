import FormResponse from "./FormResponse";

function Resume({
  enteredPosition,
  enteredEmployer,
  enteredStartDate,
  enteredEndDate,
  enteredExpAbout,
  enteredName,
  enteredLastName,
  enteredAbout,
  enteredMail,
  enteredNumber,
  enteredUni,
  enteredDegree,
  enteredGraduation,
  enteredUniAbout
}
) {
  return (
    <FormResponse
    enteredName={enteredName}
      enteredLastName={enteredLastName}
      enteredAbout={enteredAbout}
      enteredMail={enteredMail}
      enteredNumber={enteredNumber}

      enteredPosition={enteredPosition}
      enteredEmployer={enteredEmployer}
      enteredStartDate={enteredStartDate}
      enteredEndDate={enteredEndDate}
      enteredExpAbout={enteredExpAbout}

    enteredUni={enteredUni} 
    enteredDegree={enteredDegree}
    enteredGraduation={enteredGraduation}
    enteredUniAbout={enteredUniAbout}
    
    />
  );
}

export default Resume;