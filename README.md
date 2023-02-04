# Clients API

- Base url: https://354cqf1fvg.execute-api.us-east-1.amazonaws.com

# Routes and Methods

- ## Clients Routes

| Route                | Method | Description            |
| -------------------- | :----: | ---------------------- |
| `{base_url}/clients` | `get`  | To get all the clients |

<br />

- ## Requests Routes

| Route                            | Method | Description                                           |
| -------------------------------- | :----: | ----------------------------------------------------- |
| `{base_url}/request/{client_id}` | `get`  | To get the number of api calls of a client            |
| `{base_url}/request/{client_id}` | `post` | To increment by 1 the number of api calls of a client |
