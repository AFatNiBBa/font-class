
import { Icon } from "../../index";

/**
 * A component that renders the `fire-smoke` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-smoke?s=sharp-light fire-smoke}
 * @preview ![fire-smoke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUyLjcgMTEyLjhMMzc3IDg1LjNjMi40LTIuOCA0LjgtNS40IDctNy44YzcgNy41IDE0LjkgMTYuNiAyMi44IDI2LjdDNDMwLjQgMTM0LjUgNDQ4IDE2NyA0NDggMTkyLjJjMCAyNS4zLTcuNCA0OS0yMC4xIDY4LjhjNy40IDUuNyAxNC4zIDEyLjEgMjAuNyAxOC45YzIuOC0xLjggNS42LTMuNiA4LjUtNS4yYzE0LjUtMjQuMSAyMi45LTUyLjMgMjIuOS04Mi41YzAtNzMuNi05Ni0xNjAtOTYtMTYwcy0zLjQgMy4xLTkgOC42Yy01LjYgNS42LTEzLjQgMTMuNi0yMi4xIDIzLjRjLTcuNC04LjUtMTQuNy0xNi41LTIxLjctMjMuN0MzMDcuNSAxNS45IDI4OCAuMiAyODggLjJzLTEyOCAxMDMuNi0xMjggMTkyYzAgMzAuMiA4LjMgNTguNCAyMi45IDgyLjVjMi45IDEuNiA1LjggMy40IDguNSA1LjJjNi40LTYuOCAxMy4zLTEzLjEgMjAuNy0xOC45Yy0xMi43LTE5LjktMjAuMS00My41LTIwLjEtNjguOGMwLTE0LjcgNS41LTMyLjMgMTYuMS01MmMxMC41LTE5LjQgMjUtMzguNyA0MC4xLTU2LjJjMTQuMy0xNi41IDI4LjYtMzAuNyAzOS44LTQxLjFjMTEuNCAxMC42IDI2LjEgMjUuMyA0MC43IDQyLjJsMjQgMjcuOHpNMjMyIDIwMS44YzAgMTUuMiAzLjMgMjguOSA5LjMgNDAuN2M5LjYtNC44IDE5LjYtOC43IDMwLTExLjdjLTQuNi03LjctNy4zLTE3LjQtNy4zLTI5YzAtNy4xIDIuMS0xNC40IDgtMjQuNGM0LTYuOCA5LjMtMTQuMyAxNi40LTIzLjRjMy45IDUuMiA4LjQgMTEgMTIuOSAxNi45YzUuOCA3LjYgMTEuNCAxNS4xIDE1LjYgMjAuNmw1LjEgNi43IDEuNCAxLjkgLjQgLjUgLjEgLjFjMCAwIDAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwbDEyLjgtOS43LTEyLjggOS43IDkuNSAxMi42IDEyLjctOS40IDI1LjgtMTljNi41IDE1LjYgNS4xIDMyLjctMi42IDQ2YzEwLjQgMyAyMC41IDcgMzAgMTEuOGMxMi0yNCAxMS42LTUzLjYtMS44LTc4LjJjMCAwIDAgMCAwLS4xYy0xLjctMy41LTQuMS04LjItNy43LTEyLjlMMzgwLjQgMTM5bC0xMi43IDkuNC0yNy44IDIwLjQtMTMuMS0xNy4zYy0xMS40LTE1LTIzLjYtMzEuMS0yNS42LTMzLjZsLTEyLjQtMTUuNC0xMi41IDE1LjRjLTEzLjUgMTYuNS0yNC40IDMwLjUtMzEuOSA0My4zYy03LjcgMTMuMS0xMi4zIDI2LjEtMTIuMyA0MC42ek0yMTMuOSAzNjRjMTUtNDQuMiA1Ni45LTc2IDEwNi4xLTc2czkxLjEgMzEuOCAxMDYuMSA3NmwxMi43IDM3LjQgMTYuOS0zNS42QzQ2OC42IDMzOC43IDQ5Ni4xIDMyMCA1MjggMzIwYzQ0LjIgMCA4MCAzNS44IDgwIDgwbDAgODAtODAgMC0xMjMuMyAwLTE2OS4zIDBMMTEyIDQ4MGwtODAgMCAwLTgwYzAtNDQuMiAzNS44LTgwIDgwLTgwYzMxLjkgMCA1OS40IDE4LjcgNzIuMyA0NS43bDE2LjkgMzUuNkwyMTMuOSAzNjR6TTMyMCAyNTZjLTUyLjYgMC05OC42IDI4LjItMTIzLjcgNzAuM0MxNzUuOCAzMDIuOCAxNDUuNiAyODggMTEyIDI4OEM1MC4xIDI4OCAwIDMzOC4xIDAgNDAwbDAgOTYgMCAxNiAxNiAwIDk2IDAgMTIzLjMgMCAxNjkuMyAwTDUyOCA1MTJsOTYgMCAxNiAwIDAtMTYgMC05NmMwLTYxLjktNTAuMS0xMTItMTEyLTExMmMtMzMuNiAwLTYzLjggMTQuOC04NC4zIDM4LjNDNDE4LjYgMjg0LjIgMzcyLjYgMjU2IDMyMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FireSmoke: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352.7 112.8L377 85.3c2.4-2.8 4.8-5.4 7-7.8c7 7.5 14.9 16.6 22.8 26.7C430.4 134.5 448 167 448 192.2c0 25.3-7.4 49-20.1 68.8c7.4 5.7 14.3 12.1 20.7 18.9c2.8-1.8 5.6-3.6 8.5-5.2c14.5-24.1 22.9-52.3 22.9-82.5c0-73.6-96-160-96-160s-3.4 3.1-9 8.6c-5.6 5.6-13.4 13.6-22.1 23.4c-7.4-8.5-14.7-16.5-21.7-23.7C307.5 15.9 288 .2 288 .2s-128 103.6-128 192c0 30.2 8.3 58.4 22.9 82.5c2.9 1.6 5.8 3.4 8.5 5.2c6.4-6.8 13.3-13.1 20.7-18.9c-12.7-19.9-20.1-43.5-20.1-68.8c0-14.7 5.5-32.3 16.1-52c10.5-19.4 25-38.7 40.1-56.2c14.3-16.5 28.6-30.7 39.8-41.1c11.4 10.6 26.1 25.3 40.7 42.2l24 27.8zM232 201.8c0 15.2 3.3 28.9 9.3 40.7c9.6-4.8 19.6-8.7 30-11.7c-4.6-7.7-7.3-17.4-7.3-29c0-7.1 2.1-14.4 8-24.4c4-6.8 9.3-14.3 16.4-23.4c3.9 5.2 8.4 11 12.9 16.9c5.8 7.6 11.4 15.1 15.6 20.6l5.1 6.7 1.4 1.9 .4 .5 .1 .1c0 0 0 0 0 0s0 0 0 0s0 0 0 0l12.8-9.7-12.8 9.7 9.5 12.6 12.7-9.4 25.8-19c6.5 15.6 5.1 32.7-2.6 46c10.4 3 20.5 7 30 11.8c12-24 11.6-53.6-1.8-78.2c0 0 0 0 0-.1c-1.7-3.5-4.1-8.2-7.7-12.9L380.4 139l-12.7 9.4-27.8 20.4-13.1-17.3c-11.4-15-23.6-31.1-25.6-33.6l-12.4-15.4-12.5 15.4c-13.5 16.5-24.4 30.5-31.9 43.3c-7.7 13.1-12.3 26.1-12.3 40.6zM213.9 364c15-44.2 56.9-76 106.1-76s91.1 31.8 106.1 76l12.7 37.4 16.9-35.6C468.6 338.7 496.1 320 528 320c44.2 0 80 35.8 80 80l0 80-80 0-123.3 0-169.3 0L112 480l-80 0 0-80c0-44.2 35.8-80 80-80c31.9 0 59.4 18.7 72.3 45.7l16.9 35.6L213.9 364zM320 256c-52.6 0-98.6 28.2-123.7 70.3C175.8 302.8 145.6 288 112 288C50.1 288 0 338.1 0 400l0 96 0 16 16 0 96 0 123.3 0 169.3 0L528 512l96 0 16 0 0-16 0-96c0-61.9-50.1-112-112-112c-33.6 0-63.8 14.8-84.3 38.3C418.6 284.2 372.6 256 320 256z" />
    </Icon>
);

export default FireSmoke;