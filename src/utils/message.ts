export function isSearchableMessage(message: string) {
  let search = '' + message.toLocaleLowerCase();
  return search.includes('pesquisar') || search.includes('pesquisa');
}

export function handleSearchaleWord(message: string) {
  message = message.replace(/pesquisar/i, 'pesquisa');
  return message.split(/pesquisa/i)[1];
}
