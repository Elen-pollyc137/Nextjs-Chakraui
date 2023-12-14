import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>New Formulario</title>
      </Head>
      <main className="flex justify-center items-center h-screen">
        <Flex
          minHeight="100vh"
          width="full"
          align="center"
          justifyContent="center"
          background="gray.900"
        >
          <Box
            px={12}
            py={12}
            width="full"
            maxWidth="450px"
            textAlign="center"
            boxShadow="lg"
            background="gray.700"
            borderRadius="6px"
          >
            <Heading>
              <Text color="gray.200" fontSize="2xl">
                Registration Form
              </Text>
            </Heading>
            <Box>
              <form action="" autoComplete="off" className="white">
                <FormControl isRequired marginTop="15px">
                  <FormLabel color="gray.200">First Name</FormLabel>
                  <Input
                    type="text"
                    name="fistName"
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    placeholder="First name"
                  />
                </FormControl>
                <FormControl isRequired marginTop="15px">
                  <FormLabel color="gray.200">Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    placeholder="Last name"
                  />
                </FormControl>
                <FormControl isRequired marginTop="15px">
                  <FormLabel color="gray.200">Your e-mail</FormLabel>
                  <Input
                    type="text"
                    name="email"
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    placeholder="Your e-mail"
                  />
                </FormControl>
                <FormControl isRequired marginTop="15px">
                  <FormLabel color="gray.200">Your Address</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    placeholder="Your address"
                  />
                </FormControl>
                <FormControl isRequired marginTop="15px">
                  <FormLabel color="gray.200">Your Phone</FormLabel>
                  <Input
                    type="text"
                    name="phone"
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    placeholder="Your phone"
                  />
                </FormControl>
                <FormControl isRequired marginTop="15px">
                  <FormLabel color="gray.200">Your decript message</FormLabel>
                  <Input
                    name="description"
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    resize="none"
                    placeholder="Your description"
                  />
                </FormControl>
                <Button
                  type="submit"
                  width="full"
                  bgColor="green.400"
                  mt={4}
                  color="gray.200"
                  _hover={{
                    color: 'black',
                  }}
                >
                  Register
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </main>
    </>
  )
}
