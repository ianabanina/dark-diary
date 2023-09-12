import React from 'react';
import {Layout} from '../../common/components/Layout';
import {Button} from '../../common/components/Button';
import {Text} from '../../common/components/Text';

function App() {
  return (
    <Layout footer={<Button title={'Open diary'} />}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquam consequatur culpa doloremque ducimus et, id illum ipsa itaque
        nisi nostrum omnis recusandae rerum vitae voluptatem. Autem omnis quae
        voluptatum.
      </Text>
    </Layout>
  );
}

export default App;
