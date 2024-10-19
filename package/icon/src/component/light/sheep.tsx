
import { Icon } from "../../index";

/**
 * A component that renders the `sheep` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sheep?s=light sheep}
 * @preview ![sheep](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTQ0IDEzNmMwLTM5LjgtMzIuMi03Mi03Mi03MmMtMzYuMSAwLTY2IDI2LjYtNzEuMiA2MS4ybC4xIC4xLS4xIC4xYy0uNSAzLjUtLjggNy0uOCAxMC42bDAgNzJjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMTYgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTcyek0zNzIuNSAxMDUuOEMzODUuNCA2My4xIDQyNS4xIDMyIDQ3MiAzMmM0NC40IDAgODIuMiAyNy44IDk3LjIgNjYuOWw0Ny43IDMxLjhjNy40IDQuOSA5LjMgMTQuOCA0LjQgMjIuMnMtMTQuOCA5LjMtMjIuMiA0LjRMNTc2IDE0MS45bDAgNjYuMWMwIDUzLTQzIDk2LTk2IDk2bC0xNiAwYy01MyAwLTk2LTQzLTk2LTk2bDAtNjAuOC0xNS4xIDEwLjFjLTcuNCA0LjktMTcuMyAyLjktMjIuMi00LjRzLTIuOS0xNy4zIDQuNC0yMi4ybDM3LjMtMjQuOXpNNDQ4IDE0NGExNiAxNiAwIDEgMSAwIDMyIDE2IDE2IDAgMSAxIDAtMzJ6bTQ4IDE2YTE2IDE2IDAgMSAxIDMyIDAgMTYgMTYgMCAxIDEgLTMyIDB6TTQxNiAzNDRjOS45IDAgMTguOC00LjUgMjQuNy0xMS42YzEwLjEgMi40IDIwLjUgMy42IDMxLjMgMy42YzEuMSAwIDIuMiAwIDMuNCAwYy04LjcgMjEuNS0yOC44IDM3LjMtNTIuOCAzOS43bC0yNSAxMDBDMzkyLjIgNDk3IDM3MyA1MTIgMzUxIDUxMmwtMTUgMGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhsMC00MC42Yy05LjQgNS40LTIwLjMgOC42LTMyIDguNnMtMjIuNi0zLjEtMzItOC42bDAgNDAuNmMwIDI2LjUtMjEuNSA0OC00OCA0OGwtMTUgMGMtMjIgMC00MS4yLTE1LTQ2LjYtMzYuNGwtMjUtMTAwQzU3LjIgMzcyLjQgMzIgMzQ1LjEgMzIgMzEyYzAtNS4zIC43LTEwLjUgMS45LTE1LjVDMTMuNyAyODUuNyAwIDI2NC41IDAgMjQwczEzLjctNDUuNyAzMy45LTU2LjVjLTEuMi01LTEuOS0xMC4yLTEuOS0xNS41YzAtMzUuMyAyOC43LTY0IDY0LTY0YzMuMyAwIDYuNiAuMyA5LjggLjhDMTEyLjcgNzYuOCAxMzcuOSA1NiAxNjggNTZjMTUgMCAyOC45IDUuMiAzOS44IDEzLjlDMjE5LjUgNTYuNSAyMzYuOCA0OCAyNTYgNDhzMzYuNSA4LjUgNDguMiAyMS45QzMxNS4xIDYxLjIgMzI5IDU2IDM0NCA1NmM1LjcgMCAxMS4yIC43IDE2LjUgMi4xYy02LjQgOS4yLTExLjcgMTkuMi0xNS44IDI5LjlsLS43IDBjLTcuNiAwLTE0LjQgMi42LTE5LjkgNi45Yy0xMy40IDEwLjYtMzIuOCA4LjktNDQtNGMtNS45LTYuOC0xNC41LTExLTI0LjEtMTFzLTE4LjIgNC4yLTI0LjEgMTFjLTExLjMgMTIuOS0zMC42IDE0LjYtNDQgNEMxODIuNCA5MC42IDE3NS42IDg4IDE2OCA4OGMtMTUgMC0yNy43IDEwLjQtMzEuMSAyNC4zYy0zLjkgMTYuMS0xOS42IDI2LjYtMzYgMjRjLTEuNi0uMi0zLjItLjQtNS0uNGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJjMCAyLjcgLjMgNS4zIC45IDcuOGMzLjUgMTQuMi0zIDI5LTE2IDM2Yy0xMC4yIDUuNC0xNyAxNi4xLTE3IDI4LjNzNi44IDIyLjggMTcgMjguM2MxMi45IDYuOSAxOS41IDIxLjcgMTYgMzZjLS42IDIuNS0uOSA1LjEtLjkgNy44YzAgMTcuNyAxNC4zIDMyIDMyIDMyYzEuNyAwIDMuNC0uMSA1LS40YzE2LjQtMi41IDMyIDcuOSAzNiAyNGMzLjQgMTQgMTYuMSAyNC4zIDMxLjEgMjQuM2M3LjYgMCAxNC40LTIuNiAxOS45LTYuOWMxMy40LTEwLjYgMzIuOC04LjkgNDQgNGM1LjkgNi44IDE0LjUgMTEgMjQuMSAxMXMxOC4yLTQuMiAyNC4xLTExYzExLjMtMTIuOSAzMC42LTE0LjYgNDQtNGM1LjUgNC4zIDEyLjMgNi45IDE5LjkgNi45YzE1IDAgMjcuNy0xMC40IDMxLjEtMjQuM2MzLjktMTYuMSAxOS42LTI2LjYgMzYtMjRjMS42IC4yIDMuMiAuNCA1IC40em0tNzIgODBjLTguNSAwLTE2LjYtMS43LTI0LTQuN2wwIDQ0LjdjMCA4LjggNy4yIDE2IDE2IDE2bDE1IDBjNy4zIDAgMTMuNy01IDE1LjUtMTIuMWwxMy44LTU1LjJDMzcwIDQxOS44IDM1Ny41IDQyNCAzNDQgNDI0ek0xMzEuNyA0MTIuN2wxMy44IDU1LjJjMS44IDcuMSA4LjIgMTIuMSAxNS41IDEyLjFsMTUgMGM4LjggMCAxNi03LjIgMTYtMTZsMC00NC43Yy03LjQgMy0xNS41IDQuNy0yNCA0LjdjLTEzLjUgMC0yNi00LjItMzYuMy0xMS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sheep: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 136c0-39.8-32.2-72-72-72c-36.1 0-66 26.6-71.2 61.2l.1 .1-.1 .1c-.5 3.5-.8 7-.8 10.6l0 72c0 35.3 28.7 64 64 64l16 0c35.3 0 64-28.7 64-64l0-72zM372.5 105.8C385.4 63.1 425.1 32 472 32c44.4 0 82.2 27.8 97.2 66.9l47.7 31.8c7.4 4.9 9.3 14.8 4.4 22.2s-14.8 9.3-22.2 4.4L576 141.9l0 66.1c0 53-43 96-96 96l-16 0c-53 0-96-43-96-96l0-60.8-15.1 10.1c-7.4 4.9-17.3 2.9-22.2-4.4s-2.9-17.3 4.4-22.2l37.3-24.9zM448 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM416 344c9.9 0 18.8-4.5 24.7-11.6c10.1 2.4 20.5 3.6 31.3 3.6c1.1 0 2.2 0 3.4 0c-8.7 21.5-28.8 37.3-52.8 39.7l-25 100C392.2 497 373 512 351 512l-15 0c-26.5 0-48-21.5-48-48l0-40.6c-9.4 5.4-20.3 8.6-32 8.6s-22.6-3.1-32-8.6l0 40.6c0 26.5-21.5 48-48 48l-15 0c-22 0-41.2-15-46.6-36.4l-25-100C57.2 372.4 32 345.1 32 312c0-5.3 .7-10.5 1.9-15.5C13.7 285.7 0 264.5 0 240s13.7-45.7 33.9-56.5c-1.2-5-1.9-10.2-1.9-15.5c0-35.3 28.7-64 64-64c3.3 0 6.6 .3 9.8 .8C112.7 76.8 137.9 56 168 56c15 0 28.9 5.2 39.8 13.9C219.5 56.5 236.8 48 256 48s36.5 8.5 48.2 21.9C315.1 61.2 329 56 344 56c5.7 0 11.2 .7 16.5 2.1c-6.4 9.2-11.7 19.2-15.8 29.9l-.7 0c-7.6 0-14.4 2.6-19.9 6.9c-13.4 10.6-32.8 8.9-44-4c-5.9-6.8-14.5-11-24.1-11s-18.2 4.2-24.1 11c-11.3 12.9-30.6 14.6-44 4C182.4 90.6 175.6 88 168 88c-15 0-27.7 10.4-31.1 24.3c-3.9 16.1-19.6 26.6-36 24c-1.6-.2-3.2-.4-5-.4c-17.7 0-32 14.3-32 32c0 2.7 .3 5.3 .9 7.8c3.5 14.2-3 29-16 36c-10.2 5.4-17 16.1-17 28.3s6.8 22.8 17 28.3c12.9 6.9 19.5 21.7 16 36c-.6 2.5-.9 5.1-.9 7.8c0 17.7 14.3 32 32 32c1.7 0 3.4-.1 5-.4c16.4-2.5 32 7.9 36 24c3.4 14 16.1 24.3 31.1 24.3c7.6 0 14.4-2.6 19.9-6.9c13.4-10.6 32.8-8.9 44 4c5.9 6.8 14.5 11 24.1 11s18.2-4.2 24.1-11c11.3-12.9 30.6-14.6 44-4c5.5 4.3 12.3 6.9 19.9 6.9c15 0 27.7-10.4 31.1-24.3c3.9-16.1 19.6-26.6 36-24c1.6 .2 3.2 .4 5 .4zm-72 80c-8.5 0-16.6-1.7-24-4.7l0 44.7c0 8.8 7.2 16 16 16l15 0c7.3 0 13.7-5 15.5-12.1l13.8-55.2C370 419.8 357.5 424 344 424zM131.7 412.7l13.8 55.2c1.8 7.1 8.2 12.1 15.5 12.1l15 0c8.8 0 16-7.2 16-16l0-44.7c-7.4 3-15.5 4.7-24 4.7c-13.5 0-26-4.2-36.3-11.3z" />
    </Icon>
);

export default Sheep;