import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS} from '../../app/styles/Base.styles';

interface IComponentProps extends React.PropsWithChildren {
  footer?: React.ReactNode;
}

export function Layout(props: IComponentProps) {
  const {children, footer} = props;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.content}>{children}</ScrollView>

      {footer && <View style={styles.footer}>{footer}</View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    flex: 1,
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
});
