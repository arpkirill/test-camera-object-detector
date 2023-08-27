import React from 'react';

import ObjectDetector from '@screens/ObjectDetector';

if (__DEV__) {
  import('../ReactotronConfig');
}

const App = () => {
  return <ObjectDetector />;
};

export default App;
