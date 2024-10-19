
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open-dollar` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-dollar?s=light envelope-open-dollar}
 * @preview ![envelope-open-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzkyIDMyTDEyMCAzMmMtMTMuMyAwLTI0IDEwLjctMjQgMjRsMCAxNjYuNUw3Ny41IDIwNy4yYy00LjItMy40LTguNy02LjMtMTMuNS04LjZMNjQgNTZDNjQgMjUuMSA4OS4xIDAgMTIwIDBMMzkyIDBjMzAuOSAwIDU2IDI1LjEgNTYgNTZsMCAxNDIuNmMtNC44IDIuMy05LjMgNS4yLTEzLjQgOC42TDQxNiAyMjIuNSA0MTYgNTZjMC0xMy4zLTEwLjctMjQtMjQtMjR6TTM1IDI1NmMtMS42IDAtMyAxLjMtMyAzbDAgMTg5YzAgMTcuNyAxNC4zIDMyIDMyIDMybDM4NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMTg5YzAtMS42LTEuMy0zLTMtM2MtLjcgMC0xLjMgLjItMS45IC43TDI5NC41IDQwNS4xQzI4My43IDQxNCAyNzAgNDE4LjkgMjU2IDQxOC45cy0yNy43LTQuOS0zOC41LTEzLjhMMzYuOCAyNTYuN2MtLjUtLjQtMS4yLS43LTEuOS0uN3pNMCAyNTljMC0xOS4zIDE1LjYtMzUgMzUtMzVjOC4xIDAgMTUuOSAyLjggMjIuMiA3LjlMMjM3LjggMzgwLjNjNS4xIDQuMiAxMS42IDYuNSAxOC4yIDYuNXMxMy4xLTIuMyAxOC4yLTYuNUw0NTQuOSAyMzEuOWM2LjMtNS4xIDE0LjEtNy45IDIyLjItNy45YzE5LjMgMCAzNSAxNS42IDM1IDM1bDAgMTg5YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCAyNTl6TTI3MiA4OGwwIDE3LjNjOC41IDEuMiAxNi43IDMuMSAyNC4xIDUuMWM4LjUgMi4zIDEzLjYgMTEgMTEuMyAxOS42cy0xMSAxMy42LTE5LjYgMTEuM2MtMTEuMS0zLTIyLTUuMi0zMi4xLTUuM2MtOC40LS4xLTE3LjQgMS44LTIzLjYgNS41Yy01LjcgMy40LTguMSA3LjMtOC4xIDEyLjhjMCAzLjcgMS4zIDYuNSA3LjMgMTAuMWM2LjkgNC4xIDE2LjYgNy4xIDI5LjIgMTAuOWwuNSAuMXMwIDAgMCAwczAgMCAwIDBjMTEuMyAzLjQgMjUuMyA3LjYgMzYuMyAxNC42YzEyLjEgNy42IDIyLjQgMTkuNyAyMi43IDM4LjJjLjMgMTkuMy05LjYgMzMuMy0yMi45IDQxLjZjLTcuNyA0LjgtMTYuNCA3LjYtMjUuMSA5LjFsMCAxNy4xYzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtMTcuOGMtMTEuMi0yLjEtMjEuNy01LjctMzAuOS04LjljMCAwIDAgMCAwIDBjLTIuMS0uNy00LjItMS40LTYuMi0yLjFjLTguNC0yLjgtMTIuOS0xMS45LTEwLjEtMjAuMnMxMS45LTEyLjkgMjAuMi0xMC4xYzIuNSAuOCA0LjggMS42IDcuMSAyLjRjMCAwIDAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwYzEzLjYgNC42IDI0LjYgOC40IDM2LjMgOC43YzkuMSAuMyAxNy45LTEuNyAyMy43LTUuM2M1LjEtMy4yIDcuOS03LjMgNy44LTE0Yy0uMS00LjYtMS44LTcuOC03LjctMTEuNmMtNi44LTQuMy0xNi41LTcuNC0yOS0xMS4ybC0xLjYtLjVzMCAwIDAgMHMwIDAgMCAwYy0xMS0zLjMtMjQuMy03LjMtMzQuOC0xMy43Yy0xMi03LjItMjIuNi0xOC45LTIyLjctMzcuM2MtLjEtMTkuNCAxMC44LTMyLjggMjMuOC00MC41YzcuNS00LjQgMTUuOC03LjIgMjQuMS04LjdMMjQwIDg4YzAtOC44IDcuMi0xNiAxNi0xNnMxNiA3LjIgMTYgMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const EnvelopeOpenDollar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M392 32L120 32c-13.3 0-24 10.7-24 24l0 166.5L77.5 207.2c-4.2-3.4-8.7-6.3-13.5-8.6L64 56C64 25.1 89.1 0 120 0L392 0c30.9 0 56 25.1 56 56l0 142.6c-4.8 2.3-9.3 5.2-13.4 8.6L416 222.5 416 56c0-13.3-10.7-24-24-24zM35 256c-1.6 0-3 1.3-3 3l0 189c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-189c0-1.6-1.3-3-3-3c-.7 0-1.3 .2-1.9 .7L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L36.8 256.7c-.5-.4-1.2-.7-1.9-.7zM0 259c0-19.3 15.6-35 35-35c8.1 0 15.9 2.8 22.2 7.9L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L454.9 231.9c6.3-5.1 14.1-7.9 22.2-7.9c19.3 0 35 15.6 35 35l0 189c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 259zM272 88l0 17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1s0 0 0 0s0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1l0 17.1c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17.8c-11.2-2.1-21.7-5.7-30.9-8.9c0 0 0 0 0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5s0 0 0 0s0 0 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7L240 88c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default EnvelopeOpenDollar;