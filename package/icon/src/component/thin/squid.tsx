
import { Icon } from "../../index";

/**
 * A component that renders the `squid` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/squid?s=thin squid}
 * @preview ![squid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTIyLjcgMmMzLjItMi44IDcuOS0yLjYgMTAuOSAuNGwzNC4yIDM0LjJjMTUuMiAxNS4yIDE1LjcgMzkuNyAxIDU1LjVsLTYyIDY2LjhjLTguOCA5LjUtOC41IDI0LjIgLjYgMzMuM0wxNTMgMjM3LjdjNC41LTQxLjEgMjQuNC05Mi4zIDczLjMtMTM3YzExLTEwLjEgMjMuNS0xOS44IDM3LjYtMjlMMjU2LjEgOWMtLjMtMi40IC41LTQuOSAyLjMtNi42czQuMi0yLjYgNi42LTIuM0w0MDAuNCAxNmMyNS40LTYgNTMuMi0xMC44IDgzLjctMTQuMWMxNS0xLjYgMjcuNiAxMSAyNiAyNmMtMy4zIDMwLjUtOC4xIDU4LjMtMTQuMSA4My43bDE1LjkgMTM1LjVjLjMgMi40LS42IDQuOS0yLjMgNi42cy00LjIgMi42LTYuNiAyLjNsLTYyLjctNy44Yy05LjIgMTQuMS0xOC45IDI2LjYtMjkgMzcuNmMtNDQuNyA0OC45LTk2IDY4LjgtMTM3IDczLjNsNDUuNiA0NS42YzkuMSA5LjEgMjMuOCA5LjQgMzMuMyAuNmw2Ni44LTYyYzE1LjgtMTQuNiA0MC4zLTE0LjIgNTUuNSAxbDM0LjIgMzQuMmMzIDMgMy4xIDcuOCAuNCAxMC45bC0xMSAxMi41Yy0yNy40IDMxLjMtNzUuNiAzMy0xMDUuMSAzLjVsLTguNC04LjQtMjEuNSAyMGMtMTUuOCAxNC42LTQwLjMgMTQuMi01NS41LTFMMjU1LjcgMzYzYy0yIC45LTMuOSAyLjEtNS42IDMuNGwtNDYgMzQuNUwyNDcgNDQzLjdjMTUuNiAxNS42IDE1LjYgNDAuOSAwIDU2LjZsLTkuNCA5LjRjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBzLTMuMS04LjIgMC0xMS4zbDkuNC05LjRjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlsLTQ0LjUtNDQuNS00My4yIDMyLjRjLTcuNiA1LjctMTEuOSAxNC42LTExLjggMjQuMWMuMyAxNi4xIDEzLjQgMjkgMjkuNSAyOWwxOS4xIDBjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDhsLTE5LjEgMGMtMjQuOCAwLTQ1LjEtMTkuOS00NS41LTQ0LjhjLS4yLTE0LjYgNi41LTI4LjQgMTguMi0zNy4xbDQxLjMtMzEtNjctNjdMODEuNCAzNzQuMUM3MyAzODUuNCA1OS43IDM5MiA0NS42IDM5MkMyMC45IDM5MiAuOSAzNzIgLjkgMzQ3LjNMLjkgMzI4YzAtNC40IDMuNi04IDgtOHM4IDMuNiA4IDhsMCAxOS4zYzAgMTUuOSAxMi45IDI4LjcgMjguNyAyOC43YzkgMCAxNy42LTQuMyAyMy0xMS41bDMyLjgtNDMuOEw1NyAyNzYuM2MtOS40LTkuNC0yNC42LTkuNC0zMy45IDBsLTkuNCA5LjRjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBzLTMuMS04LjIgMC0xMS4zbDkuNC05LjRjMTUuNi0xNS42IDQwLjktMTUuNiA1Ni42IDBsNDIuOSA0Mi45IDM0LjUtNDZjMS4zLTEuNyAyLjQtMy42IDMuNC01LjZMOTYuMSAyMDMuNWMtMTUuMi0xNS4yLTE1LjctMzkuNy0xLTU1LjVsMjAtMjEuNS04LjQtOC40Qzc3LjMgODguNiA3OC45IDQwLjQgMTEwLjIgMTIuOUwxMjIuNyAyem0tLjIgMzE3LjNsNzAuMiA3MC4yIDQ3LjgtMzUuOGM4LjQtNi4zIDE4LjMtOS4zIDI4LjEtMTAuMWMzOC0zLjIgODcuNS0yMS4xIDEzMC45LTY4LjZjNDMuNC00Ny41IDgxLjItMTI1LjIgOTQuNy0yNDguN2MuNS00LjgtMy42LTguOS04LjQtOC40QzM2Mi4zIDMxLjMgMjg0LjYgNjkuMSAyMzcuMSAxMTIuNWMtNDcuNSA0My40LTY1LjQgOTIuOS02OC42IDEzMC45Yy0uOCA5LjgtMy45IDE5LjctMTAuMSAyOC4xbC0zNS44IDQ3Ljh6bTMyNy04Ni4xbDQ1LjMgNS43LTEwLjItODYuM2MtOS45IDMxLTIxLjkgNTcuNy0zNS4yIDgwLjd6bS05MC0yMDUuOEwyNzMuMiAxNy4xbDUuNyA0NS4zYzIzLTEzLjMgNDkuNy0yNS4yIDgwLjctMzUuMnpNMTI2IDExNC43bDMxLjEtMzMuNWM4LjgtOS41IDguNS0yNC4yLS42LTMzLjNMMTI3LjYgMTguOWwtNi45IDZDOTYuNCA0Ni4zIDk1LjEgODMuOCAxMTggMTA2LjdsOCA4ek0zOTcuMyAzODZsOCA4YzIyLjkgMjIuOSA2MC40IDIxLjcgODEuNy0yLjdsNi02LjktMjguOS0yOC45Yy05LjEtOS4xLTIzLjgtOS40LTMzLjMtLjZMMzk3LjMgMzg2ek0yMDguOSAzMjBhMTYgMTYgMCAxIDEgMzIgMCAxNiAxNiAwIDEgMSAtMzIgMHptLTE2LTQ4YTE2IDE2IDAgMSAxIDAgMzIgMTYgMTYgMCAxIDEgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Squid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M122.7 2c3.2-2.8 7.9-2.6 10.9 .4l34.2 34.2c15.2 15.2 15.7 39.7 1 55.5l-62 66.8c-8.8 9.5-8.5 24.2 .6 33.3L153 237.7c4.5-41.1 24.4-92.3 73.3-137c11-10.1 23.5-19.8 37.6-29L256.1 9c-.3-2.4 .5-4.9 2.3-6.6s4.2-2.6 6.6-2.3L400.4 16c25.4-6 53.2-10.8 83.7-14.1c15-1.6 27.6 11 26 26c-3.3 30.5-8.1 58.3-14.1 83.7l15.9 135.5c.3 2.4-.6 4.9-2.3 6.6s-4.2 2.6-6.6 2.3l-62.7-7.8c-9.2 14.1-18.9 26.6-29 37.6c-44.7 48.9-96 68.8-137 73.3l45.6 45.6c9.1 9.1 23.8 9.4 33.3 .6l66.8-62c15.8-14.6 40.3-14.2 55.5 1l34.2 34.2c3 3 3.1 7.8 .4 10.9l-11 12.5c-27.4 31.3-75.6 33-105.1 3.5l-8.4-8.4-21.5 20c-15.8 14.6-40.3 14.2-55.5-1L255.7 363c-2 .9-3.9 2.1-5.6 3.4l-46 34.5L247 443.7c15.6 15.6 15.6 40.9 0 56.6l-9.4 9.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l9.4-9.4c9.4-9.4 9.4-24.6 0-33.9l-44.5-44.5-43.2 32.4c-7.6 5.7-11.9 14.6-11.8 24.1c.3 16.1 13.4 29 29.5 29l19.1 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-19.1 0c-24.8 0-45.1-19.9-45.5-44.8c-.2-14.6 6.5-28.4 18.2-37.1l41.3-31-67-67L81.4 374.1C73 385.4 59.7 392 45.6 392C20.9 392 .9 372 .9 347.3L.9 328c0-4.4 3.6-8 8-8s8 3.6 8 8l0 19.3c0 15.9 12.9 28.7 28.7 28.7c9 0 17.6-4.3 23-11.5l32.8-43.8L57 276.3c-9.4-9.4-24.6-9.4-33.9 0l-9.4 9.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l9.4-9.4c15.6-15.6 40.9-15.6 56.6 0l42.9 42.9 34.5-46c1.3-1.7 2.4-3.6 3.4-5.6L96.1 203.5c-15.2-15.2-15.7-39.7-1-55.5l20-21.5-8.4-8.4C77.3 88.6 78.9 40.4 110.2 12.9L122.7 2zm-.2 317.3l70.2 70.2 47.8-35.8c8.4-6.3 18.3-9.3 28.1-10.1c38-3.2 87.5-21.1 130.9-68.6c43.4-47.5 81.2-125.2 94.7-248.7c.5-4.8-3.6-8.9-8.4-8.4C362.3 31.3 284.6 69.1 237.1 112.5c-47.5 43.4-65.4 92.9-68.6 130.9c-.8 9.8-3.9 19.7-10.1 28.1l-35.8 47.8zm327-86.1l45.3 5.7-10.2-86.3c-9.9 31-21.9 57.7-35.2 80.7zm-90-205.8L273.2 17.1l5.7 45.3c23-13.3 49.7-25.2 80.7-35.2zM126 114.7l31.1-33.5c8.8-9.5 8.5-24.2-.6-33.3L127.6 18.9l-6.9 6C96.4 46.3 95.1 83.8 118 106.7l8 8zM397.3 386l8 8c22.9 22.9 60.4 21.7 81.7-2.7l6-6.9-28.9-28.9c-9.1-9.1-23.8-9.4-33.3-.6L397.3 386zM208.9 320a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-16-48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Squid;