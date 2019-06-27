# Map-It !
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9d10af9d6db3424293d6440ac125dbc8)](https://app.codacy.com/app/PranjalGupta2199/Map-It?utm_source=github.com&utm_medium=referral&utm_content=PranjalGupta2199/Map-It&utm_campaign=Badge_Grade_Dashboard) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=PranjalGupta2199_Map-It&metric=security_rating)](https://sonarcloud.io/dashboard?id=PranjalGupta2199_Map-It) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=PranjalGupta2199_Map-It&metric=alert_status)](https://sonarcloud.io/dashboard?id=PranjalGupta2199_Map-It) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=PranjalGupta2199_Map-It&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=PranjalGupta2199_Map-It)

A Seamless Web Mapping Service.

This repository is a part of the ongoing project during my internship at BISAG, Gujarat.

### Technologies Used:
* ReactJS + Jest
* Flask + PyTest
* PostGIS + Postgres SQL
* GeoServer (Java) + GeoWebCache (Java)
* Requests (Python)
* Bootstrap 4

### Contributors:
* [Pranjal Gupta](https://github.com/PranjalGupta2199)

### Contributing

We love contributions. That out of the way, an average
contribution would involve the following:

1. Fork this repository in your account.
2. Clone it on your local machine.
3. Add a new remote using `git remote add upstream https://github.com/PranjalGupta2199/Map-It.git`.
4. Create a new feature branch with `git checkout -b my-feature`.
5. Make your changes.
6. Commit your changes.
7. Rebase your commits with `upstream/master`:
  - `git checkout master`
  - `git fetch upstream master`
  - `git reset --hard FETCH_HEAD`
  - `git checkout my-feature`
  - `git rebase master`
8. Resolve any merge conflicts, and then push the branch with `git push origin my-feature`.
9. Create a Pull Request detailing the changes you made and wait for review/merge.

It might seem a little complicated at a glance, but the fundamental concept is simple: we
want to ensure that your changes are always made on top of the latest changes to the
project and thus, we can easily merge your code.

### Commit Message Guidelines

The commit message:

- is written in the imperative (e.g., "Fix ...", "Add ...")
- is kept short, while concisely explaining what the commit does.
- is clear about what part of the code is affected -- often by prefixing with the name of the subsystem and a colon, like "server: ..." or "docs: ...".
- is a complete sentence, ending with a period.
