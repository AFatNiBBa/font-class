
import { Icon } from "../../index";

/**
 * A component that renders the `dungeon` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dungeon?s=regular dungeon}
 * @preview ![dungeon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDEyOGMtNi45IDAtMTMuNyAuNS0yMC40IDEuNGwtLjIgMGMtNy44IDEtMTUuNi0zLTE4LjUtMTAuM2wtLjctMS44TDE5OSA3NC4zbC0uMi0uNWMtMy03LjYgLjItMTYuMiA3LjItMTkuNWMuOS0uNCAxLjktLjggMi45LTFDMjI0LjEgNDkuOCAyMzkuOCA0OCAyNTYgNDhzMzEuOSAxLjggNDcuMSA1LjNjMSAuMiAyIC42IDIuOSAxYzcgMy4zIDEwLjMgMTEuOSA3LjIgMTkuNWwtLjIgLjUtMTcuMiA0My4xLS43IDEuOGMtMi45IDcuMy0xMC43IDExLjMtMTguNSAxMC4zbC0uMiAwYy02LjYtLjktMTMuNC0xLjQtMjAuNC0xLjR6TTk2IDUxMmwzMiAwIDI1NiAwIDMyIDAgMzIgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTQwYzAtMTEuNy0zLjEtMjIuNi04LjYtMzJjNS40LTkuNCA4LjYtMjAuMyA4LjYtMzJsMC00MGMwLTExLjctMy4xLTIyLjYtOC42LTMyYzUuOC0xMC4yIDguOS0yMi4zIDcuOC0zNS42Yy0yLjItMjguNi05LjEtNTYtMTkuOS04MS4yYy02LjEtMTQuMy0xNi4yLTI0LjUtMjgtMzAuNmMtLjYtMTMuMy01LjUtMjYuNy0xNS44LTM4LjNjLTE2LjgtMTguOS0zNi40LTM1LjQtNTguMS00OC43Yy0xMy4yLTguMS0yNy4zLTEwLjYtNDAuNS04LjhjLTguMi0xMC41LTIwLTE4LjctMzUuMS0yMi4xQzI5NS4yIDIuMyAyNzUuOSAwIDI1NiAwcy0zOS4yIDIuMy01Ny45IDYuNkMxODMgMTAuMSAxNzEuMiAxOC4yIDE2MyAyOC43Yy0xMy4yLTEuOC0yNy4zIC43LTQwLjUgOC44QzEwMC44IDUwLjggODEuMiA2Ny4zIDY0LjQgODYuMmMtMTAuMiAxMS42LTE1LjIgMjUtMTUuOCAzOC4zYy0xMS44IDYuMi0yMS45IDE2LjMtMjggMzAuNkM5LjggMTgwLjQgMi45IDIwNy44IC43IDIzNi40Yy0xIDEzLjMgMiAyNS40IDcuOCAzNS42QzMuMSAyODEuNCAwIDI5Mi4zIDAgMzA0bDAgNDBjMCAxMS43IDMuMSAyMi42IDguNiAzMkMzLjEgMzg1LjQgMCAzOTYuMyAwIDQwOGwwIDQwYzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyIDB6TTM3MS40IDE2NS4yYy02LjQgNC4zLTE0LjggMy4zLTIwLjctMS42bC0uMi0uMmMtNS41LTQuOC0xMS40LTkuMi0xNy42LTEzLjFsLS4yLS4yYy02LjMtNC4yLTkuNi0xMS44LTcuNy0xOWMuMi0uNiAuNC0xLjIgLjYtMS44bDE3LjItNDMuMSAuMi0uNWMzLjItNy40IDExLjQtMTEuMSAxOC43LTguNmMxIC4zIDEuOSAuOCAyLjggMS4zYzE3LjcgMTAuOCAzMy42IDI0LjIgNDcuMiAzOS42Yy43IC44IDEuMyAxLjcgMS44IDIuNmMzLjggNi43IDEuNSAxNS40LTUuMiAxOS45bC0xLjEgLjgtMzIuNiAyMS43LTMuMiAyLjF6bTE1LjQgNDYuNGwtLjItLjRjLTIuOC02LjUtMS44LTE0IDIuOC0xOWMuOS0uOSAxLjgtMS44IDIuOS0yLjVsMzIuNi0yMS43Yy40LS4zIC44LS41IDEuMi0uN2M2LjgtMy44IDE1LjMtMiAxOS42IDQuMWMuNiAuOCAxLjEgMS43IDEuNSAyLjdjOC44IDIwLjUgMTQuNCA0Mi43IDE2LjIgNjZjMCAuNiAuMSAxLjIgMCAxLjljLS40IDcuOS03LjIgMTQuMS0xNS40IDE0LjFsLTMyIDAtMi42IDBjLTcuOCAwLTE0LjMtNS43LTE2LjQtMTMuMmMtLjEtLjMtLjItLjctLjItMWMtMi4yLTEwLjYtNS43LTIwLjctMTAuMS0zMC4zek00MDAgMzA0YzAtLjUgMC0uOSAuMS0xLjRjLjYtNy4zIDYuMi0xMy4zIDEzLjQtMTQuNGMuOC0uMSAxLjctLjIgMi42LS4ybDMyIDBjOC4xIDAgMTQuOSA2LjEgMTUuOSAxNGMuMSAuNyAuMSAxLjQgLjEgMmwwIDQwYzAgLjcgMCAxLjMtLjEgMmMtMSA3LjktNy43IDE0LTE1LjkgMTRsLTMyIDBjLTguMiAwLTE0LjktNi4xLTE1LjktMTRjLS4xLS42LS4xLTEuMy0uMS0ybDAtNDB6bTAgMTA0YzAtLjcgMC0xLjMgLjEtMmMxLTcuOSA3LjctMTQgMTUuOS0xNGwzMiAwYzguMiAwIDE0LjkgNi4xIDE1LjkgMTRjLjEgLjYgLjEgMS4zIC4xIDJsMCA0MGMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTQwek0xNDcuNiA3OC41Yy45LS42IDEuOC0xIDIuOC0xLjNjNy4zLTIuNiAxNS41IDEuMiAxOC43IDguNmwuMiAuNSAxNy4yIDQzLjFjLjIgLjYgLjQgMS4yIC42IDEuOGMxLjkgNy4yLTEuNCAxNC44LTcuNyAxOWwtLjMgLjJjLTYuMiAzLjktMTIuMSA4LjMtMTcuNiAxMy4xbC0uMiAuMmMtNS45IDQuOS0xNC4zIDUuOS0yMC43IDEuNmwtMy4yLTIuMS0zMi42LTIxLjctMS4xLS44Yy02LjctNC41LTktMTMuMi01LjItMTkuOWMuNS0uOSAxLjEtMS44IDEuOC0yLjZjMTMuNy0xNS40IDI5LjYtMjguOCA0Ny4yLTM5LjZ6TTY0LjggMTc0LjFjLjQtMSAuOS0xLjkgMS41LTIuN2M0LjMtNi4xIDEyLjgtNy45IDE5LjYtNC4xYy40IC4yIC44IC41IDEuMiAuN2wzMi42IDIxLjdjMS4xIC43IDIuMSAxLjYgMi45IDIuNWM0LjYgNSA1LjYgMTIuNiAyLjggMTlsLS4yIC40Yy00LjQgOS42LTcuOCAxOS43LTEwLjEgMzAuM2MtLjEgLjMtLjEgLjctLjIgMWMtMiA3LjUtOC42IDEzLjItMTYuNCAxMy4yTDk2IDI1NmwtMzIgMGMtOC4yIDAtMTUtNi4yLTE1LjQtMTQuMWMwLS42IDAtMS4yIDAtMS45YzEuOC0yMy4zIDcuNC00NS41IDE2LjItNjZ6TTQ4IDMwNGMwLS43IDAtMS40IC4xLTJjMS03LjkgNy43LTE0IDE1LjktMTRsMzIgMGMuOSAwIDEuNyAuMSAyLjYgLjJjNy4yIDEuMiAxMi44IDcuMSAxMy40IDE0LjRjMCAuNSAuMSAuOSAuMSAxLjRsMCA0MGMwIC43IDAgMS4zLS4xIDJjLTEgNy45LTcuNyAxNC0xNS45IDE0bC0zMiAwYy04LjIgMC0xNC45LTYuMS0xNS45LTE0Yy0uMS0uNi0uMS0xLjMtLjEtMmwwLTQwem0wIDEwNGMwLS43IDAtMS4zIC4xLTJjMS03LjkgNy43LTE0IDE1LjktMTRsMzIgMGM4LjIgMCAxNC45IDYuMSAxNS45IDE0Yy4xIC42IC4xIDEuMyAuMSAybDAgNDBjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC00MHpNMjcyIDE5MmwwIDI1NmMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTI1NmMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2em0tNjQgMzJsMCAyMjRjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC0yMjRjMC04LjggNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNnptMTI4IDBsMCAyMjRjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC0yMjRjMC04LjggNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Dungeon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 128c-6.9 0-13.7 .5-20.4 1.4l-.2 0c-7.8 1-15.6-3-18.5-10.3l-.7-1.8L199 74.3l-.2-.5c-3-7.6 .2-16.2 7.2-19.5c.9-.4 1.9-.8 2.9-1C224.1 49.8 239.8 48 256 48s31.9 1.8 47.1 5.3c1 .2 2 .6 2.9 1c7 3.3 10.3 11.9 7.2 19.5l-.2 .5-17.2 43.1-.7 1.8c-2.9 7.3-10.7 11.3-18.5 10.3l-.2 0c-6.6-.9-13.4-1.4-20.4-1.4zM96 512l32 0 256 0 32 0 32 0c35.3 0 64-28.7 64-64l0-40c0-11.7-3.1-22.6-8.6-32c5.4-9.4 8.6-20.3 8.6-32l0-40c0-11.7-3.1-22.6-8.6-32c5.8-10.2 8.9-22.3 7.8-35.6c-2.2-28.6-9.1-56-19.9-81.2c-6.1-14.3-16.2-24.5-28-30.6c-.6-13.3-5.5-26.7-15.8-38.3c-16.8-18.9-36.4-35.4-58.1-48.7c-13.2-8.1-27.3-10.6-40.5-8.8c-8.2-10.5-20-18.7-35.1-22.1C295.2 2.3 275.9 0 256 0s-39.2 2.3-57.9 6.6C183 10.1 171.2 18.2 163 28.7c-13.2-1.8-27.3 .7-40.5 8.8C100.8 50.8 81.2 67.3 64.4 86.2c-10.2 11.6-15.2 25-15.8 38.3c-11.8 6.2-21.9 16.3-28 30.6C9.8 180.4 2.9 207.8 .7 236.4c-1 13.3 2 25.4 7.8 35.6C3.1 281.4 0 292.3 0 304l0 40c0 11.7 3.1 22.6 8.6 32C3.1 385.4 0 396.3 0 408l0 40c0 35.3 28.7 64 64 64l32 0zM371.4 165.2c-6.4 4.3-14.8 3.3-20.7-1.6l-.2-.2c-5.5-4.8-11.4-9.2-17.6-13.1l-.2-.2c-6.3-4.2-9.6-11.8-7.7-19c.2-.6 .4-1.2 .6-1.8l17.2-43.1 .2-.5c3.2-7.4 11.4-11.1 18.7-8.6c1 .3 1.9 .8 2.8 1.3c17.7 10.8 33.6 24.2 47.2 39.6c.7 .8 1.3 1.7 1.8 2.6c3.8 6.7 1.5 15.4-5.2 19.9l-1.1 .8-32.6 21.7-3.2 2.1zm15.4 46.4l-.2-.4c-2.8-6.5-1.8-14 2.8-19c.9-.9 1.8-1.8 2.9-2.5l32.6-21.7c.4-.3 .8-.5 1.2-.7c6.8-3.8 15.3-2 19.6 4.1c.6 .8 1.1 1.7 1.5 2.7c8.8 20.5 14.4 42.7 16.2 66c0 .6 .1 1.2 0 1.9c-.4 7.9-7.2 14.1-15.4 14.1l-32 0-2.6 0c-7.8 0-14.3-5.7-16.4-13.2c-.1-.3-.2-.7-.2-1c-2.2-10.6-5.7-20.7-10.1-30.3zM400 304c0-.5 0-.9 .1-1.4c.6-7.3 6.2-13.3 13.4-14.4c.8-.1 1.7-.2 2.6-.2l32 0c8.1 0 14.9 6.1 15.9 14c.1 .7 .1 1.4 .1 2l0 40c0 .7 0 1.3-.1 2c-1 7.9-7.7 14-15.9 14l-32 0c-8.2 0-14.9-6.1-15.9-14c-.1-.6-.1-1.3-.1-2l0-40zm0 104c0-.7 0-1.3 .1-2c1-7.9 7.7-14 15.9-14l32 0c8.2 0 14.9 6.1 15.9 14c.1 .6 .1 1.3 .1 2l0 40c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-40zM147.6 78.5c.9-.6 1.8-1 2.8-1.3c7.3-2.6 15.5 1.2 18.7 8.6l.2 .5 17.2 43.1c.2 .6 .4 1.2 .6 1.8c1.9 7.2-1.4 14.8-7.7 19l-.3 .2c-6.2 3.9-12.1 8.3-17.6 13.1l-.2 .2c-5.9 4.9-14.3 5.9-20.7 1.6l-3.2-2.1-32.6-21.7-1.1-.8c-6.7-4.5-9-13.2-5.2-19.9c.5-.9 1.1-1.8 1.8-2.6c13.7-15.4 29.6-28.8 47.2-39.6zM64.8 174.1c.4-1 .9-1.9 1.5-2.7c4.3-6.1 12.8-7.9 19.6-4.1c.4 .2 .8 .5 1.2 .7l32.6 21.7c1.1 .7 2.1 1.6 2.9 2.5c4.6 5 5.6 12.6 2.8 19l-.2 .4c-4.4 9.6-7.8 19.7-10.1 30.3c-.1 .3-.1 .7-.2 1c-2 7.5-8.6 13.2-16.4 13.2L96 256l-32 0c-8.2 0-15-6.2-15.4-14.1c0-.6 0-1.2 0-1.9c1.8-23.3 7.4-45.5 16.2-66zM48 304c0-.7 0-1.4 .1-2c1-7.9 7.7-14 15.9-14l32 0c.9 0 1.7 .1 2.6 .2c7.2 1.2 12.8 7.1 13.4 14.4c0 .5 .1 .9 .1 1.4l0 40c0 .7 0 1.3-.1 2c-1 7.9-7.7 14-15.9 14l-32 0c-8.2 0-14.9-6.1-15.9-14c-.1-.6-.1-1.3-.1-2l0-40zm0 104c0-.7 0-1.3 .1-2c1-7.9 7.7-14 15.9-14l32 0c8.2 0 14.9 6.1 15.9 14c.1 .6 .1 1.3 .1 2l0 40c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-40zM272 192l0 256c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16s16 7.2 16 16zm-64 32l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16s16 7.2 16 16zm128 0l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default Dungeon;