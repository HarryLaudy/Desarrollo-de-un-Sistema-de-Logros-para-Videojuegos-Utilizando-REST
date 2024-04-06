# API Documentation

## Overview

This API allows to perform 3 differents actions on Logros

## Base URL

http://localhost:8080/api

## Endpoints

### Create Achievement

POST /logros/crear

#### Description

This endpoint allows developers to create a new achievement.

#### Request Body

- `logro_id`: Unique identifier for the achievement.
- `jugador_id`: ID of the player who achieved the milestone.
- `progreso`: Progress of the player towards the achievement.
- `descripcion`: Description of the achievement.

#### Response

- Status Code: 201 Created
- Body: "Achievement created successfully."

### Update Achievement Progress

POST /logros/actualizar

#### Description

This endpoint allows developers to update the progress of an existing achievement for a player.

#### Request Body

- `jugador_id`: ID of the player.
- `logro_id`: ID of the achievement.
- `progreso`: New progress value for the achievement.

#### Response

- Status Code: 200 OK
- Body: "Achievement progress updated successfully."

### Get Player's Achievements

GET /logros/jugador/:jugador_id

#### Description

This endpoint allows developers to retrieve achievements for a specific player.

#### Path Parameters

- `jugador_id`: ID of the player.

#### Response

- Status Code: 200 OK
- Body: JSON object containing an array of achievements for the player.

Example Response Body:

```json
{
  "logros": [
    {
      "id": 1,
      "jugador_id": 5,
      "progreso": "50%",
      "descripcion": "Complete Level 1"
    },
    {
      "id": 2,
      "jugador_id": 9,
      "progreso": "25%",
      "descripcion": "Collect 10 coins"
    }
  ]
}
```
