import React from 'react'

const Index = ({ alert }) => {
    return (
      alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className='fa fa-info-circle' /> {alert.msg}
        </div>
      )
    );
  };

export default Index