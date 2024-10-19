
import { Icon } from "../../index";

/**
 * A component that renders the `sticker-mule` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sticker-mule?s=brands sticker-mule}
 * @preview ![sticker-mule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTYxLjcgMTk5LjZjLTEuMy4zLjMgMCAwIDB6bS02LjItNzcuNGMtNy43LTIyLjMtNS4xLTcuMi0xMy40LTM2LjktMS42LTYuNS0zLjYtMTQuNS02LjItMjAtNC40LTguNy00LjYtNy41LTQuNi05LjUgMC01LjMgMzAuNy00NS4zIDE5LTQ2LjktNS43LS42LTEyLjIgMTEuNi0yMC42IDE3LTguNiA0LjItOCA1LTEwLjMgNS0yLjYgMC01LjctMy02LjItNS0yLTUuNyAxLjktMjUuOS0zLjYtMjUuOS0zLjYgMC0xMi4zIDI0LjgtMTcgMjUuOC01LjIgMS4zLTI3LjktMTEuNC03NS4xIDE4LTI1LjMgMTMuMi04Ni45IDY1LjItODcgNjUuMy02LjcgNC43LTIwIDQuNy0zNS41IDE2LTQ0LjQgMzAuMS0xMDkuNiA5LjQtMTEwLjcgOS0xMTAuNi0yNi44LTEyOC0xNS4yLTE1OSAxMS41LTIwLjggMTcuOS0yMy43IDM2LjUtMjQuMiAzOC45LTQuMiAyMC40IDUuMiA0OC4zIDYuNyA2NC4zIDEuOCAxOS4zLTIuNyAxNy43IDcuNyA5OC4zLjUgMSA0LjEgMCA1LjEgMS41IDAgOC40LTMuOCAxMi4xLTQuMSAxMy0xLjUgNC41LTEuNSAxMC41IDAgMTYgMi4zIDguMiA4LjIgMzcuMiA4LjIgNDYuOSAwIDQxLjguNCA0NCAyLjYgNDkuNCAzLjkgMTAgMTIuNSA5LjEgMTcgMTIgMy4xIDMuNS0uNSA4LjUgMSAxMi41LjUgMiAzLjYgNCA2LjIgNSA5LjIgMy42IDI3IC4zIDI5LjktMi41IDEuNi0xLjUuNS00LjUgMy4xLTUgNS4xIDAgMTAuOC0uNSAxNC40LTIuNSA1LjEtMi41IDQuMS02IDEuNS0xMC41LS40LS44LTctMTMuMy05LjgtMTYtMi4xLTItNS4xLTMtNy4yLTQuNS01LjgtNC45LTEwLjMtMTkuNC0xMC4zLTE5LjUtNC42LTE5LjQtMTAuMy00Ni4zLTQuMS02Ni44IDQuNi0xNy4yIDM5LjUtODcuNyAzOS42LTg3LjggNC4xLTYuNSAxNy0xMS41IDI3LjMtNyA2IDEuOSAxOS4zIDIyIDY1LjQgMzAuOSA0Ny45IDguNyA5Ny40LTIgMTEyLjItMiAyLjggMi0xLjkgMTMtLjUgMzguOSAwIDI2LjQtLjQgMTMuNy00LjEgMjkuOS0yLjIgOS43IDMuNCAyMy4yLTEuNSA0Ni45LTEuNCA5LjgtOS45IDMyLjctOC4yIDQzLjQuNSAxIDEgMiAxLjUgMy41LjUgNC41IDEuNSA4LjUgNC42IDEwIDcuMyAzLjYgMTItMy41IDkuOCAxMS41LS43IDMuMS0yLjYgMTIgMS41IDE1IDQuNCAzLjcgMzAuNiAzLjQgMzYuNS41IDIuNi0xLjUgMS42LTQuNSA2LjQtNy40IDEuOS0uOSAxMS4zLS40IDExLjMtNi41LjMtMS44LTkuMi0xOS45LTkuMy0yMC0yLjYtMy41LTkuMi00LjUtMTEuMy04LTYuOS0xMC4xLTEuNy01Mi42LjUtNTkuNCAzLTExIDUuNi0yMi40IDguNy0zMi40IDExLTQyLjUgMTAuMy01MC42IDE2LjUtNjguMy44LTEuOCA2LjQtMjMuMSAxMC4zLTI5LjkgOS4zLTE3IDIxLjctMzIuNCAzMy41LTQ3LjQgMTgtMjIuOSAzNC00Ni45IDUyLTY5LjggNi4xLTcgOC4yLTEzLjcgMTgtOCAxMC44IDUuNyAyMS42IDcgMzEuOSAxNyAxNC42IDEyLjggMTAuMiAxOC4yIDExLjggMjIuOSAxLjUgNSA3LjcgMTAuNSAxNC45IDkuNSAxMC40LTIgMTMtMi41IDEzLjQtMi41IDIuNi0uNSA1LjctNSA3LjItOCAzLjEtNS41IDcuMi05IDcuMi0xNi41IDAtNy43LS40LTIuOC0yMC42LTUyLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
const StickerMule: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M561.7 199.6c-1.3.3.3 0 0 0zm-6.2-77.4c-7.7-22.3-5.1-7.2-13.4-36.9-1.6-6.5-3.6-14.5-6.2-20-4.4-8.7-4.6-7.5-4.6-9.5 0-5.3 30.7-45.3 19-46.9-5.7-.6-12.2 11.6-20.6 17-8.6 4.2-8 5-10.3 5-2.6 0-5.7-3-6.2-5-2-5.7 1.9-25.9-3.6-25.9-3.6 0-12.3 24.8-17 25.8-5.2 1.3-27.9-11.4-75.1 18-25.3 13.2-86.9 65.2-87 65.3-6.7 4.7-20 4.7-35.5 16-44.4 30.1-109.6 9.4-110.7 9-110.6-26.8-128-15.2-159 11.5-20.8 17.9-23.7 36.5-24.2 38.9-4.2 20.4 5.2 48.3 6.7 64.3 1.8 19.3-2.7 17.7 7.7 98.3.5 1 4.1 0 5.1 1.5 0 8.4-3.8 12.1-4.1 13-1.5 4.5-1.5 10.5 0 16 2.3 8.2 8.2 37.2 8.2 46.9 0 41.8.4 44 2.6 49.4 3.9 10 12.5 9.1 17 12 3.1 3.5-.5 8.5 1 12.5.5 2 3.6 4 6.2 5 9.2 3.6 27 .3 29.9-2.5 1.6-1.5.5-4.5 3.1-5 5.1 0 10.8-.5 14.4-2.5 5.1-2.5 4.1-6 1.5-10.5-.4-.8-7-13.3-9.8-16-2.1-2-5.1-3-7.2-4.5-5.8-4.9-10.3-19.4-10.3-19.5-4.6-19.4-10.3-46.3-4.1-66.8 4.6-17.2 39.5-87.7 39.6-87.8 4.1-6.5 17-11.5 27.3-7 6 1.9 19.3 22 65.4 30.9 47.9 8.7 97.4-2 112.2-2 2.8 2-1.9 13-.5 38.9 0 26.4-.4 13.7-4.1 29.9-2.2 9.7 3.4 23.2-1.5 46.9-1.4 9.8-9.9 32.7-8.2 43.4.5 1 1 2 1.5 3.5.5 4.5 1.5 8.5 4.6 10 7.3 3.6 12-3.5 9.8 11.5-.7 3.1-2.6 12 1.5 15 4.4 3.7 30.6 3.4 36.5.5 2.6-1.5 1.6-4.5 6.4-7.4 1.9-.9 11.3-.4 11.3-6.5.3-1.8-9.2-19.9-9.3-20-2.6-3.5-9.2-4.5-11.3-8-6.9-10.1-1.7-52.6.5-59.4 3-11 5.6-22.4 8.7-32.4 11-42.5 10.3-50.6 16.5-68.3.8-1.8 6.4-23.1 10.3-29.9 9.3-17 21.7-32.4 33.5-47.4 18-22.9 34-46.9 52-69.8 6.1-7 8.2-13.7 18-8 10.8 5.7 21.6 7 31.9 17 14.6 12.8 10.2 18.2 11.8 22.9 1.5 5 7.7 10.5 14.9 9.5 10.4-2 13-2.5 13.4-2.5 2.6-.5 5.7-5 7.2-8 3.1-5.5 7.2-9 7.2-16.5 0-7.7-.4-2.8-20.6-52.9z" />
    </Icon>
);

export default StickerMule;