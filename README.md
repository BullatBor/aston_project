# aston-project

[![Actions](https://github.com/BullatBor/aston_project/actions/workflows/checks.yml/badge.svg)](https://github.com/BullatBor/aston_project/actions/workflows/checks.yml)

- Предметная область: приложение для информации о фильмах.
- Использованное API: [Кинопоиск](https://api.kinopoisk.dev/)

---

## Основной функционал

- Регистрация и авторизация пользователей в FireBase
- Страница избранного: пользователь может добавлять или удалять из списка избранных
- Поиск по названию фильма, выпадающее меня при поиске
- История поиска: сохранение текста введенного в поисковую строку, возможность перейти на страницу поиска после нажатия на блок с текстом поиска

---

## Реализация требований

### 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы Требования к функциональности.

#### React

- [x] Пишем функциональные компоненты c хуками: [components](src/ui/components), [pages](src/pages).
- [x] Есть разделение на [умные](src/pages/MainPage/MainPage.tsx) и [глупые](src\ui\elements\Button\Button.tsx) компоненты.
- [x] Есть рендеринг [списков](src/pages/MainPage/MainPage.tsx).
- [x] Реализована хотя бы одна [форма](src\ui\components\AuthButtons\AuthButtons.tsx).
- [x] Есть применение Контекст API: [themeContext](src\context\ThemeContext.ts).
- [x] Есть применение предохранителя: [ErrorBoundary](src/app.tsx), [Fallback](src\ui\components\ErrorBoundary\ErrorBoundary.tsx).
- [x] Есть хотя бы один кастомный хук: [useAuth](src/hooks/useAuth.ts), [useDebounce](src/hooks/useDebounce.ts), [useFavourites](src/hooks/useFavourites.ts),[useHistory](src/hooks/useHistory.ts),[useSuggest](src/hooks/useSuggest.ts).
- [x] Хотя бы несколько компонентов используют PropTypes: [Button](src\ui\elements\Button\Button.tsx), [AuthForm](src\ui\components\AuthForm\AuthForm.tsx), [Preloader](src\ui\elements\Preloader\Preloader.tsx).
- [x] Поиск не должен триггерить много запросов к серверу ([debounce](src\ui\components\Search\Search.tsx), [useDebounce](src/hooks/useDebounce.ts)).
- [x] Есть применение [lazy + Suspense](src\ui\components\Main\Main.tsx).

#### Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](src/store/store.ts).
- [x] Используем слайсы: [userSlise](src\store\auth\authSlice.ts).
- [] Есть хотя бы одна кастомная мидлвара: [user-middleware](src/store/middlewares/user-middleware.ts).
- [x] Используется RTK Query: [favouriteApi](src\store\rtkQuery\favoritesApi.ts), [movieApi](src\store\rtkQuery\movieApi.ts), [historyApi](src\store\rtkQuery\historyApi.ts).
- [x] Используется Transforming Responses: [movieApi](src\store\rtkQuery\movieApi.ts).

---

### 2 уровень (необязательный)

- [x] Используется TypeScript
- [x] Использвуется Firebase: [auth](src/hooks/useAuth.ts), [favourite](src/hooks/useFavourites.ts), [history](src/hooks/useHistory.ts)
- [x] Настроен CI/CD: [actions.yml](.github\workflows\checks.yml)

---

### Дополнительные библиотеки, которые использовались

- classnames для удобства работы с css modules
- formik и yup для валидации данных [формы](src/ui/components/AuthForm/AuthForm.tsx)
- lodash.debounce для задержки поиска фильмов [debounce](src/hooks/useDebounce.ts)

---

### Deploy

[project](https://bullatbor.github.io/aston_project/)
