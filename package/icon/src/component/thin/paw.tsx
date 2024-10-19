
import { Icon } from "../../index";

/**
 * A component that renders the `paw` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paw?s=thin paw}
 * @preview ![paw](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjEyLjUgMTQ4LjNjLTQuNyAxMy45LTEzLjMgMjIuOC0yMy42IDI2LjJjLTEwLjMgMy40LTIyLjcgMS4zLTM0LjktNy4xcy0yMy4yLTIyLjctMjkuNC00MS4ycy01LjktMzYuNC0xLjItNTAuM2M0LjctMTMuOSAxMy4zLTIyLjggMjMuNi0yNi4yYzEwLjMtMy40IDIyLjctMS4zIDM0LjkgNy4xczIzLjIgMjIuNyAyOS40IDQxLjJzNS45IDM2LjQgMS4yIDUwLjN6bS0xOC42IDQxLjRjMzIuMy0xMC42IDQ2LjktNTMuOSAzMi42LTk2LjhTMTc0LjQgMjMuOCAxNDIuMSAzNC4zcy00Ni45IDUzLjktMzIuNiA5Ni44czUyLjEgNjkuMSA4NC40IDU4LjV6bS05OC4zIDU2Yy0xLjQgMTEuNC02LjUgMTkuMy0xMy40IDIzLjJjLTYuOSA0LTE2LjQgNC41LTI3LjItLjFzLTIxLjctMTMuOS0yOS42LTI3LjRzLTEwLjUtMjcuNi05LjEtMzljMS40LTExLjQgNi41LTE5LjMgMTMuNC0yMy4yYzYuOS00IDE2LjQtNC41IDI3LjIgLjFzMjEuNyAxMy45IDI5LjYgMjcuNHMxMC41IDI3LjYgOS4xIDM5em0tNS41IDM3LjFjMjQuNS0xNCAyOS4xLTUxLjcgMTAuMi04NC4xcy01NC00Ny4zLTc4LjUtMzMuM3MtMjkuMSA1MS43LTEwLjIgODQuMXM1NCA0Ny4zIDc4LjUgMzMuM3pNMjU2IDI0MGMzMy41IDAgMTIxLjMgMzAuNyAxNzEuOCAxNjYuOGMyLjkgNy43IDQuMiAxNi4yIDQuMiAyNC45bDAgNC40YzAgMTUuNC0xMi41IDI3LjktMjcuOSAyNy45Yy0xMS43IDAtMjMuMy0xLjgtMzQuNS01LjNsLTgwLjItMjUuMWMtMjEuOC02LjgtNDUuMS02LjgtNjYuOCAwbC04MC4yIDI1LjFjLTExLjIgMy41LTIyLjggNS4zLTM0LjUgNS4zQzkyLjUgNDY0IDgwIDQ1MS41IDgwIDQzNi4xbDAtNC40YzAtOC44IDEuMy0xNy4yIDQuMi0yNC45QzEzNC43IDI3MC43IDIyMi41IDI0MCAyNTYgMjQwem0wLTE2Yy00MS4zIDAtMTM0LjQgMzUuOS0xODYuOCAxNzcuMmMtMy42IDkuNy01LjIgMjAuMS01LjIgMzAuNWwwIDQuNGMwIDI0LjIgMTkuNyA0My45IDQzLjkgNDMuOWMxMy4zIDAgMjYuNi0yIDM5LjMtNmw4MC4yLTI1LjFjMTguNi01LjggMzguNi01LjggNTcuMyAwTDM2NC44IDQ3NGMxMi43IDQgMjYgNiAzOS4zIDZjMjQuMiAwIDQzLjktMTkuNyA0My45LTQzLjlsMC00LjRjMC0xMC40LTEuNi0yMC44LTUuMi0zMC41QzM5MC40IDI1OS45IDI5Ny4zIDIyNCAyNTYgMjI0em0xNjkuNS0xNy40YzcuOS0xMy41IDE4LjgtMjIuOCAyOS42LTI3LjRzMjAuMi00IDI3LjItLjFjNi45IDQgMTIuMSAxMS44IDEzLjQgMjMuMmMxLjQgMTEuNC0xLjIgMjUuNS05LjEgMzlzLTE4LjggMjIuOC0yOS42IDI3LjRzLTIwLjIgNC0yNy4yIC4xYy02LjktNC0xMi4xLTExLjgtMTMuNC0yMy4yYy0xLjQtMTEuNCAxLjItMjUuNSA5LjEtMzl6bS0xMy44LThjLTE4LjkgMzIuNC0xNC4zIDcwLjEgMTAuMiA4NC4xczU5LjctLjkgNzguNS0zMy4zczE0LjMtNzAuMS0xMC4yLTg0LjFzLTU5LjcgLjktNzguNSAzMy4zek0yOTIuNyA5Ny45YzYuMi0xOC41IDE3LjItMzIuOCAyOS40LTQxLjJzMjQuNS0xMC41IDM0LjktNy4xYzEwLjMgMy40IDE4LjkgMTIuMyAyMy42IDI2LjJjNC43IDEzLjkgNSAzMS45LTEuMiA1MC4zcy0xNy4yIDMyLjgtMjkuNCA0MS4ycy0yNC41IDEwLjUtMzQuOSA3LjFjLTEwLjMtMy40LTE4LjktMTIuMy0yMy42LTI2LjJjLTQuNy0xMy45LTUtMzEuOSAxLjItNTAuM3ptLTE1LjItNS4xYy0xNC4zIDQyLjkgLjMgODYuMiAzMi42IDk2LjhzNzAuMS0xNS42IDg0LjQtNTguNXMtLjMtODYuMi0zMi42LTk2LjhTMjkxLjggNTAgMjc3LjUgOTIuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Paw: typeof Icon = x => (
    <Icon {...x}>
        <path d="M212.5 148.3c-4.7 13.9-13.3 22.8-23.6 26.2c-10.3 3.4-22.7 1.3-34.9-7.1s-23.2-22.7-29.4-41.2s-5.9-36.4-1.2-50.3c4.7-13.9 13.3-22.8 23.6-26.2c10.3-3.4 22.7-1.3 34.9 7.1s23.2 22.7 29.4 41.2s5.9 36.4 1.2 50.3zm-18.6 41.4c32.3-10.6 46.9-53.9 32.6-96.8S174.4 23.8 142.1 34.3s-46.9 53.9-32.6 96.8s52.1 69.1 84.4 58.5zm-98.3 56c-1.4 11.4-6.5 19.3-13.4 23.2c-6.9 4-16.4 4.5-27.2-.1s-21.7-13.9-29.6-27.4s-10.5-27.6-9.1-39c1.4-11.4 6.5-19.3 13.4-23.2c6.9-4 16.4-4.5 27.2 .1s21.7 13.9 29.6 27.4s10.5 27.6 9.1 39zm-5.5 37.1c24.5-14 29.1-51.7 10.2-84.1s-54-47.3-78.5-33.3s-29.1 51.7-10.2 84.1s54 47.3 78.5 33.3zM256 240c33.5 0 121.3 30.7 171.8 166.8c2.9 7.7 4.2 16.2 4.2 24.9l0 4.4c0 15.4-12.5 27.9-27.9 27.9c-11.7 0-23.3-1.8-34.5-5.3l-80.2-25.1c-21.8-6.8-45.1-6.8-66.8 0l-80.2 25.1c-11.2 3.5-22.8 5.3-34.5 5.3C92.5 464 80 451.5 80 436.1l0-4.4c0-8.8 1.3-17.2 4.2-24.9C134.7 270.7 222.5 240 256 240zm0-16c-41.3 0-134.4 35.9-186.8 177.2c-3.6 9.7-5.2 20.1-5.2 30.5l0 4.4c0 24.2 19.7 43.9 43.9 43.9c13.3 0 26.6-2 39.3-6l80.2-25.1c18.6-5.8 38.6-5.8 57.3 0L364.8 474c12.7 4 26 6 39.3 6c24.2 0 43.9-19.7 43.9-43.9l0-4.4c0-10.4-1.6-20.8-5.2-30.5C390.4 259.9 297.3 224 256 224zm169.5-17.4c7.9-13.5 18.8-22.8 29.6-27.4s20.2-4 27.2-.1c6.9 4 12.1 11.8 13.4 23.2c1.4 11.4-1.2 25.5-9.1 39s-18.8 22.8-29.6 27.4s-20.2 4-27.2 .1c-6.9-4-12.1-11.8-13.4-23.2c-1.4-11.4 1.2-25.5 9.1-39zm-13.8-8c-18.9 32.4-14.3 70.1 10.2 84.1s59.7-.9 78.5-33.3s14.3-70.1-10.2-84.1s-59.7 .9-78.5 33.3zM292.7 97.9c6.2-18.5 17.2-32.8 29.4-41.2s24.5-10.5 34.9-7.1c10.3 3.4 18.9 12.3 23.6 26.2c4.7 13.9 5 31.9-1.2 50.3s-17.2 32.8-29.4 41.2s-24.5 10.5-34.9 7.1c-10.3-3.4-18.9-12.3-23.6-26.2c-4.7-13.9-5-31.9 1.2-50.3zm-15.2-5.1c-14.3 42.9 .3 86.2 32.6 96.8s70.1-15.6 84.4-58.5s-.3-86.2-32.6-96.8S291.8 50 277.5 92.9z" />
    </Icon>
);

export default Paw;