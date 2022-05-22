import _ from 'lodash';
import registerResolver from './auth.js';

const resolvers = _.merge(registerResolver);
export { resolvers };
