[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express JSON API lab

Use this template to structure your READMEs for labs.

Be sure to include a recent [`LICENSE`](LICENSE) and Markdown linter
configuration ([`.remarkrc`](.remarkrc)).

## Prerequisites

- Express routes
- Mongoose models + schemas

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

For this lab you'll be building a JSON API using express, from scratch. The
provided starter files are here just to give you a guideline - you must create
everything that isn't the seed data.

Run `node db/getPeople.js`. This will retrieve a list of 20 random people from
the API. If it fails, wait 10 seconds and try again.

- Using the newly retrieved people data (in `db/people.json`), build out the
  Person schema.
- Build out the Show model. Include the following properties:
  - url
  - name
  - language
  - genres
  - status
  - runtime
  - rating
  - weight
  - all image links
  - summary
- Write the logic to seed the database with both datasets.
- Set up your express server, routes, and controller. Put `/api` as the prefix
  to all your routes.

Your server should have the following routes/endpoints. How you choose to name
them is up to you. You should follow the standard HTTP verb / action convention,
e.g. using GET for retrieving data.

- List all shows/people
- List a single show/person by id
- List a single show/person by name
- Update a single show/person by id
- Delete a show/person by id

## Bonus

- Update your `list all shows` method to only return some of the properties, for
  example: name, id, url, summary. the `list a single show by id` method should
  return everything.
- Update your `list a single show by name` method to be more flexible in
  searching. For example, you could convert everything to lowercase, and get
  creative with how you compare if names are equal.

## Double Bonus

Add a third model for episodes. Reference the episodes to the shows by id. Then
pick 10 or so shows and populate your database with them, using
[axios](https://github.com/axios/axios) to help you make requests.

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
