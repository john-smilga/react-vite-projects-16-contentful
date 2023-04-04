```js
const contentful = require('contentful');

const client = contentful.createClient({
  space: 'qz00uzgg3leh',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'your token',
});

client
  .getEntries()
  .then((response) => console.log(response.items))
  .catch(console.error);
```
