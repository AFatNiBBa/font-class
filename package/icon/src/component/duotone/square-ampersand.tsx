
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-ampersand` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ampersand?s=duotone square-ampersand}
 * @preview ![square-ampersand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6TTExMiAzMTcuNWMwLTIxLjIgMTAuMS00MS4xIDI3LjItNTMuNmwyNC43LTE4LjEtOS4yLTkuMmMtMTEuOS0xMS45LTE4LjYtMjguMS0xOC42LTQ1YzAtMzUuMSAyOC41LTYzLjYgNjMuNi02My42bDE5LjIgMGMzMy44IDAgNjEuMiAyNy40IDYxLjIgNjEuMmMwIDE5LjUtOS4zIDM3LjgtMjUgNDkuM2wtMTcuNiAxMi45IDI4LjcgMjguNyAyNi4yLTM3LjhjNy41LTEwLjkgMjIuNS0xMy42IDMzLjQtNi4xczEzLjYgMjIuNSA2LjEgMzMuNGwtMzEuMSA0NUwzMjkgMzQzYzkuNCA5LjQgOS40IDI0LjYgMCAzMy45cy0yNC42IDkuNC0zMy45IDBsLTIyLjQtMjIuNGMtMTUuMSAxOC41LTM3LjggMjkuNC02MiAyOS40bC0zMi4yIDBjLTM2LjcgMC02Ni41LTI5LjgtNjYuNS02Ni41em00OCAwYzAgMTAuMiA4LjMgMTguNSAxOC41IDE4LjVsMzIuMiAwYzEwLjUgMCAyMC4zLTUuMiAyNi4zLTEzLjhsMS40LTItNDAuMS00MC4xLTMwLjcgMjIuNWMtNC43IDMuNS03LjUgOS03LjUgMTQuOXptMjQtMTI1LjljMCA0LjEgMS42IDguMSA0LjYgMTFMMjAzIDIxNy4xbDIzLjYtMTcuM2MzLjQtMi41IDUuNC02LjQgNS40LTEwLjZjMC03LjMtNS45LTEzLjItMTMuMi0xMy4ybC0xOS4yIDBjLTguNiAwLTE1LjYgNy0xNS42IDE1LjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTkuNiAxNzZsMTkuMiAwYzcuMyAwIDEzLjIgNS45IDEzLjIgMTMuMmMwIDQuMi0yIDguMS01LjQgMTAuNkwyMDMgMjE3LjFsLTE0LjUtMTQuNWMtMi45LTIuOS00LjYtNi45LTQuNi0xMWMwLTguNiA3LTE1LjYgMTUuNi0xNS42em0zNy44IDc1LjRMMjU1IDIzOC41YzE1LjctMTEuNSAyNS0yOS44IDI1LTQ5LjNjMC0zMy44LTI3LjQtNjEuMi02MS4yLTYxLjJsLTE5LjIgMGMtMzUuMSAwLTYzLjYgMjguNS02My42IDYzLjZjMCAxNi45IDYuNyAzMyAxOC42IDQ1bDkuMiA5LjItMjQuNyAxOC4xYy0xNy4xIDEyLjUtMjcuMiAzMi40LTI3LjIgNTMuNmMwIDM2LjcgMjkuOCA2Ni41IDY2LjUgNjYuNWwzMi4yIDBjMjQuMSAwIDQ2LjktMTAuOSA2Mi0yOS40TDI5NSAzNzdjOS40IDkuNCAyNC42IDkuNCAzMy45IDBzOS40LTI0LjYgMC0zMy45bC0yOC40LTI4LjQgMzEuMS00NWM3LjUtMTAuOSA0LjgtMjUuOC02LjEtMzMuNHMtMjUuOC00LjgtMzMuNCA2LjFsLTI2LjIgMzcuOC0yOC43LTI4Ljd6bS0zOS4yIDI4LjdsNDAuMSA0MC4xLTEuNCAyYy02IDguNi0xNS44IDEzLjgtMjYuMyAxMy44bC0zMi4yIDBjLTEwLjIgMC0xOC41LTguMy0xOC41LTE4LjVjMC01LjkgMi44LTExLjQgNy41LTE0LjlsMzAuNy0yMi41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareAmpersand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM112 317.5c0-21.2 10.1-41.1 27.2-53.6l24.7-18.1-9.2-9.2c-11.9-11.9-18.6-28.1-18.6-45c0-35.1 28.5-63.6 63.6-63.6l19.2 0c33.8 0 61.2 27.4 61.2 61.2c0 19.5-9.3 37.8-25 49.3l-17.6 12.9 28.7 28.7 26.2-37.8c7.5-10.9 22.5-13.6 33.4-6.1s13.6 22.5 6.1 33.4l-31.1 45L329 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-22.4-22.4c-15.1 18.5-37.8 29.4-62 29.4l-32.2 0c-36.7 0-66.5-29.8-66.5-66.5zm48 0c0 10.2 8.3 18.5 18.5 18.5l32.2 0c10.5 0 20.3-5.2 26.3-13.8l1.4-2-40.1-40.1-30.7 22.5c-4.7 3.5-7.5 9-7.5 14.9zm24-125.9c0 4.1 1.6 8.1 4.6 11L203 217.1l23.6-17.3c3.4-2.5 5.4-6.4 5.4-10.6c0-7.3-5.9-13.2-13.2-13.2l-19.2 0c-8.6 0-15.6 7-15.6 15.6z" />
            <path d="M199.6 176l19.2 0c7.3 0 13.2 5.9 13.2 13.2c0 4.2-2 8.1-5.4 10.6L203 217.1l-14.5-14.5c-2.9-2.9-4.6-6.9-4.6-11c0-8.6 7-15.6 15.6-15.6zm37.8 75.4L255 238.5c15.7-11.5 25-29.8 25-49.3c0-33.8-27.4-61.2-61.2-61.2l-19.2 0c-35.1 0-63.6 28.5-63.6 63.6c0 16.9 6.7 33 18.6 45l9.2 9.2-24.7 18.1c-17.1 12.5-27.2 32.4-27.2 53.6c0 36.7 29.8 66.5 66.5 66.5l32.2 0c24.1 0 46.9-10.9 62-29.4L295 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-28.4-28.4 31.1-45c7.5-10.9 4.8-25.8-6.1-33.4s-25.8-4.8-33.4 6.1l-26.2 37.8-28.7-28.7zm-39.2 28.7l40.1 40.1-1.4 2c-6 8.6-15.8 13.8-26.3 13.8l-32.2 0c-10.2 0-18.5-8.3-18.5-18.5c0-5.9 2.8-11.4 7.5-14.9l30.7-22.5z" />
    </Icon>
);

export default SquareAmpersand;