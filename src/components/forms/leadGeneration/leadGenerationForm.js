import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import { saveLead } from './leadGeneration.service';
import styles from './leadGenerationForm.module.scss';

const LeadGenerationForm = () => {
  const [showAgeList, setShowAgeList] = useState(false);
  const [responseMsg, setResponseMsg] = useState({ msg: '', isError: false });
  const [form, setForm] = useState({
    name: '',
    childName: '',
    age: '',
    mobileNumber: '',
  });
  const ageList = ['Electricians', 'Plumber', 'RO services', 'Appliance Repair','Wiring'];
  const indianMobileRegex = /^[6-9]\d{9}$/; //withot countrycode

  const getAgeListMarkup = () => {
    return ageList.map((a, i) => {
      return (
        <div
          key={i}
          className={styles.grade}
          onClick={() => setForm({ ...form, age: a })}>
          {a}
        </div>
      );
    });
  };

  const onSubmit = async () => {
    setResponseMsg({ msg: '' });
    if (!form.name || !form.childName || !form.mobileNumber || !form.age) {
      setResponseMsg({ msg: 'Please fill all the fields.', isError: true });
      return;
    }
    if (!indianMobileRegex.test(form.mobileNumber)) {
      setResponseMsg({ msg: 'Mobile number is invalid', isError: true });
      return;
    }
    try {
      const response = await saveLead(form);
      if (response.status === 200) {
        setResponseMsg({
          msg: 'Booking confirm, we will contact you shortly.',
          isError: false,
        });
      }
    } catch (error) {
      console.error('[leadGenerationForm.js] error while saving lead', error);
      setResponseMsg({
        msg: 'Somethnig went wrong, please try again,',
        isError: true,
      });
    }
  };

  return (
    <div className={styles.leadForm}>
      <div className={styles.eachInput}>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Customer Name"
        />
      </div>
      <div className={styles.eachInput}>
        <input
          type="text"
          value={form.childName}
          onChange={(e) => setForm({ ...form, childName: e.target.value })}
          placeholder="Address"
        />
      </div>
      <div
        className={`${styles.eachInput} ${styles.inputWithOption}`}
        onClick={() => setShowAgeList(!showAgeList)}>
        <div className={styles.inputLeft}>
          <input
            disabled
            value={form.age}
            type="text"
            placeholder="Services"
          />
        </div>
        <div className={styles.drop}>
          {!showAgeList && <FaAngleDown />}
          {showAgeList && <FaAngleUp />}
        </div>
        {showAgeList && <div className={styles.down}>{getAgeListMarkup()}</div>}
      </div>
      <div className={styles.eachInput}>
        <input
          type="number"
          value={form.mobileNumber}
          onChange={(e) => setForm({ ...form, mobileNumber: e.target.value })}
          placeholder="Mobile Number"
        />
      </div>
      {responseMsg.msg && (
        <div className={responseMsg.isError ? styles.error : styles.success}>
          {responseMsg.msg}
        </div>
      )}
      <div className={styles.action}>
        <button onClick={onSubmit}>Book For Services</button>
      </div>
    </div>
  );
};

export default LeadGenerationForm;
