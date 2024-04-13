function parseArgs() {
  let isAll = false;
  let isList = false;

  const args = process.argv.slice(2);
  args.forEach((arg) => {
    if (arg.includes("a")) {
      isAll = true;
    }
    if (arg.includes("l")) {
      isList = true;
    }
  });

  return {
    isAll,
    isList,
  };
}

module.exports = parseArgs;
