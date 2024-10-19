
import { Icon } from "../../index";

/**
 * A component that renders the `atom-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/atom-simple?s=sharp-thin atom-simple}
 * @preview ![atom-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTgwLjEgNDUzLjNjMTkuMy02LjQgMzkuOC0xNS43IDYwLjYtMjcuN2MtMjguNy0xOC44LTU3LjUtNDIuMS04NC45LTY5LjVzLTUwLjctNTYuMi02OS41LTg0LjljLTExLjkgMjAuOC0yMS4yIDQxLjItMjcuNyA2MC42QzQxLjIgMzg0LjQgNDUuOSA0MjMuOSA2NyA0NDVzNjAuNSAyNS44IDExMy4xIDguM3pNMjU2IDQxNi40YzI5LjgtMTguOCA2MC4xLTQyLjggODguOC03MS42czUyLjgtNTkgNzEuNi04OC44Yy0xOC44LTI5LjgtNDIuOC02MC4xLTcxLjYtODguOHMtNTktNTIuOC04OC44LTcxLjZjLTI5LjggMTguOC02MC4xIDQyLjgtODguOCA3MS42cy01Mi44IDU5LTcxLjYgODguOGMxOC44IDI5LjggNDIuOCA2MC4xIDcxLjYgODguOHM1OSA1Mi44IDg4LjggNzEuNnptMCAxOC44Yy04Mi4xIDQ5LjItMTYxLjEgNjAuMy0yMDAuMyAyMS4xUzI3LjYgMzM4LjEgNzYuOCAyNTZDMjcuNiAxNzMuOSAxNi41IDk0LjkgNTUuNyA1NS43UzE3My45IDI3LjYgMjU2IDc2LjhjODIuMS00OS4yIDE2MS4xLTYwLjMgMjAwLjMtMjEuMXMyOC4xIDExOC4yLTIxLjEgMjAwLjNjNDkuMiA4Mi4xIDYwLjMgMTYxLjEgMjEuMSAyMDAuM3MtMTE4LjIgMjguMS0yMDAuMy0yMS4xek00MjUuNiAyNzEuM2MtMTguOCAyOC43LTQyLjEgNTcuNS02OS41IDg0LjlzLTU2LjIgNTAuNy04NC45IDY5LjVjMjAuOCAxMS45IDQxLjIgMjEuMiA2MC42IDI3LjdjNTIuNiAxNy41IDkyLjEgMTIuOCAxMTMuMS04LjNzMjUuOC02MC41IDguMy0xMTMuMWMtNi40LTE5LjMtMTUuNy0zOS44LTI3LjctNjAuNnptMC0zMC42YzExLjktMjAuOCAyMS4yLTQxLjIgMjcuNy02MC42QzQ3MC44IDEyNy42IDQ2Ni4xIDg4LjEgNDQ1IDY3cy02MC41LTI1LjgtMTEzLjEtOC4zYy0xOS4zIDYuNC0zOS44IDE1LjctNjAuNiAyNy43YzI4LjcgMTguOCA1Ny41IDQyLjEgODQuOSA2OS41czUwLjcgNTYuMiA2OS41IDg0Ljl6TTI0MC43IDg2LjRjLTIwLjgtMTEuOS00MS4yLTIxLjItNjAuNi0yNy43QzEyNy42IDQxLjIgODguMSA0NS45IDY3IDY3cy0yNS44IDYwLjUtOC4zIDExMy4xYzYuNCAxOS4zIDE1LjcgMzkuOCAyNy43IDYwLjZjMTguOC0yOC43IDQyLjEtNTcuNSA2OS41LTg0LjlzNTYuMi01MC43IDg0LjktNjkuNXpNMjAxLjQgMjU2bDExLjMtMTEuMyAzMi0zMkwyNTYgMjAxLjRsMTEuMyAxMS4zIDMyIDMyTDMxMC42IDI1NmwtMTEuMyAxMS4zLTMyIDMyTDI1NiAzMTAuNmwtMTEuMy0xMS4zLTMyLTMyTDIwMS40IDI1NnptNjUuOSAyMC43bDkuNC05LjRMMjg4IDI1NmwtMTEuMy0xMS4zLTkuNC05LjRMMjU2IDIyNGwtMTEuMyAxMS4zLTkuNCA5LjRMMjI0IDI1NmwxMS4zIDExLjMgOS40IDkuNEwyNTYgMjg4bDExLjMtMTEuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const AtomSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M180.1 453.3c19.3-6.4 39.8-15.7 60.6-27.7c-28.7-18.8-57.5-42.1-84.9-69.5s-50.7-56.2-69.5-84.9c-11.9 20.8-21.2 41.2-27.7 60.6C41.2 384.4 45.9 423.9 67 445s60.5 25.8 113.1 8.3zM256 416.4c29.8-18.8 60.1-42.8 88.8-71.6s52.8-59 71.6-88.8c-18.8-29.8-42.8-60.1-71.6-88.8s-59-52.8-88.8-71.6c-29.8 18.8-60.1 42.8-88.8 71.6s-52.8 59-71.6 88.8c18.8 29.8 42.8 60.1 71.6 88.8s59 52.8 88.8 71.6zm0 18.8c-82.1 49.2-161.1 60.3-200.3 21.1S27.6 338.1 76.8 256C27.6 173.9 16.5 94.9 55.7 55.7S173.9 27.6 256 76.8c82.1-49.2 161.1-60.3 200.3-21.1s28.1 118.2-21.1 200.3c49.2 82.1 60.3 161.1 21.1 200.3s-118.2 28.1-200.3-21.1zM425.6 271.3c-18.8 28.7-42.1 57.5-69.5 84.9s-56.2 50.7-84.9 69.5c20.8 11.9 41.2 21.2 60.6 27.7c52.6 17.5 92.1 12.8 113.1-8.3s25.8-60.5 8.3-113.1c-6.4-19.3-15.7-39.8-27.7-60.6zm0-30.6c11.9-20.8 21.2-41.2 27.7-60.6C470.8 127.6 466.1 88.1 445 67s-60.5-25.8-113.1-8.3c-19.3 6.4-39.8 15.7-60.6 27.7c28.7 18.8 57.5 42.1 84.9 69.5s50.7 56.2 69.5 84.9zM240.7 86.4c-20.8-11.9-41.2-21.2-60.6-27.7C127.6 41.2 88.1 45.9 67 67s-25.8 60.5-8.3 113.1c6.4 19.3 15.7 39.8 27.7 60.6c18.8-28.7 42.1-57.5 69.5-84.9s56.2-50.7 84.9-69.5zM201.4 256l11.3-11.3 32-32L256 201.4l11.3 11.3 32 32L310.6 256l-11.3 11.3-32 32L256 310.6l-11.3-11.3-32-32L201.4 256zm65.9 20.7l9.4-9.4L288 256l-11.3-11.3-9.4-9.4L256 224l-11.3 11.3-9.4 9.4L224 256l11.3 11.3 9.4 9.4L256 288l11.3-11.3z" />
    </Icon>
);

export default AtomSimple;