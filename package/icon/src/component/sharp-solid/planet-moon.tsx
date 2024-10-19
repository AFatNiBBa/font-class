
import { Icon } from "../../index";

/**
 * A component that renders the `planet-moon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/planet-moon?s=sharp-solid planet-moon}
 * @preview ![planet-moon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDBhNjQgNjQgMCAxIDEgMCAxMjhBNjQgNjQgMCAxIDEgNTEyIDB6TTAgMjg4YTIyNCAyMjQgMCAxIDEgNDQ4IDBBMjI0IDIyNCAwIDEgMSAwIDI4OHpNMjU2IDExNC45Yy0xMC40LTEuOS0yMS4xLTIuOS0zMi0yLjljLTg2LjMgMC0xNTggNjIuMS0xNzMuMSAxNDRsNzcuMSAwIDY0IDY0IDAgNjQgMzIgMCAwIDcyIDQwIDAgNTYtMTA0IDAtNjQtMTEyIDAtMzItMzIgODAtOTYgMC00NS4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PlanetMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 0a64 64 0 1 1 0 128A64 64 0 1 1 512 0zM0 288a224 224 0 1 1 448 0A224 224 0 1 1 0 288zM256 114.9c-10.4-1.9-21.1-2.9-32-2.9c-86.3 0-158 62.1-173.1 144l77.1 0 64 64 0 64 32 0 0 72 40 0 56-104 0-64-112 0-32-32 80-96 0-45.1z" />
    </Icon>
);

export default PlanetMoon;