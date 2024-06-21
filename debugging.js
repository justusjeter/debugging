const storeOwners = [
    {
      name: 'Christian',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'Easton',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Daylen',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Justus',
      stores: 1,
      location: "NM",
    },
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
      totalLocations = totalLocations + storeOwners[i].stores;
    }
    return totalLocations;
  };
  
  let locations = listNumberOfStores();
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?')
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      console.log(`Yes, ${person} has one in ${location}`);
    }
  
  }
  
  tellMeMyStores();
  hasStore();