
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-circle-dollar` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-circle-dollar?s=regular hand-holding-circle-dollar}
 * @preview ![hand-holding-circle-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDE0NGExNDQgMTQ0IDAgMSAxIDI4OCAwIDE0NCAxNDQgMCAxIDEgLTI4OCAwem0xMjAuOC0zMi42Yy42LS45IDEuOC0yLjEgNC4yLTMuNGM1LjEtMi43IDEyLjUtNC4xIDE4LjctNGM4LjIgLjEgMTcuMSAxLjggMjYuNCA0LjFjOC42IDIuMSAxNy4zLTMuMSAxOS40LTExLjdzLTMuMS0xNy4zLTExLjctMTkuNGMtNS42LTEuNC0xMS42LTIuNy0xNy45LTMuN2wwLTkuNGMwLTguOC03LjItMTYtMTYtMTZzLTE2IDcuMi0xNiAxNmwwIDkuNWMtNi4xIDEuMi0xMi4zIDMuMi0xOCA2LjNjLTExLjggNi4zLTIzIDE4LjQtMjEuOCAzNy4yYzEgMTYgMTEuNyAyNS4zIDIxLjYgMzAuN2M4LjggNC43IDE5LjcgNy44IDI4LjYgMTAuM2wxLjggLjVjMTAuMyAyLjkgMTcuOSA1LjIgMjMuMiA4LjNjNC41IDIuNyA0LjcgNC4yIDQuNyA1LjZjLjEgMi40LS41IDMuNy0xIDQuNWMtLjYgMS0xLjggMi4yLTQgMy4zYy00LjcgMi41LTExLjggMy44LTE4LjUgMy42Yy05LjUtLjMtMTguNS0zLjEtMjkuOS02LjhjLTEuOS0uNi0zLjgtMS4yLTUuOC0xLjhjLTguNC0yLjYtMTcuNCAyLjEtMjAgMTAuNXMyLjEgMTcuNCAxMC41IDIwYzEuNiAuNSAzLjMgMSA1IDEuNmMwIDAgMCAwIDAgMHMwIDAgMCAwYzcuMSAyLjMgMTUuMSA0LjkgMjMuNyA2LjZsMCAxMS40YzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZsMC0xMC44YzYuMi0xLjEgMTIuNS0zLjEgMTguMy02LjJjMTIuMS02LjUgMjIuMy0xOC43IDIxLjctMzYuOWMtLjUtMTYuMi0xMC4zLTI2LjMtMjAuNS0zMi4zYy05LjQtNS42LTIxLjItOC45LTMwLjUtMTEuNWwtLjIgMGMtMTAuNC0yLjktMTguMy01LjItMjMuOS04LjJjLTQuOC0yLjYtNC44LTQtNC44LTQuNWMwIDAgMCAwIDAtLjFjLS4xLTEuOSAuMy0yLjkgLjgtMy42ek0xODcuNCAzNTJjLTcuOSAwLTE1LjYgMi4zLTIyLjIgNi43TDg1LjMgNDEyYy0zLjkgMi42LTguNiA0LTEzLjMgNGwtNDggMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGw0MC43IDAgNzMuOC00OS4yQzE1MyAzMDkuMSAxNzAgMzA0IDE4Ny40IDMwNEwzNDQgMzA0YzM1LjMgMCA2NCAyOC43IDY0IDY0YzAgLjcgMCAxLjMgMCAybDY0LjktNDBjMTAuNy02LjYgMjIuOS0xMCAzNS41LTEwbDcuNCAwYzMzLjMgMCA2MC4zIDI3IDYwLjMgNjAuM2MwIDIwLjQtMTAuNCAzOS41LTI3LjUgNTAuNmwtOTUuNiA2MS45Yy0xOS40IDEyLjYtNDIuMSAxOS4zLTY1LjIgMTkuM0wyNCA1MTJjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRsMzYzLjcgMGMxMy45IDAgMjcuNS00IDM5LjEtMTEuNmw5NS42LTYxLjljMy41LTIuMyA1LjYtNi4xIDUuNi0xMC4zYzAtNi44LTUuNS0xMi4zLTEyLjMtMTIuM2wtNy40IDBjLTMuNiAwLTcuMiAxLTEwLjMgMi45bC05My41IDU3LjVjLTMuOCAyLjMtOC4xIDMuNi0xMi42IDMuNmwtNDggMC0yNCAwLTY0IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRsNjQgMCAyNCAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2bC0xNTYuNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandHoldingCircleDollar: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 144a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm120.8-32.6c.6-.9 1.8-2.1 4.2-3.4c5.1-2.7 12.5-4.1 18.7-4c8.2 .1 17.1 1.8 26.4 4.1c8.6 2.1 17.3-3.1 19.4-11.7s-3.1-17.3-11.7-19.4c-5.6-1.4-11.6-2.7-17.9-3.7l0-9.4c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 9.5c-6.1 1.2-12.3 3.2-18 6.3c-11.8 6.3-23 18.4-21.8 37.2c1 16 11.7 25.3 21.6 30.7c8.8 4.7 19.7 7.8 28.6 10.3l1.8 .5c10.3 2.9 17.9 5.2 23.2 8.3c4.5 2.7 4.7 4.2 4.7 5.6c.1 2.4-.5 3.7-1 4.5c-.6 1-1.8 2.2-4 3.3c-4.7 2.5-11.8 3.8-18.5 3.6c-9.5-.3-18.5-3.1-29.9-6.8c-1.9-.6-3.8-1.2-5.8-1.8c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20c1.6 .5 3.3 1 5 1.6c0 0 0 0 0 0s0 0 0 0c7.1 2.3 15.1 4.9 23.7 6.6l0 11.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-10.8c6.2-1.1 12.5-3.1 18.3-6.2c12.1-6.5 22.3-18.7 21.7-36.9c-.5-16.2-10.3-26.3-20.5-32.3c-9.4-5.6-21.2-8.9-30.5-11.5l-.2 0c-10.4-2.9-18.3-5.2-23.9-8.2c-4.8-2.6-4.8-4-4.8-4.5c0 0 0 0 0-.1c-.1-1.9 .3-2.9 .8-3.6zM187.4 352c-7.9 0-15.6 2.3-22.2 6.7L85.3 412c-3.9 2.6-8.6 4-13.3 4l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l40.7 0 73.8-49.2C153 309.1 170 304 187.4 304L344 304c35.3 0 64 28.7 64 64c0 .7 0 1.3 0 2l64.9-40c10.7-6.6 22.9-10 35.5-10l7.4 0c33.3 0 60.3 27 60.3 60.3c0 20.4-10.4 39.5-27.5 50.6l-95.6 61.9c-19.4 12.6-42.1 19.3-65.2 19.3L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l363.7 0c13.9 0 27.5-4 39.1-11.6l95.6-61.9c3.5-2.3 5.6-6.1 5.6-10.3c0-6.8-5.5-12.3-12.3-12.3l-7.4 0c-3.6 0-7.2 1-10.3 2.9l-93.5 57.5c-3.8 2.3-8.1 3.6-12.6 3.6l-48 0-24 0-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 24 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-156.6 0z" />
    </Icon>
);

export default HandHoldingCircleDollar;