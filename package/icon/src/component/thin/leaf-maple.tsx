
import { Icon } from "../../index";

/**
 * A component that renders the `leaf-maple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf-maple?s=thin leaf-maple}
 * @preview ![leaf-maple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUzLjIgMjRDMzQ0IDkuNSAzMjMuMSA5IDMxMy4zIDIzbC02NC45IDkyLjQtLjgtNDAuOWMtLjMtMTUuNS0xNS0yNi42LTMwLTIyLjhsLTM1LjggOS4yLTMyLTM3LjNjLTkuMS0xMC42LTI1LjItMTEuMi0zNS4xLTEuNEw3NSA2MS40IDQwLjQgNTcuMUMyMy42IDU1IDkuOSA3MC42IDE0LjIgODdMNTIuMSAyMzIuM2MuOCAzLS4yIDYuMS0yLjYgOC4xTDI5IDI1Ny43Yy0xMyAxMS0xMC43IDMxLjcgNC4zIDM5LjZsMTExLjUgNTguNUwyLjMgNDk4LjNjLTMuMSAzLjEtMy4xIDguMiAwIDExLjNzOC4yIDMuMSAxMS4zIDBsMTQ1LTE0NSA2NCAxMjJjNy45IDE1LjEgMjguNiAxNy40IDM5LjYgNC4zbDE3LjMtMjAuNWMyLTIuNCA1LjEtMy40IDguMS0yLjZMNDMzIDUwNS44YzE2LjQgNC4zIDMyLTkuNCAyOS45LTI2LjJsLTIuOS0yM2MtLjktNy4zIDEuNi0xNC42IDYuOC0xOS45bDMxLjEtMzEuNGM5LjgtOS45IDkuMS0yNi0xLjQtMzUuMWwtMzcuMy0zMiA5LjItMzUuOGMzLjgtMTUtNy4zLTI5LjctMjIuOC0zMGwtNDAuOS0uOCA4OC44LTYyLjRjMTUuMy0xMC43IDEzLTM0LjEtNC4xLTQxLjZsLTE3LjUtNy43Yy0xMS40LTUtMTctMTcuOC0xMy4xLTI5LjZsMjAuMi02MGM2LjItMTguMy0xMC44LTM2LTI5LjMtMzAuN2wtNTYgMTZjLTEwLjIgMi45LTIxLjItMS4yLTI2LjktMTAuMkwzNTMuMiAyNHpNMTcwLjUgMzUyLjhMMzE3LjcgMjA1LjdjMy4xLTMuMSAzLjEtOC4yIDAtMTEuM3MtOC4yLTMuMS0xMS4zIDBMMTU2LjcgMzQ0IDQwLjggMjgzLjJjLTUtMi42LTUuOC05LjUtMS40LTEzLjJsMjAuNS0xNy4zYzcuMS02IDEwLjEtMTUuNCA3LjctMjQuNEwyOS43IDgzYy0xLjQtNS41IDMuMS0xMC43IDguNy0xMGwzOC40IDQuOGMyLjQgLjMgNC45LS41IDYuNi0yLjNsNDIuNC00MmMzLjMtMy4zIDguNy0zIDExLjcgLjVsMzUuMiA0MS4xYzIgMi4zIDUuMSAzLjMgOC4xIDIuNWw0MC43LTEwLjRjNS0xLjMgOS45IDIuNCAxMCA3LjZsMS4yIDY1LjRjLjEgMy41IDIuMyA2LjUgNS43IDcuNXM2LjktLjIgOC45LTNsNzktMTEyLjRjMy4zLTQuNyAxMC4yLTQuNSAxMy4zIC4zbDEzLjYgMjEuNEMzNjIuNyA2OC45IDM4MSA3NS45IDM5OCA3MWw1Ni0xNmM2LjItMS44IDExLjggNC4xIDkuOCAxMC4ybC0yMC4yIDYwYy02LjYgMTkuNiAyLjggNDEgMjEuOCA0OS40bDE3LjUgNy43YzUuNyAyLjUgNi41IDEwLjMgMS40IDEzLjlMMzc1LjQgMjcyLjdjLTIuOCAyLTQuMSA1LjYtMyA4LjlzNCA1LjYgNy41IDUuN2w2NS40IDEuMmM1LjIgLjEgOC45IDUgNy42IDEwbC0xMC40IDQwLjdjLS44IDMgLjIgNi4xIDIuNSA4LjFMNDg2IDM4Mi40YzMuNSAzIDMuNyA4LjQgLjUgMTEuN2wtMzEuMSAzMS40Yy04LjYgOC43LTEyLjggMjAuOS0xMS4zIDMzLjFsMi45IDIzYy43IDUuNi00LjUgMTAuMi0xMCA4LjdMMjkxLjggNDUyLjRjLTguOS0yLjMtMTguNCAuNy0yNC40IDcuN0wyNTAgNDgwLjdjLTMuNyA0LjMtMTAuNiAzLjYtMTMuMi0xLjRMMTcwLjYgMzUyLjhjMCAwIDAgMCAwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const LeafMaple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M353.2 24C344 9.5 323.1 9 313.3 23l-64.9 92.4-.8-40.9c-.3-15.5-15-26.6-30-22.8l-35.8 9.2-32-37.3c-9.1-10.6-25.2-11.2-35.1-1.4L75 61.4 40.4 57.1C23.6 55 9.9 70.6 14.2 87L52.1 232.3c.8 3-.2 6.1-2.6 8.1L29 257.7c-13 11-10.7 31.7 4.3 39.6l111.5 58.5L2.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l145-145 64 122c7.9 15.1 28.6 17.4 39.6 4.3l17.3-20.5c2-2.4 5.1-3.4 8.1-2.6L433 505.8c16.4 4.3 32-9.4 29.9-26.2l-2.9-23c-.9-7.3 1.6-14.6 6.8-19.9l31.1-31.4c9.8-9.9 9.1-26-1.4-35.1l-37.3-32 9.2-35.8c3.8-15-7.3-29.7-22.8-30l-40.9-.8 88.8-62.4c15.3-10.7 13-34.1-4.1-41.6l-17.5-7.7c-11.4-5-17-17.8-13.1-29.6l20.2-60c6.2-18.3-10.8-36-29.3-30.7l-56 16c-10.2 2.9-21.2-1.2-26.9-10.2L353.2 24zM170.5 352.8L317.7 205.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L156.7 344 40.8 283.2c-5-2.6-5.8-9.5-1.4-13.2l20.5-17.3c7.1-6 10.1-15.4 7.7-24.4L29.7 83c-1.4-5.5 3.1-10.7 8.7-10l38.4 4.8c2.4 .3 4.9-.5 6.6-2.3l42.4-42c3.3-3.3 8.7-3 11.7 .5l35.2 41.1c2 2.3 5.1 3.3 8.1 2.5l40.7-10.4c5-1.3 9.9 2.4 10 7.6l1.2 65.4c.1 3.5 2.3 6.5 5.7 7.5s6.9-.2 8.9-3l79-112.4c3.3-4.7 10.2-4.5 13.3 .3l13.6 21.4C362.7 68.9 381 75.9 398 71l56-16c6.2-1.8 11.8 4.1 9.8 10.2l-20.2 60c-6.6 19.6 2.8 41 21.8 49.4l17.5 7.7c5.7 2.5 6.5 10.3 1.4 13.9L375.4 272.7c-2.8 2-4.1 5.6-3 8.9s4 5.6 7.5 5.7l65.4 1.2c5.2 .1 8.9 5 7.6 10l-10.4 40.7c-.8 3 .2 6.1 2.5 8.1L486 382.4c3.5 3 3.7 8.4 .5 11.7l-31.1 31.4c-8.6 8.7-12.8 20.9-11.3 33.1l2.9 23c.7 5.6-4.5 10.2-10 8.7L291.8 452.4c-8.9-2.3-18.4 .7-24.4 7.7L250 480.7c-3.7 4.3-10.6 3.6-13.2-1.4L170.6 352.8c0 0 0 0 0 0z" />
    </Icon>
);

export default LeafMaple;