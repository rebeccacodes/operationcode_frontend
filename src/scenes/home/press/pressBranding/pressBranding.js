import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pressBranding.css';

function PressBranding() {
  return (
    <div className={styles.logos}>
      <Link to="/branding">View Our Branding</Link>
    </div>
  );
}

export default PressBranding;
