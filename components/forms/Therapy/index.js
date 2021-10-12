import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import PersonalDetails from './PersonalDetails.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Careform = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0)
  const steps = React.Children.toArray(children)
  const [snapshot, setSnapshot] = useState(initialValues)

  const step = steps[stepNumber]
  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps - 1

  const next = (values) => {
    setSnapshot(values)
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1))
  }

  const previous = (values) => {
    setSnapshot(values)
    setStepNumber(Math.max(stepNumber - 1, 0))
  }

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag)
    }
    if (isLastStep) {
      return onSubmit(values, bag)
    } else {
      bag.setTouched({})
      next(values)
    }
  }

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <p>
            Step {stepNumber + 1} of {totalSteps}
          </p>
          {step}
          <div style={{ display: 'flex' }}>
            {stepNumber > 0 && (
              <button onClick={() => previous(formik.values)} type="button">
                Back
              </button>
            )}
            <div className="w-40">
              <button className="careform-button" disabled={formik.isSubmitting} type="submit">
                {isLastStep ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

const WizardStep = ({ children }) => children

const App = () => (
  <div>
    <Careform
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
      }}
      onSubmit={async (values) => sleep(300).then(() => console.log('Wizard submit', values))}
    >
      <WizardStep
        onSubmit={() => console.log('Step1 onSubmit')}
        validationSchema={Yup.object({
          firstName: Yup.string().required('First name is required'),
          lastName: Yup.string().required('Last name is required'),
        })}
      >
        <PersonalDetails />
      </WizardStep>
      <WizardStep
        onSubmit={() => console.log('Step2 onSubmit')}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('required'),
        })}
      >
        <div>
          <label htmlFor="email">Email</label>
          <Field
            autoComplete="email"
            component="input"
            id="email"
            name="email"
            placeholder="Email"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="email" />
        </div>
      </WizardStep>
    </Careform>
  </div>
)

export default App
