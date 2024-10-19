
import { Icon } from "../../index";

/**
 * A component that renders the `dinosaur` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dinosaur?s=regular dinosaur}
 * @preview ![dinosaur](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ5LjEgMGMtMTYuOCAwLTMzIDYtNDUuNyAxNi45TDM3NS43IDQwLjdDMzYwLjcgNTMuNSAzNTIgNzIuNCAzNTIgOTIuMmMwIDM3LjUgMzAuNCA2Ny44IDY3LjggNjcuOGw1Mi4yIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAxOS4yYzAgMTEuNS05LjMgMjAuOC0yMC44IDIwLjhjLTEzIDAtMjUuNi0zLjgtMzYuNC0xMUw0MTMuMyAxOTZjLTM1LjItMjMuNS03Ni42LTM2LTExOS0zNmwtOS4xIDBjLTYwLjggMC0xMTkuNSAyMi43LTE2NC41IDYzLjZsLTgwLjIgNzNDMTQuNyAzMjAgMCAzNTMuMyAwIDM4OC4yQzAgNDU2LjYgNTUuNCA1MTIgMTIzLjggNTEybDEzMS4yIDBjMzUuOSAwIDY0LjktMjkuMSA2NC45LTY0LjljMC0zMy0yNC43LTYwLjctNTcuNC02NC41bC0xMDMuMi0xMmMtMi41LTEwLjYtMTItMTguNi0yMy40LTE4LjZjLTEzLjMgMC0yNCAxMC43LTI0IDI0YzAgMjEuMyAxNiAzOS4yIDM3LjEgNDEuN0wyNTcgNDMwLjNjOC41IDEgMTUgOC4yIDE1IDE2LjhjMCA5LjMtNy42IDE2LjktMTYuOSAxNi45bC0xMzEuMiAwQzgyIDQ2NCA0OCA0MzAgNDggMzg4LjJjMC0yMS40IDktNDEuNyAyNC44LTU2LjFsODAuMi03M2MzNi4yLTMyLjkgODMuMy01MS4xIDEzMi4yLTUxLjFsOS4xIDBjMzIuOSAwIDY1IDkuNyA5Mi40IDI4bDI1LjQgMTYuOWMxOC43IDEyLjUgNDAuNiAxOS4xIDYzLjEgMTkuMWMzOCAwIDY4LjgtMzAuOCA2OC44LTY4LjhsMC0xOS4yYzAtMzkuOC0zMi4yLTcyLTcyLTcybC01Mi4yIDBjLTExIDAtMTkuOC04LjktMTkuOC0xOS44YzAtNS44IDIuNS0xMS4zIDYuOS0xNS4xbDI3LjctMjMuOGM0LTMuNCA5LjEtNS4zIDE0LjQtNS4zbDExLjYgMEM1MzMuMiA0OCA1OTIgMTA2LjggNTkyIDE3OS4zbDAgMjYuOWMwIDY1LTI4LjkgMTI2LjYtNzguOCAxNjguMmwtOC42IDcuMmMtNi4yIDUuMi05LjIgMTIuOS04LjYgMjAuNGMtLjEgLjctLjEgMS4zLS4xIDJsMCA1MmMwIDQuNC0zLjYgOC04IDhsLTQ4IDBjLTQuNCAwLTgtMy42LTgtOGwwLTMyYzAtOC0zLjktMTUuNC0xMC41LTE5LjljLTYuNi00LjQtMTQuOS01LjQtMjIuMy0yLjRsLS4xIDBjLS4yIC4xLS41IC4yLS45IC4zYy0uOSAuMy0yLjQgLjgtNC42IDEuNWMtNC4yIDEuMy0xMC44IDMuMS0xOS41IDVjLTcuNyAxLjYtMTcuMSAzLjMtMjguMiA0LjZjNCAxMC42IDYuMSAyMiA2LjEgMzRjMCA0LjctLjMgOS4zLTEgMTMuOGMxMi43LTEuNSAyMy43LTMuNCAzMi45LTUuNGMwIDAgMCAwIC4xIDBsMCAuNWMwIDMwLjkgMjUuMSA1NiA1NiA1Nmw0OCAwYzMwLjkgMCA1Ni0yNS4xIDU2LTU2bDAtNDQuOGM2MC44LTUwLjcgOTYtMTI1LjggOTYtMjA1bDAtMjYuOUM2NDAgODAuMyA1NTkuNyAwIDQ2MC43IDBMNDQ5LjEgMHpNNDgwIDgwYTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Dinosaur: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M449.1 0c-16.8 0-33 6-45.7 16.9L375.7 40.7C360.7 53.5 352 72.4 352 92.2c0 37.5 30.4 67.8 67.8 67.8l52.2 0c13.3 0 24 10.7 24 24l0 19.2c0 11.5-9.3 20.8-20.8 20.8c-13 0-25.6-3.8-36.4-11L413.3 196c-35.2-23.5-76.6-36-119-36l-9.1 0c-60.8 0-119.5 22.7-164.5 63.6l-80.2 73C14.7 320 0 353.3 0 388.2C0 456.6 55.4 512 123.8 512l131.2 0c35.9 0 64.9-29.1 64.9-64.9c0-33-24.7-60.7-57.4-64.5l-103.2-12c-2.5-10.6-12-18.6-23.4-18.6c-13.3 0-24 10.7-24 24c0 21.3 16 39.2 37.1 41.7L257 430.3c8.5 1 15 8.2 15 16.8c0 9.3-7.6 16.9-16.9 16.9l-131.2 0C82 464 48 430 48 388.2c0-21.4 9-41.7 24.8-56.1l80.2-73c36.2-32.9 83.3-51.1 132.2-51.1l9.1 0c32.9 0 65 9.7 92.4 28l25.4 16.9c18.7 12.5 40.6 19.1 63.1 19.1c38 0 68.8-30.8 68.8-68.8l0-19.2c0-39.8-32.2-72-72-72l-52.2 0c-11 0-19.8-8.9-19.8-19.8c0-5.8 2.5-11.3 6.9-15.1l27.7-23.8c4-3.4 9.1-5.3 14.4-5.3l11.6 0C533.2 48 592 106.8 592 179.3l0 26.9c0 65-28.9 126.6-78.8 168.2l-8.6 7.2c-6.2 5.2-9.2 12.9-8.6 20.4c-.1 .7-.1 1.3-.1 2l0 52c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-32c0-8-3.9-15.4-10.5-19.9c-6.6-4.4-14.9-5.4-22.3-2.4l-.1 0c-.2 .1-.5 .2-.9 .3c-.9 .3-2.4 .8-4.6 1.5c-4.2 1.3-10.8 3.1-19.5 5c-7.7 1.6-17.1 3.3-28.2 4.6c4 10.6 6.1 22 6.1 34c0 4.7-.3 9.3-1 13.8c12.7-1.5 23.7-3.4 32.9-5.4c0 0 0 0 .1 0l0 .5c0 30.9 25.1 56 56 56l48 0c30.9 0 56-25.1 56-56l0-44.8c60.8-50.7 96-125.8 96-205l0-26.9C640 80.3 559.7 0 460.7 0L449.1 0zM480 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Dinosaur;