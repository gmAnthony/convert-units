var metric
  , imperial;

metric = {
  mcg: {
    name: {
      singular: 'Microgram'
      , plural: 'Micrograms'
    }
    , to_anchor: 1 / 1000000
  }
  , mg: {
    name: {
      singular: 'Milligram'
      , plural: 'Milligrams'
    }
    , to_anchor: 1 / 1000
  }
  , g: {
    name: {
      singular: 'Gram'
      , plural: 'Grams'
    }
    , to_anchor: 1
  }
  , kg: {
    name: {
      singular: 'Kilogram'
      , plural: 'Kilograms'
    }
    , to_anchor: 1000
  }
  , mt: {
    name: {
      singular: 'Metric Tonne'
      , plural: 'Metric Tonnes'
    }
    , to_anchor: 1000000
  }
};

imperial = {
  oz: {
    name: {
      singular: 'Ounce'
      , plural: 'Ounces'
    }
    , to_anchor: 1 / 16
  }
  , lb: {
    name: {
      singular: 'Pound'
      , plural: 'Pounds'
    }
    , to_anchor: 1
  }, t: {
    name: {
      singular: 'Ton',
      plural: 'Tons',
    },
    to_anchor: 2000,
  }, bees: {
    name: {
      singular: 'Bee',
      plural: 'Bees',
    },
    to_anchor: 0.000385809,
  }, qtrPounders: {
    name: {
      singular: "McDonald's Quarter Pounder",
      plural: "McDonald's Quarter Pounders"
    },
    to_anchor: 0.462971,
  }, lebrons: {
    name: {
      singular: "Lebron James",
      plural: "Lebron Jameses"
    },
    to_anchor: 250,
  }, n: {
    singular: "Please select a unit.",
    plural: "Please select a unit."
  },
  to_anchor: 1,
};

module.exports = {
  metric: metric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'g'
      , ratio: 1 / 453.592
    }
    , imperial: {
      unit: 'lb'
      , ratio: 453.592
    }
  }
};
