import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="2xl">
          Todo App
        </Heading>
        <Flex width="100%" gap={2}>
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </Flex>
        <Box width="100%">
          <List spacing={3}>
            {todos.map((todo, index) => (
              <ListItem
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="gray.100"
                p={2}
                borderRadius="md"
              >
                <Checkbox
                  isChecked={todo.completed}
                  onChange={() => toggleTodo(index)}
                >
                  <Text as={todo.completed ? "s" : undefined} ml={2}>
                    {todo.text}
                  </Text>
                </Checkbox>
                <IconButton
                  aria-label="Delete todo"
                  icon={<FaTrash />}
                  size="sm"
                  colorScheme="red"
                  onClick={() => deleteTodo(index)}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;