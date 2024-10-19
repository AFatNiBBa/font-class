
import { Icon } from "../../index";

/**
 * A component that renders the `badge-sheriff` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badge-sheriff?s=sharp-light badge-sheriff}
 * @preview ![badge-sheriff](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQ5LjQgODMuNWwtMTMuMSAxNyAxMC44IDE4LjZMMjY2IDE1MS42bDkuMiAxNS44IDE4LjMgLjEgMzUuMiAuMSAxOC40IC4xIDkuMy0xNS45YzIuNy00LjYgNi42LTguNiAxMS42LTExLjVjMTUuMy04LjggMzQuOS0zLjYgNDMuNyAxMS43czMuNiAzNC45LTExLjcgNDMuN2MtNi4yIDMuNi0xMi45IDQuOC0xOS40IDQuMWwtMjAuOC0yLjMtMTAuNCAxOC4yLTEzLjkgMjQuNEwzMjYuMyAyNTZsOS4xIDE1LjkgMTMuOSAyNC40IDEwLjQgMTguMiAyMC44LTIuM2M2LjUtLjcgMTMuMyAuNiAxOS40IDQuMWMxNS4zIDguOCAyMC42IDI4LjQgMTEuNyA0My43cy0yOC40IDIwLjYtNDMuNyAxMS43Yy01LTIuOS04LjktNi45LTExLjYtMTEuNWwtOS4zLTE1LjktMTguNCAuMS0zNS4yIC4xLTE4LjMgLjFMMjY2IDM2MC40bC0xOC45IDMyLjQtMTAuOCAxOC42IDEzLjEgMTdjNC4yIDUuNCA2LjYgMTIuMSA2LjYgMTkuNWMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmMwLTcuNCAyLjUtMTQuMSA2LjYtMTkuNWwxMy4xLTE3LTEwLjgtMTguNkwxODIgMzYwLjRsLTkuMi0xNS44LTE4LjMtLjEtMzUuMi0uMS0xOC40LS4xLTkuMyAxNS45Yy0yLjcgNC42LTYuNiA4LjYtMTEuNiAxMS41bDE2IDI3LjdMODAgMzcxLjdjLTE1LjMgOC44LTM0LjkgMy42LTQzLjctMTEuN3MtMy42LTM0LjkgMTEuNy00My43YzYuMS0zLjUgMTIuOS00LjggMTkuNC00LjFsMjAuOCAyLjMgMTAuNC0xOC4yIDEzLjktMjQuNCA5LjEtMTUuOS05LjEtMTUuOUw5OC42IDIxNS43IDg4LjIgMTk3LjZsLTIwLjggMi4zYy02LjUgLjctMTMuMy0uNi0xOS40LTQuMWMtMTUuMy04LjgtMjAuNS0yOC40LTExLjctNDMuN3MyOC40LTIwLjUgNDMuNy0xMS43YzUgMi45IDguOSA2LjkgMTEuNiAxMS41bDkuMyAxNS45IDE4LjQtLjEgMzUuMi0uMSAxOC4zLS4xIDkuMi0xNS44IDE4LjktMzIuNCAxMC44LTE4LjYtMTMuMS0xN0MxOTQuNSA3OC4xIDE5MiA3MS40IDE5MiA2NGMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMyYzAgNy40LTIuNSAxNC4xLTYuNiAxOS41ek04LjYgMzc2YzE3LjcgMzAuNiA1Ni44IDQxLjEgODcuNCAyMy40YzEwLTUuNyAxNy44LTEzLjggMjMuMi0yM2wzNS4yIC4xTDE3My4zIDQwOUMxNjUgNDE5LjggMTYwIDQzMy4zIDE2MCA0NDhjMCAzNS4zIDI4LjcgNjQgNjQgNjRzNjQtMjguNyA2NC02NGMwLTE0LjctNS0yOC4yLTEzLjMtMzlsMTguOS0zMi40IDM1LjItLjFjNS40IDkuMyAxMy4yIDE3LjMgMjMuMiAyM2MzMC42IDE3LjcgNjkuOCA3LjIgODcuNC0yMy40czcuMi02OS44LTIzLjQtODcuNGMtMTIuMi03LjEtMjUuOC05LjYtMzguOS04LjJMMzYzLjIgMjU2bDEzLjktMjQuNGMxMyAxLjQgMjYuNi0xLjEgMzguOS04LjJjMzAuNi0xNy43IDQxLjEtNTYuOCAyMy40LTg3LjRzLTU2LjgtNDEuMS04Ny40LTIzLjRjLTEwIDUuNy0xNy44IDEzLjgtMjMuMiAyM2wtMzUuMi0uMUwyNzQuNyAxMDNDMjgzIDkyLjIgMjg4IDc4LjcgMjg4IDY0YzAtMzUuMy0yOC43LTY0LTY0LTY0cy02NCAyOC43LTY0IDY0YzAgMTQuNyA1IDI4LjIgMTMuMyAzOWwtMTguOSAzMi40LTM1LjIgLjFjLTUuNC05LjMtMTMuMi0xNy4zLTIzLjItMjNDNjUuNCA5NC45IDI2LjMgMTA1LjQgOC42IDEzNlMxLjQgMjA1LjggMzIgMjIzLjRjMTIuMiA3LjEgMjUuOCA5LjYgMzguOSA4LjJMODQuOCAyNTYgNzAuOSAyODAuNGMtMTMtMS40LTI2LjYgMS4yLTM4LjkgOC4yQzEuNCAzMDYuMi05LjEgMzQ1LjQgOC42IDM3NnpNMjM1LjMgMTg4LjdMMjI0IDE3Ny40bC0xMS4zIDExLjMtNTYgNTZMMTQ1LjQgMjU2bDExLjMgMTEuMyA1NiA1NkwyMjQgMzM0LjZsMTEuMy0xMS4zIDU2LTU2TDMwMi42IDI1NmwtMTEuMy0xMS4zLTU2LTU2ek0yMjQgMjg5LjRMMTkwLjYgMjU2IDIyNCAyMjIuNiAyNTcuNCAyNTYgMjI0IDI4OS40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BadgeSheriff: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M249.4 83.5l-13.1 17 10.8 18.6L266 151.6l9.2 15.8 18.3 .1 35.2 .1 18.4 .1 9.3-15.9c2.7-4.6 6.6-8.6 11.6-11.5c15.3-8.8 34.9-3.6 43.7 11.7s3.6 34.9-11.7 43.7c-6.2 3.6-12.9 4.8-19.4 4.1l-20.8-2.3-10.4 18.2-13.9 24.4L326.3 256l9.1 15.9 13.9 24.4 10.4 18.2 20.8-2.3c6.5-.7 13.3 .6 19.4 4.1c15.3 8.8 20.6 28.4 11.7 43.7s-28.4 20.6-43.7 11.7c-5-2.9-8.9-6.9-11.6-11.5l-9.3-15.9-18.4 .1-35.2 .1-18.3 .1L266 360.4l-18.9 32.4-10.8 18.6 13.1 17c4.2 5.4 6.6 12.1 6.6 19.5c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-7.4 2.5-14.1 6.6-19.5l13.1-17-10.8-18.6L182 360.4l-9.2-15.8-18.3-.1-35.2-.1-18.4-.1-9.3 15.9c-2.7 4.6-6.6 8.6-11.6 11.5l16 27.7L80 371.7c-15.3 8.8-34.9 3.6-43.7-11.7s-3.6-34.9 11.7-43.7c6.1-3.5 12.9-4.8 19.4-4.1l20.8 2.3 10.4-18.2 13.9-24.4 9.1-15.9-9.1-15.9L98.6 215.7 88.2 197.6l-20.8 2.3c-6.5 .7-13.3-.6-19.4-4.1c-15.3-8.8-20.5-28.4-11.7-43.7s28.4-20.5 43.7-11.7c5 2.9 8.9 6.9 11.6 11.5l9.3 15.9 18.4-.1 35.2-.1 18.3-.1 9.2-15.8 18.9-32.4 10.8-18.6-13.1-17C194.5 78.1 192 71.4 192 64c0-17.7 14.3-32 32-32s32 14.3 32 32c0 7.4-2.5 14.1-6.6 19.5zM8.6 376c17.7 30.6 56.8 41.1 87.4 23.4c10-5.7 17.8-13.8 23.2-23l35.2 .1L173.3 409C165 419.8 160 433.3 160 448c0 35.3 28.7 64 64 64s64-28.7 64-64c0-14.7-5-28.2-13.3-39l18.9-32.4 35.2-.1c5.4 9.3 13.2 17.3 23.2 23c30.6 17.7 69.8 7.2 87.4-23.4s7.2-69.8-23.4-87.4c-12.2-7.1-25.8-9.6-38.9-8.2L363.2 256l13.9-24.4c13 1.4 26.6-1.1 38.9-8.2c30.6-17.7 41.1-56.8 23.4-87.4s-56.8-41.1-87.4-23.4c-10 5.7-17.8 13.8-23.2 23l-35.2-.1L274.7 103C283 92.2 288 78.7 288 64c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 14.7 5 28.2 13.3 39l-18.9 32.4-35.2 .1c-5.4-9.3-13.2-17.3-23.2-23C65.4 94.9 26.3 105.4 8.6 136S1.4 205.8 32 223.4c12.2 7.1 25.8 9.6 38.9 8.2L84.8 256 70.9 280.4c-13-1.4-26.6 1.2-38.9 8.2C1.4 306.2-9.1 345.4 8.6 376zM235.3 188.7L224 177.4l-11.3 11.3-56 56L145.4 256l11.3 11.3 56 56L224 334.6l11.3-11.3 56-56L302.6 256l-11.3-11.3-56-56zM224 289.4L190.6 256 224 222.6 257.4 256 224 289.4z" />
    </Icon>
);

export default BadgeSheriff;