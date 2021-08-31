# Django with react-admin

Project for test react-admin integration with DJANO, DRF, Guardian, JWT auth

## Using

1. Install deps

```sh
pipenv install --dev
```

2. Migrate db schema

```sh
./manage.py migrate
```

3. Create user

```sh
./manage.py createsuperuser
```

4. Run debug server

```sh
./manage.py runserver
```

## TODO

- Add debugpy integration
- Test django-guardian
- Add test app with guardian, filters, etc
- Add used projects info
- Convert todo to issues
- Generate specific schema for user
- Specific generate schema folder
