import React, { useEffect, useState } from 'react';
import Input from 'UI/Input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Props {
  onSearch: (value: string) => void;
  placeholder?: string;
}

const Search: React.FC<Props> = ({ placeholder, onSearch }) => {
  const [search, setSearch] = useState<string>('');

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.nativeEvent.code === 'Enter' ||
      e.nativeEvent.code === 'NumpadEnter'
    ) {
      onSearch(search);
    }
  };

  useEffect(() => {
    if (!search) {
      onSearch(search);
    }
  }, [search]);

  return (
    <Input
      placeholder={placeholder || 'Search User'}
      icon={MagnifyingGlassIcon}
      onIconClick={() => onSearch(search)}
      value={search}
      onChange={e => setSearch(e.target.value)}
      onKeyUp={handlePressEnter}
      classNames={{ inputWrapper: 'w-64 min-w-[180px] flex-1' }}
    />
  );
};

export default Search;
