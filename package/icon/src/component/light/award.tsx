
import { Icon } from "../../index";

/**
 * A component that renders the `award` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/award?s=light award}
 * @preview ![award](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTY2LjUgNy4yYzE1LjctOS41IDM1LjMtOS41IDUxIDBsMTYuNCAxMGMyLjggMS43IDYgMi42IDkuMyAyLjVsMTkuMi0uNWMxOC4zLS40IDM1LjQgOS40IDQ0LjIgMjUuNWw5LjIgMTYuOGMxLjYgMi45IDMuOSA1LjIgNi44IDYuOGwxNi44IDkuMmMxNi4xIDguOCAyNS45IDI1LjggMjUuNSA0NC4ybC0uNSAxOS4yYy0uMSAzLjMgLjggNi41IDIuNSA5LjNsMTAgMTYuNGM5LjUgMTUuNyA5LjUgMzUuMyAwIDUxbC0xMCAxNi40Yy0xLjcgMi44LTIuNiA2LTIuNSA5LjNsLjUgMTkuMmMuNCAxOC4zLTkuNCAzNS40LTI1LjUgNDQuMmwtMTYuOCA5LjJjLTIuOSAxLjYtNS4yIDMuOS02LjggNi44bC05LjIgMTYuOGMtOC44IDE2LjEtMjUuOCAyNS45LTQ0LjIgMjUuNWwtMTkuMi0uNWMtMy4zLS4xLTYuNSAuOC05LjMgMi41bC0xNi40IDEwYy0xNS43IDkuNS0zNS4zIDkuNS01MSAwbC0xNi40LTEwYy0yLjgtMS43LTYtMi42LTkuMy0yLjVsLTE5LjIgLjVjLTE4LjMgLjQtMzUuNC05LjQtNDQuMi0yNS41bC05LjItMTYuOGMtMS42LTIuOS0zLjktNS4yLTYuOC02LjhsLTE2LjgtOS4yYy0xNi4xLTguOC0yNS45LTI1LjgtMjUuNS00NC4ybC41LTE5LjJjLjEtMy4zLS44LTYuNS0yLjUtOS4zbC0xMC0xNi40Yy05LjUtMTUuNy05LjUtMzUuMyAwLTUxbDEwLTE2LjQgMTMuNyA4LjMtMTMuNy04LjNjMS43LTIuOCAyLjYtNiAyLjUtOS4zbC0uNS0xOS4yYy0uNC0xOC4zIDkuNC0zNS40IDI1LjUtNDQuMmwxNi44LTkuMmMyLjktMS42IDUuMi0zLjkgNi44LTYuOGw5LjItMTYuOGM4LjgtMTYuMSAyNS44LTI1LjkgNDQuMi0yNS41bDE5LjIgLjVjMy4zIC4xIDYuNS0uOCA5LjMtMi41bDE2LjQtMTB6bTM0LjQgMjcuM2MtNS40LTMuMy0xMi4zLTMuMy0xNy43IDBsLTE2LjQgMTBjLTggNC45LTE3LjMgNy40LTI2LjcgNy4xbC0xOS4yLS41Yy02LjQtLjItMTIuMyAzLjMtMTUuMyA4LjlMOTYuNCA3Ni45Yy00LjUgOC4yLTExLjMgMTUtMTkuNSAxOS41TDYwIDEwNS42Yy01LjYgMy4xLTkgOS04LjkgMTUuM2wuNSAxOS4yYy4yIDkuNC0yLjMgMTguNi03LjEgMjYuN2wtMTAgMTYuNGMtMy4zIDUuNC0zLjMgMTIuMyAwIDE3LjdsMTAgMTYuNGM0LjkgOCA3LjQgMTcuMyA3LjEgMjYuN2wtLjUgMTkuMmMtLjIgNi40IDMuMyAxMi4zIDguOSAxNS4zbDE2LjggOS4yYzguMiA0LjUgMTUgMTEuMyAxOS41IDE5LjVsOS4yIDE2LjhjMy4xIDUuNiA5IDkgMTUuMyA4LjlsMTkuMi0uNWM5LjQtLjIgMTguNiAyLjMgMjYuNyA3LjFsMTYuNCAxMGM1LjQgMy4zIDEyLjMgMy4zIDE3LjcgMGwxNi40LTEwYzgtNC45IDE3LjMtNy40IDI2LjctNy4xbDE5LjIgLjVjNi40IC4yIDEyLjMtMy4zIDE1LjMtOC45bDkuMi0xNi44YzQuNS04LjIgMTEuMy0xNSAxOS41LTE5LjVsMTYuOC05LjJjNS42LTMuMSA5LTkgOC45LTE1LjNsLS41LTE5LjJjLS4yLTkuNCAyLjMtMTguNiA3LjEtMjYuN2wxMC0xNi40YzMuMy01LjQgMy4zLTEyLjMgMC0xNy43bC0xMC0xNi40Yy00LjktOC03LjQtMTcuMy03LjEtMjYuN2wuNS0xOS4yYy4yLTYuNC0zLjMtMTIuMy04LjktMTUuM2wtMTYuOC05LjJjLTguMi00LjUtMTUtMTEuMy0xOS41LTE5LjVMMjc4LjQgNjBjLTMuMS01LjYtOS05LTE1LjMtOC45bC0xOS4yIC41Yy05LjQgLjItMTguNi0yLjMtMjYuNy03LjFsLTE2LjQtMTB6TTE5MiAxMzZhNTYgNTYgMCAxIDAgMCAxMTIgNTYgNTYgMCAxIDAgMC0xMTJ6bTg4IDU2YTg4IDg4IDAgMSAxIC0xNzYgMCA4OCA4OCAwIDEgMSAxNzYgMHpNMS4zIDQ0MS44bDQxLjItOTcuOWMxLjUgMS44IDMuNiA0LjggNi45IDEwLjhjNCA3LjQgOS4xIDE0IDE1IDE5LjZMNDEuOCA0MjhsMzguMS01LjdjNi4yLS45IDEyLjMgMS44IDE1LjcgNy4xTDExNi45IDQ2MmwyNi02MS44YzEuOCAuOSA0LjEgMi4yIDYuOSAzLjljNyA0LjMgMTQuNSA3LjQgMjIuMiA5LjNsLTM3LjMgODguN2MtMi4zIDUuNS03LjQgOS4yLTEzLjMgOS43cy0xMS42LTIuMi0xNC44LTcuMkw3NC40IDQ1NS41bC01Ni4xIDguM2MtNS43IC44LTExLjQtMS41LTE1LTZzLTQuMy0xMC43LTIuMS0xNnptMjQ4IDYwLjRsLTM3LjMtODguN2M3LjctMiAxNS4yLTUuMSAyMi4yLTkuM2MyLjgtMS43IDUuMS0zIDYuOS0zLjlsMjYgNjEuOCAyMS4zLTMyLjZjMy40LTUuMiA5LjYtOCAxNS43LTcuMWwzOC4xIDUuNy0yMi42LTUzLjdjNS45LTUuNiAxMS0xMi4yIDE1LTE5LjZjMy4zLTYgNS40LTkgNi45LTEwLjhsNDEuMiA5Ny45YzIuMiA1LjMgMS40IDExLjQtMi4xIDE2cy05LjMgNi45LTE1IDZsLTU2LjEtOC4zLTMyLjIgNDkuMmMtMy4yIDUtOC45IDcuNy0xNC44IDcuMnMtMTEtNC4zLTEzLjMtOS43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Award: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M166.5 7.2c15.7-9.5 35.3-9.5 51 0l16.4 10c2.8 1.7 6 2.6 9.3 2.5l19.2-.5c18.3-.4 35.4 9.4 44.2 25.5l9.2 16.8c1.6 2.9 3.9 5.2 6.8 6.8l16.8 9.2c16.1 8.8 25.9 25.8 25.5 44.2l-.5 19.2c-.1 3.3 .8 6.5 2.5 9.3l10 16.4c9.5 15.7 9.5 35.3 0 51l-10 16.4c-1.7 2.8-2.6 6-2.5 9.3l.5 19.2c.4 18.3-9.4 35.4-25.5 44.2l-16.8 9.2c-2.9 1.6-5.2 3.9-6.8 6.8l-9.2 16.8c-8.8 16.1-25.8 25.9-44.2 25.5l-19.2-.5c-3.3-.1-6.5 .8-9.3 2.5l-16.4 10c-15.7 9.5-35.3 9.5-51 0l-16.4-10c-2.8-1.7-6-2.6-9.3-2.5l-19.2 .5c-18.3 .4-35.4-9.4-44.2-25.5l-9.2-16.8c-1.6-2.9-3.9-5.2-6.8-6.8l-16.8-9.2c-16.1-8.8-25.9-25.8-25.5-44.2l.5-19.2c.1-3.3-.8-6.5-2.5-9.3l-10-16.4c-9.5-15.7-9.5-35.3 0-51l10-16.4 13.7 8.3-13.7-8.3c1.7-2.8 2.6-6 2.5-9.3l-.5-19.2c-.4-18.3 9.4-35.4 25.5-44.2l16.8-9.2c2.9-1.6 5.2-3.9 6.8-6.8l9.2-16.8c8.8-16.1 25.8-25.9 44.2-25.5l19.2 .5c3.3 .1 6.5-.8 9.3-2.5l16.4-10zm34.4 27.3c-5.4-3.3-12.3-3.3-17.7 0l-16.4 10c-8 4.9-17.3 7.4-26.7 7.1l-19.2-.5c-6.4-.2-12.3 3.3-15.3 8.9L96.4 76.9c-4.5 8.2-11.3 15-19.5 19.5L60 105.6c-5.6 3.1-9 9-8.9 15.3l.5 19.2c.2 9.4-2.3 18.6-7.1 26.7l-10 16.4c-3.3 5.4-3.3 12.3 0 17.7l10 16.4c4.9 8 7.4 17.3 7.1 26.7l-.5 19.2c-.2 6.4 3.3 12.3 8.9 15.3l16.8 9.2c8.2 4.5 15 11.3 19.5 19.5l9.2 16.8c3.1 5.6 9 9 15.3 8.9l19.2-.5c9.4-.2 18.6 2.3 26.7 7.1l16.4 10c5.4 3.3 12.3 3.3 17.7 0l16.4-10c8-4.9 17.3-7.4 26.7-7.1l19.2 .5c6.4 .2 12.3-3.3 15.3-8.9l9.2-16.8c4.5-8.2 11.3-15 19.5-19.5l16.8-9.2c5.6-3.1 9-9 8.9-15.3l-.5-19.2c-.2-9.4 2.3-18.6 7.1-26.7l10-16.4c3.3-5.4 3.3-12.3 0-17.7l-10-16.4c-4.9-8-7.4-17.3-7.1-26.7l.5-19.2c.2-6.4-3.3-12.3-8.9-15.3l-16.8-9.2c-8.2-4.5-15-11.3-19.5-19.5L278.4 60c-3.1-5.6-9-9-15.3-8.9l-19.2 .5c-9.4 .2-18.6-2.3-26.7-7.1l-16.4-10zM192 136a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm88 56a88 88 0 1 1 -176 0 88 88 0 1 1 176 0zM1.3 441.8l41.2-97.9c1.5 1.8 3.6 4.8 6.9 10.8c4 7.4 9.1 14 15 19.6L41.8 428l38.1-5.7c6.2-.9 12.3 1.8 15.7 7.1L116.9 462l26-61.8c1.8 .9 4.1 2.2 6.9 3.9c7 4.3 14.5 7.4 22.2 9.3l-37.3 88.7c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4l-37.3-88.7c7.7-2 15.2-5.1 22.2-9.3c2.8-1.7 5.1-3 6.9-3.9l26 61.8 21.3-32.6c3.4-5.2 9.6-8 15.7-7.1l38.1 5.7-22.6-53.7c5.9-5.6 11-12.2 15-19.6c3.3-6 5.4-9 6.9-10.8l41.2 97.9c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
    </Icon>
);

export default Award;