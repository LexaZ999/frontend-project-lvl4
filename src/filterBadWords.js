import filter from 'leo-profanity';

export default (message) => {
  filter.add(filter.getDictionary('en'));
  filter.add(filter.getDictionary('ru'));

  return filter.clean(message);
};
