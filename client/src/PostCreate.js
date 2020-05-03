import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', { title });

    setTitle('');
  };

  const onChange = e => setTitle(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input 
            value={title}
            name="title" 
            className="form-control"
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;