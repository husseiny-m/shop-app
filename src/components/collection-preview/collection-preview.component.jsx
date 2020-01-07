import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

// TODO: all this calls cause (ie map, filter, ...) performance issue as it called at every render, we will visit this later.
const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className="collection-preview">
    <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </h1>

    <div className="preview">
      {items
        .filter((_item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
