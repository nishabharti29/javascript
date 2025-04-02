function formatName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`.trim();
    const formattedName = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase(); // to capitalize first character of full name and make the rest lower case
    return formattedName;
  }
  console.log(formatName("jOhN", "SMitH"));