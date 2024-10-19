
import { Icon } from "../../index";

/**
 * A component that renders the `sheep` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sheep?s=sharp-thin sheep}
 * @preview ![sheep](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzkyIDI4OGwxNjggMCAwLTE4NS40TDUwNS40IDQ4bC01OC43IDBMMzkyIDEwMi42IDM5MiAyODh6TTMzOC43IDE0MS43bDE2IDI1LjhMMzc2IDE1NS40bDAtNDAuNS0zNy4zIDI2Ljl6TTM1NiAxODUuMmwtNi43IDMuOC00LjEtNi42LTI0LTM4LjctMy45LTYuMyA2LjEtNC40IDU1LjktNDAuM0w0NDAgMzJsNzIgMCA2MC44IDYwLjggNTUuOSA0MC4zIDYuMSA0LjQtMy45IDYuMy0yNCAzOC43LTQuMSA2LjYtNi43LTMuOC0yMC0xMS40TDU3NiAyODhsMCAxNi0xNiAwLTE2OCAwLTE2IDAgMC0xNiAwLTExNC4yLTIwIDExLjR6bTI0MS4zLTE3LjdsMTYtMjUuOEw1NzYgMTE0LjhsMCA0MC41IDIxLjMgMTIuMnpNNDQ4IDE0NGExNiAxNiAwIDEgMSAwIDMyIDE2IDE2IDAgMSAxIDAtMzJ6bTQ4IDE2YTE2IDE2IDAgMSAxIDMyIDAgMTYgMTYgMCAxIDEgLTMyIDB6TTMwNC4yIDY5LjlDMzE1LjEgNjEuMiAzMjkgNTYgMzQ0IDU2bDAgMTZjLTExLjMgMC0yMS43IDMuOS0yOS44IDEwLjRsLTEyIDkuNUwyOTIuMSA4MC40QzI4My4zIDcwLjMgMjcwLjQgNjQgMjU2IDY0cy0yNy4zIDYuMy0zNi4xIDE2LjRMMjA5LjggOTEuOWwtMTItOS41QzE4OS43IDc1LjkgMTc5LjMgNzIgMTY4IDcyYy0yMi41IDAtNDEuNSAxNS42LTQ2LjYgMzYuNWwtMy41IDE0LjItMTQuNS0yLjJjLTIuNC0uNC00LjktLjYtNy40LS42Yy0yNi41IDAtNDggMjEuNS00OCA0OGMwIDQgLjUgNy45IDEuNCAxMS42bDMgMTIuMS0xMSA1LjlDMjYuMyAyMDUuNyAxNiAyMjEuNyAxNiAyNDBzMTAuMyAzNC4zIDI1LjQgNDIuNGwxMSA1LjktMyAxMi4xQzQ4LjUgMzA0LjEgNDggMzA4IDQ4IDMxMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGMyLjUgMCA1LS4yIDcuNC0uNmwxNC41LTIuMiAzLjUgMTQuMmM1LjEgMjEgMjQuMSAzNi42IDQ2LjYgMzYuNmMxMS4zIDAgMjEuNy0zLjkgMjkuOC0xMC40bDEyLTkuNSAxMC4xIDExLjVjOC44IDEwLjEgMjEuNyAxNi40IDM2LjEgMTYuNHMyNy4zLTYuMyAzNi4xLTE2LjRsMTAuMS0xMS41IDEyIDkuNWM4LjIgNi41IDE4LjUgMTAuNCAyOS44IDEwLjRjMjIuNSAwIDQxLjUtMTUuNiA0Ni42LTM2LjZsMy41LTE0LjIgMTQuNSAyLjJjMi40IC40IDQuOSAuNiA3LjQgLjZjMTcuOCAwIDMzLjMtOS43IDQxLjYtMjRsMTcuOCAwYy04LjcgMjEuNi0yOC45IDM3LjMtNTIuOSAzOS43TDM5MS44IDUwNS44bC0xLjUgNi4yLTYuMyAwLTcyIDAtOCAwIDAtOCAwLTU2IDAtOCAxNiAwIDAgOCAwIDQ4IDU3LjcgMCAyNy43LTExNy45QzM5Ny42IDQwNC42IDM3My4xIDQyNCAzNDQgNDI0Yy0xNSAwLTI4LjktNS4yLTM5LjgtMTMuOWMtMTEuNyAxMy40LTI5IDIxLjktNDguMiAyMS45cy0zNi41LTguNS00OC4yLTIxLjlDMTk2LjkgNDE4LjggMTgzIDQyNCAxNjggNDI0Yy0yOS4xIDAtNTMuNi0xOS40LTYxLjQtNDUuOUwxMzQuMyA0OTZsNTcuNyAwIDAtNDggMC04IDE2IDAgMCA4IDAgNTYgMCA4LTggMC03MiAwLTYuMyAwLTEuNS02LjJMODkuNiAzNzUuN0M1Ny4zIDM3Mi41IDMyIDM0NS4yIDMyIDMxMmMwLTUuMyAuNy0xMC41IDEuOS0xNS41QzEzLjcgMjg1LjcgMCAyNjQuNSAwIDI0MHMxMy43LTQ1LjcgMzMuOS01Ni41Yy0xLjItNS0xLjktMTAuMi0xLjktMTUuNWMwLTM1LjMgMjguNy02NCA2NC02NGMzLjMgMCA2LjYgLjMgOS44IC44QzExMi43IDc2LjggMTM3LjkgNTYgMTY4IDU2YzE1IDAgMjguOSA1LjIgMzkuOCAxMy45QzIxOS41IDU2LjUgMjM2LjggNDggMjU2IDQ4czM2LjUgOC41IDQ4LjIgMjEuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Sheep: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M392 288l168 0 0-185.4L505.4 48l-58.7 0L392 102.6 392 288zM338.7 141.7l16 25.8L376 155.4l0-40.5-37.3 26.9zM356 185.2l-6.7 3.8-4.1-6.6-24-38.7-3.9-6.3 6.1-4.4 55.9-40.3L440 32l72 0 60.8 60.8 55.9 40.3 6.1 4.4-3.9 6.3-24 38.7-4.1 6.6-6.7-3.8-20-11.4L576 288l0 16-16 0-168 0-16 0 0-16 0-114.2-20 11.4zm241.3-17.7l16-25.8L576 114.8l0 40.5 21.3 12.2zM448 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM304.2 69.9C315.1 61.2 329 56 344 56l0 16c-11.3 0-21.7 3.9-29.8 10.4l-12 9.5L292.1 80.4C283.3 70.3 270.4 64 256 64s-27.3 6.3-36.1 16.4L209.8 91.9l-12-9.5C189.7 75.9 179.3 72 168 72c-22.5 0-41.5 15.6-46.6 36.5l-3.5 14.2-14.5-2.2c-2.4-.4-4.9-.6-7.4-.6c-26.5 0-48 21.5-48 48c0 4 .5 7.9 1.4 11.6l3 12.1-11 5.9C26.3 205.7 16 221.7 16 240s10.3 34.3 25.4 42.4l11 5.9-3 12.1C48.5 304.1 48 308 48 312c0 26.5 21.5 48 48 48c2.5 0 5-.2 7.4-.6l14.5-2.2 3.5 14.2c5.1 21 24.1 36.6 46.6 36.6c11.3 0 21.7-3.9 29.8-10.4l12-9.5 10.1 11.5c8.8 10.1 21.7 16.4 36.1 16.4s27.3-6.3 36.1-16.4l10.1-11.5 12 9.5c8.2 6.5 18.5 10.4 29.8 10.4c22.5 0 41.5-15.6 46.6-36.6l3.5-14.2 14.5 2.2c2.4 .4 4.9 .6 7.4 .6c17.8 0 33.3-9.7 41.6-24l17.8 0c-8.7 21.6-28.9 37.3-52.9 39.7L391.8 505.8l-1.5 6.2-6.3 0-72 0-8 0 0-8 0-56 0-8 16 0 0 8 0 48 57.7 0 27.7-117.9C397.6 404.6 373.1 424 344 424c-15 0-28.9-5.2-39.8-13.9c-11.7 13.4-29 21.9-48.2 21.9s-36.5-8.5-48.2-21.9C196.9 418.8 183 424 168 424c-29.1 0-53.6-19.4-61.4-45.9L134.3 496l57.7 0 0-48 0-8 16 0 0 8 0 56 0 8-8 0-72 0-6.3 0-1.5-6.2L89.6 375.7C57.3 372.5 32 345.2 32 312c0-5.3 .7-10.5 1.9-15.5C13.7 285.7 0 264.5 0 240s13.7-45.7 33.9-56.5c-1.2-5-1.9-10.2-1.9-15.5c0-35.3 28.7-64 64-64c3.3 0 6.6 .3 9.8 .8C112.7 76.8 137.9 56 168 56c15 0 28.9 5.2 39.8 13.9C219.5 56.5 236.8 48 256 48s36.5 8.5 48.2 21.9z" />
    </Icon>
);

export default Sheep;