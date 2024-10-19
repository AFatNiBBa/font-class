
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-simple?s=duotone handshake-simple}
 * @preview ![handshake-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDguMyAxODYuNGMtLjEgLjktLjIgMS45LS4yIDIuOGMtLjEgLjktLjEgMS45LS4xIDIuOGMwIDkuNyAyLjkgMTkuNCA4LjkgMjcuOWMxNS40IDIxLjYgNDUuNCAyNi42IDY3IDExLjJsNTcuMi00MC44YzQuNCA0IDguOCA4IDEzLjEgMTJMNDk2LjQgMzMyLjZjNS41IDUgOS41IDExLjEgMTIuMSAxNy41Yy4zIC42IC41IDEuMiAuNyAxLjhsODIuNyAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtMTI4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4bC0xNiAwLTY1LjUgMC03MS00Ny4zQzQyMy4yIDY5LjggNDA0LjEgNjQgMzg0LjUgNjRjLTIwLjcgMC00MC45IDYuNS01Ny43IDE4LjVjLTMuMSAyLjItNi4yIDQuNC05LjMgNi43bC04OS4zIDYzLjhjLS44IC42LTEuNiAxLjItMi40IDEuOHMtMS41IDEuMy0yLjIgMS45Yy0xLjQgMS4zLTIuOCAyLjctNCA0LjJjLTIuNSAyLjktNC42IDYuMS02LjMgOS41cy0zIDYuOS0zLjggMTAuNWMtLjQgMS44LS44IDMuNy0xIDUuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4IDM1MmwxMDguMiAwIDkxLjQgODMuNGMxOS42IDE3LjkgNDkuOSAxNi41IDY3LjgtMy4xYzUuNS02LjEgOS4yLTEzLjIgMTEuMS0yMC42bDE3IDE1LjZjMTkuNSAxNy45IDQ5LjkgMTYuNiA2Ny44LTIuOWM3LjQtOC4xIDExLjUtMTggMTIuNC0yOC4ybDcuOCA3LjFjMTkuNSAxNy45IDQ5LjkgMTYuNiA2Ny44LTIuOWMxMi45LTE0IDE1LjgtMzMuNyA5LjItNTAuM2MtMi42LTYuNS02LjYtMTIuNS0xMi4xLTE3LjVMMzU0LjIgMjAyLjNsLTEzLjEtMTItNTcuMiA0MC44Yy0yMS42IDE1LjQtNTEuNiAxMC40LTY3LTExLjJzLTEwLjQtNTEuNiAxMS4yLTY3bDg5LjMtNjMuOC0yLjctMi4zQzI5Ny41IDcyLjEgMjc1LjUgNjQgMjUyLjggNjRDMjM0IDY0IDIxNS43IDY5LjYgMjAwIDgwbC03MiA0OC04MCAwYy0yNi41IDAtNDggMjEuNS00OCA0OEwwIDMwNGMwIDI2LjUgMjEuNSA0OCA0OCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HandshakeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M208.3 186.4c-.1 .9-.2 1.9-.2 2.8c-.1 .9-.1 1.9-.1 2.8c0 9.7 2.9 19.4 8.9 27.9c15.4 21.6 45.4 26.6 67 11.2l57.2-40.8c4.4 4 8.8 8 13.1 12L496.4 332.6c5.5 5 9.5 11.1 12.1 17.5c.3 .6 .5 1.2 .7 1.8l82.7 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-16 0-65.5 0-71-47.3C423.2 69.8 404.1 64 384.5 64c-20.7 0-40.9 6.5-57.7 18.5c-3.1 2.2-6.2 4.4-9.3 6.7l-89.3 63.8c-.8 .6-1.6 1.2-2.4 1.8s-1.5 1.3-2.2 1.9c-1.4 1.3-2.8 2.7-4 4.2c-2.5 2.9-4.6 6.1-6.3 9.5s-3 6.9-3.8 10.5c-.4 1.8-.8 3.7-1 5.5z" />
            <path d="M48 352l108.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c7.4-8.1 11.5-18 12.4-28.2l7.8 7.1c19.5 17.9 49.9 16.6 67.8-2.9c12.9-14 15.8-33.7 9.2-50.3c-2.6-6.5-6.6-12.5-12.1-17.5L354.2 202.3l-13.1-12-57.2 40.8c-21.6 15.4-51.6 10.4-67-11.2s-10.4-51.6 11.2-67l89.3-63.8-2.7-2.3C297.5 72.1 275.5 64 252.8 64C234 64 215.7 69.6 200 80l-72 48-80 0c-26.5 0-48 21.5-48 48L0 304c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default HandshakeSimple;