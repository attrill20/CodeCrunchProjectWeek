import React from 'react';
import { Link } from 'react-router-dom';

function ProgressPage() {
  return (
    <div className="ProgressPage">
      <h1>My Progress</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default ProgressPage;
