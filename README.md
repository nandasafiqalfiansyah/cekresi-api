# cek Resi-api

## Welcome Message
Welcome to cek Api, a RESTful API for package tracking and shipping information.

## Endpoints

- cekresi: `/cekresi/:courier/:receipt`
- cekongkir: `/cekongkir/:courier/:origin/:destination/:weight`

## Sample cek Ongkir Response

```json
{
  "status": 200,
  "message": "Successfully",
  "data": {
    "summary": {
      "courier": ["jne"],
      "origin": "jakarta",
      "destination": "ponorogo",
      "weight": "1 kg"
    },
    "costs": [
      {
        "code": "jne",
        "name": "JNE Express",
        "service": "REG",
        "type": "Document/Paket",
        "price": "26000",
        "estimated": "2-3 hari"
      },
      {
        "code": "jne",
        "name": "JNE Express",
        "service": "OKE",
        "type": "Document/Paket",
        "price": "23000",
        "estimated": "3-6 hari"
      },
      {
        "code": "jne",
        "name": "JNE Express",
        "service": "JTR&gt;200",
        "type": "Paket",
        "price": "2100000",
        "estimated": "4-5 hari"
      },
      {
        "code": "jne",
        "name": "JNE Express",
        "service": "JTR&gt;130",
        "type": "Paket",
        "price": "1500000",
        "estimated": "4-5 hari"
      },
      {
        "code": "jne",
        "name": "JNE Express",
        "service": "JTR&lt;130",
        "type": "Paket",
        "price": "850000",
        "estimated": "4-5 hari"
      },
      {
        "code": "jne",
        "name": "JNE Express",
        "service": "JTR",
        "type": "Paket",
        "price": "75000",
        "estimated": "4-5 hari"
      }
    ]
  }
}
```

## Sample cek Resi Response

```json
{
  "status": 200,
  "message": "Successfully tracked package",
  "data": {
    "summary": {
      "awb": "CSS0224432126415",
      "courier": "JNE Express",
      "service": "OKE",
      "status": "DELIVERED",
      "date": "2024-03-30 15:25:00",
      "desc": "BANGKIT MERCH",
      "amount": "",
      "weight": "1 Kg"
    },
    "detail": {
      "origin": "BANDUNG",
      "destination": "KAUMAN, PONOROGO",
      "shipper": "DICODING INDONESIA",
      "receiver": "23270270 - NANDA SAFIQ ALFIANS"
    },
    "history": [
      {
        "date": "2024-03-30 15:25:00",
        "desc": "DELIVERED TO [23270270 - NANDA SAFIQ ALFIANS | 30-03-2024 15:25 | PONOROGO, KAB PONOROGO ]",
        "location": ""
      },
      {
        "date": "2024-03-30 11:04:00",
        "desc": "WITH DELIVERY COURIER  [MADIUN, KP PONOROGO]",
        "location": ""
      },
      {
        "date": "2024-03-29 13:24:00",
        "desc": "SHIPMENT FORWARDED FROM TRANSIT CITY TO DESTINATION CITY [MADIUN, KP PONOROGO]",
        "location": ""
      },
      {
        "date": "2024-03-29 12:26:00",
        "desc": "RECEIVED AT WAREHOUSE  [KAUMAN, PONOROGO]",
        "location": ""
      },
      {
        "date": "2024-03-29 00:05:00",
        "desc": "SHIPMENT FORWARDED FROM TRANSIT CITY TO DESTINATION CITY [KAUMAN, PONOROGO]",
        "location": ""
      },
      {
        "date": "2024-03-29 00:01:00",
        "desc": "RECEIVED AT WAREHOUSE [MADIUN, JNE MADIUN INBOUND]",
        "location": ""
      },
      {
        "date": "2024-03-28 02:08:00",
        "desc": "RECEIVED AT ORIGIN GATEWAY  [BANDUNG]",
        "location": ""
      },
      {
        "date": "2024-03-27 06:40:00",
        "desc": "PROCESSED AT SORTING CENTER [BANDUNG, KAWALUYAAN]",
        "location": ""
      },
      {
        "date": "2024-03-27 01:19:00",
        "desc": "RECEIVED AT SORTING CENTER [BANDUNG]",
        "location": ""
      },
      {
        "date": "2024-03-26 17:39:00",
        "desc": "SHIPMENT RECEIVED BY JNE COUNTER OFFICER AT [BANDUNG]",
        "location": ""
      },
      {
        "date": "2024-03-26 17:39:00",
        "desc": "SHIPMENT PICKED UP BY JNE COURIER [BANDUNG]",
        "location": ""
      }
    ]
  }
}
```
---
