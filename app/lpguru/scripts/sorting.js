const foo = [
  { votes: 2, userUpVotes: 3, userDownVotes: 0 },
  { votes: 1, userUpVotes: 6, userDownVotes: 2 },
  { votes: 3, userUpVotes: 6, userDownVotes: 2 },
  { votes: 2, userUpVotes: 2, userDownVotes: 1 },
  { votes: 4, userUpVotes: 2, userDownVotes: 3 },
];

console.log("Before sorting:", foo);

foo.sort((a, b) => {
  if (a.userVotes === b.userVotes) {
    return b.votes - a.votes;
  }

  return b.userVotes - a.userVotes;
});

console.log(foo);
