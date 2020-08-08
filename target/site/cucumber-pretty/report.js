$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hotels/HotelsStar.feature");
formatter.feature({
  "line": 2,
  "name": "Hotels Star",
  "description": "",
  "id": "hotels-star",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  Scenario Outline: Verify hotel shows up as star rating selected by user"
    },
    {
      "line": 5,
      "value": "#    Given I am on landing page"
    },
    {
      "line": 6,
      "value": "#    When I enter \u0027vegas\u0027 in search"
    },
    {
      "line": 7,
      "value": "#    And I select \u0027Las Vegas, Nevada, United States of America\u0027 from autosuggestion"
    },
    {
      "line": 8,
      "value": "#    And I click on Search button"
    },
    {
      "line": 9,
      "value": "#    And I click on \u003cstar\u003e star"
    },
    {
      "line": 10,
      "value": "#    Then I verify hotels are \u003cstar\u003e star rating"
    },
    {
      "line": 11,
      "value": "#    Examples:"
    },
    {
      "line": 12,
      "value": "#      | star |"
    },
    {
      "line": 13,
      "value": "#      | 5    |"
    },
    {
      "line": 14,
      "value": "#      | 4    |"
    },
    {
      "line": 15,
      "value": "#      | 3    |"
    },
    {
      "line": 16,
      "value": "#      | 2    |"
    },
    {
      "line": 17,
      "value": "#      | 1    |"
    }
  ],
  "line": 20,
  "name": "Verify hotel shows up as star rating selected by user",
  "description": "",
  "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@test"
    },
    {
      "line": 19,
      "name": "@star"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on \u003cstar\u003e star",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify hotels are \u003cstar\u003e star rating",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;",
  "rows": [
    {
      "cells": [
        "star"
      ],
      "line": 25,
      "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 26,
      "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;2"
    },
    {
      "cells": [
        "4"
      ],
      "line": 27,
      "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 28,
      "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;4"
    },
    {
      "cells": [
        "2"
      ],
      "line": 29,
      "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;5"
    },
    {
      "cells": [
        "1"
      ],
      "line": 30,
      "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Verify hotel shows up as star rating selected by user",
  "description": "",
  "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@star"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on 5 star",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify hotels are 5 star rating",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HotelsStar.launchHotelsSearchResult()"
});
formatter.result({
  "duration": 14351708613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "HotelsStar.clickStar(String)"
});
formatter.result({
  "duration": 12638634615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "HotelsStar.verifyStarRating(String)"
});
formatter.result({
  "duration": 10385990346,
  "status": "passed"
});
formatter.after({
  "duration": 6066443604,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify hotel shows up as star rating selected by user",
  "description": "",
  "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@star"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on 4 star",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify hotels are 4 star rating",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HotelsStar.launchHotelsSearchResult()"
});
formatter.result({
  "duration": 9158058279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 11
    }
  ],
  "location": "HotelsStar.clickStar(String)"
});
formatter.result({
  "duration": 10474345471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "HotelsStar.verifyStarRating(String)"
});
formatter.result({
  "duration": 10242109958,
  "status": "passed"
});
formatter.after({
  "duration": 6130148536,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify hotel shows up as star rating selected by user",
  "description": "",
  "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@star"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on 3 star",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify hotels are 3 star rating",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HotelsStar.launchHotelsSearchResult()"
});
formatter.result({
  "duration": 8872740242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "HotelsStar.clickStar(String)"
});
formatter.result({
  "duration": 10471586270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "HotelsStar.verifyStarRating(String)"
});
formatter.result({
  "duration": 10088370092,
  "status": "passed"
});
formatter.after({
  "duration": 5990536098,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify hotel shows up as star rating selected by user",
  "description": "",
  "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@star"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on 2 star",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify hotels are 2 star rating",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HotelsStar.launchHotelsSearchResult()"
});
formatter.result({
  "duration": 9115231236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "HotelsStar.clickStar(String)"
});
formatter.result({
  "duration": 10194242629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "HotelsStar.verifyStarRating(String)"
});
formatter.result({
  "duration": 10071555309,
  "status": "passed"
});
formatter.after({
  "duration": 6036872012,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify hotel shows up as star rating selected by user",
  "description": "",
  "id": "hotels-star;verify-hotel-shows-up-as-star-rating-selected-by-user;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@star"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on 1 star",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify hotels are 1 star rating",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HotelsStar.launchHotelsSearchResult()"
});
formatter.result({
  "duration": 9457834319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "HotelsStar.clickStar(String)"
});
formatter.result({
  "duration": 10542923477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "HotelsStar.verifyStarRating(String)"
});
formatter.result({
  "duration": 10066274682,
  "status": "passed"
});
formatter.after({
  "duration": 6100809157,
  "status": "passed"
});
});