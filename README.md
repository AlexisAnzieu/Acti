<br>

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/11615615/146594532-b7aeb31d-5b52-43c8-8216-4183ce4e24a5.png" width="500" />
 </h1>

<h4 align="center">Reusable open source platform made to centralize whatever you want (activities in Quebec in this case).</h4>

<div align="center">

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=AlexisAnzieu_Acti&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=AlexisAnzieu_Acti)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=AlexisAnzieu_Acti&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=AlexisAnzieu_Acti)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=AlexisAnzieu_Acti&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=AlexisAnzieu_Acti)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=AlexisAnzieu_Acti&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=AlexisAnzieu_Acti)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

</div>

<p align="center">
  <a href="#about">About</a> •
  <a href="#tiers">Tiers</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#database">Database</a> •
</p>

---

## About

After two years spent surveying Quebec, an idea popped into my head: why not referencing all theses adventures within a hand-sewn website? So I could also implement all the JS fatigue in one place 💪

## Tiers

This idea uses a lot of tiers library/framework/Saas products without which it can't work. All of them are free to use as long as you develop an open source project.

### Saas Product

-   **Backend API**: Vercel
-   **Database**: Supabase
-   **Deployment**: Vercel
-   **Code quality**: SonarCloud
-   **Analytics**: Google Analytics
-   **Newsletter**: Sendinblue

### Very useful JS libraries

-   **Styling**: Chakra-UI
-   **Language**: JS/Typescript/React
-   **Framework**: NextJS
-   **Map**: Leaflet
-   **Form validation**: Formik
-   **Internationalization**: I18next
-   **Date calculation**: Dayjs
-   **Code formatting**: Eslint

## Installation

1. Make sure that you have [nodeJS](https://nodejs.org/en/) installed on your machine.
2. Fill the [.env.example](.env.example) file accordingly the instructions then rename it to `.env`.
3. The backend is decoupled from the frontend and lives in `pages/api/` folder. Here is where Supabase SaaS is called but you could replace it by any external services.

## Features

-   Analytics
-   [Different rendering strategies](https://www.patterns.dev/posts/rendering-patterns/) for speediness (CSR on the main list and SSG for singleton pages)
-   Filtering
-   Internationalization
-   Map service
-   Searching

<img width="1907" alt="Screen Shot 2021-12-23 at 1 25 14 PM" src="https://user-images.githubusercontent.com/11615615/147278973-a76f0f45-aa23-4d8f-b6d8-2ef912a43990.png">

<img width="1907" alt="Screen Shot 2021-12-23 at 1 26 43 PM" src="https://user-images.githubusercontent.com/11615615/147279053-b6b138bc-e653-4af6-8ac1-3f7c976150bc.png">

<img width="1907" alt="Screen Shot 2021-12-23 at 1 27 28 PM" src="https://user-images.githubusercontent.com/11615615/147279100-844df141-2b9a-4b4a-ba6c-9ded91fbaf20.png">

## Database

Supabase SaaS uses Postgresql under the hood and the schema is built like this:
| column name | data type |
| ---------------- | ------------------------ |
| compagny | text |
| picture_url | text |
| address | text |
| city | text |
| postal_code | text |
| phone | text |
| price | bigint |
| carbon_footprint | bigint |
| id | uuid |
| email | text |
| website | text |
| created_at | timestamp with time zone |
| name | jsonb |
| social_media | json |
| description | jsonb |
| location | json |
| review | jsonb |
| seasons | ARRAY |

Openapi specifications allows us to generate [a typescript file on fly](https://supabase.com/docs/reference/javascript/generating-types) corresponding to this schema. You can find it in the repo [here](/type/supabase.ts).
