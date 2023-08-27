import React from 'react';

import {useCameraDevices} from 'react-native-vision-camera';
import ObjectDetector from '@components/ObjectDetector';

export default function App() {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  return <ObjectDetector device={device} />;
}
