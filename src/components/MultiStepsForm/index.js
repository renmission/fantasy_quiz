import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import FormNavigation from '../../components/FormNavigation';
import ProgressBar from '../ProgressBar';

const MultiStepsForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const steps = React.Children.toArray(children);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = values => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const prev = values => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const handleSubmit = async (values, actions) => {
    if(step.props.onSubmit) {
        await step.props.onSubmit(values);
    }

    if(isLastStep) {
        return onSubmit(values, actions)
    } else {
        actions.setTouched({});
        next(values);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        // validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form>
            {step}

            <FormNavigation
              isLastStep={isLastStep}
              hasPrevious={stepNumber > 0}
              onBackClick={() => prev(formik.values)}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepsForm;

export const FormStep = ({ children }) => children;
