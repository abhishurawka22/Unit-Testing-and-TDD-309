const isUppercase = text => text === text.toUpperCase();

const SHOUTName = name => `HELLO ${name}!`;

const printName = name => `Hello, ${name}.`;

const separateNamesInCases = (separatedNames, name) => 
{
  isUppercase(name)
    ? separatedNames.uppercase.push(name)
    : separatedNames.lowercase.push(name);
  return separatedNames;
};

const splitNamesWithComma = (names, name) => 
{
  if (name[0] === '"' && name[name.length - 1]) 
  {
    const escapedName = name.substr(1, name.length - 2);
    return [...names, escapedName];
  }
  return [...names, ...name.split(", ")];
};

const handleLowercase = names => 
{
  if (names.length === 0) 
  {
    return "";
  }
  if (names.length === 1) 
  {
    return printName(names[0]);
  }
  const lastName = names.pop();
  let namesText = names.length > 1 ? names.join(", ") + "," : names[0];
  return `Hello, ${namesText} and ${lastName}.`;
};

const handleUppercase = names => 
{
  if (names.length === 0) 
  {
    return "";
  }
  if (names.length === 1) 
  {
    return SHOUTName(names[0]);
  }
  const lastName = names.pop();
  let namesText = names.join(", ");
  return `HELLO ${namesText} AND ${lastName}!`;
};

export default (name = null) => 
{
  if (name === null) 
  {
    return printName("my friend");
  }
  let names = Array.isArray(name) ? name : [name];
  let { uppercase, lowercase } = names
    .reduce(splitNamesWithComma, [])
    .reduce(separateNamesInCases, 
    {
      uppercase: [],
      lowercase: []
    });

  let lowercaseText = handleLowercase(lowercase);
  let uppercaseText = handleUppercase(uppercase);

  if (uppercaseText === "") 
  {
    return lowercaseText;
  }
  if (lowercaseText === "") 
  {
    return uppercaseText;
  }
  return `${lowercaseText} AND ${uppercaseText}`;
};
