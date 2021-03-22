import { SearchStyled } from './styles';
import { Input } from 'antd';
import { useState } from 'react';

const { Search } = Input;

const SearchInput = () => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = () => {
    alert(search);
  };

  return (
    <SearchStyled>
      <Search
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Search by author, title, name"
      />
    </SearchStyled>
  );
};

export default SearchInput;
