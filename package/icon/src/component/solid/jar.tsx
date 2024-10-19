
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=solid jar}
 * @preview ![jar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJDMzIgMTQuMyA0Ni4zIDAgNjQgMEwyNTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkw2NCA2NEM0Ni4zIDY0IDMyIDQ5LjcgMzIgMzJ6TTAgMTYwYzAtMzUuMyAyOC43LTY0IDY0LTY0bDE5MiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMjg4YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCAxNjB6bTk2IDY0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDk2YzAgMTcuNyAxNC4zIDMyIDMyIDMybDEyOCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtOTZjMC0xNy43LTE0LjMtMzItMzItMzJMOTYgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32C32 14.3 46.3 0 64 0L256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 64C46.3 64 32 49.7 32 32zM0 160c0-35.3 28.7-64 64-64l192 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 160zm96 64c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 224z" />
    </Icon>
);

export default Jar;