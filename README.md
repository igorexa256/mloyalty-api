# mloyalty-api

Библиотека для API Mloyalty.

Находится в стадии разработки.

## Установка

```bash
npm install mloyalty-api
```

## Использование

```js
import MloyaltyApi from 'mloyalty-api'

const ml = new MloyaltyApi({
    baseURL: 'http://example/',
    username: 'username',
    password: 'password',
    jwtToken: 'token',
})

ml.getCampaign({ CampaignID: 1 }).then(
    (data) => {
        console.log(data)
    },
    (error) => {
        console.log(error)
    }
)
```

## Лицензия

MIT
