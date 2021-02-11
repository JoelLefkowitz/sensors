# Sensors

Tabular display for sensor readings

## Status

| Source  | Shields                                                        |
| ------- | -------------------------------------------------------------- |
| Project | ![license][license] ![release][release]                        |
| Raised  | [![issues][issues]][issues_link] [![pulls][pulls]][pulls_link] |

## Running

### Development

Install dependencies

```bash
npm i
```

Run in a browser (port 4200)

```bash
npm run dev
```

### Production

```bash
docker build . -t joellefkowitz/sensors:0.1.0
```

```bash
docker stack deploy prod -c compose/docker-compose.yml
```

## Documentation

Additional details are available in the [documentation][documentation]

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
