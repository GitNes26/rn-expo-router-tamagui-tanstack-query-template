import { Link, Stack } from 'expo-router';

import { YStack } from 'tamagui';
import { Container, Main, Subtitle, Title } from '../tamagui.config';

export default function NotFoundScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Main>
        <YStack>
          <Title>{'Esta página no existe.'}</Title>
          <Link href="/">
            <Subtitle>Ir a página principal!</Subtitle>
          </Link>
        </YStack>
      </Main>
    </Container>
  );
}
