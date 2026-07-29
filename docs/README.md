# Documentation map

Start with the normative [protocol specification](../SPECIFICATION.md). It is
the authority for bytes and state transitions. The documents here explain how
to operate, integrate, and govern the experiment without turning explanatory
material into a second specification.

| Audience                  | Documents                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Participants              | [User guide](./user-guide.md), [security model](./security-model.md)                                                              |
| World creators            | [Creator guide](./creator-guide.md)                                                                                               |
| SDK and wallet developers | [Developer guide](./developer-guide.md)                                                                                           |
| Indexer operators         | [Infrastructure guide](./infrastructure-guide.md)                                                                                 |
| Businesses                | [Commercial integration](./commercial-integration.md), [legal review](./legal-review.md)                                          |
| Maintainers               | [Governance](./governance.md), [release process](./release-process.md), [vulnerability disclosure](./vulnerability-disclosure.md) |

The [reference architecture](./architecture.md) shows the trust boundaries
between a Bitcoin node, parser, validator, state engine, wallet builders, and
non-consensus rendering.

The project is experimental. Documentation examples use regtest or signet by
default and are not financial, legal, tax, or security advice.
