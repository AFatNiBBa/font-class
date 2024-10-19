
import { Icon } from "../../index";

/**
 * A component that renders the `badge-dollar` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badge-dollar?s=thin badge-dollar}
 * @preview ![badge-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTgwLjggNjEuMkMxOTUuMSAzNC4zIDIyMy40IDE2IDI1NiAxNnM2MC45IDE4LjMgNzUuMiA0NS4yYzEuOCAzLjQgNS43IDUgOS40IDMuOWMyOS4xLTguOSA2Mi4xLTEuOSA4NS4xIDIxLjFzMzAuMSA1NiAyMS4xIDg1LjFjLTEuMSAzLjcgLjUgNy42IDMuOSA5LjRDNDc3LjcgMTk1LjEgNDk2IDIyMy40IDQ5NiAyNTZzLTE4LjMgNjAuOS00NS4yIDc1LjJjLTMuNCAxLjgtNSA1LjgtMy45IDkuNGM4LjkgMjkuMSAxLjkgNjIuMS0yMS4xIDg1LjFzLTU2IDMwLjEtODUuMSAyMS4xYy0zLjctMS4xLTcuNiAuNS05LjQgMy45QzMxNi45IDQ3Ny43IDI4OC42IDQ5NiAyNTYgNDk2cy02MC45LTE4LjMtNzUuMi00NS4yYy0xLjgtMy40LTUuNy01LTkuNC0zLjljLTI5LjEgOC45LTYyLjEgMS45LTg1LjEtMjEuMXMtMzAuMS01Ni0yMS4xLTg1LjFjMS4xLTMuNy0uNS03LjYtMy45LTkuNEMzNC4zIDMxNi45IDE2IDI4OC42IDE2IDI1NnMxOC4zLTYwLjkgNDUuMi03NS4yYzMuNC0xLjggNS01LjcgMy45LTkuNGMtOC45LTI5LjEtMS45LTYyLjEgMjEuMS04NS4xczU2LTMwLjEgODUuMS0yMS4xYzMuNyAxLjEgNy42LS41IDkuNC0zLjl6TTI1NiAwYy0zNi40IDAtNjguMyAxOS4zLTg2LjEgNDguMmMtMzMtNy45LTY5LjIgMS4xLTk0LjkgMjYuOHMtMzQuNyA2MS45LTI2LjggOTQuOUMxOS4zIDE4Ny43IDAgMjE5LjYgMCAyNTZzMTkuMyA2OC4zIDQ4LjIgODYuMWMtNy45IDMzIDEuMSA2OS4yIDI2LjggOTQuOXM2MS45IDM0LjcgOTQuOSAyNi44QzE4Ny43IDQ5Mi43IDIxOS42IDUxMiAyNTYgNTEyczY4LjMtMTkuMyA4Ni4xLTQ4LjJjMzMgNy45IDY5LjItMS4xIDk0LjktMjYuOHMzNC43LTYxLjkgMjYuOC05NC45QzQ5Mi43IDMyNC4zIDUxMiAyOTIuNCA1MTIgMjU2cy0xOS4zLTY4LjMtNDguMi04Ni4xYzcuOS0zMy0xLjEtNjkuMi0yNi44LTk0LjlzLTYyLTM0LjctOTQuOS0yNi44QzMyNC4zIDE5LjMgMjkyLjQgMCAyNTYgMHptOC45IDE0OS4zYzAtNC40LTMuNi04LTgtOHMtOCAzLjYtOCA4bDAgMTkuMWMtOS42IC43LTE4LjQgMi44LTI2LjEgNi4zYy0xMy42IDYuMS0yMy45IDE2LjgtMjYuNCAzMS40Yy0xLjUgOC45LS42IDE2LjggMi42IDIzLjdjMy4yIDYuOCA4LjQgMTIgMTQuNCAxNmMxMSA3LjUgMjYgMTIgMzkuNiAxNi4xbDEuOCAuNWMxNC45IDQuNSAyNy45IDguNiAzNi44IDE1LjFjNC4yIDMuMSA3LjIgNi41IDguOCAxMC4zYzEuNyAzLjggMi40IDguOCAxLjIgMTUuNWMtMS42IDkuNC03LjYgMTYuMi0xNy4zIDIwLjRjLTEwIDQuMy0yMy44IDUuNi0zOS44IDMuMWMtOC0xLjMtMjEuNi01LjktMzIuMS05LjVjMCAwIDAgMCAwIDBjLTIuMy0uOC00LjQtMS41LTYuMy0yLjFjLTQuMi0xLjQtOC43IC45LTEwLjEgNS4xcy45IDguNyA1LjEgMTAuMWMxLjYgLjUgMy41IDEuMiA1LjYgMS45YzAgMCAwIDAgMCAwczAgMCAwIDBjMTAuNCAzLjYgMjUuOSA4LjggMzUuNCAxMC40YzAgMCAwIDAgMCAwYzIuMyAuNCA0LjYgLjcgNi44IC45bDAgMTkuMmMwIDQuNCAzLjYgOCA4IDhzOC0zLjYgOC04bDAtMTguOGM5LjQtLjUgMTguMi0yLjMgMjUuOC01LjVjMTMuOC01LjkgMjQtMTYuOCAyNi43LTMyLjRjMS42LTkuMyAuOC0xNy41LTIuMy0yNC42Yy0zLjEtNy4xLTguMi0xMi42LTE0LjEtMTYuOWMtMTEuNS04LjMtMjcuNC0xMy4yLTQxLjYtMTcuNWwtLjQtLjFjLTE0LjgtNC41LTI3LjgtOC40LTM2LjctMTQuNGMtNC4zLTIuOS03LjItNi4xLTguOS05LjZjLTEuNi0zLjQtMi40LTcuOS0xLjMtMTQuMWMxLjQtOCA3LjItMTQuOSAxNy4zLTE5LjVjMTAuMS00LjYgMjQuMS02LjQgMzkuOS00YzUuMSAuOCAyMC42IDMuOCAyNS42IDUuMWM0LjMgMS4xIDguNy0xLjQgOS44LTUuN3MtMS40LTguNy01LjctOS44Yy01LjctMS41LTIxLjktNC42LTI3LjItNS41Yy0yLjMtLjQtNC42LS42LTYuOC0uOWwwLTE5LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const BadgeDollar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M180.8 61.2C195.1 34.3 223.4 16 256 16s60.9 18.3 75.2 45.2c1.8 3.4 5.7 5 9.4 3.9c29.1-8.9 62.1-1.9 85.1 21.1s30.1 56 21.1 85.1c-1.1 3.7 .5 7.6 3.9 9.4C477.7 195.1 496 223.4 496 256s-18.3 60.9-45.2 75.2c-3.4 1.8-5 5.8-3.9 9.4c8.9 29.1 1.9 62.1-21.1 85.1s-56 30.1-85.1 21.1c-3.7-1.1-7.6 .5-9.4 3.9C316.9 477.7 288.6 496 256 496s-60.9-18.3-75.2-45.2c-1.8-3.4-5.7-5-9.4-3.9c-29.1 8.9-62.1 1.9-85.1-21.1s-30.1-56-21.1-85.1c1.1-3.7-.5-7.6-3.9-9.4C34.3 316.9 16 288.6 16 256s18.3-60.9 45.2-75.2c3.4-1.8 5-5.7 3.9-9.4c-8.9-29.1-1.9-62.1 21.1-85.1s56-30.1 85.1-21.1c3.7 1.1 7.6-.5 9.4-3.9zM256 0c-36.4 0-68.3 19.3-86.1 48.2c-33-7.9-69.2 1.1-94.9 26.8s-34.7 61.9-26.8 94.9C19.3 187.7 0 219.6 0 256s19.3 68.3 48.2 86.1c-7.9 33 1.1 69.2 26.8 94.9s61.9 34.7 94.9 26.8C187.7 492.7 219.6 512 256 512s68.3-19.3 86.1-48.2c33 7.9 69.2-1.1 94.9-26.8s34.7-61.9 26.8-94.9C492.7 324.3 512 292.4 512 256s-19.3-68.3-48.2-86.1c7.9-33-1.1-69.2-26.8-94.9s-62-34.7-94.9-26.8C324.3 19.3 292.4 0 256 0zm8.9 149.3c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 19.1c-9.6 .7-18.4 2.8-26.1 6.3c-13.6 6.1-23.9 16.8-26.4 31.4c-1.5 8.9-.6 16.8 2.6 23.7c3.2 6.8 8.4 12 14.4 16c11 7.5 26 12 39.6 16.1l1.8 .5c14.9 4.5 27.9 8.6 36.8 15.1c4.2 3.1 7.2 6.5 8.8 10.3c1.7 3.8 2.4 8.8 1.2 15.5c-1.6 9.4-7.6 16.2-17.3 20.4c-10 4.3-23.8 5.6-39.8 3.1c-8-1.3-21.6-5.9-32.1-9.5c0 0 0 0 0 0c-2.3-.8-4.4-1.5-6.3-2.1c-4.2-1.4-8.7 .9-10.1 5.1s.9 8.7 5.1 10.1c1.6 .5 3.5 1.2 5.6 1.9c0 0 0 0 0 0s0 0 0 0c10.4 3.6 25.9 8.8 35.4 10.4c0 0 0 0 0 0c2.3 .4 4.6 .7 6.8 .9l0 19.2c0 4.4 3.6 8 8 8s8-3.6 8-8l0-18.8c9.4-.5 18.2-2.3 25.8-5.5c13.8-5.9 24-16.8 26.7-32.4c1.6-9.3 .8-17.5-2.3-24.6c-3.1-7.1-8.2-12.6-14.1-16.9c-11.5-8.3-27.4-13.2-41.6-17.5l-.4-.1c-14.8-4.5-27.8-8.4-36.7-14.4c-4.3-2.9-7.2-6.1-8.9-9.6c-1.6-3.4-2.4-7.9-1.3-14.1c1.4-8 7.2-14.9 17.3-19.5c10.1-4.6 24.1-6.4 39.9-4c5.1 .8 20.6 3.8 25.6 5.1c4.3 1.1 8.7-1.4 9.8-5.7s-1.4-8.7-5.7-9.8c-5.7-1.5-21.9-4.6-27.2-5.5c-2.3-.4-4.6-.6-6.8-.9l0-19.3z" />
    </Icon>
);

export default BadgeDollar;