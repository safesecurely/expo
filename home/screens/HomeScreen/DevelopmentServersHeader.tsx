import { spacing } from '@expo/styleguide-native';
import { Button, Heading, Row, TerminalIcon, View, Text } from 'expo-dev-client-components';
import * as React from 'react';

type DevelopmentServersHeaderProps = {
  onHelpPress: () => void;
};

export function DevelopmentServersHeader({ onHelpPress }: DevelopmentServersHeaderProps) {
  return (
    <Row px="small" py="small" align="center" justify="between">
      <Row align="center">
        <View style={{ marginRight: spacing[2] }}>
          <TerminalIcon />
        </View>
        <Heading
          color="secondary"
          size="small"
          style={{ marginRight: spacing[2] }}
          type="InterSemiBold">
          Development servers
        </Heading>
      </Row>
      <Button.Container onPress={onHelpPress}>
        <Text
          type="InterSemiBold"
          color="secondary"
          style={{
            fontSize: 11,
            letterSpacing: 0.92,
          }}>
          HELP
        </Text>
      </Button.Container>
    </Row>
  );
}
