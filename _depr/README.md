# Rockgear WebApplication

Application for rock music equipment and maintentance.

Main feature is the guitar register and guitar maintenance log. The maintentance log should help keep track of last string change, tuning, intonantion, trussrod adjustment, and much more.

### Sorting data

Collection of sorting algoritms for exista in _**sortAlgoritms.ts**_. Interface for model must be added to type consumed by the soring algoritm.

### Translations

Application is using 18next react for internationalization. Static text for application is provided by local translation files in the _**/public/locales/[language code]/**_ folder. All text is currently compiled in one translation file and grouped by the following keys:

- **"nav"** : all navigation text like links, menubuttons and helper text.
- **"interactive"** : text for interactive elements not in the navigation category. Includes loading text.
- **"data"**: Data model names and data related text.
- **"form"**: Form texst that is not included in _interactive_ or _data_ category. This includes error texts

Text in datamodels can also be multilangual. These values are of type _**ILocaleText**_ arrays. Extracting the correct locale is acheved by using the **getLocaleText** function. See example below:

```tsx
// get current language
const currentLang = useAppSelector((state) => state.settings.currentLanguage);

// using locale field from data object
const localeData: ILocaleText[] = myData.someLocaleText;

// get the correct text from locale array
const text = getLocaleText(currentLang, localeData);

return <span> {text} </span>;
```

## Packages

- [i18next](https://react.i18next.com/): Internationalization
- [React Redux](https://react-redux.js.org/): State management for react
- [React Hook Form](https://react-hook-form.com/get-started): Form management
- [uuid](https://www.npmjs.com/package/uuid): UUID generator

## Resources and Tools

- [Freepik Icons](https://www.freepik.com/author/freepik/icons/special-lineal_7?t=f#from_element=resource_detail): Free PGN downloads used.

  - _Png's is converted to svg with incscape_

- [i18next Translation](https://translate.i18next.com/) : Google translate for i18n json files

- [Flag Icons](https://github.com/lipis/flag-icons): SVGs used for language select box
