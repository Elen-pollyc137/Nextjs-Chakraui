import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useState, FormEvent, FunctionComponent } from 'react'

interface IHomePops {
  fistName: string
  lastName: string
  email: string
  phone: string
  descrition: string
}

const Home: FunctionComponent<IHomePops> = () => {
  const [fistName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const data = {
      fistName,
      lastName,
      email,
      address,
      phone,
      description,
    }
    console.log(data)
  }

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
              <Box autoComplete="off" onSubmit={handleSubmit} as="form">
                <Flex justify="space-between">
                  <FormControl isRequired marginTop="15px" width="49%">
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
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired marginTop="15px" width="49%">
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
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Flex>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <Flex justify="space-between">
                  <FormControl isRequired marginTop="15px" width="60%">
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
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired marginTop="15px" width="39%">
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
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <FormControl marginTop="15px">
                  <FormLabel color="gray.200">Your description</FormLabel>
                  <Textarea
                    name="description"
                    border="none"
                    outline="none"
                    bgColor="gray.900"
                    focusBorderColor="gray.600"
                    color="gray.200"
                    resize="none"
                    placeholder="Your description"
                    onChange={(e) => setDescription(e.target.value)}
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
              </Box>
            </Box>
          </Box>
        </Flex>
      </main>
    </>
  )
}
export default Home
