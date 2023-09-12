import React from 'react';
import {Layout} from '../../common/components/Layout';
import {Button} from '../../common/components/Button';
import {Text} from '../../common/components/Text';
import {ERoutes, RootStackParams} from '../../common/models/Router.models';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, ERoutes.Root>;

export function RootPage({navigation}: Props) {
  return (
    <Layout
      footer={
        <Button
          title={'Open diary'}
          onPress={() => {
            navigation.push(ERoutes.Diary);
          }}
        />
      }>
      <Text>**You found weird old diary**</Text>
    </Layout>
  );
}
