
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coin-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-vertical?s=sharp-duotone-solid coin-vertical}
 * @preview ![coin-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDY0LjUgNTEyIDE0NCA1MTJzMTQ0LTExNC42IDE0NC0yNTZTMjIzLjUgMCAxNDQgMFMwIDExNC42IDAgMjU2em00MCAwYzAtNDcuMiA3LjYtOTEuNCAyMS0xMjVjNi43LTE2LjcgMTUuNC0zMi40IDI2LjgtNDQuNEM5OS4zIDc0LjUgMTE1LjUgNjQgMTM2IDY0czM2LjcgMTAuNSA0OC4yIDIyLjZjMTEuNCAxMiAyMC4xIDI3LjcgMjYuOCA0NC40YzEzLjQgMzMuNiAyMSA3Ny44IDIxIDEyNXMtNy42IDkxLjQtMjEgMTI1Yy02LjcgMTYuNy0xNS40IDMyLjQtMjYuOCA0NC40QzE3Mi43IDQzNy41IDE1Ni41IDQ0OCAxMzYgNDQ4cy0zNi43LTEwLjUtNDguMi0yMi42Qzc2LjUgNDEzLjQgNjcuNyAzOTcuNyA2MSAzODFjLTEzLjQtMzMuNi0yMS03Ny44LTIxLTEyNXptMzIgMGMwIDg4LjQgMjguNyAxNjAgNjQgMTYwczY0LTcxLjYgNjQtMTYwcy0yOC43LTE2MC02NC0xNjBzLTY0IDcxLjYtNjQgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzMwLjYgNDhDMzA5LjYgMTcuOCAyODMuOCAwIDI1NiAwTDIyNi4xIDBjMTUuNiAxMy4yIDI5LjMgMjkuNyA0MC45IDQ4bDYzLjcgMHpNMzEzLjMgMTc2bDY0LjMgMGMtNi0zNi4yLTE1LjktNjguOS0yOC43LTk2bC02NC43IDBjMTMuMiAyOC40IDIzIDYwLjkgMjkgOTZ6bTY4LjQgMTI4YzEuNS0xNS41IDIuMi0zMS42IDIuMi00OHMtLjgtMzIuNS0yLjItNDhsLTY0LjEgMGMxLjYgMTUuNyAyLjQgMzEuNyAyLjQgNDhzLS44IDMyLjMtMi40IDQ4bDY0LjEgMHpNMjg0LjMgNDMybDY0LjcgMGMxMi44LTI3LjEgMjIuNy01OS44IDI4LjctOTZsLTY0LjMgMGMtNiAzNS4xLTE1LjkgNjcuNi0yOSA5NnpNMjY3IDQ2NGMtMTEuNSAxOC4zLTI1LjIgMzQuOC00MC45IDQ4bDI5LjkgMGMyNy45IDAgNTMuNi0xNy44IDc0LjYtNDhMMjY3IDQ2NHpNMTM2IDQ0OGMyMC41IDAgMzYuNy0xMC41IDQ4LjItMjIuNmMxMS40LTEyIDIwLjEtMjcuNyAyNi44LTQ0LjRjMTMuNC0zMy42IDIxLTc3LjggMjEtMTI1cy03LjYtOTEuNC0yMS0xMjVjLTYuNy0xNi43LTE1LjQtMzIuNC0yNi44LTQ0LjRDMTcyLjcgNzQuNSAxNTYuNSA2NCAxMzYgNjRzLTM2LjcgMTAuNS00OC4yIDIyLjZDNzYuNSA5OC42IDY3LjcgMTE0LjMgNjEgMTMxYy0xMy40IDMzLjYtMjEgNzcuOC0yMSAxMjVzNy42IDkxLjQgMjEgMTI1YzYuNyAxNi43IDE1LjQgMzIuNCAyNi44IDQ0LjRDOTkuMyA0MzcuNSAxMTUuNSA0NDggMTM2IDQ0OHptNjQtMTkyYzAgODguNC0yOC43IDE2MC02NCAxNjBzLTY0LTcxLjYtNjQtMTYwczI4LjctMTYwIDY0LTE2MHM2NCA3MS42IDY0IDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CoinVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 64.5 512 144 512s144-114.6 144-256S223.5 0 144 0S0 114.6 0 256zm40 0c0-47.2 7.6-91.4 21-125c6.7-16.7 15.4-32.4 26.8-44.4C99.3 74.5 115.5 64 136 64s36.7 10.5 48.2 22.6c11.4 12 20.1 27.7 26.8 44.4c13.4 33.6 21 77.8 21 125s-7.6 91.4-21 125c-6.7 16.7-15.4 32.4-26.8 44.4C172.7 437.5 156.5 448 136 448s-36.7-10.5-48.2-22.6C76.5 413.4 67.7 397.7 61 381c-13.4-33.6-21-77.8-21-125zm32 0c0 88.4 28.7 160 64 160s64-71.6 64-160s-28.7-160-64-160s-64 71.6-64 160z" />
            <path d="M330.6 48C309.6 17.8 283.8 0 256 0L226.1 0c15.6 13.2 29.3 29.7 40.9 48l63.7 0zM313.3 176l64.3 0c-6-36.2-15.9-68.9-28.7-96l-64.7 0c13.2 28.4 23 60.9 29 96zm68.4 128c1.5-15.5 2.2-31.6 2.2-48s-.8-32.5-2.2-48l-64.1 0c1.6 15.7 2.4 31.7 2.4 48s-.8 32.3-2.4 48l64.1 0zM284.3 432l64.7 0c12.8-27.1 22.7-59.8 28.7-96l-64.3 0c-6 35.1-15.9 67.6-29 96zM267 464c-11.5 18.3-25.2 34.8-40.9 48l29.9 0c27.9 0 53.6-17.8 74.6-48L267 464zM136 448c20.5 0 36.7-10.5 48.2-22.6c11.4-12 20.1-27.7 26.8-44.4c13.4-33.6 21-77.8 21-125s-7.6-91.4-21-125c-6.7-16.7-15.4-32.4-26.8-44.4C172.7 74.5 156.5 64 136 64s-36.7 10.5-48.2 22.6C76.5 98.6 67.7 114.3 61 131c-13.4 33.6-21 77.8-21 125s7.6 91.4 21 125c6.7 16.7 15.4 32.4 26.8 44.4C99.3 437.5 115.5 448 136 448zm64-192c0 88.4-28.7 160-64 160s-64-71.6-64-160s28.7-160 64-160s64 71.6 64 160z" />
    </Icon>
);

export default CoinVertical;