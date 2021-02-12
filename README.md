# Sensors

Tabular display for sensor readings

## Status

| Source  | Shields                                                        |
| ------- | -------------------------------------------------------------- |
| Project | ![license][license] ![release][release]                        |
| Raised  | [![issues][issues]][issues_link] [![pulls][pulls]][pulls_link] |

## Demonstration

Check out our [live demo!][demo]

## Architecture

![Architecture][architecture]

## Decisions

Rather than storing data on the front end we implement a rest API, this is beacause:

* Storing the dataset on the front end prevents the persistance of changes made between sessions.

* A document (NoSQL) database is not easy to append new data to.

* A rest API can support pagination, filtering and sorting to satisfy the requirements.

It is necessary to parse the initial JSON data into a fixture that the backend can load:

```bash
cd bank/fixtures
python parse.py --input initial.json --output parsed.json
```

This can then be loadded:

```bash
cd bank
python manage.py loaddata fixtures/parsed.json
```

## Running

### Development

Install dependencies:

```bash
cd sensors
npm i
```

Run locally at port 4200:

```bash
npm run dev
```

Install server dependencies

```bash
cd bank
pip install .
```

Run a server isntance:

```bash
export DJANGO_SETTINGS_MODULE="bank.settings.dev"
python manage.py migrate
python manage.py loaddata fixtures/parsed.json
python manage.py runserver
```

### Production

Build the images:

```bash
cd sensors
docker build . -t joellefkowitz/sensors:0.1.0
```

```bash
cd bank
docker build . -t joellefkowitz/bank:0.1.0
```

Deploy to a swarm:

```bash
docker stack deploy prod -c compose/docker-compose.yml
```

## Tests

To run unit tests:

```bash
ng test
```

## Documentation

Additional details are available in the[documentation][documentation]

## Changelog

Please read [CHANGELOG.md](CHANGELOG.md) for details on changes that have been made.

## Versioning

[SemVer][semver] is used for versioning. For a list of versions available, see the tags on this repository.

Bump2version is used to version and tag changes.
For example:

```bash
bump2version patch
```

Releases are made on every minor change.

## Author

-   **Joel Lefkowitz** - _Initial work_ - [Joel Lefkowitz][author]

See also the list of contributors who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Acknowledgments

None yet!

<!-- Status table links -->

[license]: https://img.shields.io/github/license/joellefkowitz/sensors
[release]: https://img.shields.io/github/v/tag/joellefkowitz/sensors
[issues]: https://img.shields.io/github/issues/joellefkowitz/sensors "Issues"
[issues_link]: https://github.com/JoelLefkowitz/sensors/issues
[pulls]: https://img.shields.io/github/issues-pr/joellefkowitz/sensors "Pull requests"
[pulls_link]: https://github.com/JoelLefkowitz/sensors/pulls

<!-- Plugable links -->

[documentation]: https://sensors.readthedocs.io/en/latest/
[author]: https://github.com/JoelLefkowitz
[semver]: http://semver.org/
[demo]: http://sensors.joellefkowitz.co.uk/home
[architecture]: https://github.com/JoelLefkowitz/sensors/raw/master/architecture.png "Architecture"
