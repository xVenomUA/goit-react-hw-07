
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ConctactForm } from "./components/ContactForm/ContactForm";

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ConctactForm />
      <SearchBar />
      <ContactList/>
    </>
  );
};
