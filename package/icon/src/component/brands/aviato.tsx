
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `aviato` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/aviato?s=brands aviato}
 * @preview ![aviato](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDcuMiAyODMuNWwtMTktNDEuOEgzNi4xbC0xOSA0MS44SDBsNjIuMi0xMzEuNCA2Mi4yIDEzMS40aC0xNy4yem0tNDUtOTguMWwtMTkuNiA0Mi41aDM5LjJsLTE5LjYtNDIuNXptMTEyLjcgMTAyLjRsLTYyLjItMTMxLjRoMTcuMWw0NS4xIDk2IDQ1LjEtOTZoMTdsLTYyLjEgMTMxLjR6bTgwLjYtNC4zVjE1Ni40SDI3MXYxMjcuMWgtMTUuNXptMjA5LjEtMTE1LjZ2MTE1LjZoLTE3LjNWMTY3LjloLTQxLjJ2LTExLjVoOTkuNnYxMS41aC00MS4xek02NDAgMjE4LjhjMCA5LjItMS43IDE3LjgtNS4xIDI1LjgtMy40IDgtOC4yIDE1LjEtMTQuMiAyMS4xLTYgNi0xMy4xIDEwLjgtMjEuMSAxNC4yLTggMy40LTE2LjYgNS4xLTI1LjggNS4xcy0xNy44LTEuNy0yNS44LTUuMWMtOC0zLjQtMTUuMS04LjItMjEuMS0xNC4yLTYtNi0xMC44LTEzLTE0LjItMjEuMS0zLjQtOC01LjEtMTYuNi01LjEtMjUuOHMxLjctMTcuOCA1LjEtMjUuOGMzLjQtOCA4LjItMTUuMSAxNC4yLTIxLjEgNi02IDEzLTguNCAyMS4xLTExLjkgOC0zLjQgMTYuNi01LjEgMjUuOC01LjFzMTcuOCAxLjcgMjUuOCA1LjFjOCAzLjQgMTUuMSA1LjggMjEuMSAxMS45IDYgNiAxMC43IDEzLjEgMTQuMiAyMS4xIDMuNCA4IDUuMSAxNi42IDUuMSAyNS44em0tMTUuNSAwYzAtNy4zLTEuMy0xNC0zLjktMjAuMy0yLjYtNi4zLTYuMi0xMS43LTEwLjgtMTYuMy00LjYtNC42LTEwLTguMi0xNi4yLTEwLjktNi4yLTIuNy0xMi44LTQtMTkuOC00cy0xMy42IDEuMy0xOS44IDRjLTYuMiAyLjctMTEuNiA2LjMtMTYuMiAxMC45LTQuNiA0LjYtOC4yIDEwLTEwLjggMTYuMy0yLjYgNi4zLTMuOSAxMy4xLTMuOSAyMC4zIDAgNy4zIDEuMyAxNCAzLjkgMjAuMyAyLjYgNi4zIDYuMiAxMS43IDEwLjggMTYuMyA0LjYgNC42IDEwIDguMiAxNi4yIDEwLjkgNi4yIDIuNyAxMi44IDQgMTkuOCA0czEzLjYtMS4zIDE5LjgtNGM2LjItMi43IDExLjYtNi4zIDE2LjItMTAuOSA0LjYtNC42IDguMi0xMCAxMC44LTE2LjMgMi42LTYuMyAzLjktMTMuMSAzLjktMjAuM3ptLTk0LjggOTYuN3YtNi4zbDg4LjktMTAtMjQyLjkgMTMuNGMuNi0yLjIgMS4xLTQuNiAxLjQtNy4yLjMtMiAuNS00LjIuNi02LjVsNjQuOC04LjEtNjQuOSAxLjljMC0uNC0uMS0uNy0uMS0xLjEtMi44LTE3LjItMjUuNS0yMy43LTI1LjUtMjMuN2wtMS4xLTI2LjNoMjMuOGwxOSA0MS44aDE3LjFMMzQ4LjYgMTUybC02Mi4yIDEzMS40aDE3LjFsMTktNDEuOGgyMy42TDM0NSAyNjhzLTIyLjcgNi41LTI1LjUgMjMuN2MtLjEuMy0uMS43LS4xIDEuMWwtNjQuOS0xLjkgNjQuOCA4LjFjLjEgMi4zLjMgNC40LjYgNi41LjMgMi42LjggNSAxLjQgNy4yTDc4LjQgMjk5LjJsODguOSAxMHY2LjNjLTUuOS45LTEwLjUgNi0xMC41IDEyLjIgMCA2LjggNS42IDEyLjQgMTIuNCAxMi40IDYuOCAwIDEyLjQtNS42IDEyLjQtMTIuNCAwLTYuMi00LjYtMTEuMy0xMC41LTEyLjJ2LTUuOGw4MC4zIDl2NS40Yy01LjcgMS4xLTkuOSA2LjItOS45IDEyLjEgMCA2LjggNS42IDEwLjIgMTIuNCAxMC4yIDYuOCAwIDEyLjQtMy40IDEyLjQtMTAuMiAwLTYtNC4zLTExLTkuOS0xMi4xdi00LjlsMjguNCAzLjJ2MjMuN2gtNS45VjM2MGg1Ljl2LTYuNmg1djYuNmg1Ljl2LTEzLjhoLTUuOVYzMjNsMzguMyA0LjNjOC4xIDExLjQgMTkgMTMuNiAxOSAxMy42bC0uMSA2LjctNS4xLjItLjEgMTIuMWg0LjFsLjEtNWg1LjJsLjEgNWg0LjFsLS4xLTEyLjEtNS4xLS4yLS4xLTYuN3MxMC45LTIuMSAxOS0xMy42bDM4LjMtNC4zdjIzLjJoLTUuOVYzNjBoNS45di02LjZoNXY2LjZoNS45di0xMy44aC01Ljl2LTIzLjdsMjguNC0zLjJ2NC45Yy01LjcgMS4xLTkuOSA2LjItOS45IDEyLjEgMCA2LjggNS42IDEwLjIgMTIuNCAxMC4yIDYuOCAwIDEyLjQtMy40IDEyLjQtMTAuMiAwLTYtNC4zLTExLTkuOS0xMi4xdi01LjRsODAuMy05djUuOGMtNS45LjktMTAuNSA2LTEwLjUgMTIuMiAwIDYuOCA1LjYgMTIuNCAxMi40IDEyLjQgNi44IDAgMTIuNC01LjYgMTIuNC0xMi40LS4yLTYuMy00LjctMTEuNC0xMC43LTEyLjN6bS0yMDAuOC04Ny42bDE5LjYtNDIuNSAxOS42IDQyLjVoLTE3LjlsLTEuNy00MC4zLTEuNyA0MC4zaC0xNy45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Aviato(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M107.2 283.5l-19-41.8H36.1l-19 41.8H0l62.2-131.4 62.2 131.4h-17.2zm-45-98.1l-19.6 42.5h39.2l-19.6-42.5zm112.7 102.4l-62.2-131.4h17.1l45.1 96 45.1-96h17l-62.1 131.4zm80.6-4.3V156.4H271v127.1h-15.5zm209.1-115.6v115.6h-17.3V167.9h-41.2v-11.5h99.6v11.5h-41.1zM640 218.8c0 9.2-1.7 17.8-5.1 25.8-3.4 8-8.2 15.1-14.2 21.1-6 6-13.1 10.8-21.1 14.2-8 3.4-16.6 5.1-25.8 5.1s-17.8-1.7-25.8-5.1c-8-3.4-15.1-8.2-21.1-14.2-6-6-10.8-13-14.2-21.1-3.4-8-5.1-16.6-5.1-25.8s1.7-17.8 5.1-25.8c3.4-8 8.2-15.1 14.2-21.1 6-6 13-8.4 21.1-11.9 8-3.4 16.6-5.1 25.8-5.1s17.8 1.7 25.8 5.1c8 3.4 15.1 5.8 21.1 11.9 6 6 10.7 13.1 14.2 21.1 3.4 8 5.1 16.6 5.1 25.8zm-15.5 0c0-7.3-1.3-14-3.9-20.3-2.6-6.3-6.2-11.7-10.8-16.3-4.6-4.6-10-8.2-16.2-10.9-6.2-2.7-12.8-4-19.8-4s-13.6 1.3-19.8 4c-6.2 2.7-11.6 6.3-16.2 10.9-4.6 4.6-8.2 10-10.8 16.3-2.6 6.3-3.9 13.1-3.9 20.3 0 7.3 1.3 14 3.9 20.3 2.6 6.3 6.2 11.7 10.8 16.3 4.6 4.6 10 8.2 16.2 10.9 6.2 2.7 12.8 4 19.8 4s13.6-1.3 19.8-4c6.2-2.7 11.6-6.3 16.2-10.9 4.6-4.6 8.2-10 10.8-16.3 2.6-6.3 3.9-13.1 3.9-20.3zm-94.8 96.7v-6.3l88.9-10-242.9 13.4c.6-2.2 1.1-4.6 1.4-7.2.3-2 .5-4.2.6-6.5l64.8-8.1-64.9 1.9c0-.4-.1-.7-.1-1.1-2.8-17.2-25.5-23.7-25.5-23.7l-1.1-26.3h23.8l19 41.8h17.1L348.6 152l-62.2 131.4h17.1l19-41.8h23.6L345 268s-22.7 6.5-25.5 23.7c-.1.3-.1.7-.1 1.1l-64.9-1.9 64.8 8.1c.1 2.3.3 4.4.6 6.5.3 2.6.8 5 1.4 7.2L78.4 299.2l88.9 10v6.3c-5.9.9-10.5 6-10.5 12.2 0 6.8 5.6 12.4 12.4 12.4 6.8 0 12.4-5.6 12.4-12.4 0-6.2-4.6-11.3-10.5-12.2v-5.8l80.3 9v5.4c-5.7 1.1-9.9 6.2-9.9 12.1 0 6.8 5.6 10.2 12.4 10.2 6.8 0 12.4-3.4 12.4-10.2 0-6-4.3-11-9.9-12.1v-4.9l28.4 3.2v23.7h-5.9V360h5.9v-6.6h5v6.6h5.9v-13.8h-5.9V323l38.3 4.3c8.1 11.4 19 13.6 19 13.6l-.1 6.7-5.1.2-.1 12.1h4.1l.1-5h5.2l.1 5h4.1l-.1-12.1-5.1-.2-.1-6.7s10.9-2.1 19-13.6l38.3-4.3v23.2h-5.9V360h5.9v-6.6h5v6.6h5.9v-13.8h-5.9v-23.7l28.4-3.2v4.9c-5.7 1.1-9.9 6.2-9.9 12.1 0 6.8 5.6 10.2 12.4 10.2 6.8 0 12.4-3.4 12.4-10.2 0-6-4.3-11-9.9-12.1v-5.4l80.3-9v5.8c-5.9.9-10.5 6-10.5 12.2 0 6.8 5.6 12.4 12.4 12.4 6.8 0 12.4-5.6 12.4-12.4-.2-6.3-4.7-11.4-10.7-12.3zm-200.8-87.6l19.6-42.5 19.6 42.5h-17.9l-1.7-40.3-1.7 40.3h-17.9z" />
        </Icon>
    </>
}