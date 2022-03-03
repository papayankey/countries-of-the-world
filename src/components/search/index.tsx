import * as React from "react";

import { Flex } from "../../shared";
import Delete from "../icons/Delete";
import Form from "./Form";
import HandLense from "../icons/HandLense";
import Input from "./Input";

interface SearchProps {
  onSearch: (text: string) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [text, setText] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    function activateSearchInput() {
      if (inputRef?.current?.focus()) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }

    window.addEventListener("keyup", activateSearchInput);
    return () => window.removeEventListener("keyup", activateSearchInput);
  }, []);

  const validateText = (text: string): boolean => {
    const pattern = /^[a-zA-z]+$/gi;
    return pattern.test(text);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateText(text)) {
      onSearch(text);
    }
    setText("");
  };

  const handleClearText = () => {
    setText("");
    inputRef?.current?.focus();
    setIsFocused(true);
  };

  return (
    <Flex
      css={{
        position: "relative",
        alignItems: "center",
        width: "100%",
        "@bp1": { width: "300px" },
        "@bp2": { width: "450px" },
      }}
    >
      <HandLense />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Search for countries e.g name, capital or region"
          value={text}
          onChange={(e) => setText(e.target.value.trim().toLowerCase())}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
        />
      </Form>
      {(isFocused || text.length > 0) && <Delete clearText={handleClearText} />}
    </Flex>
  );
};

export default Search;
