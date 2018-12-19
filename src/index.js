import React from 'react';
import { render } from 'react-dom';
import RouteConfigs from './app.routings';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faImage, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faImage, faPencilAlt);

import './styles.scss';

render(<RouteConfigs />, document.getElementById('root'));
