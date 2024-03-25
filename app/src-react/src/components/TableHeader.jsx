// TableHeader.js
import React from 'react';
import './TableHeader.css';

const TableHeader = () => {
  return (
    <div>
      <div className="table-header-box">
        <div className="table-header">
          <div className="id">ID</div>
          <div className="image">IMAGE</div>
          <div className="tableName">NAME</div>
          <div className="status">STATUS</div>
          <div className="show">SHOW</div>
          <div className="published">PUBLISHED</div>
          <div className="delete">DELETE</div>
          <div className="edit">EDIT</div>
        </div>
      </div>
      <div className="table-description">
        <p>Table with the list of campaigns created by the client, where you can see the status of the campaign and search by date range.</p>
        <p>(an example will be shown in the next design version)</p>
      </div>
    </div>
  );
}

export default TableHeader;