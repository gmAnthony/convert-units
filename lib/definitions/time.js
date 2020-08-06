var time;
var daysInYear = 365.25;

time = {
  ns: {
    name: {
      singular: 'Nanosecond'
    , plural: 'Nanoseconds'
    }
  , to_anchor: 1/1000000000
  }
, mu: {
    name: {
      singular: 'Microsecond'
    , plural: 'Microseconds'
    }
  , to_anchor: 1/1000000
  }
, ms: {
    name: {
      singular: 'Millisecond'
    , plural: 'Milliseconds'
    }
  , to_anchor: 1/1000
  }
, s: {
    name: {
      singular: 'Second'
    , plural: 'Seconds'
    }
  , to_anchor: 1
  }
, min: {
    name: {
      singular: 'Minute'
    , plural: 'Minutes'
    }
  , to_anchor: 60
  }
, h: {
    name: {
      singular: 'Hour'
    , plural: 'Hours'
    }
  , to_anchor: 60 * 60 
  }
, d: {
    name: {
      singular: 'Day'
    , plural: 'Days'
    }
  , to_anchor: 60 * 60 * 24
  }
, week: {
    name: {
      singular: 'Week'
    , plural: 'Weeks'
    }
  , to_anchor: 60 * 60 * 24 * 7
  }
, month: {
    name: {
      singular: 'Month'
    , plural: 'Months'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear / 12
  }
, year: {
    name: {
      singular: 'Year'
    , plural: 'Years'
    }
  , to_anchor: 60 * 60 * 24 * daysInYear
  }, mayfly: {
    name: {
      singular: 'Lifespan of a Mayfly',
      plural: 'Lifespans of a Mayfly'
    },
    to_anchor: 60 * 5
  }, moonCycle: {
    name: {
      singular: "Full moon cycle",
      plural: "Full moon cycles"
    },
    to_anchor: 60 * 60 * 24 * 29.53
  }, flaps: {
    name: {
      singular: "Flap of a hummingbird's wings",
      plural: "Flaps of a hummingbird's wings"
    },
    to_anchor: 0.0142857142857
  }, mooch: {
    name: {
      singular: "Mooch",
      plural: "Mooches"
    },
    to_anchor: 60 * 60 * 24 * 10
  }, n_time: {
    name: {
      singular: "Please select a unit.",
      plural: "Please select a unit."
    },
    to_anchor: 1
  }, sols: {
    name: {
      singular: "Sol",
      plural: "Sols"
    },
    to_anchor: 60 * 60 * 24 * 1.02749125170
  },
};


module.exports = {
  metric: time 
, _anchors: {
    metric: {
      unit: 's'
    , ratio: 1
    }
  }
};
