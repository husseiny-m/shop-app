import React from 'react';

import './collection-preview.styles.scss';

// TODO: all this calls cause (ie map, filter, ...) performance issue as it called at every render, we will visit this later.
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items
        .filter((_item, index) => index < 4)
        .map((item) => (
          <div key={item.id}> {item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
