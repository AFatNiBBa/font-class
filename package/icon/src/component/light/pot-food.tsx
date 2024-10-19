
import { Icon } from "../../index";

/**
 * A component that renders the `pot-food` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pot-food?s=light pot-food}
 * @preview ![pot-food](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDE2YzAtOC44LTcuMi0xNi0xNi0xNnMtMTYgNy4yLTE2IDE2YzAgMjUuOCA0LjMgNDQuNCAxMS43IDU5LjJjNy4yIDE0LjMgMTYuNyAyMy45IDI0LjYgMzEuN2wuNCAuNGM4LjEgOC4xIDE0LjMgMTQuNCAxOSAyMy44YzQuNiA5LjIgOC4zIDIyLjcgOC4zIDQ0LjhjMCA4LjggNy4yIDE2IDE2IDE2czE2LTcuMiAxNi0xNmMwLTI1LjgtNC4zLTQ0LjQtMTEuNy01OS4yYy03LjItMTQuMy0xNi43LTIzLjktMjQuNi0zMS43bC0uNC0uNGMtOC4xLTguMS0xNC4zLTE0LjQtMTktMjMuOEMxMzEuNyA1MS42IDEyOCAzOC4yIDEyOCAxNnptOTYgMGMwLTguOC03LjItMTYtMTYtMTZzLTE2IDcuMi0xNiAxNmMwIDI1LjggNC4zIDQ0LjQgMTEuNyA1OS4yYzcuMiAxNC4zIDE2LjcgMjMuOSAyNC42IDMxLjdjMCAwIDAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwbC40IC40YzguMSA4LjEgMTQuMyAxNC40IDE5IDIzLjhjNC42IDkuMiA4LjMgMjIuNyA4LjMgNDQuOGMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2YzAtMjUuOC00LjMtNDQuNC0xMS43LTU5LjJjLTcuMi0xNC4zLTE2LjctMjMuOS0yNC42LTMxLjdsLS40LS40Yy04LjEtOC4xLTE0LjMtMTQuNC0xOS0yMy44QzIyNy43IDUxLjYgMjI0IDM4LjIgMjI0IDE2ek0zMiAyNTZjLTguOCAwLTE2IDcuMi0xNiAxNnM3LjIgMTYgMTYgMTZsMzUuOCAwYzUuOSA4Mi45IDU2LjUgMTUyLjcgMTI3LjMgMTg2LjRjNy42IDIxLjkgMjguNCAzNy42IDUyLjkgMzcuNmwxNDQgMGMyNC41IDAgNDUuMy0xNS43IDUyLjktMzcuNkM1MTUuNyA0NDAuNyA1NjYuMyAzNzAuOSA1NzIuMiAyODhsMzUuOCAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2bC0zNy42IDBjLTYuNi0xOC42LTI0LjMtMzItNDUuMy0zMmwtNDEwLjIgMGMtMjEgMC0zOC43IDEzLjQtNDUuMyAzMkwzMiAyNTZ6bTUwNy40LTY0Yy0xMy44LTQ2LjMtNTYuNi04MC0xMDcuNC04MHMtOTMuNiAzMy43LTEwNy40IDgwbDM0IDBjMTIuMy0yOC4zIDQwLjUtNDggNzMuMy00OHM2MSAxOS43IDczLjMgNDhsMzQgMHpNMjI1LjMgNDYzLjljLTIuOC04LjEtOC43LTE0LjctMTYuNS0xOC40Yy02MS40LTI5LjItMTA1LTkwLjEtMTA5LjMtMTYyLjJsLS42LTEwLjNjLS41LTkuMiA2LjgtMTYuOSAxNi0xNi45bDQxMC4yIDBjOS4yIDAgMTYuNSA3LjcgMTYgMTYuOWwtLjYgMTAuM2MtNC4yIDcyLjEtNDcuOCAxMzMtMTA5LjMgMTYyLjJjLTcuNyAzLjctMTMuNyAxMC4zLTE2LjUgMTguNGMtMy4zIDkuNC0xMi4yIDE2LjEtMjIuNyAxNi4xbC0xNDQgMGMtMTAuNCAwLTE5LjQtNi43LTIyLjctMTYuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const PotFood: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 25.8 4.3 44.4 11.7 59.2c7.2 14.3 16.7 23.9 24.6 31.7l.4 .4c8.1 8.1 14.3 14.4 19 23.8c4.6 9.2 8.3 22.7 8.3 44.8c0 8.8 7.2 16 16 16s16-7.2 16-16c0-25.8-4.3-44.4-11.7-59.2c-7.2-14.3-16.7-23.9-24.6-31.7l-.4-.4c-8.1-8.1-14.3-14.4-19-23.8C131.7 51.6 128 38.2 128 16zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 25.8 4.3 44.4 11.7 59.2c7.2 14.3 16.7 23.9 24.6 31.7c0 0 0 0 0 0s0 0 0 0s0 0 0 0l.4 .4c8.1 8.1 14.3 14.4 19 23.8c4.6 9.2 8.3 22.7 8.3 44.8c0 8.8 7.2 16 16 16s16-7.2 16-16c0-25.8-4.3-44.4-11.7-59.2c-7.2-14.3-16.7-23.9-24.6-31.7l-.4-.4c-8.1-8.1-14.3-14.4-19-23.8C227.7 51.6 224 38.2 224 16zM32 256c-8.8 0-16 7.2-16 16s7.2 16 16 16l35.8 0c5.9 82.9 56.5 152.7 127.3 186.4c7.6 21.9 28.4 37.6 52.9 37.6l144 0c24.5 0 45.3-15.7 52.9-37.6C515.7 440.7 566.3 370.9 572.2 288l35.8 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-37.6 0c-6.6-18.6-24.3-32-45.3-32l-410.2 0c-21 0-38.7 13.4-45.3 32L32 256zm507.4-64c-13.8-46.3-56.6-80-107.4-80s-93.6 33.7-107.4 80l34 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48l34 0zM225.3 463.9c-2.8-8.1-8.7-14.7-16.5-18.4c-61.4-29.2-105-90.1-109.3-162.2l-.6-10.3c-.5-9.2 6.8-16.9 16-16.9l410.2 0c9.2 0 16.5 7.7 16 16.9l-.6 10.3c-4.2 72.1-47.8 133-109.3 162.2c-7.7 3.7-13.7 10.3-16.5 18.4c-3.3 9.4-12.2 16.1-22.7 16.1l-144 0c-10.4 0-19.4-6.7-22.7-16.1z" />
    </Icon>
);

export default PotFood;