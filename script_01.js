const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  
  // 1. Sors une array qui ne contient que le prénom et le nom des entrepreneurs
  const fullNames = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
  console.log("Prénoms et noms:", fullNames);
  
  // 2. Remplacer la date de naissance par l'âge actuel des entrepreneurs
  const currentYear = new Date().getFullYear();
  const entrepreneursWithAge = entrepreneurs.map(entrepreneur => {
    return {
      first: entrepreneur.first,
      last: entrepreneur.last,
      age: currentYear - entrepreneur.year
    };
  });
  console.log("Entrepreneurs avec leur âge actuel:", entrepreneursWithAge);
  
  // 3. Remplacer les clés `first` et `last` par `firstName` et `lastName`
  const updatedEntrepreneurs = entrepreneursWithAge.map(entrepreneur => {
    return {
      firstName: entrepreneur.first,
      lastName: entrepreneur.last,
      age: entrepreneur.age
    };
  });
  console.log("Entrepreneurs avec clés firstName et lastName:", updatedEntrepreneurs);
  
  // 4. Filtrer les entrepreneurs nés dans les années 70
  const bornIn70s = updatedEntrepreneurs.filter(entrepreneur => entrepreneur.age >= (currentYear - 1980) && entrepreneur.age <= (currentYear - 1970));
  console.log("Entrepreneurs nés dans les années 70:", bornIn70s);
  