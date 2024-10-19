
import { Icon } from "../../index";

/**
 * A component that renders the `optin-monster` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/optin-monster?s=brands optin-monster}
 * @preview ![optin-monster](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTcyLjYgNDIxLjRjNS42LTkuNSA0LjctMTUuMi01LjQtMTEuNi0zLTQuOS03LTkuNS0xMS4xLTEzLjggMi45LTkuNy0uNy0xNC4yLTEwLjgtOS4yLTQuNi0zLjItMTAuMy02LjUtMTUuOS05LjIgMC0xNS4xLTExLjYtMTEuNi0xNy42LTUuNy0xMC40LTEuNS0xOC43LS4zLTI2LjggNS43LjMtNi41LjMtMTMgLjMtMTkuNyAxMi42IDAgNDAuMi0xMSA0NS45LTM2LjIgMS40LTYuOCAxLjYtMTMuOC0uMy0yMS45LTMtMTMuNS0xNC4zLTIxLjMtMjUuMS0yNS43LS44LTUuOS03LjYtMTQuMy0xNC45LTE1LjlzLTEyLjQgNC45LTE0LjEgMTAuM2MtOC41IDAtMTkuMiAyLjgtMjEuMSA4LjQtNS40LS41LTExLjEtMS40LTE2LjgtMS45IDIuNy0xLjkgNS40LTMuNSA4LjQtNC42IDUuNC05LjIgMTQuNi0xMS40IDI1LjctMTEuNlYyNTZjMTkuNS0uNSA0My01LjkgNTMuOC0xOC4xIDEyLjctMTMuOCAxNC42LTM3LjMgMTIuNC01NS4xLTIuNC0xNy4zLTkuNy0zNy42LTI0LjYtNDguMS04LjQtNS45LTIxLjYtLjgtMjIuNyA5LjUtMi4yIDE5LjYgMS4yIDMwLTM4LjYgMjUuMS0xMC4zLTIzLjgtMjQuNi00NC42LTQyLjctNjBDMzQxIDQ5LjYgMjQyLjkgNTUuNSAxNjYuNCA3MS43YzE5LjcgNC42IDQxLjEgOC42IDU5LjcgMTYuNS0yNi4yIDIuNC01Mi43IDExLjMtNzYuMiAyMy4yLTMyLjggMTctNDQgMjkuOS01Ni43IDQyLjQgMTQuOS0yLjIgMjguOS01LjEgNDMuOC0zLjgtOS43IDUuNC0xOC40IDEyLjItMjYuNSAyMC0yNS44LjktMjMuOC01LjMtMjYuMi0yNS45LTEuMS0xMC41LTE0LjMtMTUuNC0yMi43LTkuNy0yOC4xIDE5LjktMzMuNSA3OS45LTEyLjIgMTAzLjUgMTAuOCAxMi4yIDM1LjEgMTcuMyA1NC45IDE3LjgtLjMgMS4xLS4zIDEuOS0uMyAyLjcgMTAuOC41IDE5LjUgMi43IDI0LjYgMTEuNiAzIDEuMSA1LjcgMi43IDguMSA0LjYtNS40LjUtMTEuMSAxLjQtMTYuNSAxLjktMy4zLTYuNi0xMy43LTguMS0yMS4xLTguMS0xLjYtNS43LTYuNS0xMi4yLTE0LjEtMTAuMy02LjggMS45LTE0LjEgMTAtMTQuOSAxNS45LTIyLjUgOS41LTMwLjEgMjYuOC0yNS4xIDQ3LjYgNS4zIDI0LjggMzMgMzYuMiA0NS45IDM2LjJ2MTkuN2MtNi42LTUtMTQuMy03LjUtMjYuOC01LjctNS41LTUuNS0xNy4zLTEwLjEtMTcuMyA1LjctNS45IDIuNy0xMS40IDUuOS0xNS45IDkuMi05LjgtNC45LTEzLjYtMS43LTExLjEgOS4yLTQuMSA0LjMtNy44IDguNi0xMS4xIDEzLjgtMTAuMi0zLjctMTEgMi4yLTUuNCAxMS42LTEuMSAzLjUtMS42IDctMS45IDEwLjgtLjUgMzEuNiA0NC42IDY0IDczLjUgNjUuMSAxNy4zLjUgMzQuNi04LjQgNDMtMjMuNSAxMTMuMiA0LjkgMjI2LjcgNC4xIDM0MC4yIDAgOC4xIDE1LjEgMjUuNCAyNC4zIDQyLjcgMjMuNSAyOS4yLTEuMSA3NC4zLTMzLjUgNzMuNS02NS4xLjItMy43LS43LTcuMi0xLjctMTAuN3ptLTczLjgtMjU0YzEuMS0zIDIuNC04LjQgMi40LTE0LjYgMC01LjkgNi44LTguMSAxNC4xLS44IDExLjEgMTEuNiAxNC45IDQwLjUgMTMuOCA1MS4xLTQuMS0xMy42LTEzLTI5LTMwLjMtMzUuN3ptLTQuNiA2LjdjMTkuNSA2LjIgMjguNiAyNy42IDI5LjcgNDguOS0xLjEgMi43LTMgNS40LTQuOSA3LjYtNS43IDUuOS0xNS40IDEwLTI2LjIgMTIuMiA0LjMtMjEuMy4zLTQ3LjMtMTIuNy02MyA0LjktLjggMTAuOS0yLjQgMTQuMS01Ljd6bS0yNC4xIDYuOGMxMy44IDExLjkgMjAgMzkuMiAxNC4xIDYzLjUtNC4xLjUtOC4xLjgtMTEuNi44LTEuOS0yMS45LTYuOC00NC0xNC4zLTY0LjYgMy43LjMgOC4xLjMgMTEuOC4zek00Ny41IDIwM2MtMS4xLTEwLjUgMi40LTM5LjUgMTMuOC01MS4xIDctNy4zIDE0LjEtNS4xIDE0LjEuOCAwIDYuMiAxLjQgMTEuNiAyLjQgMTQuNi0xNy4zIDYuOC0yNi4yIDIyLjItMzAuMyAzNS43em05LjcgMjcuNmMtMS45LTIuMi0zLjUtNC45LTQuOS03LjYgMS40LTIxLjMgMTAuMy00Mi43IDI5LjctNDguOSAzLjIgMy4yIDkuMiA0LjkgMTQuMSA1LjctMTMgMTUuNy0xNyA0MS42LTEyLjcgNjMtMTAuOC0yLjItMjAuNS02LTI2LjItMTIuMnptNDcuOSAxNC42Yy00LjEgMC04LjEtLjMtMTIuNy0uOC00LjYtMTguNi0xLjktMzguOSA1LjQtNTN2LjNsMTIuMi01LjFjNC45LTEuOSA5LjctMy44IDE0LjktNC45LTEwLjcgMTkuNy0xNy40IDQxLjMtMTkuOCA2My41em0xODQtMTYyLjdjNDEuOSAwIDc2LjIgMzQgNzYuMiA3NS45IDAgNDIuMi0zNC4zIDc2LjItNzYuMiA3Ni4ycy03Ni4yLTM0LTc2LjItNzYuMmMwLTQxLjggMzQuMy03NS45IDc2LjItNzUuOXptMTE1LjYgMTc0LjNjLS4zIDE3LjgtNyA0OC45LTIzIDU3LTEzLjIgNi42LTYuNS03LjUtMTYuNS01OC4xIDEzLjMuMyAyNi42LjMgMzkuNSAxLjF6bS01NC0xLjZjLjggNC45IDMuOCA0MC4zLTEuNiA0MS45LTExLjYgMy41LTQwIDQuMy01MS4xLTEuMS00LjEtMy00LjYtMzUuOS00LjMtNDEuMXYuM2MxOC45LS4zIDM4LjEtLjMgNTcgMHpNMjc4LjMgMzA5Yy0xMyAzLjUtNDEuNiA0LjEtNTQuNi0xLjYtNi41LTIuNy0zLjgtNDIuNC0xLjktNTEuNiAxOS4yLS41IDM4LjQtLjUgNTcuOC0uOHYuM2MxLjEgOC4zIDMuMyA1MS4yLTEuMyA1My43em0tMTA2LjUtNTEuMWMxMi4yLS44IDI0LjYtMS40IDM2LjgtMS42LTIuNCAxNS40LTMgNDMuNS00LjkgNTIuMi0xLjEgNi44LTQuMyA2LjgtOS43IDQuMy0yMS45LTkuOC0yNy42LTM1LjItMjIuMi01NC45em0tMzUuNCAzMS4zYzcuOC0xLjEgMTUuNy0xLjkgMjMuNS0yLjcgMS42IDYuMiAzLjggMTEuOSA3IDE3LjYgMTAgMTcgNDQgMzUuNyA0NS4xIDcgNi4yIDE0LjkgNDAuOCAxMi4yIDU0LjkgMTAuOCAxNS43LTEuNCAyMy44LTEuNCAyNi44LTE0LjMgMTIuNCA0LjMgMzAuOCA0LjEgNDQgMyAxMS4zLS44IDIwLjgtLjUgMjQuNi04LjkgMS4xIDUuMSAxLjkgMTEuNiA0LjYgMTYuOCAxMC44IDIxLjMgMzcuMyAxLjQgNDYuOC0zMS42IDguNi44IDE3LjYgMS45IDI2LjUgMi43LS40IDEuMy0zLjggNy4zIDcuMyAxMS42LTQ3LjYgNDctOTUuNyA4Ny44LTE2My4yIDEwNy02My4yLTIwLjgtMTEyLjEtNTkuNS0xNTUuOS0xMDYuNSA5LjYtMy40IDEwLjQtOC44IDgtMTIuNXptLTIxLjYgMTcyLjVjLTMuOCAxNy44LTIxLjkgMjkuNy0zOS43IDI4LjktMTkuMi0uOC00Ni41LTE3LTU5LjItMzYuNS0yLjctMzEuMSA0My44LTYxLjMgNjYuMi01NC42IDE0LjkgNC4zIDI3LjggMzAuOCAzMy41IDU0IDAgMy0uMyA1LjctLjggOC4yem0tOC43LTY2Yy0uNS0xMy41LS41LTI3LS4zLTQwLjVoLjNjMi43LTEuNiA1LjctMy44IDcuOC02LjUgNi41LTEuNiAxMy01LjEgMTUuMS05LjIgMy4zLTcuMS03LTcuNS01LjQtMTIuNCAyLjctMS4xIDUuNy0yLjIgNy44LTMuNSAyOS4yIDI5LjIgNTguNiA1Ni41IDk3LjMgNzctMzYuOCAxMS4zLTcyLjQgMjcuNi0xMDUuOSA0Ny0xLjItMTguNi03LjctMzUuOS0xNi43LTUxLjl6bTMzNy42IDY0LjZjLTEwMyAzLjUtMjA2LjIgNC4xLTMwOS40IDAgMCAuMyAwIC4zLS4zLjN2LS4zaC4zYzM1LjEtMjEuNiA3Mi4yLTM5LjIgMTEyLjQtNTAuOCAxMS42IDUuMSAyMyA5LjUgMzQuOSAxMy4yIDIuMi44IDIuMi44IDQuMyAwIDE0LjMtNC4xIDI4LjQtOS4yIDQyLjItMTUuNCA0MS41IDExLjcgNzguOCAzMS43IDExNS42IDUzem0xMC41LTEyLjRjLTM1LjktMTkuNS03My0zNS45LTExMS45LTQ3LjYgMzguMS0yMCA3MS45LTQ3LjMgMTAzLjUtNzYuNyAyLjIgMS40IDQuNiAyLjQgNy42IDMuMiAwIC44LjMgMS45LjUgMi40LTQuNiAyLjctNy44IDYuMi01LjkgMTAuMyAyLjIgMy44IDguNiA3LjYgMTUuMSA4LjkgMi40IDIuNyA1LjEgNS4xIDguMSA2LjggMCAxMy44LS4zIDI3LjYtLjggNDEuM2wuMy0uM2MtOS4zIDE1LjktMTUuNSAzNy0xNi41IDUxLjd6bTEwNS45IDYuMmMtMTIuNyAxOS41LTQwIDM1LjctNTkuMiAzNi41LTE5LjMuOS00MC41LTEzLjItNDAuNS0zNyA1LjctMjMuMiAxOC45LTQ5LjcgMzMuNS01NCAyMi43LTYuOSA2OS4yIDIzLjQgNjYuMiA1NC41ek0zNzIuOSA3NS4yYy0zLjgtNzIuMS0xMDAuOC03OS43LTEyNi0yMy41IDQ0LjYtMjQuMyA5MC4zLTE1LjcgMTI2IDIzLjV6TTc0LjggNDA3LjFjLTE1LjcgMS42LTQ5LjUgMjUuNC00OS41IDQzLjIgMCAxMS42IDE1LjcgMTkuNSAzMi4yIDE0LjkgMTIuMi0zLjIgMzEuMS0xNy42IDM1LjktMjcuMyA2LTExLjYtMy43LTMyLjctMTguNi0zMC44em0yMTUuOS0xNzYuMmMyOC42IDAgNTEuOS0yMS42IDUxLjktNDguNCAwLTM2LjEtNDAuNS01OC4xLTcyLjItNDQuMyA5LjUgMyAxNi41IDExLjYgMTYuNSAyMS42IDAgMjMuMy0zMy4zIDMyLTQ2LjUgMTEuMy03LjMgMzQuMSAxOS40IDU5LjggNTAuMyA1OS44ek02OCA0NzQuMWMuNSA2LjUgMTIuMiAxMi43IDIxLjYgOS41IDYuOC0yLjcgMTQuNi0xMC41IDE3LjMtMTYuMiAzLTctMS4xLTIwLTkuNy0xOC40LTguOSAxLjYtMjkuNyAxNi43LTI5LjIgMjUuMXptNDMzLjItNjdjLTE0LjktMS45LTI0LjYgMTkuMi0xOC45IDMwLjggNC45IDkuNyAyNC4xIDI0LjEgMzYuMiAyNy4zIDE2LjUgNC42IDMyLjItMy4yIDMyLjItMTQuOSAwLTE3LjgtMzMuOC00MS42LTQ5LjUtNDMuMnpNNDc4LjggNDQ5Yy04LjQtMS42LTEyLjQgMTEuMy05LjUgMTguNCAyLjQgNS43IDEwLjMgMTMuNSAxNy4zIDE2LjIgOS4yIDMuMiAyMS4xLTMgMjEuMy05LjUuOS04LjQtMjAuMi0yMy41LTI5LjEtMjUuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const OptinMonster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M572.6 421.4c5.6-9.5 4.7-15.2-5.4-11.6-3-4.9-7-9.5-11.1-13.8 2.9-9.7-.7-14.2-10.8-9.2-4.6-3.2-10.3-6.5-15.9-9.2 0-15.1-11.6-11.6-17.6-5.7-10.4-1.5-18.7-.3-26.8 5.7.3-6.5.3-13 .3-19.7 12.6 0 40.2-11 45.9-36.2 1.4-6.8 1.6-13.8-.3-21.9-3-13.5-14.3-21.3-25.1-25.7-.8-5.9-7.6-14.3-14.9-15.9s-12.4 4.9-14.1 10.3c-8.5 0-19.2 2.8-21.1 8.4-5.4-.5-11.1-1.4-16.8-1.9 2.7-1.9 5.4-3.5 8.4-4.6 5.4-9.2 14.6-11.4 25.7-11.6V256c19.5-.5 43-5.9 53.8-18.1 12.7-13.8 14.6-37.3 12.4-55.1-2.4-17.3-9.7-37.6-24.6-48.1-8.4-5.9-21.6-.8-22.7 9.5-2.2 19.6 1.2 30-38.6 25.1-10.3-23.8-24.6-44.6-42.7-60C341 49.6 242.9 55.5 166.4 71.7c19.7 4.6 41.1 8.6 59.7 16.5-26.2 2.4-52.7 11.3-76.2 23.2-32.8 17-44 29.9-56.7 42.4 14.9-2.2 28.9-5.1 43.8-3.8-9.7 5.4-18.4 12.2-26.5 20-25.8.9-23.8-5.3-26.2-25.9-1.1-10.5-14.3-15.4-22.7-9.7-28.1 19.9-33.5 79.9-12.2 103.5 10.8 12.2 35.1 17.3 54.9 17.8-.3 1.1-.3 1.9-.3 2.7 10.8.5 19.5 2.7 24.6 11.6 3 1.1 5.7 2.7 8.1 4.6-5.4.5-11.1 1.4-16.5 1.9-3.3-6.6-13.7-8.1-21.1-8.1-1.6-5.7-6.5-12.2-14.1-10.3-6.8 1.9-14.1 10-14.9 15.9-22.5 9.5-30.1 26.8-25.1 47.6 5.3 24.8 33 36.2 45.9 36.2v19.7c-6.6-5-14.3-7.5-26.8-5.7-5.5-5.5-17.3-10.1-17.3 5.7-5.9 2.7-11.4 5.9-15.9 9.2-9.8-4.9-13.6-1.7-11.1 9.2-4.1 4.3-7.8 8.6-11.1 13.8-10.2-3.7-11 2.2-5.4 11.6-1.1 3.5-1.6 7-1.9 10.8-.5 31.6 44.6 64 73.5 65.1 17.3.5 34.6-8.4 43-23.5 113.2 4.9 226.7 4.1 340.2 0 8.1 15.1 25.4 24.3 42.7 23.5 29.2-1.1 74.3-33.5 73.5-65.1.2-3.7-.7-7.2-1.7-10.7zm-73.8-254c1.1-3 2.4-8.4 2.4-14.6 0-5.9 6.8-8.1 14.1-.8 11.1 11.6 14.9 40.5 13.8 51.1-4.1-13.6-13-29-30.3-35.7zm-4.6 6.7c19.5 6.2 28.6 27.6 29.7 48.9-1.1 2.7-3 5.4-4.9 7.6-5.7 5.9-15.4 10-26.2 12.2 4.3-21.3.3-47.3-12.7-63 4.9-.8 10.9-2.4 14.1-5.7zm-24.1 6.8c13.8 11.9 20 39.2 14.1 63.5-4.1.5-8.1.8-11.6.8-1.9-21.9-6.8-44-14.3-64.6 3.7.3 8.1.3 11.8.3zM47.5 203c-1.1-10.5 2.4-39.5 13.8-51.1 7-7.3 14.1-5.1 14.1.8 0 6.2 1.4 11.6 2.4 14.6-17.3 6.8-26.2 22.2-30.3 35.7zm9.7 27.6c-1.9-2.2-3.5-4.9-4.9-7.6 1.4-21.3 10.3-42.7 29.7-48.9 3.2 3.2 9.2 4.9 14.1 5.7-13 15.7-17 41.6-12.7 63-10.8-2.2-20.5-6-26.2-12.2zm47.9 14.6c-4.1 0-8.1-.3-12.7-.8-4.6-18.6-1.9-38.9 5.4-53v.3l12.2-5.1c4.9-1.9 9.7-3.8 14.9-4.9-10.7 19.7-17.4 41.3-19.8 63.5zm184-162.7c41.9 0 76.2 34 76.2 75.9 0 42.2-34.3 76.2-76.2 76.2s-76.2-34-76.2-76.2c0-41.8 34.3-75.9 76.2-75.9zm115.6 174.3c-.3 17.8-7 48.9-23 57-13.2 6.6-6.5-7.5-16.5-58.1 13.3.3 26.6.3 39.5 1.1zm-54-1.6c.8 4.9 3.8 40.3-1.6 41.9-11.6 3.5-40 4.3-51.1-1.1-4.1-3-4.6-35.9-4.3-41.1v.3c18.9-.3 38.1-.3 57 0zM278.3 309c-13 3.5-41.6 4.1-54.6-1.6-6.5-2.7-3.8-42.4-1.9-51.6 19.2-.5 38.4-.5 57.8-.8v.3c1.1 8.3 3.3 51.2-1.3 53.7zm-106.5-51.1c12.2-.8 24.6-1.4 36.8-1.6-2.4 15.4-3 43.5-4.9 52.2-1.1 6.8-4.3 6.8-9.7 4.3-21.9-9.8-27.6-35.2-22.2-54.9zm-35.4 31.3c7.8-1.1 15.7-1.9 23.5-2.7 1.6 6.2 3.8 11.9 7 17.6 10 17 44 35.7 45.1 7 6.2 14.9 40.8 12.2 54.9 10.8 15.7-1.4 23.8-1.4 26.8-14.3 12.4 4.3 30.8 4.1 44 3 11.3-.8 20.8-.5 24.6-8.9 1.1 5.1 1.9 11.6 4.6 16.8 10.8 21.3 37.3 1.4 46.8-31.6 8.6.8 17.6 1.9 26.5 2.7-.4 1.3-3.8 7.3 7.3 11.6-47.6 47-95.7 87.8-163.2 107-63.2-20.8-112.1-59.5-155.9-106.5 9.6-3.4 10.4-8.8 8-12.5zm-21.6 172.5c-3.8 17.8-21.9 29.7-39.7 28.9-19.2-.8-46.5-17-59.2-36.5-2.7-31.1 43.8-61.3 66.2-54.6 14.9 4.3 27.8 30.8 33.5 54 0 3-.3 5.7-.8 8.2zm-8.7-66c-.5-13.5-.5-27-.3-40.5h.3c2.7-1.6 5.7-3.8 7.8-6.5 6.5-1.6 13-5.1 15.1-9.2 3.3-7.1-7-7.5-5.4-12.4 2.7-1.1 5.7-2.2 7.8-3.5 29.2 29.2 58.6 56.5 97.3 77-36.8 11.3-72.4 27.6-105.9 47-1.2-18.6-7.7-35.9-16.7-51.9zm337.6 64.6c-103 3.5-206.2 4.1-309.4 0 0 .3 0 .3-.3.3v-.3h.3c35.1-21.6 72.2-39.2 112.4-50.8 11.6 5.1 23 9.5 34.9 13.2 2.2.8 2.2.8 4.3 0 14.3-4.1 28.4-9.2 42.2-15.4 41.5 11.7 78.8 31.7 115.6 53zm10.5-12.4c-35.9-19.5-73-35.9-111.9-47.6 38.1-20 71.9-47.3 103.5-76.7 2.2 1.4 4.6 2.4 7.6 3.2 0 .8.3 1.9.5 2.4-4.6 2.7-7.8 6.2-5.9 10.3 2.2 3.8 8.6 7.6 15.1 8.9 2.4 2.7 5.1 5.1 8.1 6.8 0 13.8-.3 27.6-.8 41.3l.3-.3c-9.3 15.9-15.5 37-16.5 51.7zm105.9 6.2c-12.7 19.5-40 35.7-59.2 36.5-19.3.9-40.5-13.2-40.5-37 5.7-23.2 18.9-49.7 33.5-54 22.7-6.9 69.2 23.4 66.2 54.5zM372.9 75.2c-3.8-72.1-100.8-79.7-126-23.5 44.6-24.3 90.3-15.7 126 23.5zM74.8 407.1c-15.7 1.6-49.5 25.4-49.5 43.2 0 11.6 15.7 19.5 32.2 14.9 12.2-3.2 31.1-17.6 35.9-27.3 6-11.6-3.7-32.7-18.6-30.8zm215.9-176.2c28.6 0 51.9-21.6 51.9-48.4 0-36.1-40.5-58.1-72.2-44.3 9.5 3 16.5 11.6 16.5 21.6 0 23.3-33.3 32-46.5 11.3-7.3 34.1 19.4 59.8 50.3 59.8zM68 474.1c.5 6.5 12.2 12.7 21.6 9.5 6.8-2.7 14.6-10.5 17.3-16.2 3-7-1.1-20-9.7-18.4-8.9 1.6-29.7 16.7-29.2 25.1zm433.2-67c-14.9-1.9-24.6 19.2-18.9 30.8 4.9 9.7 24.1 24.1 36.2 27.3 16.5 4.6 32.2-3.2 32.2-14.9 0-17.8-33.8-41.6-49.5-43.2zM478.8 449c-8.4-1.6-12.4 11.3-9.5 18.4 2.4 5.7 10.3 13.5 17.3 16.2 9.2 3.2 21.1-3 21.3-9.5.9-8.4-20.2-23.5-29.1-25.1z" />
    </Icon>
);

export default OptinMonster;