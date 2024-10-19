
import { Icon } from "../../index";

/**
 * A component that renders the `square-threads` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-threads?s=brands square-threads}
 * @preview ![square-threads](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NlY0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRIMzg0YzM1LjMgMCA2NC0yOC43IDY0LTY0Vjk2YzAtMzUuMy0yOC43LTY0LTY0LTY0SDY0ek0yOTQuMiAyNDQuM2MxOS41IDkuMyAzMy43IDIzLjUgNDEuMiA0MC45YzEwLjQgMjQuMyAxMS40IDYzLjktMjAuMiA5NS40Yy0yNC4yIDI0LjEtNTMuNSAzNS05NS4xIDM1LjNoLS4yYy00Ni44LS4zLTgyLjgtMTYuMS0xMDYuOS00Ni44QzkxLjUgMzQxLjggODAuNCAzMDMuNyA4MCAyNTZ2LS4xLS4xYy40LTQ3LjcgMTEuNS04NS43IDMzLTExMy4xYzI0LjItMzAuNyA2MC4yLTQ2LjUgMTA2LjktNDYuOGguMmM0Ni45IC4zIDgzLjMgMTYgMTA4LjIgNDYuNmMxMi4zIDE1LjEgMjEuMyAzMy4zIDI3IDU0LjRsLTI2LjkgNy4yYy00LjctMTcuMi0xMS45LTMxLjktMjEuNC00My42Yy0xOS40LTIzLjktNDguNy0zNi4xLTg3LTM2LjRjLTM4IC4zLTY2LjggMTIuNS04NS41IDM2LjJjLTE3LjUgMjIuMy0yNi42IDU0LjQtMjYuOSA5NS41Yy4zIDQxLjEgOS40IDczLjMgMjYuOSA5NS41YzE4LjcgMjMuOCA0Ny40IDM2IDg1LjUgMzYuMmMzNC4zLS4zIDU2LjktOC40IDc1LjgtMjcuM2MyMS41LTIxLjUgMjEuMS00Ny45IDE0LjItNjRjLTQtOS40LTExLjQtMTcuMy0yMS4zLTIzLjNjLTIuNCAxOC03LjkgMzIuMi0xNi41IDQzLjJjLTExLjQgMTQuNS0yNy43IDIyLjQtNDguNCAyMy41Yy0xNS43IC45LTMwLjgtMi45LTQyLjYtMTAuN2MtMTMuOS05LjItMjItMjMuMi0yMi45LTM5LjVjLTEuNy0zMi4yIDIzLjgtNTUuMyA2My41LTU3LjZjMTQuMS0uOCAyNy4zLS4yIDM5LjUgMS45Yy0xLjYtOS45LTQuOS0xNy43LTkuOC0yMy40Yy02LjctNy44LTE3LjEtMTEuOC0zMC44LTExLjloLS40Yy0xMSAwLTI2IDMuMS0zNS42IDE3LjZsLTIzLTE1LjhjMTIuOC0xOS40IDMzLjYtMzAuMSA1OC41LTMwLjFoLjZjNDEuOCAuMyA2Ni42IDI2LjMgNjkuMSA3MS44YzEuNCAuNiAyLjggMS4yIDQuMiAxLjlsLjEgLjV6bS03MS44IDY3LjVjMTctLjkgMzYuNC03LjYgMzkuNy00OC44Yy04LjgtMS45LTE4LjYtMi45LTI5LTIuOWMtMy4yIDAtNi40IC4xLTkuNiAuM2MtMjguNiAxLjYtMzguMSAxNS41LTM3LjQgMjcuOWMuOSAxNi43IDE5IDI0LjUgMzYuNCAyMy42bC0uMS0uMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareThreads: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM294.2 244.3c19.5 9.3 33.7 23.5 41.2 40.9c10.4 24.3 11.4 63.9-20.2 95.4c-24.2 24.1-53.5 35-95.1 35.3h-.2c-46.8-.3-82.8-16.1-106.9-46.8C91.5 341.8 80.4 303.7 80 256v-.1-.1c.4-47.7 11.5-85.7 33-113.1c24.2-30.7 60.2-46.5 106.9-46.8h.2c46.9 .3 83.3 16 108.2 46.6c12.3 15.1 21.3 33.3 27 54.4l-26.9 7.2c-4.7-17.2-11.9-31.9-21.4-43.6c-19.4-23.9-48.7-36.1-87-36.4c-38 .3-66.8 12.5-85.5 36.2c-17.5 22.3-26.6 54.4-26.9 95.5c.3 41.1 9.4 73.3 26.9 95.5c18.7 23.8 47.4 36 85.5 36.2c34.3-.3 56.9-8.4 75.8-27.3c21.5-21.5 21.1-47.9 14.2-64c-4-9.4-11.4-17.3-21.3-23.3c-2.4 18-7.9 32.2-16.5 43.2c-11.4 14.5-27.7 22.4-48.4 23.5c-15.7 .9-30.8-2.9-42.6-10.7c-13.9-9.2-22-23.2-22.9-39.5c-1.7-32.2 23.8-55.3 63.5-57.6c14.1-.8 27.3-.2 39.5 1.9c-1.6-9.9-4.9-17.7-9.8-23.4c-6.7-7.8-17.1-11.8-30.8-11.9h-.4c-11 0-26 3.1-35.6 17.6l-23-15.8c12.8-19.4 33.6-30.1 58.5-30.1h.6c41.8 .3 66.6 26.3 69.1 71.8c1.4 .6 2.8 1.2 4.2 1.9l.1 .5zm-71.8 67.5c17-.9 36.4-7.6 39.7-48.8c-8.8-1.9-18.6-2.9-29-2.9c-3.2 0-6.4 .1-9.6 .3c-28.6 1.6-38.1 15.5-37.4 27.9c.9 16.7 19 24.5 36.4 23.6l-.1-.1z" />
    </Icon>
);

export default SquareThreads;