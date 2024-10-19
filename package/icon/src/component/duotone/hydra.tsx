
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hydra` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hydra?s=duotone hydra}
 * @preview ![hydra](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xLjggMjM0LjZDNi4zIDI0Ny40IDE4LjQgMjU2IDMyIDI1Nmw0OCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDE2IDAgMjQuOGMwIDYxIDQwLjQgMTEyLjYgOTYgMTI5LjRsMCAzNy44YzAgMTcuNyAxNC4zIDMyIDMyIDMybDM2LjkgMGMxNS42IDAgMjktMTEuMyAzMS42LTI2LjdsNi4yLTM3LjMgNzQuNyAwIDYuMiAzNy4zYzIuNiAxNS40IDE1LjkgMjYuNyAzMS42IDI2LjdsMzYuOSAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMzIgMzIgMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOGMwLTQwLjMtMTktNzguMi01MS4yLTEwMi40bC0yNS0xOC44Yy0xLjgtMS40LTMuNy0yLjYtNS43LTMuNmMtNC4zLTIuMS04LjktMy4yLTEzLjUtMy4ycy05LjMgLjgtMTMuNiAyLjhjLTMuMyAxLjUtNi40IDMuNi05LjEgNi4yYy0yLjcgMi42LTQuOSA1LjctNi41IDljLTIuMSA0LjMtMy4yIDguOS0zLjIgMTMuNXMuOCA5LjMgMi44IDEzLjZjLjkgMiAyLjEgNCAzLjQgNS44bDMyLjYgNDYuNmMxOC40IDI2LjMtLjQgNjIuNC0zMi41IDYyLjRjLTEzLjMgMC0yNS42LTYuNi0zMy0xNy43bC0xMC43LTE2LjFDNDQ4LjcgMjc5LjQgNDA1LjEgMjU2IDM1OC4zIDI1NmwtOS4yIDBjLTkuNCAwLTE4LjUtMS40LTI3LjEtNGMtMzIuNS05LjktNTcuNC0zNy02NC4yLTcwLjdjLTEuMi01LjktMS44LTEyLjEtMS44LTE4LjRsMC0zNC45IDAtMTYgMC0zOC41QzI1NiAzMi45IDIyMy4xIDAgMTgyLjUgMGMtMTYuNyAwLTMyLjkgNS43LTQ1LjkgMTYuMUwxMDggMzlDOTcuNCA0Ny41IDkzLjMgNjEuOCA5Ny44IDc0LjZTMTE0LjQgOTYgMTI4IDk2bDQ4IDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMTZjMCAuMyAwIC41IDAgLjhsLS4xIC44LTExLjUgMTE1Yy0yLjQgMjMuNyA2IDQ3LjMgMjIuOSA2NC4xYzYuMiA2LjIgNi4yIDE2LjQgMCAyMi42cy0xNi40IDYuMi0yMi42IDBjLTIzLjYtMjMuNi0zNS40LTU2LjctMzIuMS04OS45bDQuNS00NS4yYy0xNC4yLTI5LjUtNDguMy00Ni44LTgyLjUtMzdjLTguOSAyLjYtMTcuMyA2LjktMjQuNiAxMi43TDEyIDE5OUMxLjQgMjA3LjUtMi43IDIyMS44IDEuOCAyMzQuNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMiAyNTJjLTMyLjUtOS45LTU3LjQtMzctNjQuMi03MC43bDE5LjktNTkuN0MyODkuMiA4Ny4yIDMyMS40IDY0IDM1Ny43IDY0YzE5LjEgMCAzNy43IDYuNSA1Mi42IDE4LjVMNDM2IDEwM2MxMC42IDguNSAxNC43IDIyLjggMTAuMiAzNS42UzQyOS42IDE2MCA0MTYgMTYwbC01OC41IDBjLTcuMyAwLTEzLjcgNS0xNS41IDEyLjFMMzIyIDI1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hydra: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M1.8 234.6C6.3 247.4 18.4 256 32 256l48 0c8.8 0 16 7.2 16 16l0 16 0 24.8c0 61 40.4 112.6 96 129.4l0 37.8c0 17.7 14.3 32 32 32l36.9 0c15.6 0 29-11.3 31.6-26.7l6.2-37.3 74.7 0 6.2 37.3c2.6 15.4 15.9 26.7 31.6 26.7l36.9 0c17.7 0 32-14.3 32-32l0-32 32 0c70.7 0 128-57.3 128-128c0-40.3-19-78.2-51.2-102.4l-25-18.8c-1.8-1.4-3.7-2.6-5.7-3.6c-4.3-2.1-8.9-3.2-13.5-3.2s-9.3 .8-13.6 2.8c-3.3 1.5-6.4 3.6-9.1 6.2c-2.7 2.6-4.9 5.7-6.5 9c-2.1 4.3-3.2 8.9-3.2 13.5s.8 9.3 2.8 13.6c.9 2 2.1 4 3.4 5.8l32.6 46.6c18.4 26.3-.4 62.4-32.5 62.4c-13.3 0-25.6-6.6-33-17.7l-10.7-16.1C448.7 279.4 405.1 256 358.3 256l-9.2 0c-9.4 0-18.5-1.4-27.1-4c-32.5-9.9-57.4-37-64.2-70.7c-1.2-5.9-1.8-12.1-1.8-18.4l0-34.9 0-16 0-38.5C256 32.9 223.1 0 182.5 0c-16.7 0-32.9 5.7-45.9 16.1L108 39C97.4 47.5 93.3 61.8 97.8 74.6S114.4 96 128 96l48 0c8.8 0 16 7.2 16 16l0 16c0 .3 0 .5 0 .8l-.1 .8-11.5 115c-2.4 23.7 6 47.3 22.9 64.1c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0c-23.6-23.6-35.4-56.7-32.1-89.9l4.5-45.2c-14.2-29.5-48.3-46.8-82.5-37c-8.9 2.6-17.3 6.9-24.6 12.7L12 199C1.4 207.5-2.7 221.8 1.8 234.6z" />
            <path d="M322 252c-32.5-9.9-57.4-37-64.2-70.7l19.9-59.7C289.2 87.2 321.4 64 357.7 64c19.1 0 37.7 6.5 52.6 18.5L436 103c10.6 8.5 14.7 22.8 10.2 35.6S429.6 160 416 160l-58.5 0c-7.3 0-13.7 5-15.5 12.1L322 252z" />
    </Icon>
);

export default Hydra;