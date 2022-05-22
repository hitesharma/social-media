import _ from 'lodash';
import registerResolver from './register.js';

const resolvers = _.merge(registerResolver);
export { resolvers };
