
import { Icon } from "../../index";

/**
 * A component that renders the `sheep` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sheep?s=thin sheep}
 * @preview ![sheep](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTYwIDEzMmMwLTQ2LjQtMzcuNi04NC04NC04NHMtODQgMzcuNi04NCA4NGwwIDc2YzAgNDQuMiAzNS44IDgwIDgwIDgwbDggMGM0NC4yIDAgODAtMzUuOCA4MC04MGwwLTc2ek0zODQuNiA5MS40QzQwMC4yIDU2LjQgNDM1LjIgMzIgNDc2IDMyczc1LjggMjQuNCA5MS40IDU5LjRMNjE4LjMgMTI2YzguNiA1LjggMTMuNyAxNS41IDEzLjcgMjUuOWMwIDI0LTI2IDM5LjEtNDYuOCAyNy4ybC05LjItNS4zIDAgMzQuMmMwIDUzLTQzIDk2LTk2IDk2bC04IDBjLTUzIDAtOTYtNDMtOTYtOTZsMC0zNC4yLTkuMiA1LjNDMzQ2IDE5MSAzMjAgMTc1LjkgMzIwIDE1MS45YzAtMTAuNCA1LjEtMjAgMTMuNy0yNS45bDUwLjktMzQuN3pNNTc2IDEzMmwwIDIzLjQgMTcuMSA5LjhjMTAuMiA1LjggMjIuOS0xLjUgMjIuOS0xMy4zYzAtNS4xLTIuNS05LjgtNi43LTEyLjZsLTM0LjYtMjMuNmMuOSA1LjMgMS4zIDEwLjggMS4zIDE2LjN6TTM3Ny4zIDExNS43bC0zNC42IDIzLjZjLTQuMiAyLjgtNi43IDcuNi02LjcgMTIuNmMwIDExLjcgMTIuNyAxOS4xIDIyLjkgMTMuM2wxNy4xLTkuOCAwLTIzLjRjMC01LjYgLjUtMTEgMS4zLTE2LjN6TTQ0OCAxNDRhMTYgMTYgMCAxIDEgMCAzMiAxNiAxNiAwIDEgMSAwLTMyem00OCAxNmExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAwek00MTYgMzYwYzE4LjMgMCAzNC4xLTEwLjIgNDIuMi0yNS4yYzUuNiAuOCAxMS4zIDEuMiAxNy4xIDEuMmMtOC43IDIxLjYtMjguOSAzNy4zLTUyLjkgMzkuN0wzOTcuNiA0ODEuMmMtNC4zIDE4LjEtMjAuNCAzMC44LTM4LjkgMzAuOEwzNDQgNTEyYy0yMi4xIDAtNDAtMTcuOS00MC00MGwwLTI0YzAtNC40IDMuNi04IDgtOHM4IDMuNiA4IDhsMCAyNGMwIDEzLjMgMTAuNyAyNCAyNCAyNGwxNC43IDBjMTEuMSAwIDIwLjgtNy43IDIzLjQtMTguNWwyMy40LTk5LjRDMzk3LjYgNDA0LjYgMzczLjEgNDI0IDM0NCA0MjRjLTE1IDAtMjguOS01LjItMzkuOC0xMy45Yy0xMS43IDEzLjQtMjkgMjEuOS00OC4yIDIxLjlzLTM2LjUtOC41LTQ4LjItMjEuOUMxOTYuOSA0MTguOCAxODMgNDI0IDE2OCA0MjRjLTI5LjEgMC01My42LTE5LjQtNjEuNC00NS45TDEzMCA0NzcuNWMyLjYgMTAuOCAxMi4yIDE4LjUgMjMuNCAxOC41bDE0LjcgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTI0YzAtNC40IDMuNi04IDgtOHM4IDMuNiA4IDhsMCAyNGMwIDIyLjEtMTcuOSA0MC00MCA0MGwtMTQuNyAwYy0xOC42IDAtMzQuNy0xMi44LTM4LjktMzAuOEw4OS42IDM3NS43QzU3LjMgMzcyLjUgMzIgMzQ1LjIgMzIgMzEyYzAtNS4zIC43LTEwLjUgMS45LTE1LjVDMTMuNyAyODUuNyAwIDI2NC41IDAgMjQwczEzLjctNDUuNyAzMy45LTU2LjVjLTEuMi01LTEuOS0xMC4yLTEuOS0xNS41YzAtMzUuMyAyOC43LTY0IDY0LTY0YzMuMyAwIDYuNiAuMyA5LjggLjhDMTEyLjcgNzYuOCAxMzcuOSA1NiAxNjggNTZjMTUgMCAyOC45IDUuMiAzOS44IDEzLjlDMjE5LjUgNTYuNSAyMzYuOCA0OCAyNTYgNDhzMzYuNSA4LjUgNDguMiAyMS45QzMxNS4xIDYxLjIgMzI5IDU2IDM0NCA1NmM3LjYgMCAxNC44IDEuMyAyMS41IDMuN2MtMyA0LjUtNS43IDkuMy04LjEgMTQuMmMtNC4zLTEuMi04LjgtMS45LTEzLjQtMS45Yy0xMS4zIDAtMjEuNyAzLjktMjkuOCAxMC40Yy02LjcgNS4zLTE2LjQgNC40LTIyLTJDMjgzLjMgNzAuMyAyNzAuNCA2NCAyNTYgNjRzLTI3LjMgNi4zLTM2LjEgMTYuNGMtNS42IDYuNC0xNS4zIDcuMy0yMiAyQzE4OS43IDc1LjkgMTc5LjMgNzIgMTY4IDcyYy0yMi41IDAtNDEuNSAxNS42LTQ2LjYgMzYuNWMtMiA4LjEtOS44IDEzLjMtMTggMTJjLTIuNC0uNC00LjktLjYtNy40LS42Yy0yNi41IDAtNDggMjEuNS00OCA0OGMwIDQgLjUgNy45IDEuNCAxMS42YzEuOCA3LjEtMS41IDE0LjUtOCAxOEMyNi4zIDIwNS43IDE2IDIyMS43IDE2IDI0MHMxMC4zIDM0LjMgMjUuNCA0Mi40YzYuNSAzLjUgOS44IDEwLjkgOCAxOEM0OC41IDMwNC4xIDQ4IDMwOCA0OCAzMTJjMCAyNi41IDIxLjUgNDggNDggNDhjMi41IDAgNS0uMiA3LjQtLjZjOC4yLTEuMyAxNiA0IDE4IDEyYzUuMSAyMSAyNC4xIDM2LjYgNDYuNiAzNi42YzExLjMgMCAyMS43LTMuOSAyOS44LTEwLjRjNi43LTUuMyAxNi40LTQuNCAyMiAyYzguOCAxMC4xIDIxLjcgMTYuNCAzNi4xIDE2LjRzMjcuMy02LjMgMzYuMS0xNi40YzUuNi02LjQgMTUuMy03LjMgMjItMmM4LjIgNi41IDE4LjUgMTAuNCAyOS44IDEwLjRjMjIuNSAwIDQxLjUtMTUuNiA0Ni42LTM2LjZjMi04LjEgOS44LTEzLjMgMTgtMTJjMi40IC40IDQuOSAuNiA3LjQgLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sheep: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 132c0-46.4-37.6-84-84-84s-84 37.6-84 84l0 76c0 44.2 35.8 80 80 80l8 0c44.2 0 80-35.8 80-80l0-76zM384.6 91.4C400.2 56.4 435.2 32 476 32s75.8 24.4 91.4 59.4L618.3 126c8.6 5.8 13.7 15.5 13.7 25.9c0 24-26 39.1-46.8 27.2l-9.2-5.3 0 34.2c0 53-43 96-96 96l-8 0c-53 0-96-43-96-96l0-34.2-9.2 5.3C346 191 320 175.9 320 151.9c0-10.4 5.1-20 13.7-25.9l50.9-34.7zM576 132l0 23.4 17.1 9.8c10.2 5.8 22.9-1.5 22.9-13.3c0-5.1-2.5-9.8-6.7-12.6l-34.6-23.6c.9 5.3 1.3 10.8 1.3 16.3zM377.3 115.7l-34.6 23.6c-4.2 2.8-6.7 7.6-6.7 12.6c0 11.7 12.7 19.1 22.9 13.3l17.1-9.8 0-23.4c0-5.6 .5-11 1.3-16.3zM448 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM416 360c18.3 0 34.1-10.2 42.2-25.2c5.6 .8 11.3 1.2 17.1 1.2c-8.7 21.6-28.9 37.3-52.9 39.7L397.6 481.2c-4.3 18.1-20.4 30.8-38.9 30.8L344 512c-22.1 0-40-17.9-40-40l0-24c0-4.4 3.6-8 8-8s8 3.6 8 8l0 24c0 13.3 10.7 24 24 24l14.7 0c11.1 0 20.8-7.7 23.4-18.5l23.4-99.4C397.6 404.6 373.1 424 344 424c-15 0-28.9-5.2-39.8-13.9c-11.7 13.4-29 21.9-48.2 21.9s-36.5-8.5-48.2-21.9C196.9 418.8 183 424 168 424c-29.1 0-53.6-19.4-61.4-45.9L130 477.5c2.6 10.8 12.2 18.5 23.4 18.5l14.7 0c13.3 0 24-10.7 24-24l0-24c0-4.4 3.6-8 8-8s8 3.6 8 8l0 24c0 22.1-17.9 40-40 40l-14.7 0c-18.6 0-34.7-12.8-38.9-30.8L89.6 375.7C57.3 372.5 32 345.2 32 312c0-5.3 .7-10.5 1.9-15.5C13.7 285.7 0 264.5 0 240s13.7-45.7 33.9-56.5c-1.2-5-1.9-10.2-1.9-15.5c0-35.3 28.7-64 64-64c3.3 0 6.6 .3 9.8 .8C112.7 76.8 137.9 56 168 56c15 0 28.9 5.2 39.8 13.9C219.5 56.5 236.8 48 256 48s36.5 8.5 48.2 21.9C315.1 61.2 329 56 344 56c7.6 0 14.8 1.3 21.5 3.7c-3 4.5-5.7 9.3-8.1 14.2c-4.3-1.2-8.8-1.9-13.4-1.9c-11.3 0-21.7 3.9-29.8 10.4c-6.7 5.3-16.4 4.4-22-2C283.3 70.3 270.4 64 256 64s-27.3 6.3-36.1 16.4c-5.6 6.4-15.3 7.3-22 2C189.7 75.9 179.3 72 168 72c-22.5 0-41.5 15.6-46.6 36.5c-2 8.1-9.8 13.3-18 12c-2.4-.4-4.9-.6-7.4-.6c-26.5 0-48 21.5-48 48c0 4 .5 7.9 1.4 11.6c1.8 7.1-1.5 14.5-8 18C26.3 205.7 16 221.7 16 240s10.3 34.3 25.4 42.4c6.5 3.5 9.8 10.9 8 18C48.5 304.1 48 308 48 312c0 26.5 21.5 48 48 48c2.5 0 5-.2 7.4-.6c8.2-1.3 16 4 18 12c5.1 21 24.1 36.6 46.6 36.6c11.3 0 21.7-3.9 29.8-10.4c6.7-5.3 16.4-4.4 22 2c8.8 10.1 21.7 16.4 36.1 16.4s27.3-6.3 36.1-16.4c5.6-6.4 15.3-7.3 22-2c8.2 6.5 18.5 10.4 29.8 10.4c22.5 0 41.5-15.6 46.6-36.6c2-8.1 9.8-13.3 18-12c2.4 .4 4.9 .6 7.4 .6z" />
    </Icon>
);

export default Sheep;