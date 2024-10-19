
import { Icon, generic } from "../../index";

/**
 * A component that renders the `futbol` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/futbol?s=duotone futbol}
 * @preview ![futbol](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xIDI3OC45YzMuNSAzOS40IDE1LjkgNzYuMyAzNS4yIDEwOC41YzM1LjktMi40IDcxLjgtNC44IDEwNy42LTcuMmM2LjQtLjQgMTIuOCAxLjQgMTguMSA1LjJzOSA5LjMgMTAuNSAxNS42YzguOCAzNC45IDE3LjYgNjkuNyAyNi41IDEwNC42YzE4LjMgNC4yIDM3LjQgNi40IDU3IDYuNHMzOC43LTIuMiA1Ny02LjRjOC44LTM0LjkgMTcuNi02OS43IDI2LjUtMTA0LjZjMS42LTYuMyA1LjMtMTEuOCAxMC41LTE1LjZzMTEuNi01LjYgMTguMS01LjJsMTA3LjYgNy4yYzE5LjMtMzIuMiAzMS44LTY5LjEgMzUuMi0xMDguNWMtMzAuNC0xOS4yLTYwLjktMzguMy05MS4zLTU3LjVjLTUuNS0zLjQtOS42LTguNy0xMS42LTE0LjhzLTEuOC0xMi44IC42LTE4LjhjMTMuNC0zMy40IDI2LjctNjYuOCA0MC4xLTEwMC4xYy0yNS4xLTI4LjgtNTYuNi01MS45LTkyLjMtNjcuMWMtMjcuNiAyMy01NS4zIDQ2LjEtODIuOSA2OS4xYy01IDQuMS0xMS4yIDYuNC0xNy43IDYuNHMtMTIuNy0yLjMtMTcuNy02LjRjLTI3LjYtMjMtNTUuMy00Ni4xLTgyLjktNjkuMUMxMTkuOCAzNS44IDg4LjMgNTguOSA2My4xIDg3LjZjMTMuNCAzMy40IDI2LjcgNjYuOCA0MC4xIDEwMC4xYzIuNCA2IDIuNiAxMi42IC42IDE4LjhzLTYuMSAxMS40LTExLjYgMTQuOEM2MS44IDI0MC42IDMxLjQgMjU5LjcgMSAyNzguOXptMTY1LjMtMzcuMmMtMy4yLTkuOSAuMy0yMC43IDguNy0yNi44bDY2LjktNDguNmM4LjQtNi4xIDE5LjgtNi4xIDI4LjIgMGMyMi4zIDE2LjIgNDQuNiAzMi40IDY2LjkgNDguNmM4LjQgNi4xIDExLjkgMTYuOSA4LjcgMjYuOGMtOC41IDI2LjItMTcgNTIuNC0yNS42IDc4LjZjLTMuMiA5LjktMTIuNCAxNi42LTIyLjggMTYuNmwtODIuNyAwYy0xMC40IDAtMTkuNi02LjctMjIuOC0xNi42Yy04LjUtMjYuMi0xNy01Mi40LTI1LjUtNzguNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEgMjc4LjljLS43LTcuNS0xLTE1LjItMS0yMi45QzAgMTkxLjUgMjMuOCAxMzIuNiA2My4xIDg3LjZsNDAuMSAxMDAuMWMyLjQgNiAyLjYgMTIuNiAuNiAxOC44cy02LjEgMTEuNC0xMS42IDE0LjhMMSAyNzguOXpNMTk5IDUwNS42QzEzMCA0ODkuOSA3MS42IDQ0Ni40IDM2LjIgMzg3LjRsMTA3LjYtNy4yYzYuNC0uNCAxMi44IDEuNCAxOC4xIDUuMnM5IDkuMyAxMC41IDE1LjZMMTk5IDUwNS42ek00NzUuOCAzODcuNEM0NDAuNCA0NDYuNCAzODIgNDg5LjkgMzEzIDUwNS42TDMzOS41IDQwMWMxLjYtNi4zIDUuMy0xMS44IDEwLjUtMTUuNnMxMS42LTUuNiAxOC4xLTUuMmwxMDcuNiA3LjJ6TTQ0OC45IDg3LjZDNDg4LjIgMTMyLjYgNTEyIDE5MS41IDUxMiAyNTZjMCA3LjctLjMgMTUuMy0xIDIyLjlsLTkxLjMtNTcuNWMtNS41LTMuNC05LjYtOC43LTExLjYtMTQuOHMtMS44LTEyLjggLjYtMTguOEw0NDguOSA4Ny42ek0zNTYuNiAyMC41TDI3My43IDg5LjZjLTUgNC4xLTExLjIgNi40LTE3LjcgNi40cy0xMi43LTIuMy0xNy43LTYuNEwxNTUuNCAyMC41QzE4Ni4zIDcuMyAyMjAuMyAwIDI1NiAwczY5LjcgNy4zIDEwMC42IDIwLjV6TTI0MS45IDE2Ni4zYzguNC02LjEgMTkuOC02LjEgMjguMiAwTDMzNyAyMTQuOGM4LjQgNi4xIDExLjkgMTYuOSA4LjcgMjYuOGwtMjUuNSA3OC42Yy0zLjIgOS45LTEyLjQgMTYuNi0yMi44IDE2LjZsLTgyLjcgMGMtMTAuNCAwLTE5LjYtNi43LTIyLjgtMTYuNmwtMjUuNi03OC42Yy0zLjItOS45IC4zLTIwLjcgOC43LTI2LjhsNjYuOS00OC42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Futbol: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1 278.9c3.5 39.4 15.9 76.3 35.2 108.5c35.9-2.4 71.8-4.8 107.6-7.2c6.4-.4 12.8 1.4 18.1 5.2s9 9.3 10.5 15.6c8.8 34.9 17.6 69.7 26.5 104.6c18.3 4.2 37.4 6.4 57 6.4s38.7-2.2 57-6.4c8.8-34.9 17.6-69.7 26.5-104.6c1.6-6.3 5.3-11.8 10.5-15.6s11.6-5.6 18.1-5.2l107.6 7.2c19.3-32.2 31.8-69.1 35.2-108.5c-30.4-19.2-60.9-38.3-91.3-57.5c-5.5-3.4-9.6-8.7-11.6-14.8s-1.8-12.8 .6-18.8c13.4-33.4 26.7-66.8 40.1-100.1c-25.1-28.8-56.6-51.9-92.3-67.1c-27.6 23-55.3 46.1-82.9 69.1c-5 4.1-11.2 6.4-17.7 6.4s-12.7-2.3-17.7-6.4c-27.6-23-55.3-46.1-82.9-69.1C119.8 35.8 88.3 58.9 63.1 87.6c13.4 33.4 26.7 66.8 40.1 100.1c2.4 6 2.6 12.6 .6 18.8s-6.1 11.4-11.6 14.8C61.8 240.6 31.4 259.7 1 278.9zm165.3-37.2c-3.2-9.9 .3-20.7 8.7-26.8l66.9-48.6c8.4-6.1 19.8-6.1 28.2 0c22.3 16.2 44.6 32.4 66.9 48.6c8.4 6.1 11.9 16.9 8.7 26.8c-8.5 26.2-17 52.4-25.6 78.6c-3.2 9.9-12.4 16.6-22.8 16.6l-82.7 0c-10.4 0-19.6-6.7-22.8-16.6c-8.5-26.2-17-52.4-25.5-78.6z" />
            <path d="M1 278.9c-.7-7.5-1-15.2-1-22.9C0 191.5 23.8 132.6 63.1 87.6l40.1 100.1c2.4 6 2.6 12.6 .6 18.8s-6.1 11.4-11.6 14.8L1 278.9zM199 505.6C130 489.9 71.6 446.4 36.2 387.4l107.6-7.2c6.4-.4 12.8 1.4 18.1 5.2s9 9.3 10.5 15.6L199 505.6zM475.8 387.4C440.4 446.4 382 489.9 313 505.6L339.5 401c1.6-6.3 5.3-11.8 10.5-15.6s11.6-5.6 18.1-5.2l107.6 7.2zM448.9 87.6C488.2 132.6 512 191.5 512 256c0 7.7-.3 15.3-1 22.9l-91.3-57.5c-5.5-3.4-9.6-8.7-11.6-14.8s-1.8-12.8 .6-18.8L448.9 87.6zM356.6 20.5L273.7 89.6c-5 4.1-11.2 6.4-17.7 6.4s-12.7-2.3-17.7-6.4L155.4 20.5C186.3 7.3 220.3 0 256 0s69.7 7.3 100.6 20.5zM241.9 166.3c8.4-6.1 19.8-6.1 28.2 0L337 214.8c8.4 6.1 11.9 16.9 8.7 26.8l-25.5 78.6c-3.2 9.9-12.4 16.6-22.8 16.6l-82.7 0c-10.4 0-19.6-6.7-22.8-16.6l-25.6-78.6c-3.2-9.9 .3-20.7 8.7-26.8l66.9-48.6z" />
    </Icon>
);

export default Futbol;