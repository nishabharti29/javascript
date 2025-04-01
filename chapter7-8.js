function setUnion(setA, setB) {
    const unionSet = new Set(setA);
    for (const elem of setB) {
      unionSet.add(elem);
    }
    return unionSet;
  }
  
  function setIntersection(setA, setB) {
    const intersectionSet = new Set();
    for (const elem of setB) {
      if (setA.has(elem)) {
        intersectionSet.add(elem);
      }
    }
    return intersectionSet;
  }
  
  function setDifference(setA, setB) {
    const differenceSet = new Set(setA);
    for (const elem of setB) {
      differenceSet.delete(elem);
    }
    return differenceSet;
  }
  
  const setA = new Set([1, 2, 3, 4, 5]);
  const setB = new Set([3, 4, 5, 6, 7]);
  
  console.log("Union:", setUnion(setA, setB));
  console.log("Intersection:", setIntersection(setA, setB));
  console.log("Difference (A-B):",)