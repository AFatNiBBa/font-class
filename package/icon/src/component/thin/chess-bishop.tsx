
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=thin chess-bishop}
 * @preview ![chess-bishop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI0IDE2Yy0xMSAwLTIwIDktMjAgMjBjMCA4LjUgNS4yIDE1LjcgMTIuNyAxOC42YzIuNSAxIDQuMyAzLjIgNC45IDUuOHMtLjIgNS40LTIuMSA3LjNDOTUgOTIuNSA2OSAxMjUuNCA0OS4yIDE1OS45QzI5LjIgMTk0LjUgMTYgMjI5LjkgMTYgMjU5LjljMCAzMC42IDExLjkgNzQuNSA1Mi40IDEwMC45YzIuMyAxLjUgMy42IDQgMy42IDYuN0w3MiAzODRsLTE2IDAgMC0xMi4zQzEyLjQgMzQxLjIgMCAyOTMgMCAyNTkuOWMwLTM0LjEgMTQuOC03Mi40IDM1LjMtMTA4QzU0IDExOS40IDc3LjkgODguNCAxMDEgNjMuN2MtOC02LjYtMTMtMTYuNi0xMy0yNy43YzAtMTkuOSAxNi4xLTM2IDM2LTM2bDcyIDBjMTkuOSAwIDM2IDE2LjEgMzYgMzZjMCAxMS4yLTUuMSAyMS4xLTEzIDI3LjdjMjMuMiAyNC42IDQ3LjEgNTUuNiA2NS44IDg4LjFjMjAuNSAzNS42IDM1LjMgNzMuOSAzNS4zIDEwOGMwIDMzLjEtMTIuNCA4MS4zLTU2IDExMS44bDAgMTIuMy0xNiAwIDAtMTYuNWMwLTIuNyAxLjQtNS4yIDMuNi02LjdjNDAuNS0yNi40IDUyLjQtNzAuMiA1Mi40LTEwMC45YzAtMjQuNi04LjktNTIuOS0yMy4xLTgxLjRMMTczLjcgMjg1LjdjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBzLTMuMS04LjIgMC0xMS4zTDI3MyAxNjMuN2MtLjctMS4zLTEuNC0yLjUtMi4yLTMuOEMyNTEgMTI1LjQgMjI1IDkyLjUgMjAwLjUgNjcuN2MtMS45LTEuOS0yLjctNC42LTIuMS03LjNzMi40LTQuOCA0LjktNS44QzIxMC44IDUxLjcgMjE2IDQ0LjUgMjE2IDM2YzAtMTEtOS0yMC0yMC0yMGwtNzIgMHpNNjIuMyA0MzJjLTQuNSAwLTguOSAxLjktMTEuOSA1LjNMMTkuOCA0NzEuMmMtMi41IDIuNy0zLjggNi4zLTMuOCA5LjljMCA4LjIgNi42IDE0LjggMTQuOCAxNC44bDI1OC4zIDBjOC4yIDAgMTQuOC02LjYgMTQuOC0xNC44YzAtMy43LTEuNC03LjItMy44LTkuOWwtMzAuNi0zMy45Yy0zLTMuNC03LjQtNS4zLTExLjktNS4zTDYyLjMgNDMyem0yNDkuOCAyOC41YzUuMSA1LjcgNy45IDEzIDcuOSAyMC42YzAgMTctMTMuOCAzMC44LTMwLjggMzAuOEwzMC44IDUxMkMxMy44IDUxMiAwIDQ5OC4yIDAgNDgxLjJjMC03LjYgMi44LTE1IDcuOS0yMC42bDMwLjYtMzMuOWM2LjEtNi43IDE0LjctMTAuNiAyMy44LTEwLjZsMTk1LjUgMGM5LjEgMCAxNy43IDMuOCAyMy44IDEwLjZsMzAuNiAzMy45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessBishop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M124 16c-11 0-20 9-20 20c0 8.5 5.2 15.7 12.7 18.6c2.5 1 4.3 3.2 4.9 5.8s-.2 5.4-2.1 7.3C95 92.5 69 125.4 49.2 159.9C29.2 194.5 16 229.9 16 259.9c0 30.6 11.9 74.5 52.4 100.9c2.3 1.5 3.6 4 3.6 6.7L72 384l-16 0 0-12.3C12.4 341.2 0 293 0 259.9c0-34.1 14.8-72.4 35.3-108C54 119.4 77.9 88.4 101 63.7c-8-6.6-13-16.6-13-27.7c0-19.9 16.1-36 36-36l72 0c19.9 0 36 16.1 36 36c0 11.2-5.1 21.1-13 27.7c23.2 24.6 47.1 55.6 65.8 88.1c20.5 35.6 35.3 73.9 35.3 108c0 33.1-12.4 81.3-56 111.8l0 12.3-16 0 0-16.5c0-2.7 1.4-5.2 3.6-6.7c40.5-26.4 52.4-70.2 52.4-100.9c0-24.6-8.9-52.9-23.1-81.4L173.7 285.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L273 163.7c-.7-1.3-1.4-2.5-2.2-3.8C251 125.4 225 92.5 200.5 67.7c-1.9-1.9-2.7-4.6-2.1-7.3s2.4-4.8 4.9-5.8C210.8 51.7 216 44.5 216 36c0-11-9-20-20-20l-72 0zM62.3 432c-4.5 0-8.9 1.9-11.9 5.3L19.8 471.2c-2.5 2.7-3.8 6.3-3.8 9.9c0 8.2 6.6 14.8 14.8 14.8l258.3 0c8.2 0 14.8-6.6 14.8-14.8c0-3.7-1.4-7.2-3.8-9.9l-30.6-33.9c-3-3.4-7.4-5.3-11.9-5.3L62.3 432zm249.8 28.5c5.1 5.7 7.9 13 7.9 20.6c0 17-13.8 30.8-30.8 30.8L30.8 512C13.8 512 0 498.2 0 481.2c0-7.6 2.8-15 7.9-20.6l30.6-33.9c6.1-6.7 14.7-10.6 23.8-10.6l195.5 0c9.1 0 17.7 3.8 23.8 10.6l30.6 33.9z" />
    </Icon>
);

export default ChessBishop;