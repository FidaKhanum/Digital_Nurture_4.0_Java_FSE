import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, startDate, endDate, status } = props;

  return (
    <div className={styles.box}>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>
        <dt>Start Date:</dt>
        <dd>{startDate}</dd>
        <dt>End Date:</dt>
        <dd>{endDate}</dd>
        <dt>Status:</dt>
        <dd>
          <h3 style={{ color: status === 'ongoing' ? 'green' : 'blue' }}>{status}</h3>
        </dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
