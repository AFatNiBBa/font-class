
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-high` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-high?s=duotone temperature-high}
 * @preview ![temperature-high](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM2OGMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NHMxNDQtNjQuNSAxNDQtMTQ0YzAtMzMuMi0xMS4yLTYzLjgtMzAuMS04OC4xYy0uOS0xLjItMS41LTIuMi0xLjctMi44Yy0uMS0uMy0uMi0uNS0uMi0uNkwyNTYgMTEyQzI1NiA1MC4yIDIwNS45IDAgMTQ0IDBTMzIgNTAuMiAzMiAxMTJsMCAxNjQuNGMwIC4xLS4xIC4zLS4yIC42Yy0uMiAuNi0uOCAxLjYtMS43IDIuOEMxMS4yIDMwNC4yIDAgMzM0LjggMCAzNjh6bTY0IDBjMC0xOC41IDYuMi0zNS40IDE2LjctNDguOUM4OC45IDMwOC40IDk2IDI5My44IDk2IDI3Ni41TDk2IDExMmMwLTI2LjUgMjEuNS00OCA0OC00OHM0OCAyMS41IDQ4IDQ4bDAgMTY0LjVjMCAxNy4zIDcuMSAzMS45IDE1LjMgNDIuNUMyMTcuOCAzMzIuNiAyMjQgMzQ5LjUgMjI0IDM2OGMwIDQ0LjItMzUuOCA4MC04MCA4MHMtODAtMzUuOC04MC04MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxNiA2NGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6bTAgMTI4QTk2IDk2IDAgMSAwIDQxNiAwYTk2IDk2IDAgMSAwIDAgMTkyek0xNDQgOTZjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDIxMC43Yy0xOC42IDYuNi0zMiAyNC40LTMyIDQ1LjNjMCAyNi41IDIxLjUgNDggNDggNDhzNDgtMjEuNSA0OC00OGMwLTIwLjktMTMuNC0zOC43LTMyLTQ1LjNMMTYwIDExMmMwLTguOC03LjItMTYtMTYtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const TemperatureHigh: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L256 112C256 50.2 205.9 0 144 0S32 50.2 32 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C11.2 304.2 0 334.8 0 368zm64 0c0-18.5 6.2-35.4 16.7-48.9C88.9 308.4 96 293.8 96 276.5L96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C217.8 332.6 224 349.5 224 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
            <path d="M416 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128A96 96 0 1 0 416 0a96 96 0 1 0 0 192zM144 96c-8.8 0-16 7.2-16 16l0 210.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 112c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default TemperatureHigh;