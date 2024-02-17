import React, { useState } from 'react'
import './Form.css'
import vehicleData from './VehicleDatas';

function Form() {
  const [ownerName, setOwnerName] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [registrationYear, setRegistrationYear] = useState('');
  const [defects, setDefects] = useState([]);
  const [documents, setDocuments] = useState(null);
  let formData='';

  const handleCheckboxChange = (defect) => {
    const updatedDefects = [...defects];
    if (updatedDefects.includes(defect)) {
      updatedDefects.splice(updatedDefects.indexOf(defect), 1);
    } else {
      updatedDefects.push(defect);
    }
    setDefects(updatedDefects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here

    // console.log({
    //   ownerName,
    //   vehicleType,
    //   vehicleNumber,
    //   vehicleModel,
    //   registrationYear,
    //   defects,
    //   documents,
    // });
     formData = {
      ownerName,
      vehicleType,
      vehicleNumber,
      vehicleModel,
      registrationYear,
      defects,
      documents,
    };

    // Add the form data to the array
    vehicleData.push(formData);
    localStorage.setItem('all vehicle details',JSON.stringify(vehicleData));
    console.log(formData);

    // Reset form fields after submission if needed
    setOwnerName('');
    setVehicleType('');
    setVehicleNumber('');
    setVehicleModel('');
    setRegistrationYear('');
    setDefects([]);
    setDocuments(null);
  };

  return (
    <div className='main'>
      <div className='form'>
        <h1>Vehicle Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Owner's Name */}
          <label class="col-form-label">Owner Name:</label>
          <input
            placeholder='Name'
            type="text"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
          <br />

          {/* Vehicle Type (Car or Bike) */}
          <label class="col-form-label ">Vehicle Type:</label>
          <input
            type="radio"
            id="car"
            className='input'
            name="vehicleType"
            value="car"
            checked={vehicleType === 'car'}
            onChange={() => setVehicleType('car')}
            required
          />
          <label class="col-form-label vehicle-type">Car</label>
          <input
            type="radio"
            id="bike"
            className='input'
            name="vehicleType"
            value="bike"
            checked={vehicleType === 'bike'}
            onChange={() => setVehicleType('bike')}
            required
          />
          <label class="col-form-label vehicle-type">Bike</label>
          <br />

          {/* Vehicle Number and Model */}
          <label class="col-form-label">Vehicle Number:</label>
          <input
            placeholder='eg:KL 11 BQ 4433'
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
          <br />
          <label class="col-form-label">Vehicle Model:</label>
          <input
            placeholder='Model Number'
            type="text"
            id="vehicleModel"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            required
          />
          <br />

          {/* Registration Year */}
          <label class="col-form-label">Registration Year:</label>
          <select
            id="registrationYear"
            value={registrationYear}
            onChange={(e) => setRegistrationYear(e.target.value)}
            required
          >
            <option value="">Select Year</option>
            {[...Array(11).keys()].map((i) => (
              <option key={2015 + i} value={2015 + i}>
                {2015 + i}
              </option>
            ))}
          </select>
          <br />

          {/* Checkboxes for Defects */}
          <label class="col-form-label">Defects:</label>
          <input
            className='input'
            type="checkbox"
            id="Tyre"
            name="Defects"
            value="Tyre"
            checked={defects.includes('Tyre')}
            onChange={() => handleCheckboxChange('Tyre')}
          />
          <label className='vehicle-type' htmlFor="defect1">Tyre</label>
          <input
            className='input'
            type="checkbox"
            id="Break"
            name="defects"
            value="Break"
            checked={defects.includes('Break')}
            onChange={() => handleCheckboxChange('Break')}
          />
          <label className='vehicle-type' htmlFor="defect2">Break</label>
          <input
            className='input'
            type="checkbox"
            id="Filter"
            name="defects"
            value="Filter"
            checked={defects.includes('Filter')}
            onChange={() => handleCheckboxChange('Filter')}
          />
          <label className='vehicle-type' htmlFor="defect3">Filter</label>
          <br/> 
 
          {/* Document Upload */}
          <label class="col-form-label">Upload Photo:</label>
          <input
            type="file"
            id="documents"
            name="documents"
            accept=".pdf, .doc, .docx"
            onChange={(e) => setDocuments(e.target.files[0])}
            required
          />
          <br />

          {/* Submit Button */}
          <button type="submit" class="btn btn-primary">Submit</button>

        </form>


      </div>
      
    </div>
  )
}

export default Form
