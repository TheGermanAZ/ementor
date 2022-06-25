import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Text, Space, Container } from "@mantine/core";
import { SP } from "next/dist/shared/lib/utils";

const Welcome = () => {
  const { data: session } = useSession();

  const logindata = session ? (
    <>
      <Space h="lg" />
      <Text>Signed in as {session.user?.name}</Text>
      <Space h="xs" />
      <Button onClick={() => signOut()}>Sign Out</Button>
    </>
  ) : (
    <>
      <Space h="lg" />
      <Text>Not Signed In</Text>
      <Space h="xs" />
      <Button onClick={() => signIn()}> Sign in</Button>
    </>
  );
  return (
    <Container size="lg" px="xs">
      <Text>welcome</Text>
      <Space h="xs" />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac leo
        at nibh accumsan lacinia et eu arcu. Vestibulum bibendum purus mi, sit
        amet luctus ipsum sodales non. Duis a efficitur magna. Ut quis venenatis
        enim. Integer sagittis, augue eu elementum ultricies, elit justo
        facilisis neque, id accumsan orci leo hendrerit elit. Nulla ornare quam
        nec sapien luctus, ac hendrerit erat maximus. Vivamus fermentum, ipsum
        non suscipit elementum, ex nibh convallis nulla, et porttitor nisi dolor
        ut justo. Curabitur tempus velit nec elit rutrum, sit amet vehicula ante
        commodo. Sed blandit elit nec neque mattis, et scelerisque felis
        commodo. Quisque placerat lorem eu hendrerit elementum. Quisque posuere
        risus mauris, rutrum lacinia mauris eleifend sed.
      </Text>
      {logindata}
    </Container>
  );
};

export default Welcome;
