import { ErrorMessage, Field } from 'formik'
import CareFormLayout from '../../../layouts/Careformlayout.js'
import { Personaldetails } from '../../../libs/Data/Careform/Personaldetails.js'

const PersonalDetails = () => {
  return (
    <CareFormLayout title="General Information">
      <div>
        {Personaldetails.map((details) => (
          <div key={details.id} className={details.length}>
            <label htmlFor={details.htmlFor}>{details.label}</label>
            <Field
              autoComplete={details.autoComplete}
              component="input"
              id={details.id}
              name={details.name}
              type={details.type}
            />
            <ErrorMessage component="div" className="text-red-500" name={details.name} />
          </div>
        ))}
      </div>
    </CareFormLayout>
  )
}

export default PersonalDetails
