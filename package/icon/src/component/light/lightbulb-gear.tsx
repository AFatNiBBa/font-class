
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb-gear` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-gear?s=light lightbulb-gear}
 * @preview ![lightbulb-gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzM2IDE3NmMwIDEzLjctMS45IDI3LTUuNSAzOS41YzMuMyAxIDYuNSAyLjMgOS41IDRsMC0uOWMwLTE3LjggMTAuMi0zNS42IDI4LTQzLjNDMzY3LjYgNzguNCAyODkgMCAxOTIgMEM5NC44IDAgMTYgNzguOCAxNiAxNzZjMCAzNy4zIDExLjYgNzEuOSAzMS40IDEwMC4zYzUgNy4yIDEwLjIgMTQuMyAxNS40IDIxLjRjMCAwIDAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwYzEyLjMgMTYuOCAyNC42IDMzLjcgMzQuNSA1MS44YzUuOSAxMC44IDkuNiAyMi41IDExLjggMzQuNWwzMi40IDBjLTIuNS0xNi42LTcuMy0zMy43LTE2LjItNDkuOWMtMTAuOS0yMC0yNS4zLTM5LjctMzgtNTcuMWMwIDAgMCAwIDAgMGMtNC45LTYuNy05LjUtMTMtMTMuNi0xOUM1Ny41IDIzNC44IDQ4IDIwNi42IDQ4IDE3NkM0OCA5Ni41IDExMi41IDMyIDE5MiAzMnMxNDQgNjQuNSAxNDQgMTQ0ek0yNTguNSA0NDNjLTUuMS04LjgtOS4zLTE3LjgtMTIuOC0yN2wtMTIzIDBjLTUuOSAwLTEwLjcgNC44LTEwLjcgMTAuN2wwIDUuM2MwIDQ0LjIgMzUuOCA4MCA4MCA4MGMzNS4yIDAgNjUuMS0yMi44IDc1LjgtNTQuNGMtMy4zLTQuNy02LjQtOS41LTkuNC0xNC42ek0xOTIgOTZjOC44IDAgMTYtNy4yIDE2LTE2cy03LjItMTYtMTYtMTZDMTMwLjEgNjQgODAgMTE0LjEgODAgMTc2YzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZjMC00NC4yIDM1LjgtODAgODAtODB6TTE0Ni43IDQ0OGw5MC41IDBjLTYuNiAxOC42LTI0LjQgMzItNDUuMyAzMnMtMzguNy0xMy40LTQ1LjMtMzJ6TTM5OS4zIDIzOS44bDMzLjcgMGMzIDE2LjYgMTMuOSAyOS41IDI2LjUgMzYuN2MxMi45IDcuNCAzMCA5LjkgNDUuOSAzLjZsMTcuMiAzMC41Yy0xMi44IDExLjQtMTguNSAyNy43LTE4LjUgNDIuNHM1LjcgMzEgMTguNSA0Mi40TDUwNS4zIDQyNmMtMTUuOS02LjMtMzIuOS0zLjctNDUuOSAzLjZjLTEyLjYgNy4yLTIzLjUgMjAuMi0yNi41IDM2LjdsLTMzLjcgMGMtMy4xLTE2LjYtMTQtMjkuNS0yNi42LTM2LjdjLTEzLTcuNC0zMC05LjktNDYtMy43bC0xNy4yLTMwLjVjMTIuOC0xMS40IDE4LjUtMjcuNyAxOC41LTQyLjRzLTUuNy0zMS0xOC41LTQyLjRsMTcuMi0zMC41YzE1LjkgNi4zIDMzIDMuNyA0Ni0zLjdjMTIuNi03LjIgMjMuNi0yMC4xIDI2LjYtMzYuN3ptNDMuNS0zMmwtNTMuNCAwYy0xMS43IDAtMjEuMyA5LjUtMjEuMyAyMS4zbDAgMS40YzAgNy42LTQuNiAxNC40LTExLjMgMTguMmMtNi42IDMuNy0xNC43IDQuMi0yMS4yIC4zbC0xLjYtMWMtMTAuNy02LjMtMjQuNC0yLjYtMzAuNSA4LjJMMjc3IDMwMy4xYy01LjcgMTAuMi0yLjMgMjMuMSA3LjggMjljNy4zIDQuMyAxMS4yIDEyLjYgMTEuMiAyMXMtMy45IDE2LjctMTEuMiAyMWMtMTAgNS45LTEzLjUgMTguOC03LjggMjlMMzAzLjUgNDUwYzYuMSAxMC44IDE5LjkgMTQuNSAzMC41IDguMmwxLjYtMWM2LjUtMy45IDE0LjYtMy40IDIxLjIgLjNjNi42IDMuOCAxMS4zIDEwLjYgMTEuMyAxOC4ybDAgMS40YzAgMTEuNyA5LjUgMjEuMyAyMS4zIDIxLjNsNTMuNCAwYzExLjggMCAyMS40LTkuNiAyMS40LTIxLjRsMC0xLjZjMC03LjUgNC42LTE0LjIgMTEuMS0xOGM2LjUtMy43IDE0LjUtNC4yIDIxLS4zbDEuOCAxYzEwLjcgNi4zIDI0LjQgMi42IDMwLjUtOC4yTDU1NSA0MDMuMWM1LjctMTAuMiAyLjMtMjMtNy44LTI5Yy03LjMtNC4zLTExLjItMTIuNi0xMS4yLTIxczMuOS0xNi43IDExLjItMjFjMTAtNS45IDEzLjUtMTguOCA3LjgtMjlsLTI2LjQtNDYuOWMtNi4xLTEwLjgtMTkuOS0xNC41LTMwLjUtOC4ybC0xLjggMWMtNi41IDMuOC0xNC41IDMuNC0yMS0uM2MtNi41LTMuNy0xMS4xLTEwLjQtMTEuMS0xOGwwLTEuNmMwLTExLjgtOS42LTIxLjQtMjEuNC0yMS40ek00MTYuMSA0MDkuMWE1NiA1NiAwIDEgMCAwLTExMiA1NiA1NiAwIDEgMCAwIDExMnptLTI0LTU2YTI0IDI0IDAgMSAxIDQ4LjEgMCAyNCAyNCAwIDEgMSAtNDguMSAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LightbulbGear: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 176c0 13.7-1.9 27-5.5 39.5c3.3 1 6.5 2.3 9.5 4l0-.9c0-17.8 10.2-35.6 28-43.3C367.6 78.4 289 0 192 0C94.8 0 16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c12.3 16.8 24.6 33.7 34.5 51.8c5.9 10.8 9.6 22.5 11.8 34.5l32.4 0c-2.5-16.6-7.3-33.7-16.2-49.9c-10.9-20-25.3-39.7-38-57.1c0 0 0 0 0 0c-4.9-6.7-9.5-13-13.6-19C57.5 234.8 48 206.6 48 176C48 96.5 112.5 32 192 32s144 64.5 144 144zM258.5 443c-5.1-8.8-9.3-17.8-12.8-27l-123 0c-5.9 0-10.7 4.8-10.7 10.7l0 5.3c0 44.2 35.8 80 80 80c35.2 0 65.1-22.8 75.8-54.4c-3.3-4.7-6.4-9.5-9.4-14.6zM192 96c8.8 0 16-7.2 16-16s-7.2-16-16-16C130.1 64 80 114.1 80 176c0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2 35.8-80 80-80zM146.7 448l90.5 0c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32zM399.3 239.8l33.7 0c3 16.6 13.9 29.5 26.5 36.7c12.9 7.4 30 9.9 45.9 3.6l17.2 30.5c-12.8 11.4-18.5 27.7-18.5 42.4s5.7 31 18.5 42.4L505.3 426c-15.9-6.3-32.9-3.7-45.9 3.6c-12.6 7.2-23.5 20.2-26.5 36.7l-33.7 0c-3.1-16.6-14-29.5-26.6-36.7c-13-7.4-30-9.9-46-3.7l-17.2-30.5c12.8-11.4 18.5-27.7 18.5-42.4s-5.7-31-18.5-42.4l17.2-30.5c15.9 6.3 33 3.7 46-3.7c12.6-7.2 23.6-20.1 26.6-36.7zm43.5-32l-53.4 0c-11.7 0-21.3 9.5-21.3 21.3l0 1.4c0 7.6-4.6 14.4-11.3 18.2c-6.6 3.7-14.7 4.2-21.2 .3l-1.6-1c-10.7-6.3-24.4-2.6-30.5 8.2L277 303.1c-5.7 10.2-2.3 23.1 7.8 29c7.3 4.3 11.2 12.6 11.2 21s-3.9 16.7-11.2 21c-10 5.9-13.5 18.8-7.8 29L303.5 450c6.1 10.8 19.9 14.5 30.5 8.2l1.6-1c6.5-3.9 14.6-3.4 21.2 .3c6.6 3.8 11.3 10.6 11.3 18.2l0 1.4c0 11.7 9.5 21.3 21.3 21.3l53.4 0c11.8 0 21.4-9.6 21.4-21.4l0-1.6c0-7.5 4.6-14.2 11.1-18c6.5-3.7 14.5-4.2 21-.3l1.8 1c10.7 6.3 24.4 2.6 30.5-8.2L555 403.1c5.7-10.2 2.3-23-7.8-29c-7.3-4.3-11.2-12.6-11.2-21s3.9-16.7 11.2-21c10-5.9 13.5-18.8 7.8-29l-26.4-46.9c-6.1-10.8-19.9-14.5-30.5-8.2l-1.8 1c-6.5 3.8-14.5 3.4-21-.3c-6.5-3.7-11.1-10.4-11.1-18l0-1.6c0-11.8-9.6-21.4-21.4-21.4zM416.1 409.1a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm-24-56a24 24 0 1 1 48.1 0 24 24 0 1 1 -48.1 0z" />
    </Icon>
);

export default LightbulbGear;