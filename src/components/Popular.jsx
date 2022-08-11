import { useEffect, useState } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

// temporary data to reduce API calls
const tempFoodData = [
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 23,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 8,
        "healthScore": 5,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 277.16,
        "extendedIngredients": [
            {
                "id": 12071,
                "aisle": "Baking",
                "image": "marzipan-or-almond-paste.jpg",
                "consistency": "SOLID",
                "name": "almond paste",
                "nameClean": "almond paste",
                "original": "1 cup almond paste (9 oz)",
                "originalName": "cup almond paste",
                "amount": 9,
                "unit": "oz",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 9,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 255.146,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 18371,
                "aisle": "Baking",
                "image": "white-powder.jpg",
                "consistency": "SOLID",
                "name": "baking powder",
                "nameClean": "low sodium baking powder",
                "original": "1 teaspoon baking powder",
                "originalName": "baking powder",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 1001,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "butter",
                "original": "15 grams Butter",
                "originalName": "Butter",
                "amount": 15,
                "unit": "grams",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.529,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 15,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 10020129,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "cake flour",
                "nameClean": "cake flour",
                "original": "1 cup cake flour",
                "originalName": "cake flour",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1001056,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "sour-cream.jpg",
                "consistency": "SOLID",
                "name": "crème fraîche",
                "nameClean": "creme fraiche",
                "original": "Crème fraiche and slivered almond for serving",
                "originalName": "Crème fraiche and slivered almond for serving",
                "amount": 6,
                "unit": "servings",
                "meta": [
                    "for serving"
                ],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 1123,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "egg.png",
                "consistency": "SOLID",
                "name": "eggs",
                "nameClean": "egg",
                "original": "6 eggs, at room temperature",
                "originalName": "eggs, at room temperature",
                "amount": 6,
                "unit": "",
                "meta": [
                    "at room temperature"
                ],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "granulated sugar",
                "nameClean": "sugar",
                "original": "1 ¼ cup granulated sugar",
                "originalName": "granulated sugar",
                "amount": 1.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 295.735,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 9279,
                "aisle": "Produce",
                "image": "plum.jpg",
                "consistency": "SOLID",
                "name": "plums",
                "nameClean": "purple plum",
                "original": "3 large plums (12oz) halved, pitted and cut into ½ inch wedges",
                "originalName": "large plums halved, pitted and cut into ½ inch wedges",
                "amount": 12,
                "unit": "oz",
                "meta": [
                    "pitted",
                    "halved",
                    "cut into ½ inch wedges"
                ],
                "measures": {
                    "us": {
                        "amount": 12,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 340.194,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "¼ teaspoon salt",
                "originalName": "salt",
                "amount": 0.25,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 93622,
                "aisle": "Baking",
                "image": "vanilla.jpg",
                "consistency": "SOLID",
                "name": "vanilla bean",
                "nameClean": "vanilla bean",
                "original": "1 vanilla-bean – split lengthwise seeds scraped, pod reserved for another use",
                "originalName": "vanilla-bean – split lengthwise seeds scraped, pod reserved for another use",
                "amount": 1,
                "unit": "",
                "meta": [
                    "split",
                    "for another use"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 2050,
                "aisle": "Baking",
                "image": "vanilla-extract.jpg",
                "consistency": "LIQUID",
                "name": "vanilla extract",
                "nameClean": "vanilla extract",
                "original": "1 teaspoon pure vanilla extract",
                "originalName": "pure vanilla extract",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [
                    "pure"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            }
        ],
        "id": 632169,
        "title": "Almond Plum Cake with Creme Fraiche",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://www.foodista.com/recipe/RQHHKSRL/almond-plum-cake-with-creme-fraiche",
        "image": "https://spoonacular.com/recipeImages/632169-556x370.jpg",
        "imageType": "jpg",
        "summary": "You can never have too many dessert recipes, so give Almond Plum Cake with Creme Fraiche a try. This recipe makes 6 servings with <b>566 calories</b>, <b>13g of protein</b>, and <b>21g of fat</b> each. For <b>$2.77 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 8 would say it hit the spot. A mixture of vanilla-bean - lengthwise seeds scraped, salt, butter, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 43%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/almond-cake-with-lemon-and-crme-frache-glaze-762798\">Almond Cake with Lemon and Crème Fraîche Glaze</a>, <a href=\"https://spoonacular.com/recipes/blueberry-almond-shortcakes-with-crme-frache-51856\">Blueberry-Almond Shortcakes with Crème Fraîche</a>, and <a href=\"https://spoonacular.com/recipes/cherry-almond-sponge-with-pistachio-crme-frache-219735\">Cherry & almond sponge with pistachio crème fraîche</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "side dish"
        ],
        "diets": [],
        "occasions": [],
        "instructions": "<ol><li>. Preheat the oven at 350. Butter and flour a 9-inch spring form pan. In a small bowl, mix the cake flour with the baking powder and salt.</li><li>2. In a bowl of a standing mixer fitted with a paddle, beat the sugar with the almond paste until crumbly. Add the butter and beat t high speed until light in color and fluffy, about 2 minutes. Add the eggs, one at the a time, beating until fully incorporated between additions. Beat the vanilla extract and vanilla seeds. Gently fold in the flour mixture until fully incorporated.</li><li>3. Scrape the batter into the prepared pan. Arrange the plums over the top of the batter. Bake for 1 hour and 5 minutes, or until the cake is deeply golden and a toothpick inserted in the center comes out clean.</li><li>4. Transfer the cake to a rack and let cool for 15 minutes. Run a knife around the edge of the cake and remove the outside ring of the pan. Let the cake cool for at least 30 minutes longer. Serve warm or at room temperature topped with crme fraiche and slivered almonds.</li><li>Make ahead: The cake can be made one day ahead and stored in an airtight container at room temperature.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": ". Preheat the oven at 35",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Butter and flour a 9-inch spring form pan. In a small bowl, mix the cake flour with the baking powder and salt.",
                        "ingredients": [
                            {
                                "id": 18369,
                                "name": "baking powder",
                                "localizedName": "baking powder",
                                "image": "white-powder.jpg"
                            },
                            {
                                "id": 10020129,
                                "name": "cake flour",
                                "localizedName": "cake flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            },
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "In a bowl of a standing mixer fitted with a paddle, beat the sugar with the almond paste until crumbly.",
                        "ingredients": [
                            {
                                "id": 12071,
                                "name": "almond paste",
                                "localizedName": "almond paste",
                                "image": "marzipan-or-almond-paste.jpg"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404726,
                                "name": "blender",
                                "localizedName": "blender",
                                "image": "blender.png"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 4,
                        "step": "Add the butter and beat t high speed until light in color and fluffy, about 2 minutes.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 2,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Add the eggs, one at the a time, beating until fully incorporated between additions. Beat the vanilla extract and vanilla seeds. Gently fold in the flour mixture until fully incorporated.",
                        "ingredients": [
                            {
                                "id": 2050,
                                "name": "vanilla extract",
                                "localizedName": "vanilla extract",
                                "image": "vanilla-extract.jpg"
                            },
                            {
                                "id": 1052050,
                                "name": "vanilla",
                                "localizedName": "vanilla",
                                "image": "vanilla.jpg"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 93818,
                                "name": "seeds",
                                "localizedName": "seeds",
                                "image": "sunflower-seeds.jpg"
                            },
                            {
                                "id": 1123,
                                "name": "egg",
                                "localizedName": "egg",
                                "image": "egg.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 6,
                        "step": "Scrape the batter into the prepared pan. Arrange the plums over the top of the batter.",
                        "ingredients": [
                            {
                                "id": 9279,
                                "name": "plum",
                                "localizedName": "plum",
                                "image": "plum.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 7,
                        "step": "Bake for 1 hour and 5 minutes, or until the cake is deeply golden and a toothpick inserted in the center comes out clean.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404644,
                                "name": "toothpicks",
                                "localizedName": "toothpicks",
                                "image": "toothpicks.jpg"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 65,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 8,
                        "step": "Transfer the cake to a rack and let cool for 15 minutes. Run a knife around the edge of the cake and remove the outside ring of the pan.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404745,
                                "name": "knife",
                                "localizedName": "knife",
                                "image": "chefs-knife.jpg"
                            },
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ],
                        "length": {
                            "number": 15,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 9,
                        "step": "Let the cake cool for at least 30 minutes longer.",
                        "ingredients": [],
                        "equipment": [],
                        "length": {
                            "number": 30,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 10,
                        "step": "Serve warm or at room temperature topped with crme fraiche and slivered almonds.Make ahead: The cake can be made one day ahead and stored in an airtight container at room temperature.",
                        "ingredients": [
                            {
                                "id": 10012061,
                                "name": "slivered almonds",
                                "localizedName": "slivered almonds",
                                "image": "almonds-slivered.png"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/almond-plum-cake-with-creme-fraiche-632169"
    },
    {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 25,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 19636,
        "healthScore": 7,
        "creditsText": "Full Belly Sisters",
        "license": "CC BY-SA 3.0",
        "sourceName": "Full Belly Sisters",
        "pricePerServing": 154.74,
        "extendedIngredients": [
            {
                "id": 19904,
                "aisle": "Sweet Snacks",
                "image": "dark-chocolate-pieces.jpg",
                "consistency": "SOLID",
                "name": "dark chocolate",
                "nameClean": "dark chocolate",
                "original": "2 ounces dark chocolate, at least 70% cocoa",
                "originalName": "dark chocolate, at least 70% cocoa",
                "amount": 2,
                "unit": "ounces",
                "meta": [
                    "dark",
                    "70%"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 56.699,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 1077,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "milk.png",
                "consistency": "LIQUID",
                "name": "milk",
                "nameClean": "milk",
                "original": "1/2 cup milk",
                "originalName": "milk",
                "amount": 0.5,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 12151,
                "aisle": "Nuts;Savory Snacks",
                "image": "pistachios.jpg",
                "consistency": "SOLID",
                "name": "pistachios",
                "nameClean": "pistachio nuts",
                "original": "1/4 cup pistachios, raw",
                "originalName": "pistachios, raw",
                "amount": 0.25,
                "unit": "cup",
                "meta": [
                    "raw"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1036,
                "aisle": "Cheese",
                "image": "ricotta.png",
                "consistency": "SOLID",
                "name": "ricotta",
                "nameClean": "ricotta cheese",
                "original": "1 3/4 cups good-quality ricotta",
                "originalName": "good-quality ricotta",
                "amount": 1.75,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.75,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 414.029,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "small pinch of salt",
                "originalName": "salt",
                "amount": 1,
                "unit": "small pinch",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "small pinch",
                        "unitLong": "small pinch"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "small pinch",
                        "unitLong": "small pinch"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "sugar",
                "original": "1/2 cup sugar",
                "originalName": "sugar",
                "amount": 0.5,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2050,
                "aisle": "Baking",
                "image": "vanilla-extract.jpg",
                "consistency": "LIQUID",
                "name": "vanilla",
                "nameClean": "vanilla extract",
                "original": "1/2 tsp vanilla",
                "originalName": "vanilla",
                "amount": 0.5,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            }
        ],
        "id": 716410,
        "title": "Cannoli Ice Cream w. Pistachios & Dark Chocolate",
        "readyInMinutes": 45,
        "servings": 3,
        "sourceUrl": "http://fullbellysisters.blogspot.com/2012/08/cannoli-ice-cream-w-pistachios-dark.html",
        "image": "https://spoonacular.com/recipeImages/716410-556x370.jpg",
        "imageType": "jpg",
        "summary": "This recipe makes 3 servings with <b>576 calories</b>, <b>21g of protein</b>, and <b>33g of fat</b> each. For <b>$1.55 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up ricotta, milk, pistachios, and a few other things to make it today. It can be enjoyed any time, but it is especially good for <b>Summer</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Many people made this recipe, and 19636 would say it hit the spot. It is a good option if you're following a <b>gluten free and vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/chocolate-dipped-cannoli-with-pistachios-355861\">Chocolate-Dipped Cannoli with Pistachios</a>, <a href=\"https://spoonacular.com/recipes/soft-cannoli-cookie-sandwiches-with-almond-orange-and-dark-chocolate-683998\">Soft Cannoli Cookie Sandwiches with Almond, Orange, and Dark Chocolate</a>, and <a href=\"https://spoonacular.com/recipes/dark-white-chocolate-chip-oatmeal-cookies-with-pistachios-and-dried-bluberries-608097\">Dark & White Chocolate Chip Oatmeal Cookies with Pistachios and Dried Bluberries</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "lacto ovo vegetarian"
        ],
        "occasions": [
            "summer"
        ],
        "instructions": "",
        "analyzedInstructions": [],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/cannoli-ice-cream-w-pistachios-dark-chocolate-716410"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 13,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 398,
        "healthScore": 25,
        "pricePerServing": 197.23,
        "extendedIngredients": [
            {
                "id": 12061,
                "aisle": "Nuts",
                "image": "almonds.jpg",
                "consistency": "SOLID",
                "name": "almonds",
                "nameClean": "almonds",
                "original": "½ cup roasted and salted sliced almonds",
                "originalName": "roasted and salted sliced almonds",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "salted",
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 6150,
                "aisle": "Condiments",
                "image": "barbecue-sauce.jpg",
                "consistency": "SOLID",
                "name": "barbecue sauce",
                "nameClean": "barbecue sauce",
                "original": "½ cup barbecue sauce",
                "originalName": "barbecue sauce",
                "amount": 0.5,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11135,
                "aisle": "Produce",
                "image": "cauliflower.jpg",
                "consistency": "SOLID",
                "name": "cauliflower",
                "nameClean": "cauliflower",
                "original": "1 small head of cauliflower, cut into florets",
                "originalName": "cauliflower, cut into florets",
                "amount": 1,
                "unit": "small head",
                "meta": [
                    "cut into florets"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "small head",
                        "unitLong": "small head"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "small head",
                        "unitLong": "small head"
                    }
                }
            },
            {
                "id": 11165,
                "aisle": "Produce;Spices and Seasonings",
                "image": "cilantro.png",
                "consistency": "SOLID",
                "name": "cilantro",
                "nameClean": "cilantro",
                "original": "2 tablespoons chopped cilantro",
                "originalName": "chopped cilantro",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "4 cloves of garlic, finely minced",
                "originalName": "garlic, finely minced",
                "amount": 4,
                "unit": "cloves",
                "meta": [
                    "finely minced"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    }
                }
            },
            {
                "id": 1022020,
                "aisle": "Spices and Seasonings",
                "image": "garlic-powder.png",
                "consistency": "SOLID",
                "name": "garlic powder",
                "nameClean": "garlic powder",
                "original": "1 teaspoon garlic powder",
                "originalName": "garlic powder",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "olive oil",
                "original": "2 tablespoons olive oil",
                "originalName": "olive oil",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 9206,
                "aisle": "Beverages",
                "image": "orange-juice.jpg",
                "consistency": "LIQUID",
                "name": "orange juice",
                "nameClean": "orange juice",
                "original": "1/3 cup orange juice",
                "originalName": "orange juice",
                "amount": 0.33333334,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.333,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 78.863,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1038,
                "aisle": "Cheese",
                "image": "parmesan.jpg",
                "consistency": "SOLID",
                "name": "pecorino romano cheese",
                "nameClean": "pecorino romano",
                "original": "¼ cup Pecorino Romano cheese",
                "originalName": "Pecorino Romano cheese",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1012047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "sea-salt",
                "nameClean": "coarse sea salt",
                "original": "sea salt and black pepper",
                "originalName": "sea salt and black pepper",
                "amount": 4,
                "unit": "servings",
                "meta": [
                    "black"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 1055062,
                "aisle": "Meat",
                "image": "chicken-breasts.png",
                "consistency": "SOLID",
                "name": "skinless boneless chicken breasts",
                "nameClean": "boneless skinless chicken breast",
                "original": "2 boneless and skinless chicken breasts, cut-in-half lengthwise to produce 4 equal pieces",
                "originalName": "boneless and skinless chicken breasts, cut-in-half lengthwise to produce 4 equal pieces",
                "amount": 2,
                "unit": "",
                "meta": [
                    "boneless",
                    "skinless"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 16124,
                "aisle": "Ethnic Foods;Condiments",
                "image": "soy-sauce.jpg",
                "consistency": "LIQUID",
                "name": "soy sauce",
                "nameClean": "soy sauce",
                "original": "2 tablespoons soy sauce",
                "originalName": "soy sauce",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 11147,
                "aisle": "Produce",
                "image": "swiss-chard.jpg",
                "consistency": "SOLID",
                "name": "swiss chard",
                "nameClean": "swiss chard",
                "original": "4 cups Swiss chard, stemmed and loosely chopped",
                "originalName": "Swiss chard, stemmed and loosely chopped",
                "amount": 4,
                "unit": "cups",
                "meta": [
                    "stemmed",
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 946.352,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1145,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "unsalted butter",
                "nameClean": "unsalted butter",
                "original": "2 tablespoons unsalted butter",
                "originalName": "unsalted butter",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [
                    "unsalted"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 10511282,
                "aisle": "Produce",
                "image": "brown-onion.png",
                "consistency": "SOLID",
                "name": "yellow onion",
                "nameClean": "yellow onion",
                "original": "1 small yellow onion, diced",
                "originalName": "yellow onion, diced",
                "amount": 1,
                "unit": "small",
                "meta": [
                    "diced",
                    "yellow"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "small",
                        "unitLong": "small"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "small",
                        "unitLong": "small"
                    }
                }
            }
        ],
        "id": 715420,
        "title": "Barbecue Chicken Cauliflower Couscous Bowls",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.pinkwhen.com/barbecue-chicken-cauliflower-couscous-bowls/",
        "image": "https://spoonacular.com/recipeImages/715420-556x370.jpg",
        "imageType": "jpg",
        "summary": "Barbecue Chicken Cauliflower Couscous Bowls might be just the main course you are searching for. This recipe makes 4 servings with <b>440 calories</b>, <b>23g of protein</b>, and <b>25g of fat</b> each. For <b>$2.4 per serving</b>, this recipe <b>covers 32%</b> of your daily requirements of vitamins and minerals. If you have olive oil, chicken breasts, cauliflower, and a few other ingredients on hand, you can make it. To use up the sea-salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/raspberry-sea-salt-brownies-494161\">Raspberry Sea Salt Brownies</a> as a dessert. It will be a hit at your <b>Father's Day</b> event. This recipe from Pink When has 398 fans. It is a good option if you're following a <b>gluten free</b> diet. This recipe is typical of American cuisine. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/couscous-bowls-with-zaatar-chickpeas-and-roasted-cauliflower-612788\">Couscous Bowls with Za’atar Chickpeas and Roasted Cauliflower</a>, <a href=\"https://spoonacular.com/recipes/barbecue-chicken-and-veggie-rice-bowls-for-lunchboxes-534542\">Barbecue Chicken and Veggie Rice Bowls for Lunchboxes</a>, and <a href=\"https://spoonacular.com/recipes/shredded-chicken-cauliflower-rice-burrito-bowls-609374\">Shredded Chicken Cauliflower Rice Burrito Bowls</a> for similar recipes.",
        "cuisines": [
            "bbq",
            "Barbecue"
        ],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free"
        ],
        "occasions": [
            "father's day"
        ],
        "instructions": "In a shallow dish, whisk together the barbecue sauce, orange juice and soy sauce. Add the chicken breasts and toss to fully coat. Set aside to marinate while you prepare the rest of your ingredients.Add the cauliflower florets to the bowl of your food processor. Pulse 5-6 times are until the cauliflower takes on the texture of couscous. Set aside.Heat the butter in a large saut pan over medium heat. Add the onion and cook until tender, about 5-6 minutes. Add the cauliflower, garlic powder and salt and black pepper to taste. Stir to combine. Cook for an additional 5 minutes. Remove from heat and stir in the cheese and cilantro. Cover and set aside until you are ready to serve.Preheat your grill or grill pan over medium to medium-high heat. Grease the grill and then add the chicken. Cook, brushing occasionally with additional marinade, until cooked through, about 10-12 minutes. Flip the chicken about halfway through cooking time. Remove from heat and set aside to rest while you prepare your Swiss chard.Heat the olive oil in a saut pan over medium heat. Add the garlic and cook for 1 minutes, until fragrant. Add the Swiss chard and cook, stirring frequently, until wilted and warm. Season with salt and black pepper.Assemble your bowls, by layering sliced chicken breast and Swiss chard over a bed of cauliflower couscous. Sprinkle with almonds and enjoy immediately!",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "In a shallow dish, whisk together the barbecue sauce, orange juice and soy sauce.",
                        "ingredients": [
                            {
                                "id": 6150,
                                "name": "barbecue sauce",
                                "localizedName": "barbecue sauce",
                                "image": "barbecue-sauce.jpg"
                            },
                            {
                                "id": 9206,
                                "name": "orange juice",
                                "localizedName": "orange juice",
                                "image": "orange-juice.jpg"
                            },
                            {
                                "id": 16124,
                                "name": "soy sauce",
                                "localizedName": "soy sauce",
                                "image": "soy-sauce.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404661,
                                "name": "whisk",
                                "localizedName": "whisk",
                                "image": "whisk.png"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add the chicken breasts and toss to fully coat. Set aside to marinate while you prepare the rest of your ingredients.",
                        "ingredients": [
                            {
                                "id": 5062,
                                "name": "chicken breast",
                                "localizedName": "chicken breast",
                                "image": "chicken-breasts.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Add the cauliflower florets to the bowl of your food processor. Pulse 5-6 times are until the cauliflower takes on the texture of couscous. Set aside.",
                        "ingredients": [
                            {
                                "id": 10011135,
                                "name": "cauliflower florets",
                                "localizedName": "cauliflower florets",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 11135,
                                "name": "cauliflower",
                                "localizedName": "cauliflower",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 20028,
                                "name": "couscous",
                                "localizedName": "couscous",
                                "image": "couscous-cooked.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404771,
                                "name": "food processor",
                                "localizedName": "food processor",
                                "image": "food-processor.png"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 4,
                        "step": "Heat the butter in a large saut pan over medium heat.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Add the onion and cook until tender, about 5-6 minutes.",
                        "ingredients": [
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 6,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 6,
                        "step": "Add the cauliflower, garlic powder and salt and black pepper to taste. Stir to combine. Cook for an additional 5 minutes.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 1022020,
                                "name": "garlic powder",
                                "localizedName": "garlic powder",
                                "image": "garlic-powder.png"
                            },
                            {
                                "id": 11135,
                                "name": "cauliflower",
                                "localizedName": "cauliflower",
                                "image": "cauliflower.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 7,
                        "step": "Remove from heat and stir in the cheese and cilantro. Cover and set aside until you are ready to serve.Preheat your grill or grill pan over medium to medium-high heat. Grease the grill and then add the chicken. Cook, brushing occasionally with additional marinade, until cooked through, about 10-12 minutes. Flip the chicken about halfway through cooking time.",
                        "ingredients": [
                            {
                                "id": 11165,
                                "name": "cilantro",
                                "localizedName": "cilantro",
                                "image": "cilantro.png"
                            },
                            {
                                "id": 0,
                                "name": "marinade",
                                "localizedName": "marinade",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404648,
                                "name": "grill pan",
                                "localizedName": "grill pan",
                                "image": "grill-pan.jpg"
                            },
                            {
                                "id": 404706,
                                "name": "grill",
                                "localizedName": "grill",
                                "image": "grill.jpg"
                            }
                        ],
                        "length": {
                            "number": 12,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 8,
                        "step": "Remove from heat and set aside to rest while you prepare your Swiss chard.",
                        "ingredients": [
                            {
                                "id": 11147,
                                "name": "swiss chard",
                                "localizedName": "swiss chard",
                                "image": "swiss-chard.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 9,
                        "step": "Heat the olive oil in a saut pan over medium heat.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 10,
                        "step": "Add the garlic and cook for 1 minutes, until fragrant.",
                        "ingredients": [
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 1,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 11,
                        "step": "Add the Swiss chard and cook, stirring frequently, until wilted and warm. Season with salt and black pepper.Assemble your bowls, by layering sliced chicken breast and Swiss chard over a bed of cauliflower couscous.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 7961,
                                "name": "sliced chicken breast",
                                "localizedName": "sliced chicken breast",
                                "image": "deli-turkey.jpg"
                            },
                            {
                                "id": 11135,
                                "name": "cauliflower",
                                "localizedName": "cauliflower",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 11147,
                                "name": "swiss chard",
                                "localizedName": "swiss chard",
                                "image": "swiss-chard.jpg"
                            },
                            {
                                "id": 20028,
                                "name": "couscous",
                                "localizedName": "couscous",
                                "image": "couscous-cooked.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 12,
                        "step": "Sprinkle with almonds and enjoy immediately!",
                        "ingredients": [
                            {
                                "id": 12061,
                                "name": "almonds",
                                "localizedName": "almonds",
                                "image": "almonds.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "sourceName": null,
        "creditsText": null,
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/barbecue-chicken-cauliflower-couscous-bowls-715420"
    },
    {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 7,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 10,
        "healthScore": 7,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 285.81,
        "extendedIngredients": [
            {
                "id": 6615,
                "aisle": "Canned and Jarred",
                "image": "chicken-broth.png",
                "consistency": "LIQUID",
                "name": "vegetable stock",
                "nameClean": "vegetable stock",
                "original": "6cups Vegetable stock",
                "originalName": "Vegetable stock",
                "amount": 6,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 1.42,
                        "unitShort": "l",
                        "unitLong": "liters"
                    }
                }
            },
            {
                "id": 11424,
                "aisle": "Baking",
                "image": "pumpkin-puree.jpg",
                "consistency": "SOLID",
                "name": "pumpkin puree",
                "nameClean": "canned pumpkin",
                "original": "4 cups pumpkin puree",
                "originalName": "pumpkin puree",
                "amount": 4,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 946.352,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11282,
                "aisle": "Produce",
                "image": "brown-onion.png",
                "consistency": "SOLID",
                "name": "onion",
                "nameClean": "onion",
                "original": "1 cup chopped onion",
                "originalName": "chopped onion",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2012,
                "aisle": "Spices and Seasonings",
                "image": "ground-coriander.jpg",
                "consistency": "SOLID",
                "name": "coriander",
                "nameClean": "dried cilantro",
                "original": "1tsp chopped coriander leafs",
                "originalName": "chopped coriander leafs",
                "amount": 1,
                "unit": "tsp",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "1 clove garlic, minced",
                "originalName": "garlic, minced",
                "amount": 1,
                "unit": "clove",
                "meta": [
                    "minced"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "clove",
                        "unitLong": "clove"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "clove",
                        "unitLong": "clove"
                    }
                }
            },
            {
                "id": 2027,
                "aisle": "Produce;Spices and Seasonings",
                "image": "oregano.jpg",
                "consistency": "SOLID",
                "name": "oregano",
                "nameClean": "oregano",
                "original": "1tsp dried oregano",
                "originalName": "dried oregano",
                "amount": 1,
                "unit": "tsp",
                "meta": [
                    "dried"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 1022030,
                "aisle": "Spices and Seasonings",
                "image": "black-pepper.png",
                "consistency": "SOLID",
                "name": "black peppercorns",
                "nameClean": "black peppercorns",
                "original": "5 whole black peppercorns",
                "originalName": "whole black peppercorns",
                "amount": 5,
                "unit": "",
                "meta": [
                    "whole",
                    "black"
                ],
                "measures": {
                    "us": {
                        "amount": 5,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 5,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1053,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "fluid-cream.jpg",
                "consistency": "LIQUID",
                "name": "heavy whipping cream",
                "nameClean": "cream",
                "original": "1/2 cup heavy whipping cream",
                "originalName": "heavy whipping cream",
                "amount": 0.5,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1001,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "butter",
                "original": "1tbsp butter, Salt to taste",
                "originalName": "butter, Salt to taste",
                "amount": 1,
                "unit": "tbsp",
                "meta": [
                    "to taste"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            }
        ],
        "id": 647501,
        "title": "Hot Pepper Pumpkin Soup",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "https://www.foodista.com/recipe/YX3L4PH4/hot-pepper-pumpkin-soup",
        "image": "https://spoonacular.com/recipeImages/647501-556x370.jpg",
        "imageType": "jpg",
        "summary": "Need a <b>gluten free, lacto ovo vegetarian, and primal soup</b>? Hot Pepper Pumpkin Soup could be an awesome recipe to try. This recipe serves 4. One portion of this dish contains about <b>4g of protein</b>, <b>15g of fat</b>, and a total of <b>248 calories</b>. For <b>$2.86 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 10 foodies and cooks. It is perfect for <b>Autumn</b>. Head to the store and pick up peppercorns, garlic, heavy whipping cream, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 46%</b>, this dish is good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/hot-and-sour-pumpkin-soup-24150\">Hot-and-Sour Pumpkin Soup</a>, <a href=\"https://spoonacular.com/recipes/creamy-pumpkin-red-pepper-soup-216754\">Creamy Pumpkin-Red Pepper Soup</a>, and <a href=\"https://spoonacular.com/recipes/pumpkin-and-yellow-pepper-soup-with-smoked-paprika-22235\">Pumpkin and Yellow Pepper Soup with Smoked Paprika</a>.",
        "cuisines": [],
        "dishTypes": [
            "soup"
        ],
        "diets": [
            "gluten free",
            "lacto ovo vegetarian",
            "primal"
        ],
        "occasions": [
            "fall",
            "winter"
        ],
        "instructions": "In a deep pan, heat stock, salt, pumpkin, onion, garlic, coriander leafs and peppercorns. Bring to a boil, reduce heat to low, and simmer for 30 minutes uncovered. Then puree the soup in small batches (1 cup at a time) using a food processor or blender. In a same pan add butter and dried oregano. When the butter in melted. Then add puree and bring to a boil again. Reduce heat to low, and simmer for another 30 minutes uncovered. Stir in heavy cream. Serve Hot.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "In a deep pan, heat stock, salt, pumpkin, onion, garlic, coriander leafs and peppercorns. Bring to a boil, reduce heat to low, and simmer for 30 minutes uncovered. Then puree the soup in small batches (1 cup at a time) using a food processor or blender. In a same pan add butter and dried oregano. When the butter in melted. Then add puree and bring to a boil again. Reduce heat to low, and simmer for another 30 minutes uncovered. Stir in heavy cream.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "dried oregano",
                                "localizedName": "dried oregano",
                                "image": "oregano.jpg"
                            },
                            {
                                "id": 1053,
                                "name": "heavy cream",
                                "localizedName": "heavy cream",
                                "image": "fluid-cream.jpg"
                            },
                            {
                                "id": 1022030,
                                "name": "peppercorns",
                                "localizedName": "peppercorns",
                                "image": "black-pepper.png"
                            },
                            {
                                "id": 1012013,
                                "name": "coriander",
                                "localizedName": "coriander",
                                "image": "ground-coriander.jpg"
                            },
                            {
                                "id": 11422,
                                "name": "pumpkin",
                                "localizedName": "pumpkin",
                                "image": "pumpkin.png"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 1006615,
                                "name": "stock",
                                "localizedName": "stock",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404771,
                                "name": "food processor",
                                "localizedName": "food processor",
                                "image": "food-processor.png"
                            },
                            {
                                "id": 404726,
                                "name": "blender",
                                "localizedName": "blender",
                                "image": "blender.png"
                            },
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ],
                        "length": {
                            "number": 60,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Serve Hot.",
                        "ingredients": [],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/hot-pepper-pumpkin-soup-647501"
    },
    {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 29,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 6,
        "healthScore": 100,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 1123.48,
        "extendedIngredients": [
            {
                "id": 9326,
                "aisle": "Produce",
                "image": "watermelon.png",
                "consistency": "SOLID",
                "name": "watermelon",
                "nameClean": "watermelon",
                "original": "1 seedless watermelon, sweet and delicious",
                "originalName": "seedless watermelon, sweet and delicious",
                "amount": 1,
                "unit": "",
                "meta": [
                    "sweet",
                    "seedless"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1019,
                "aisle": "Cheese",
                "image": "feta.png",
                "consistency": "SOLID",
                "name": "feta cheese",
                "nameClean": "feta cheese",
                "original": "3 ounces (or more depending on what you like) feta cheese, a nice creamy one",
                "originalName": "(or more depending on what you like) feta cheese, a nice creamy one",
                "amount": 3,
                "unit": "ounces",
                "meta": [
                    "( depending on what you like)"
                ],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 85.049,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 2064,
                "aisle": "Produce",
                "image": "mint.jpg",
                "consistency": "SOLID",
                "name": "fresh mint",
                "nameClean": "mint",
                "original": "1 cup of fresh mint",
                "originalName": "fresh mint",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "olive oil",
                "original": "1/4 cup olive oil",
                "originalName": "olive oil",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2069,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "balsamic-vinegar.jpg",
                "consistency": "LIQUID",
                "name": "balsamic vinegar",
                "nameClean": "balsamic vinegar",
                "original": "1/4 cup balsamic vinegar-very good quality",
                "originalName": "balsamic vinegar-very good quality",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "pepper",
                "nameClean": "black pepper",
                "original": "black pepper if you like pepper",
                "originalName": "black pepper if you like pepper",
                "amount": 1,
                "unit": "serving",
                "meta": [
                    "black"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            }
        ],
        "id": 665012,
        "title": "Watermelon Feta and Mint Salad",
        "readyInMinutes": 45,
        "servings": 1,
        "sourceUrl": "https://www.foodista.com/recipe/5PWYQFFJ/watermelon-feta-and-mint-salad",
        "image": "https://spoonacular.com/recipeImages/665012-556x370.jpg",
        "imageType": "jpg",
        "summary": "If you have roughly <b>around 45 minutes</b> to spend in the kitchen, Watermelon Fetan and Mint Salad might be a super <b>gluten free, lacto ovo vegetarian, and primal</b> recipe to try. This main course has <b>2140 calories</b>, <b>42g of protein</b>, and <b>79g of fat</b> per serving. This recipe serves 1 and costs $11.23 per serving. 6 people found this recipe to be scrumptious and satisfying. <b>Summer</b> will be even more special with this recipe. Head to the store and pick up watermelon, pepper if you like pepper, mint, and a few other things to make it today. It is brought to you by Foodista. Overall, this recipe earns a <b>super spoonacular score of 94%</b>. Try <a href=\"https://spoonacular.com/recipes/watermelon-feta-and-mint-salad-665041\">Watermelon, Fetan And Mint Salad</a>, <a href=\"https://spoonacular.com/recipes/watermelon-feta-salad-with-mint-27525\">Watermelon Feta Salad with Mint</a>, and <a href=\"https://spoonacular.com/recipes/watermelon-feta-and-mint-salad-27466\">Watermelon, Feta, And Mint Salad</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "side dish",
            "lunch",
            "main course",
            "salad",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "lacto ovo vegetarian",
            "primal"
        ],
        "occasions": [
            "summer"
        ],
        "instructions": "Directions: Cut watermelon in half and remove watermelon from rind.  You can either spoon it out like a mad man, carefully remove it and cut it into squares, or scoop it all out with a melon baller-which is what I did.  I liked the look of all those succelent balls of watermelon.\nSo, scoop out your watermelon and put it in a bowl-I used the leftover water melon rind for my bowl, and youre going to add your dressing, which is so simple, soooo easy.\nMake the Salad Dressing:  Add your oil, and vinegar.  No salt necessary as the feta is salty.\nMix this all together and chill for 15 minutes, which will give you time to prep your mint.\nChiffanade the mint, which means cut it into fine ribbons. Roll up the mint leaves like a cigar and then cut it into nice strips or ribbons. I had my daughter and her friend do this for me; they are 10 so you can see how easy this is.\nNext crumble over with that delicious creamy feta cheese. The salty contrast with the sweet melon is so crazy good that it is hard to describe.\nTo finish add the fresh mint, which brings it all together. And a little more black pepper at the end so theres a little on the feta.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Cut watermelon in half and remove watermelon from rind.  You can either spoon it out like a mad man, carefully remove it and cut it into squares, or scoop it all out with a melon baller-which is what I did.  I liked the look of all those succelent balls of watermelon.",
                        "ingredients": [
                            {
                                "id": 9326,
                                "name": "watermelon",
                                "localizedName": "watermelon",
                                "image": "watermelon.png"
                            },
                            {
                                "id": 0,
                                "name": "melon",
                                "localizedName": "melon",
                                "image": "mixed-fresh-fruit.jpg"
                            },
                            {
                                "id": 23572,
                                "name": "beef",
                                "localizedName": "beef",
                                "image": "beef-cubes-raw.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404680,
                                "name": "melon baller",
                                "localizedName": "melon baller",
                                "image": "melon-baller.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "So, scoop out your watermelon and put it in a bowl-I used the leftover water melon rind for my bowl, and youre going to add your dressing, which is so simple, soooo easy.",
                        "ingredients": [
                            {
                                "id": 9326,
                                "name": "watermelon",
                                "localizedName": "watermelon",
                                "image": "watermelon.png"
                            },
                            {
                                "id": 0,
                                "name": "melon",
                                "localizedName": "melon",
                                "image": "mixed-fresh-fruit.jpg"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            },
                            {
                                "id": 23572,
                                "name": "beef",
                                "localizedName": "beef",
                                "image": "beef-cubes-raw.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Make the Salad Dressing",
                "steps": [
                    {
                        "number": 1,
                        "step": "Add your oil, and vinegar.  No salt necessary as the feta is salty.",
                        "ingredients": [
                            {
                                "id": 2053,
                                "name": "vinegar",
                                "localizedName": "vinegar",
                                "image": "vinegar-(white).jpg"
                            },
                            {
                                "id": 1019,
                                "name": "feta cheese",
                                "localizedName": "feta cheese",
                                "image": "feta.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Mix this all together and chill for 15 minutes, which will give you time to prep your mint.",
                        "ingredients": [
                            {
                                "id": 2064,
                                "name": "mint",
                                "localizedName": "mint",
                                "image": "mint.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 15,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Chiffanade the mint, which means cut it into fine ribbons.",
                        "ingredients": [
                            {
                                "id": 2064,
                                "name": "mint",
                                "localizedName": "mint",
                                "image": "mint.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Roll up the mint leaves like a cigar and then cut it into nice strips or ribbons. I had my daughter and her friend do this for me; they are 10 so you can see how easy this is.",
                        "ingredients": [
                            {
                                "id": 2064,
                                "name": "mint",
                                "localizedName": "mint",
                                "image": "mint.jpg"
                            },
                            {
                                "id": 0,
                                "name": "roll",
                                "localizedName": "roll",
                                "image": "dinner-yeast-rolls.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 5,
                        "step": "Next crumble over with that delicious creamy feta cheese. The salty contrast with the sweet melon is so crazy good that it is hard to describe.",
                        "ingredients": [
                            {
                                "id": 1019,
                                "name": "feta cheese",
                                "localizedName": "feta cheese",
                                "image": "feta.png"
                            },
                            {
                                "id": 0,
                                "name": "melon",
                                "localizedName": "melon",
                                "image": "mixed-fresh-fruit.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 6,
                        "step": "To finish add the fresh mint, which brings it all together. And a little more black pepper at the end so theres a little on the feta.",
                        "ingredients": [
                            {
                                "id": 1002030,
                                "name": "black pepper",
                                "localizedName": "black pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 2064,
                                "name": "fresh mint",
                                "localizedName": "fresh mint",
                                "image": "mint.jpg"
                            },
                            {
                                "id": 1019,
                                "name": "feta cheese",
                                "localizedName": "feta cheese",
                                "image": "feta.png"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/watermelon-feta-and-mint-salad-665012"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 12,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 9,
        "healthScore": 1,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 111.37,
        "extendedIngredients": [
            {
                "id": 1123,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "egg.png",
                "consistency": "SOLID",
                "name": "eggs",
                "nameClean": "egg",
                "original": "4 large eggs",
                "originalName": "eggs",
                "amount": 4,
                "unit": "large",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "large",
                        "unitLong": "larges"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "large",
                        "unitLong": "larges"
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consistency": "LIQUID",
                "name": "lemon juice",
                "nameClean": "lemon juice",
                "original": "1/3 cup fresh lemon juice",
                "originalName": "fresh lemon juice",
                "amount": 0.33333334,
                "unit": "cup",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 0.333,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 78.863,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 9156,
                "aisle": "Produce",
                "image": "zest-lemon.jpg",
                "consistency": "SOLID",
                "name": "lemon peel",
                "nameClean": "lemon peel",
                "original": "1 tablespoon grated lemon peel",
                "originalName": "grated lemon peel",
                "amount": 1,
                "unit": "tablespoon",
                "meta": [
                    "grated"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 18133,
                "aisle": "Bakery/Bread",
                "image": "pound-cake.jpg",
                "consistency": "SOLID",
                "name": "pound cake",
                "nameClean": "pound cake",
                "original": "1 16-ounce pound cake",
                "originalName": "pound cake",
                "amount": 16,
                "unit": "ounce",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 16,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 453.592,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 10214106,
                "aisle": "Alcoholic Beverages",
                "image": "dry-sherry.png",
                "consistency": "LIQUID",
                "name": "sherry",
                "nameClean": "sherry",
                "original": "1/4 cup (or to taste) Sweet Sherry or Port",
                "originalName": "(or to taste) Sweet Sherry or Port",
                "amount": 0.25,
                "unit": "cup",
                "meta": [
                    "sweet",
                    "to taste",
                    "(or )"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 9316,
                "aisle": "Produce",
                "image": "strawberries.png",
                "consistency": "SOLID",
                "name": "strawberries",
                "nameClean": "strawberries",
                "original": "2 pints fresh strawberries",
                "originalName": "fresh strawberries",
                "amount": 2,
                "unit": "pints",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "pts",
                        "unitLong": "pints"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "pts",
                        "unitLong": "pints"
                    }
                }
            },
            {
                "id": 10819297,
                "aisle": "Nut butters, Jams, and Honey",
                "image": "strawberry-jam.png",
                "consistency": "SOLID",
                "name": "strawberry preserves",
                "nameClean": "strawberry jam",
                "original": "1/4 cup strawberry preserves",
                "originalName": "strawberry preserves",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "sugar",
                "original": "1/4 cup plus 3 tablespoons sugar",
                "originalName": "sugar",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "sugar",
                "original": "1 cup sugar",
                "originalName": "sugar",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1145,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "unsalted butter",
                "nameClean": "unsalted butter",
                "original": "1/2 cup (1 stick) unsalted butter, room temperature",
                "originalName": "(1 stick) unsalted butter, room temperature",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "unsalted",
                    "room temperature",
                    "(1 stick)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1054,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "whipped-cream.jpg",
                "consistency": "SOLID",
                "name": "whipped cream",
                "nameClean": "whipped cream",
                "original": "2 cups whipped cream, chilled",
                "originalName": "whipped cream, chilled",
                "amount": 2,
                "unit": "cups",
                "meta": [
                    "chilled"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 473.176,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            }
        ],
        "id": 642413,
        "title": "English Berry Trifle",
        "readyInMinutes": 350,
        "servings": 16,
        "sourceUrl": "http://www.foodista.com/recipe/4WVZZX8K/english-berry-trifle",
        "image": "https://spoonacular.com/recipeImages/642413-556x370.jpg",
        "imageType": "jpg",
        "summary": "The recipe English Berry Trifle could satisfy your Scottish craving in roughly <b>5 hours and 50 minutes</b>. One serving contains <b>266 calories</b>, <b>4g of protein</b>, and <b>9g of fat</b>. For <b>$1.1 per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 9 foodies and cooks. It is a good option if you're following a <b>gluten free</b> diet. If you have sugar, lemon juice, sherry, and a few other ingredients on hand, you can make it. Not a lot of people really liked this dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 24%</b>. This score is not so awesome. Try <a href=\"https://spoonacular.com/recipes/english-trifle-to-die-for-445595\">English Trifle to Die For</a>, <a href=\"https://spoonacular.com/recipes/english-trifle-391126\">English Trifle</a>, and <a href=\"https://spoonacular.com/recipes/old-english-trifle-395102\">Old English Trifle</a> for similar recipes.",
        "cuisines": [
            "English",
            "Scottish",
            "British",
            "European"
        ],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "gluten free"
        ],
        "occasions": [],
        "instructions": "<ol><li>For curd: Whisk eggs, sugar, and lemon juice in heavy medium saucepan to blend. Add butter and lemon peel. Stir over medium heat until curd thickens to pudding consistency, about 10 minutes. Transfer to small bowl. Press plastic wrap onto surface of curd. Chill until cold, at least 4 hours. (Can be made 3 days ahead.)</li><li>For fruit and topping: Combine 2 pints strawberries and 1/4 cup sugar in bowl. Mash berries coarsely with fork. Let stand until juices form, stirring occasionally, about 30 minutes.</li><li>Cut cake crosswise into 8 pieces. Cut each piece into 3 strips. Line bottom of 3-quart trifle bowl with 8 cake strips, trimming to fit. Drizzle with 3 tablespoons Sherry or Port; spread with a thin layer of preserves, then spread 2/3 cup curd, then half of mashed berries. Repeat layering. Top with remaining cake, alcohol, preserves, and curd. Cover; chill (preferably overnight).</li><li>Beat cream and 3 tablespoons sugar in bowl until peaks form; spread over trifle. Mound remaining berries in center.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "For curd",
                "steps": [
                    {
                        "number": 1,
                        "step": "Whisk eggs, sugar, and lemon juice in heavy medium saucepan to blend.",
                        "ingredients": [
                            {
                                "id": 9152,
                                "name": "lemon juice",
                                "localizedName": "lemon juice",
                                "image": "lemon-juice.jpg"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            },
                            {
                                "id": 1123,
                                "name": "egg",
                                "localizedName": "egg",
                                "image": "egg.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            },
                            {
                                "id": 404661,
                                "name": "whisk",
                                "localizedName": "whisk",
                                "image": "whisk.png"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add butter and lemon peel. Stir over medium heat until curd thickens to pudding consistency, about 10 minutes.",
                        "ingredients": [
                            {
                                "id": 9156,
                                "name": "lemon peel",
                                "localizedName": "lemon peel",
                                "image": "zest-lemon.jpg"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    }
                ]
            },
            {
                "name": "Transfer to small bowl. Press plastic wrap onto surface of curd. Chill until cold, at least 4 hours. (Can be made 3 days ahead.)For fruit and topping",
                "steps": [
                    {
                        "number": 1,
                        "step": "Combine 2 pints strawberries and 1/4 cup sugar in bowl. Mash berries coarsely with fork.",
                        "ingredients": [
                            {
                                "id": 9316,
                                "name": "strawberries",
                                "localizedName": "strawberries",
                                "image": "strawberries.png"
                            },
                            {
                                "id": 1009054,
                                "name": "berries",
                                "localizedName": "berries",
                                "image": "berries-mixed.jpg"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Let stand until juices form, stirring occasionally, about 30 minutes.",
                        "ingredients": [],
                        "equipment": [],
                        "length": {
                            "number": 30,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Cut cake crosswise into 8 pieces.",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Cut each piece into 3 strips. Line bottom of 3-quart trifle bowl with 8 cake strips, trimming to fit.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Drizzle with 3 tablespoons Sherry or Port; spread with a thin layer of preserves, then spread 2/3 cup curd, then half of mashed berries. Repeat layering. Top with remaining cake, alcohol, preserves, and curd. Cover; chill (preferably overnight).Beat cream and 3 tablespoons sugar in bowl until peaks form; spread over trifle. Mound remaining berries in center.",
                        "ingredients": [
                            {
                                "id": 19297,
                                "name": "preserves",
                                "localizedName": "preserves",
                                "image": "strawberry-jam.png"
                            },
                            {
                                "id": 14037,
                                "name": "alcohol",
                                "localizedName": "alcohol",
                                "image": "rum-dark.jpg"
                            },
                            {
                                "id": 1009054,
                                "name": "berries",
                                "localizedName": "berries",
                                "image": "berries-mixed.jpg"
                            },
                            {
                                "id": 10214106,
                                "name": "sherry",
                                "localizedName": "sherry",
                                "image": "dry-sherry.png"
                            },
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            },
                            {
                                "id": 1053,
                                "name": "cream",
                                "localizedName": "cream",
                                "image": "fluid-cream.jpg"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            },
                            {
                                "id": 10114057,
                                "name": "port",
                                "localizedName": "port",
                                "image": "port.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/english-berry-trifle-642413"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 15,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 19,
        "healthScore": 46,
        "pricePerServing": 399.76,
        "extendedIngredients": [
            {
                "id": 1230,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "buttermilk.jpg",
                "consistency": "SOLID",
                "name": "buttermilk",
                "nameClean": "buttermilk",
                "original": "1/4 cup buttermilk",
                "originalName": "buttermilk",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1230,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "buttermilk.jpg",
                "consistency": "SOLID",
                "name": "buttermilk",
                "nameClean": "buttermilk",
                "original": "1 1/2 cups buttermilk",
                "originalName": "buttermilk",
                "amount": 1.5,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11135,
                "aisle": "Produce",
                "image": "cauliflower.jpg",
                "consistency": "SOLID",
                "name": "cauliflower",
                "nameClean": "cauliflower",
                "original": "2 heads of cauliflower",
                "originalName": "cauliflower",
                "amount": 2,
                "unit": "heads",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "heads",
                        "unitLong": "heads"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "heads",
                        "unitLong": "heads"
                    }
                }
            },
            {
                "id": 11135,
                "aisle": "Produce",
                "image": "cauliflower.jpg",
                "consistency": "SOLID",
                "name": "cauliflower",
                "nameClean": "cauliflower",
                "original": "Cauliflower Mash",
                "originalName": "Cauliflower Mash",
                "amount": 6,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 2031,
                "aisle": "Spices and Seasonings",
                "image": "chili-powder.jpg",
                "consistency": "SOLID",
                "name": "cayenne pepper",
                "nameClean": "ground cayenne pepper",
                "original": "1/2 teaspoon cayenne pepper",
                "originalName": "cayenne pepper",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 5006,
                "aisle": "Meat",
                "image": "whole-chicken.jpg",
                "consistency": "SOLID",
                "name": "chicken",
                "nameClean": "whole chicken",
                "original": "Chicken (Baked chicken recipe adapted from Epicurious.com)",
                "originalName": "Chicken (Baked chicken recipe adapted from Epicurious.com)",
                "amount": 6,
                "unit": "servings",
                "meta": [
                    "(Baked chicken recipe adapted from Epicurious.com)"
                ],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 1002046,
                "aisle": "Condiments",
                "image": "dijon-mustard.jpg",
                "consistency": "LIQUID",
                "name": "dijon mustard",
                "nameClean": "creole mustard",
                "original": "3 tablespoons Dijon mustard",
                "originalName": "Dijon mustard",
                "amount": 3,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 3,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 1002024,
                "aisle": "Spices and Seasonings",
                "image": "dry-mustard.jpg",
                "consistency": "SOLID",
                "name": "dry mustard",
                "nameClean": "mustard powder",
                "original": "1 1/2 teaspoons dry mustard",
                "originalName": "dry mustard",
                "amount": 1.5,
                "unit": "teaspoons",
                "meta": [
                    "dry"
                ],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 1.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 20081,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "flour",
                "nameClean": "wheat flour",
                "original": "6 tablespoons flour",
                "originalName": "flour",
                "amount": 6,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic cloves",
                "nameClean": "garlic",
                "original": "2 garlic cloves, pressed",
                "originalName": "garlic cloves, pressed",
                "amount": 2,
                "unit": "",
                "meta": [
                    "pressed"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consistency": "LIQUID",
                "name": "lemon juice",
                "nameClean": "lemon juice",
                "original": "2 tablespoons fresh lemon juice",
                "originalName": "fresh lemon juice",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [
                    "fresh"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 9156,
                "aisle": "Produce",
                "image": "zest-lemon.jpg",
                "consistency": "SOLID",
                "name": "lemon peel",
                "nameClean": "lemon peel",
                "original": "2 teaspoons lemon peel",
                "originalName": "lemon peel",
                "amount": 2,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1179,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "sour-cream.jpg",
                "consistency": "SOLID",
                "name": "low fat sour cream",
                "nameClean": "light sour cream",
                "original": "1/4 cup low fat sour cream",
                "originalName": "low fat sour cream",
                "amount": 0.25,
                "unit": "cup",
                "meta": [
                    "sour",
                    "low fat"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 10018079,
                "aisle": "Bakery/Bread;Ethnic Foods;Oil, Vinegar, Salad Dressing;Baking",
                "image": "panko.jpg",
                "consistency": "SOLID",
                "name": "panko",
                "nameClean": "panko",
                "original": "1 1/2 cups whole wheat panko",
                "originalName": "whole wheat panko",
                "amount": 1.5,
                "unit": "cups",
                "meta": [
                    "whole wheat"
                ],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2028,
                "aisle": "Spices and Seasonings",
                "image": "paprika.jpg",
                "consistency": "SOLID",
                "name": "paprika",
                "nameClean": "paprika",
                "original": "1 teaspoon Paprika",
                "originalName": "Paprika",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 1033,
                "aisle": "Cheese",
                "image": "parmesan.jpg",
                "consistency": "SOLID",
                "name": "parmesan cheese",
                "nameClean": "parmesan",
                "original": "1/2 cup grated Parmesan cheese",
                "originalName": "grated Parmesan cheese",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "grated"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1036,
                "aisle": "Cheese",
                "image": "ricotta.png",
                "consistency": "SOLID",
                "name": "ricotta",
                "nameClean": "ricotta cheese",
                "original": "1/4 cup low fat ricotta",
                "originalName": "low fat ricotta",
                "amount": 0.25,
                "unit": "cup",
                "meta": [
                    "low fat"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1102047,
                "aisle": "Spices and Seasonings",
                "image": "salt-and-pepper.jpg",
                "consistency": "SOLID",
                "name": "salt and pepper",
                "nameClean": "salt and pepper",
                "original": "Salt and pepper",
                "originalName": "Salt and pepper",
                "amount": 6,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 1055062,
                "aisle": "Meat",
                "image": "chicken-breasts.png",
                "consistency": "SOLID",
                "name": "skinless boneless chicken breast",
                "nameClean": "boneless skinless chicken breast",
                "original": "2 pounds boneless, skinless chicken breast",
                "originalName": "boneless, skinless chicken breast",
                "amount": 2,
                "unit": "pounds",
                "meta": [
                    "boneless",
                    "skinless"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 907.185,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 2049,
                "aisle": "Produce;Spices and Seasonings",
                "image": "thyme.jpg",
                "consistency": "SOLID",
                "name": "thyme",
                "nameClean": "thyme",
                "original": "1 tablespoon minced thyme",
                "originalName": "minced thyme",
                "amount": 1,
                "unit": "tablespoon",
                "meta": [
                    "minced"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            }
        ],
        "id": 633624,
        "title": "Baked Fried Chicken With Cauliflower Mash",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://www.foodista.com/recipe/GPDLDNDC/baked-fried-chicken-with-cauliflower-mash",
        "image": "https://spoonacular.com/recipeImages/633624-556x370.jpg",
        "imageType": "jpg",
        "summary": "The recipe Baked Fried Chicken With Cauliflower Mash could satisfy your Southern craving in approximately <b>45 minutes</b>. This recipe makes 6 servings with <b>669 calories</b>, <b>67g of protein</b>, and <b>30g of fat</b> each. For <b>$4.03 per serving</b>, this recipe <b>covers 42%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up cayenne pepper, panko, cauliflower mash, and a few other things to make it today. To use up the lemon peel you could follow this main course with the <a href=\"https://spoonacular.com/recipes/lemon-syrup-cake-with-berries-and-lemon-curd-cream-189625\">Lemon Syrup Cake with Berries and Lemon-Curd Cream</a> as a dessert. A couple people made this recipe, and 19 would say it hit the spot. It works well as a main course. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/sticky-honey-sriracha-cauliflower-wings-baked-or-fried-841792\">Sticky Honey Sriracha Cauliflower \"wings\" (Baked or Fried)</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-mash-293168\">Cauliflower Mash</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-mash-812035\">Cauliflower mash</a>.",
        "cuisines": [
            "Southern"
        ],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [],
        "occasions": [],
        "instructions": "<ol><li>For marinade:</li><li>Fillet chicken breast in half to make thinner pieces, and cut in half again to make smaller pieces.</li><li>Whisk all marinade ingredients (except for the chicken) in large bowl.</li><li>Add chicken and coat in marinade.</li><li>Chill overnight for more intense flavor. But if you are short on time (which I usually am) it is ok to use right away as well.</li><li>For breading:</li><li>Preheat to 450F</li><li>Mix breading ingredients large bowl. Place wire rack on baking sheets. Remove chicken breast from bowl and place in coating mixture. Transfer to rack. Repeat with remaining chicken breasts.- Place chicken breasts on rack and spray with olive oil .</li><li>Bake chicken 20 minutes or until coating is browned and instant-read thermometer registers 155F.</li><li>For Cauliflower:</li><li>Cut up cauliflower in small pieces.</li><li>Place in large saut pan with about 1 cup of water (enough to cover the bottom of pan, plus a little extra to make sure it doesn't all evaporate)</li><li>Cook until tender.</li><li>Combine cauliflower with buttermilk, sour cream, ricotta and salt and pepper.</li><li>In batches, place in blender and puree until smooth. (if it is having a hard time blending, add either some chicken or vegetable stock, or even more buttermilk)</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "For marinade:Fillet chicken breast in half to make thinner pieces, and cut in half again to make smaller pieces.",
                        "ingredients": [
                            {
                                "id": 5062,
                                "name": "chicken breast",
                                "localizedName": "chicken breast",
                                "image": "chicken-breasts.png"
                            },
                            {
                                "id": 0,
                                "name": "marinade",
                                "localizedName": "marinade",
                                "image": "seasoning.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Whisk all marinade ingredients (except for the chicken) in large bowl.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "marinade",
                                "localizedName": "marinade",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404661,
                                "name": "whisk",
                                "localizedName": "whisk",
                                "image": "whisk.png"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add chicken and coat in marinade.Chill overnight for more intense flavor. But if you are short on time (which I usually am) it is ok to use right away as well.For breading:Preheat to 450F",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "marinade",
                                "localizedName": "marinade",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Mix breading ingredients large bowl.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Place wire rack on baking sheets.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404727,
                                "name": "baking sheet",
                                "localizedName": "baking sheet",
                                "image": "baking-sheet.jpg"
                            },
                            {
                                "id": 405900,
                                "name": "wire rack",
                                "localizedName": "wire rack",
                                "image": "wire-rack.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Remove chicken breast from bowl and place in coating mixture.",
                        "ingredients": [
                            {
                                "id": 5062,
                                "name": "chicken breast",
                                "localizedName": "chicken breast",
                                "image": "chicken-breasts.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 7,
                        "step": "Transfer to rack. Repeat with remaining chicken breasts.-",
                        "ingredients": [
                            {
                                "id": 5062,
                                "name": "chicken breast",
                                "localizedName": "chicken breast",
                                "image": "chicken-breasts.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 8,
                        "step": "Place chicken breasts on rack and spray with olive oil .",
                        "ingredients": [
                            {
                                "id": 5062,
                                "name": "chicken breast",
                                "localizedName": "chicken breast",
                                "image": "chicken-breasts.png"
                            },
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            },
            {
                "name": "Bake chicken 20 minutes or until coating is browned and instant-read thermometer registers 155F.For Cauliflower",
                "steps": [
                    {
                        "number": 1,
                        "step": "Cut up cauliflower in small pieces.",
                        "ingredients": [
                            {
                                "id": 11135,
                                "name": "cauliflower",
                                "localizedName": "cauliflower",
                                "image": "cauliflower.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Place in large saut pan with about 1 cup of water (enough to cover the bottom of pan, plus a little extra to make sure it doesn't all evaporate)Cook until tender.",
                        "ingredients": [
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Combine cauliflower with buttermilk, sour cream, ricotta and salt and pepper.In batches, place in blender and puree until smooth. (if it is having a hard time blending, add either some chicken or vegetable stock, or even more buttermilk)",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 6615,
                                "name": "vegetable stock",
                                "localizedName": "vegetable stock",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 11135,
                                "name": "cauliflower",
                                "localizedName": "cauliflower",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 1230,
                                "name": "buttermilk",
                                "localizedName": "buttermilk",
                                "image": "buttermilk.jpg"
                            },
                            {
                                "id": 1056,
                                "name": "sour cream",
                                "localizedName": "sour cream",
                                "image": "sour-cream.jpg"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 1036,
                                "name": "ricotta cheese",
                                "localizedName": "ricotta cheese",
                                "image": "ricotta.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404726,
                                "name": "blender",
                                "localizedName": "blender",
                                "image": "blender.png"
                            }
                        ]
                    }
                ]
            }
        ],
        "sourceName": null,
        "creditsText": null,
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/baked-fried-chicken-with-cauliflower-mash-633624"
    },
    {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 11,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 17,
        "healthScore": 24,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 136.55,
        "extendedIngredients": [
            {
                "id": 9037,
                "aisle": "Produce",
                "image": "avocado.jpg",
                "consistency": "SOLID",
                "name": "avocados",
                "nameClean": "avocado",
                "original": "4 small avocados, split lengthwise and seed removed",
                "originalName": "avocados, split lengthwise and seed removed",
                "amount": 4,
                "unit": "small",
                "meta": [
                    "split"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "small",
                        "unitLong": "smalls"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "small",
                        "unitLong": "smalls"
                    }
                }
            },
            {
                "id": 1002014,
                "aisle": "Spices and Seasonings",
                "image": "ground-cumin.jpg",
                "consistency": "SOLID",
                "name": "cumin",
                "nameClean": "cumin",
                "original": "1/2 teaspoon cumin",
                "originalName": "cumin",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 11167,
                "aisle": "Produce",
                "image": "corn-on-the-cob.jpg",
                "consistency": "SOLID",
                "name": "ear of corn",
                "nameClean": "corn on the cob",
                "original": "1 ear of corn, peeled, shucked and split in half",
                "originalName": "ear of corn, peeled, shucked and split in half",
                "amount": 1,
                "unit": "",
                "meta": [
                    "split",
                    "peeled"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 11165,
                "aisle": "Produce;Spices and Seasonings",
                "image": "cilantro.png",
                "consistency": "SOLID",
                "name": "fresh cilantro",
                "nameClean": "cilantro",
                "original": "2 teaspoons fresh cilantro, chopped",
                "originalName": "fresh cilantro, chopped",
                "amount": 2,
                "unit": "teaspoons",
                "meta": [
                    "fresh",
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "2 cloves garlic, minced",
                "originalName": "garlic, minced",
                "amount": 2,
                "unit": "cloves",
                "meta": [
                    "minced"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "cloves",
                        "unitLong": "cloves"
                    }
                }
            },
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "ground pepper",
                "nameClean": "black pepper",
                "original": "1/2 teaspoon ground red pepper",
                "originalName": "ground red pepper",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [
                    "red"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "ground pepper",
                "nameClean": "black pepper",
                "original": "1 teaspoon fresh ground black pepper, or to taste",
                "originalName": "fresh ground black pepper, or to taste",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [
                    "fresh",
                    "black",
                    "to taste"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 11979,
                "aisle": "Canned and Jarred;Produce;Ethnic Foods",
                "image": "jalapeno-pepper.png",
                "consistency": "SOLID",
                "name": "jalapeno peppers",
                "nameClean": "jalapeno pepper",
                "original": "2 jalapeño peppers, split lengthwise, stem and seeds removed",
                "originalName": "jalapeño peppers, split lengthwise, stem and seeds removed",
                "amount": 2,
                "unit": "",
                "meta": [
                    "split",
                    "seeds removed"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 9159,
                "aisle": "Produce",
                "image": "lime.jpg",
                "consistency": "SOLID",
                "name": "lime",
                "nameClean": "lime",
                "original": "1 lime",
                "originalName": "lime",
                "amount": 1,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 4053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "olive oil",
                "nameClean": "olive oil",
                "original": "Olive oil to brush vegetables",
                "originalName": "Olive oil to brush vegetables",
                "amount": 8,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 8,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 8,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 11282,
                "aisle": "Produce",
                "image": "brown-onion.png",
                "consistency": "SOLID",
                "name": "onion",
                "nameClean": "onion",
                "original": "1 small onion, cut into wedges",
                "originalName": "onion, cut into wedges",
                "amount": 1,
                "unit": "small",
                "meta": [
                    "cut into wedges"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "small",
                        "unitLong": "small"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "small",
                        "unitLong": "small"
                    }
                }
            },
            {
                "id": 12151,
                "aisle": "Nuts;Savory Snacks",
                "image": "pistachios.jpg",
                "consistency": "SOLID",
                "name": "pistachios",
                "nameClean": "pistachio nuts",
                "original": "1/2 cup shelled pistachios, toasted and coarsely chopped",
                "originalName": "shelled pistachios, toasted and coarsely chopped",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "shelled",
                    "toasted",
                    "coarsely chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "1 teaspoon salt, or to taste",
                "originalName": "salt, or to taste",
                "amount": 1,
                "unit": "teaspoon",
                "meta": [
                    "to taste"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 11529,
                "aisle": "Produce",
                "image": "tomato.png",
                "consistency": "SOLID",
                "name": "tomatoes",
                "nameClean": "tomato",
                "original": "2 medium tomatoes, seeds removed and diced",
                "originalName": "tomatoes, seeds removed and diced",
                "amount": 2,
                "unit": "medium",
                "meta": [
                    "diced",
                    "seeds removed and "
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "medium",
                        "unitLong": "mediums"
                    }
                }
            }
        ],
        "id": 645730,
        "title": "Grilled Guacamole with Pistachios",
        "readyInMinutes": 45,
        "servings": 8,
        "sourceUrl": "http://www.foodista.com/recipe/T2RCLMGG/grilled-guacamole-with-pistachios",
        "image": "https://spoonacular.com/recipeImages/645730-556x370.jpg",
        "imageType": "jpg",
        "summary": "The recipe Grilled Guacamole with Pistachios is ready <b>in about 45 minutes</b> and is definitely an amazing <b>gluten free and vegan</b> option for lovers of Mexican food. This hor d'oeuvre has <b>355 calories</b>, <b>5g of protein</b>, and <b>33g of fat</b> per serving. For <b>$1.38 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. A couple people made this recipe, and 17 would say it hit the spot. Head to the store and pick up olive oil to brush vegetables, salt, onion, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 83%</b>. This score is great. Try <a href=\"https://spoonacular.com/recipes/for-guacamole-with-pistachios-551880\">for Guacamole with Pistachios</a>, <a href=\"https://spoonacular.com/recipes/guacamole-grilled-sandwich-guacamole-toast-607843\">Guacamole Grilled Sandwich | Guacamole Toast</a>, and <a href=\"https://spoonacular.com/recipes/grilled-peaches-with-mascarpone-and-pistachios-558635\">Grilled Peaches with Mascarpone and Pistachios</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "side dish"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ],
        "occasions": [
            "father's day",
            "4th of july",
            "summer"
        ],
        "instructions": "<ol><li>Lightly brush the avocado flesh, corn, onion, and jalapeno peppers with olive oil.</li><li>Place all but the avocado in a grill basket and on the grill over medium-high heat.</li><li>Place the avocados, cut side up, directly on the grill and cook for 2 minutes, then flip and cook, cut side down, for another 2 minutes. When finished, remove and set aside.</li><li>Allow the other vegetables to cook, turning, until they are tender and lightly charred (10-12 minutes). The corn may take a few minutes longer than the other vegetables. If needed, remove the other vegetables and allow the corn to continue to cook.</li><li>When the vegetables have cooled enough to touch, cut the corn off the cob, and dice the other vegetables.</li><li>In a large bowl, combine the tomatoes, corn, onion, peppers, garlic, and cilantro, and toss to mix.</li><li>Add the avocado to the mixture, lightly tossing and mashing it.</li><li>Add the lime juice and seasoning. Mix together and adjust as needed.</li><li>Add the pistachios, toss the mixture again and serve.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Lightly brush the avocado flesh, corn, onion, and jalapeno peppers with olive oil.",
                        "ingredients": [
                            {
                                "id": 11979,
                                "name": "jalapeno pepper",
                                "localizedName": "jalapeno pepper",
                                "image": "jalapeno-pepper.png"
                            },
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 9037,
                                "name": "avocado",
                                "localizedName": "avocado",
                                "image": "avocado.jpg"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 11168,
                                "name": "corn",
                                "localizedName": "corn",
                                "image": "corn.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Place all but the avocado in a grill basket and on the grill over medium-high heat.",
                        "ingredients": [
                            {
                                "id": 9037,
                                "name": "avocado",
                                "localizedName": "avocado",
                                "image": "avocado.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404706,
                                "name": "grill",
                                "localizedName": "grill",
                                "image": "grill.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Place the avocados, cut side up, directly on the grill and cook for 2 minutes, then flip and cook, cut side down, for another 2 minutes. When finished, remove and set aside.Allow the other vegetables to cook, turning, until they are tender and lightly charred (10-12 minutes). The corn may take a few minutes longer than the other vegetables. If needed, remove the other vegetables and allow the corn to continue to cook.When the vegetables have cooled enough to touch, cut the corn off the cob, and dice the other vegetables.In a large bowl, combine the tomatoes, corn, onion, peppers, garlic, and cilantro, and toss to mix.",
                        "ingredients": [
                            {
                                "id": 11583,
                                "name": "vegetable",
                                "localizedName": "vegetable",
                                "image": "mixed-vegetables.png"
                            },
                            {
                                "id": 9037,
                                "name": "avocado",
                                "localizedName": "avocado",
                                "image": "avocado.jpg"
                            },
                            {
                                "id": 11165,
                                "name": "cilantro",
                                "localizedName": "cilantro",
                                "image": "cilantro.png"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 10111333,
                                "name": "peppers",
                                "localizedName": "peppers",
                                "image": "green-pepper.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 11168,
                                "name": "corn",
                                "localizedName": "corn",
                                "image": "corn.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404706,
                                "name": "grill",
                                "localizedName": "grill",
                                "image": "grill.jpg"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ],
                        "length": {
                            "number": 16,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Add the avocado to the mixture, lightly tossing and mashing it.",
                        "ingredients": [
                            {
                                "id": 9037,
                                "name": "avocado",
                                "localizedName": "avocado",
                                "image": "avocado.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 5,
                        "step": "Add the lime juice and seasoning.",
                        "ingredients": [
                            {
                                "id": 9160,
                                "name": "lime juice",
                                "localizedName": "lime juice",
                                "image": "lime-juice.png"
                            },
                            {
                                "id": 1042027,
                                "name": "seasoning",
                                "localizedName": "seasoning",
                                "image": "seasoning.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 6,
                        "step": "Mix together and adjust as needed.",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 7,
                        "step": "Add the pistachios, toss the mixture again and serve.",
                        "ingredients": [
                            {
                                "id": 12151,
                                "name": "pistachio nuts",
                                "localizedName": "pistachio nuts",
                                "image": "pistachios.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/grilled-guacamole-with-pistachios-645730"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 16,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 7,
        "healthScore": 27,
        "pricePerServing": 283.38,
        "extendedIngredients": [
            {
                "id": 93828,
                "aisle": "Canned and Jarred",
                "image": "artichoke-hearts.png",
                "consistency": "SOLID",
                "name": "artichoke hearts",
                "nameClean": "marinated artichokes",
                "original": "1 cup canned artichoke hearts, chopped",
                "originalName": "canned artichoke hearts, chopped",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "canned",
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2054,
                "aisle": "Canned and Jarred",
                "image": "capers.jpg",
                "consistency": "SOLID",
                "name": "capers",
                "nameClean": "capers",
                "original": "2 Tablespoons Capers",
                "originalName": "Capers",
                "amount": 2,
                "unit": "Tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 5062,
                "aisle": "Meat",
                "image": "chicken-breasts.png",
                "consistency": "SOLID",
                "name": "chicken breasts",
                "nameClean": "chicken breast",
                "original": "4 boneless chicken breasts cut in to 1 inch cubes",
                "originalName": "boneless chicken breasts cut in to 1 inch cubes",
                "amount": 4,
                "unit": "",
                "meta": [
                    "boneless",
                    "cut in to 1 inch cubes"
                ],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "extra virgin olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "4 tablespoons extra virgin olive oil",
                "originalName": "extra virgin olive oil",
                "amount": 4,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 11297,
                "aisle": "Produce;Spices and Seasonings",
                "image": "parsley.jpg",
                "consistency": "SOLID",
                "name": "flat leaf parsley",
                "nameClean": "parsley",
                "original": "2 tablespoons flat leaf parsley",
                "originalName": "flat leaf parsley",
                "amount": 2,
                "unit": "tablespoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 2,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 20081,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "flour",
                "nameClean": "wheat flour",
                "original": "All-purpose flour for dredging",
                "originalName": "All-purpose flour for dredging",
                "amount": 6,
                "unit": "servings",
                "meta": [
                    "all-purpose",
                    "for dredging"
                ],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 9152,
                "aisle": "Produce",
                "image": "lemon-juice.jpg",
                "consistency": "LIQUID",
                "name": "lemon juice",
                "nameClean": "lemon juice",
                "original": "1/3 cup lemon juice",
                "originalName": "lemon juice",
                "amount": 0.33333334,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.333,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 78.863,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1033,
                "aisle": "Cheese",
                "image": "parmesan.jpg",
                "consistency": "SOLID",
                "name": "parmesan cheese",
                "nameClean": "parmesan",
                "original": "Freshly grated Parmesan cheese",
                "originalName": "Freshly grated Parmesan cheese",
                "amount": 6,
                "unit": "servings",
                "meta": [
                    "freshly grated"
                ],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 11120420,
                "aisle": "Pasta and Rice",
                "image": "penne-pasta.jpg",
                "consistency": "SOLID",
                "name": "penne rigate",
                "nameClean": "penne",
                "original": "1 12 oz box of penne rigate, cooked",
                "originalName": "box of penne rigate, cooked",
                "amount": 12,
                "unit": "oz",
                "meta": [
                    "cooked"
                ],
                "measures": {
                    "us": {
                        "amount": 12,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 340.194,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 1002030,
                "aisle": "Spices and Seasonings",
                "image": "pepper.jpg",
                "consistency": "SOLID",
                "name": "pepper",
                "nameClean": "black pepper",
                "original": "1/2 teaspoon pepper",
                "originalName": "pepper",
                "amount": 0.5,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 6970,
                "aisle": "Canned and Jarred",
                "image": "chicken-broth.png",
                "consistency": "LIQUID",
                "name": "reduced sodium chicken broth",
                "nameClean": "low sodium chicken broth",
                "original": "1 cup reduced sodium chicken broth",
                "originalName": "reduced sodium chicken broth",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "salt",
                "originalName": "salt",
                "amount": 6,
                "unit": "servings",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 6,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            }
        ],
        "id": 638249,
        "title": "Chicken Piccata with Artichokes",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://www.foodista.com/recipe/XRTTB44S/chicken-piccata-with-artichokes",
        "image": "https://spoonacular.com/recipeImages/638249-556x370.jpg",
        "imageType": "jpg",
        "summary": "Chicken Piccata with Artichokes might be just the main course you are searching for. One serving contains <b>571 calories</b>, <b>36g of protein</b>, and <b>23g of fat</b>. For <b>$2.17 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. 7 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. A mixture of extra virgin olive oil, capers, penne rigate, and a handful of other ingredients are all it takes to make this recipe so scrumptious. To use up the lemon juice you could follow this main course with the <a href=\"https://spoonacular.com/recipes/lemon-shortbread-cookies-with-lemon-icing-a-tribute-to-aunt-roxanne-487814\">Lemon Shortbread Cookies with Lemon Icing {A Tribute to Aunt Roxanne}</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 72%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/chicken-piccata-with-artichokes-860213\">Chicken Piccata with Artichokes</a>, <a href=\"https://spoonacular.com/recipes/chicken-piccata-247599\">Chicken Piccata</a>, and <a href=\"https://spoonacular.com/recipes/chicken-piccata-79601\">Chicken Piccata</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [],
        "occasions": [],
        "instructions": "<ol><li>In a large bowl combine chicken with salt and pepper.</li><li>Lightly dredge the chicken.</li><li>In a large skillet on medium heat pour in extra virgin olive oil.</li><li>Add chicken and cook until brown and juices run clear, about 12 minutes.</li><li>Stir in chicken broth, lemon juice, capers and artichokes and cook for 3 minutes.</li><li>Reduce to simmer for 3 minutes.</li><li>Stir in penne rigate until combined.</li><li>Add in parsley and transfer to serving bowl.</li><li>Sprinkle with parmesan cheese.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "In a large bowl combine chicken with salt and pepper.Lightly dredge the chicken.In a large skillet on medium heat pour in extra virgin olive oil.",
                        "ingredients": [
                            {
                                "id": 1034053,
                                "name": "extra virgin olive oil",
                                "localizedName": "extra virgin olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add chicken and cook until brown and juices run clear, about 12 minutes.Stir in chicken broth, lemon juice, capers and artichokes and cook for 3 minutes.Reduce to simmer for 3 minutes.Stir in penne rigate until combined.",
                        "ingredients": [
                            {
                                "id": 6194,
                                "name": "chicken broth",
                                "localizedName": "chicken broth",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 11120420,
                                "name": "penne",
                                "localizedName": "penne",
                                "image": "penne-pasta.jpg"
                            },
                            {
                                "id": 9152,
                                "name": "lemon juice",
                                "localizedName": "lemon juice",
                                "image": "lemon-juice.jpg"
                            },
                            {
                                "id": 11007,
                                "name": "artichoke",
                                "localizedName": "artichoke",
                                "image": "artichokes.png"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 2054,
                                "name": "capers",
                                "localizedName": "capers",
                                "image": "capers.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 18,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Add in parsley and transfer to serving bowl.",
                        "ingredients": [
                            {
                                "id": 11297,
                                "name": "parsley",
                                "localizedName": "parsley",
                                "image": "parsley.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 4,
                        "step": "Sprinkle with parmesan cheese.",
                        "ingredients": [
                            {
                                "id": 1033,
                                "name": "parmesan",
                                "localizedName": "parmesan",
                                "image": "parmesan.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "sourceName": null,
        "creditsText": null,
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/chicken-piccata-with-artichokes-638249"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 41,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 12,
        "healthScore": 7,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 203.67,
        "extendedIngredients": [
            {
                "id": 18334,
                "aisle": "Refrigerated",
                "image": "pie-crust.jpg",
                "consistency": "SOLID",
                "name": "pie crust",
                "nameClean": "refrigerated pie crust",
                "original": "Crust",
                "originalName": "Crust",
                "amount": 1,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 10018617,
                "aisle": "Sweet Snacks;Baking",
                "image": "graham-crackers.jpg",
                "consistency": "SOLID",
                "name": "graham cracker crumbs",
                "nameClean": "graham cracker crumbs",
                "original": "1 1/2 cups graham cracker crumbs",
                "originalName": "graham cracker crumbs",
                "amount": 1.5,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 12109,
                "aisle": "Baking",
                "image": "shredded-coconut.jpg",
                "consistency": "SOLID",
                "name": "sweetened coconut",
                "nameClean": "sweetened coconut flakes",
                "original": "1 1/2 cups sweetened flaked coconut, toasted",
                "originalName": "sweetened flaked coconut, toasted",
                "amount": 1.5,
                "unit": "cups",
                "meta": [
                    "sweetened",
                    "flaked",
                    "toasted"
                ],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 354.882,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 12061,
                "aisle": "Nuts",
                "image": "almonds.jpg",
                "consistency": "SOLID",
                "name": "almonds",
                "nameClean": "almonds",
                "original": "1/2 cup sliced almonds, toasted (about 2 ounces)",
                "originalName": "1/2 cup sliced almonds, toasted (about",
                "amount": 2,
                "unit": "ounces",
                "meta": [
                    "toasted",
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 2,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 56.699,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "sugar",
                "original": "1/4 cup sugar",
                "originalName": "sugar",
                "amount": 0.25,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1145,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "unsalted butter",
                "nameClean": "unsalted butter",
                "original": "1/2 cup (1 stick) unsalted butter, melted",
                "originalName": "(1 stick) unsalted butter, melted",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "unsalted",
                    "melted",
                    "(1 stick)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1017,
                "aisle": "Cheese",
                "image": "cream-cheese.jpg",
                "consistency": "SOLID",
                "name": "cream cheese",
                "nameClean": "cream cheese",
                "original": "8 ounces packages cream cheese, room temperature",
                "originalName": "packages cream cheese, room temperature",
                "amount": 8,
                "unit": "ounces",
                "meta": [
                    "room temperature"
                ],
                "measures": {
                    "us": {
                        "amount": 8,
                        "unitShort": "oz",
                        "unitLong": "ounces"
                    },
                    "metric": {
                        "amount": 226.796,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 19335,
                "aisle": "Baking",
                "image": "sugar-in-bowl.png",
                "consistency": "SOLID",
                "name": "sugar",
                "nameClean": "sugar",
                "original": "1 cup sugar",
                "originalName": "sugar",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1123,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "egg.png",
                "consistency": "SOLID",
                "name": "eggs",
                "nameClean": "egg",
                "original": "4 large eggs",
                "originalName": "eggs",
                "amount": 4,
                "unit": "large",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4,
                        "unitShort": "large",
                        "unitLong": "larges"
                    },
                    "metric": {
                        "amount": 4,
                        "unitShort": "large",
                        "unitLong": "larges"
                    }
                }
            },
            {
                "id": 12109,
                "aisle": "Baking",
                "image": "shredded-coconut.jpg",
                "consistency": "SOLID",
                "name": "sweetened coconut",
                "nameClean": "sweetened coconut flakes",
                "original": "1 cup sweetened flaked coconut, toasted",
                "originalName": "sweetened flaked coconut, toasted",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "sweetened",
                    "flaked",
                    "toasted"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1032050,
                "aisle": "Baking",
                "image": "extract.png",
                "consistency": "LIQUID",
                "name": "coconut extract",
                "nameClean": "coconut extract",
                "original": "1 tablespoon coconut extract",
                "originalName": "coconut extract",
                "amount": 1,
                "unit": "tablespoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 12061,
                "aisle": "Nuts",
                "image": "almonds.jpg",
                "consistency": "SOLID",
                "name": "almonds",
                "nameClean": "almonds",
                "original": "1 cup sliced almonds, toasted",
                "originalName": "sliced almonds, toasted",
                "amount": 1,
                "unit": "cup",
                "meta": [
                    "toasted",
                    "sliced"
                ],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 98998,
                "aisle": "Condiments",
                "image": "dark-sauce.jpg",
                "consistency": "SOLID",
                "name": "balsamic glaze",
                "nameClean": "balsamic glaze",
                "original": "Glaze",
                "originalName": "Glaze",
                "amount": 1,
                "unit": "serving",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    },
                    "metric": {
                        "amount": 1,
                        "unitShort": "serving",
                        "unitLong": "serving"
                    }
                }
            },
            {
                "id": 10019903,
                "aisle": "Baking",
                "image": "chocolate-chips.jpg",
                "consistency": "SOLID",
                "name": "semisweet chocolate chips",
                "nameClean": "semisweet chocolate chips",
                "original": "1 cup semisweet chocolate chips",
                "originalName": "semisweet chocolate chips",
                "amount": 1,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 1001053,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "fluid-cream.jpg",
                "consistency": "LIQUID",
                "name": "whipping cream",
                "nameClean": "whipping cream",
                "original": "3/4 cup whipping cream",
                "originalName": "whipping cream",
                "amount": 0.75,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.75,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 177.441,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2050,
                "aisle": "Baking",
                "image": "vanilla-extract.jpg",
                "consistency": "LIQUID",
                "name": "vanilla extract",
                "nameClean": "vanilla extract",
                "original": "1 1/2 teaspoons vanilla extract",
                "originalName": "vanilla extract",
                "amount": 1.5,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 1.5,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            }
        ],
        "id": 639714,
        "title": "Coconut Almond Cheesecake",
        "readyInMinutes": 45,
        "servings": 8,
        "sourceUrl": "https://www.foodista.com/recipe/LVJ2N25Q/coconut-almond-cheesecake",
        "image": "https://spoonacular.com/recipeImages/639714-556x370.jpg",
        "imageType": "jpg",
        "summary": "Coconut Almond Cheesecake requires approximately <b>approximately 45 minutes</b> from start to finish. For <b>$2.04 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. One portion of this dish contains approximately <b>15g of protein</b>, <b>63g of fat</b>, and a total of <b>919 calories</b>. 12 people were impressed by this recipe. A mixture of butter, graham cracker crumbs, almonds, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. Overall, this recipe earns a <b>solid spoonacular score of 45%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/chocolate-coconut-almond-cheesecake-54324\">Chocolate Coconut Almond Cheesecake</a>, <a href=\"https://spoonacular.com/recipes/chocolate-glazed-coconut-almond-cheesecake-435988\">Chocolate-Glazed Coconut Almond Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/mocha-almond-cheesecake-622446\">Mocha-Almond Cheesecake</a>.",
        "cuisines": [],
        "dishTypes": [],
        "diets": [],
        "occasions": [],
        "instructions": "For crust: Preheat oven to 350F. Wrap outside of 9-inch-diameter springform pan with 2 3/4-inch-high sides with foil.\nFinely grind cracker crumbs, coconut, almonds and sugar in food processor. Add butter; process until moist crumbs form. Press mixture onto bottom and 1 inch up sides of pan. Bake crust until set and beginning to brown, about 12 minutes. Cool. Reduce oven temperature to 325F.\nFor filling: Using electric mixer, beat cream cheese and sugar in large bowl until smooth. Add eggs 1 at a time, beating just until blended after each addition. Mix in coconut and extract . Fold in almonds. Transfer filling to crust. Bake until cake is puffed and no longer moves when pan is shaken, about 1 hour 15 minutes. Cool completely on rack.\nFor glaze: Combine 1 cup chocolate chips, cream and vanilla in small saucepan. Stir over medium-low heat until smooth. Cool until glaze begins to thicken but can still be poured, about 30 minutes. Pour glaze over cooled cake; spread evenly. Chill cake overnight.\nRun small knife around sides of cake to loosen. Release pan sides.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "For crust: Preheat oven to 350F. Wrap outside of 9-inch-diameter springform pan with 2 3/4-inch-high sides with foil.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "crust",
                                "localizedName": "crust",
                                "image": ""
                            },
                            {
                                "id": 10018364,
                                "name": "wrap",
                                "localizedName": "wrap",
                                "image": "flour-tortilla.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404650,
                                "name": "springform pan",
                                "localizedName": "springform pan",
                                "image": "cake-pan.png"
                            },
                            {
                                "id": 404765,
                                "name": "aluminum foil",
                                "localizedName": "aluminum foil",
                                "image": "aluminum-foil.png"
                            },
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg",
                                "temperature": {
                                    "number": 350,
                                    "unit": "Fahrenheit"
                                }
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Finely grind cracker crumbs, coconut, almonds and sugar in food processor.",
                        "ingredients": [
                            {
                                "id": 10018621,
                                "name": "cracker crumbs",
                                "localizedName": "cracker crumbs",
                                "image": "crackers.jpg"
                            },
                            {
                                "id": 12061,
                                "name": "almonds",
                                "localizedName": "almonds",
                                "image": "almonds.jpg"
                            },
                            {
                                "id": 12104,
                                "name": "coconut",
                                "localizedName": "coconut",
                                "image": "coconut.jpg"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404771,
                                "name": "food processor",
                                "localizedName": "food processor",
                                "image": "food-processor.png"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add butter; process until moist crumbs form. Press mixture onto bottom and 1 inch up sides of pan.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 4,
                        "step": "Bake crust until set and beginning to brown, about 12 minutes. Cool. Reduce oven temperature to 325F.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "crust",
                                "localizedName": "crust",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg",
                                "temperature": {
                                    "number": 325,
                                    "unit": "Fahrenheit"
                                }
                            }
                        ],
                        "length": {
                            "number": 12,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "For filling: Using electric mixer, beat cream cheese and sugar in large bowl until smooth.",
                        "ingredients": [
                            {
                                "id": 1017,
                                "name": "cream cheese",
                                "localizedName": "cream cheese",
                                "image": "cream-cheese.jpg"
                            },
                            {
                                "id": 19335,
                                "name": "sugar",
                                "localizedName": "sugar",
                                "image": "sugar-in-bowl.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404628,
                                "name": "hand mixer",
                                "localizedName": "hand mixer",
                                "image": "hand-mixer.png"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Add eggs 1 at a time, beating just until blended after each addition.",
                        "ingredients": [
                            {
                                "id": 1123,
                                "name": "egg",
                                "localizedName": "egg",
                                "image": "egg.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 7,
                        "step": "Mix in coconut and extract . Fold in almonds.",
                        "ingredients": [
                            {
                                "id": 12061,
                                "name": "almonds",
                                "localizedName": "almonds",
                                "image": "almonds.jpg"
                            },
                            {
                                "id": 12104,
                                "name": "coconut",
                                "localizedName": "coconut",
                                "image": "coconut.jpg"
                            },
                            {
                                "id": 0,
                                "name": "extract",
                                "localizedName": "extract",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 8,
                        "step": "Transfer filling to crust.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "crust",
                                "localizedName": "crust",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 9,
                        "step": "Bake until cake is puffed and no longer moves when pan is shaken, about 1 hour 15 minutes. Cool completely on rack.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            },
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ],
                        "length": {
                            "number": 75,
                            "unit": "minutes"
                        }
                    }
                ]
            },
            {
                "name": "For glaze",
                "steps": [
                    {
                        "number": 1,
                        "step": "Combine 1 cup chocolate chips, cream and vanilla in small saucepan. Stir over medium-low heat until smooth. Cool until glaze begins to thicken but can still be poured, about 30 minutes.",
                        "ingredients": [
                            {
                                "id": 99278,
                                "name": "chocolate chips",
                                "localizedName": "chocolate chips",
                                "image": "chocolate-chips.jpg"
                            },
                            {
                                "id": 1052050,
                                "name": "vanilla",
                                "localizedName": "vanilla",
                                "image": "vanilla.jpg"
                            },
                            {
                                "id": 1053,
                                "name": "cream",
                                "localizedName": "cream",
                                "image": "fluid-cream.jpg"
                            },
                            {
                                "id": 0,
                                "name": "glaze",
                                "localizedName": "glaze",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            }
                        ],
                        "length": {
                            "number": 30,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Pour glaze over cooled cake; spread evenly. Chill cake overnight.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            },
                            {
                                "id": 0,
                                "name": "glaze",
                                "localizedName": "glaze",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Run small knife around sides of cake to loosen. Release pan sides.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404745,
                                "name": "knife",
                                "localizedName": "knife",
                                "image": "chefs-knife.jpg"
                            },
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/coconut-almond-cheesecake-639714"
    }
]

// console.log(tempFoodData)
function Popular() {
  const [popularFoodData, setPopularFoodData] = useState([])

    useEffect(() => { // before render, fetch recipes
      getPopular();
    }, [])
  
  // api route 'https://api.spoonacular.com/recipes/random'
  const getPopular = async () => {
    // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&number=10`)
    // const data = await api.json()
    // setPopularFoodData(data.recipes)

    // use temp data
    setPopularFoodData(tempFoodData)
  }
  
  // console.log(popularFoodData)

  return (
    <div>
          <Wrapper>  {/* Key goes on the outermost returned div */}
            <h3>Popular Dishes</h3>
            <Splide options={splideOptions}>
              {popularFoodData.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                      <Card key={recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                      </Card>
                    </SplideSlide>
                  )
                })}
            </Splide>
          </Wrapper>
    </div>
  )
}

const splideOptions = {
  perPage: 4,
  arrows: false,
  drag: "free",
  gap: "2rem",
}

const Wrapper = styled.div`
margin: 4rem 0rem;`;

const Card = styled.div`
minHeight: 25rem;
minWidth: 25rem;
overflow: hidden;

img{
  border-radius: 2rem;
  border: 2px solid black;
  height: 200px;
  maxWidth: 300px;
  object-fit: cover;

}`;

export default Popular