import React from 'react';

import LeadGenerationForm from '../../components/forms/leadGeneration/leadGenerationForm';
import styles from './leadGeneration.module.scss';

const LeadGenerationScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Book For Services</div>
      <div className={styles.formWrapper}>
        <LeadGenerationForm />
      </div>
    </div>
  );
};

export default LeadGenerationScreen;
