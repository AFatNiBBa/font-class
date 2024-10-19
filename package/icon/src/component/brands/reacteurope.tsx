
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `reacteurope` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/reacteurope?s=brands reacteurope}
 * @preview ![reacteurope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTAuNiAyMTEuNzRsNS44LTQuMSA1LjggNC4xLTIuMS02LjggNS43LTQuMy03LjEtLjEtMi4zLTYuOC0yLjMgNi44LTcuMi4xIDUuNyA0LjN6bTYzLjcgMGw1LjgtNC4xIDUuOCA0LjEtMi4xLTYuOCA1LjctNC4zLTcuMi0uMS0yLjMtNi44LTIuMyA2LjgtNy4yLjEgNS43IDQuM3ptLTkxLjMgNTAuNWgtMy40Yy00LjggMC0zLjggNC0zLjggMTIuMSAwIDQuNy0yLjMgNi4xLTUuOCA2LjFzLTUuOC0xLjQtNS44LTYuMXYtMzYuNmMwLTQuNyAyLjMtNi4xIDUuOC02LjFzNS44IDEuNCA1LjggNi4xYzAgNy4yLS43IDEwLjUgMy44IDEwLjVoMy40YzQuNy0uMSAzLjgtMy45IDMuOC0xMi4zIDAtOS45LTYuNy0xNC4xLTE2LjgtMTQuMWgtLjJjLTEwLjEgMC0xNi44IDQuMi0xNi44IDE0LjFWMjc2YzAgMTAuNCA2LjcgMTQuMSAxNi44IDE0LjFoLjJjMTAuMSAwIDE2LjgtMy44IDE2LjgtMTQuMSAwLTkuODYgMS4xLTEzLjc2LTMuOC0xMy43NnptLTgwLjcgMTcuNGgtMTQuN3YtMTkuM0gxMzljMi41IDAgMy44LTEuMyAzLjgtMy44di0yLjFjMC0yLjUtMS4zLTMuOC0zLjgtMy44aC0xMS40di0xOC4zSDE0MmMyLjUgMCAzLjgtMS4zIDMuOC0zLjh2LTIuMWMwLTIuNS0xLjMtMy44LTMuOC0zLjhoLTIxLjdjLTIuNC0uMS0zLjcgMS4zLTMuNyAzLjh2NTkuMWMwIDIuNSAxLjMgMy44IDMuOCAzLjhoMjEuOWMyLjUgMCAzLjgtMS4zIDMuOC0zLjh2LTIuMWMwLTIuNS0xLjMtMy44LTMuOC0zLjh6bS00Mi0xOC41YzQuNi0yIDcuMy02IDcuMy0xMi40di0xMS45YzAtMTAuMS02LjctMTQuMS0xNi44LTE0LjFINzcuNGMtMi41IDAtMy44IDEuMy0zLjggMy44djU5LjFjMCAyLjUgMS4zIDMuOCAzLjggMy44aDMuNGMyLjUgMCAzLjgtMS4zIDMuOC0zLjh2LTIyLjloNS42bDcuNCAyMy41YTQuMSA0LjEgMCAwIDAgNC4zIDMuMmgzLjNjMi44IDAgNC0xLjggMy4yLTQuNHptLTMuOC0xNGMwIDQuOC0yLjUgNi4xLTYuMSA2LjFoLTUuOHYtMjAuOWg1LjhjMy42IDAgNi4xIDEuMyA2LjEgNi4xek0xNzYgMjI2YTMuODIgMy44MiAwIDAgMC00LjItMy40aC02LjlhMy42OCAzLjY4IDAgMCAwLTQgMy40bC0xMSA1OS4yYy0uNSAyLjcuOSA0LjEgMy40IDQuMWgzYTMuNzQgMy43NCAwIDAgMCA0LjEtMy41bDEuOC0xMS4zaDEyLjJsMS44IDExLjNhMy43NCAzLjc0IDAgMCAwIDQuMSAzLjVoMy41YzIuNiAwIDMuOS0xLjQgMy40LTQuMXptLTEyLjMgMzkuM2w0LjctMjkuNyA0LjcgMjkuN3ptODkuMyAyMC4ydi01My4yaDcuNWMyLjUgMCAzLjgtMS4zIDMuOC0zLjh2LTIuMWMwLTIuNS0xLjMtMy44LTMuOC0zLjhoLTI1LjhjLTIuNSAwLTMuOCAxLjMtMy44IDMuOHYyLjFjMCAyLjUgMS4zIDMuOCAzLjggMy44aDcuM3Y1My4yYzAgMi41IDEuMyAzLjggMy44IDMuOGgzLjRjMi41LjA0IDMuOC0xLjMgMy44LTMuNzZ6bTI0OC0uOGgtMTkuNFYyNThoMTYuMWExLjg5IDEuODkgMCAwIDAgMi0ydi0uOGExLjg5IDEuODkgMCAwIDAtMi0yaC0xNi4xdi0yNS44aDE5LjFhMS44OSAxLjg5IDAgMCAwIDItMnYtLjhhMS43NyAxLjc3IDAgMCAwLTItMS45aC0yMi4yYTEuNjIgMS42MiAwIDAgMC0yIDEuOHY2M2ExLjgxIDEuODEgMCAwIDAgMiAxLjlINTAxYTEuODEgMS44MSAwIDAgMCAyLTEuOXYtLjhhMS44NCAxLjg0IDAgMCAwLTItMS45NnptLTkzLjEtNjIuOWgtLjhjLTEwLjEgMC0xNS4zIDQuNy0xNS4zIDE0LjFWMjc2YzAgOS4zIDUuMiAxNC4xIDE1LjMgMTQuMWguOGMxMC4xIDAgMTUuMy00LjggMTUuMy0xNC4xdi00MC4xYzAtOS4zNi01LjItMTQuMDYtMTUuMy0xNC4wNnptMTAuMiA1Mi40Yy0uMSA4LTMgMTEuMS0xMC41IDExLjFzLTEwLjUtMy4xLTEwLjUtMTEuMXYtMzYuNmMwLTcuOSAzLTExLjEgMTAuNS0xMS4xczEwLjUgMy4yIDEwLjUgMTEuMXptLTQ2LjUtMTQuNWM2LjEtMS42IDkuMi02LjEgOS4yLTEzLjN2LTkuN2MwLTkuNC01LjItMTQuMS0xNS4zLTE0LjFoLTEzLjdhMS44MSAxLjgxIDAgMCAwLTIgMS45djYzYTEuODEgMS44MSAwIDAgMCAyIDEuOWgxLjJhMS43NCAxLjc0IDAgMCAwIDEuOS0xLjl2LTI2LjloMTEuNmwxMC40IDI3LjJhMi4zMiAyLjMyIDAgMCAwIDIuMyAxLjVoMS41YzEuNCAwIDItMSAxLjUtMi4zem0tNi40LTMuOUgzNTV2LTI4LjVoMTAuMmM3LjUgMCAxMC41IDMuMSAxMC41IDExLjF2Ni40YzAgNy44NC0zIDExLjA0LTEwLjUgMTEuMDR6bTg1LjktMzMuMWgtMTMuN2ExLjYyIDEuNjIgMCAwIDAtMiAxLjh2NjNhMS44MSAxLjgxIDAgMCAwIDIgMS45aDEuMmExLjc0IDEuNzQgMCAwIDAgMS45LTEuOXYtMjYuMWgxMC42YzEwLjEgMCAxNS4zLTQuOCAxNS4zLTE0LjF2LTEwLjVjMC05LjQtNS4yLTE0LjEtMTUuMy0xNC4xem0xMC4yIDIyLjhjMCA3LjktMyAxMS4xLTEwLjUgMTEuMWgtMTAuMnYtMjkuMmgxMC4yYzcuNS0uMSAxMC41IDMuMSAxMC41IDExek0yNTkuNSAzMDhsLTIuMy02LjgtMi4zIDYuOC03LjEuMSA1LjcgNC4zLTIuMSA2LjggNS44LTQuMSA1LjggNC4xLTIuMS02LjggNS43LTQuM3ptMjI3LjYtMTM2LjFhMzY0LjQyIDM2NC40MiAwIDAgMC0zNS42LTExLjNjMTkuNi03OCAxMS42LTEzNC43LTIyLjMtMTUzLjlDMzk0LjctMTIuNjYgMzQzLjMgMTEgMjkxIDYxLjk0cTUuMSA0Ljk1IDEwLjIgMTAuMmM4Mi41LTgwIDExOS42LTUzLjUgMTIwLjktNTIuOCAyMi40IDEyLjcgMzYgNTUuOCAxNS41IDEzNy44YTU4Ny44MyA1ODcuODMgMCAwIDAtODQuNi0xM0MyODEuMSA0My42NCAyMTIuNCAyIDE3MC44IDIgMTQwIDIgMTI3IDIzIDEyMy4yIDI5Ljc0Yy0xOC4xIDMyLTEzLjMgODQuMi4xIDEzMy44LTcwLjUgMjAuMy0xMjAuNyA1NC4xLTEyMC4zIDk1IC41IDU5LjYgMTAzLjIgODcuOCAxMjIuMSA5Mi44LTIwLjUgODEuOS0xMC4xIDEzNS42IDIyLjMgMTUzLjkgMjggMTUuOCA3NS4xIDYgMTM4LjItNTUuMnEtNS4xLTQuOTUtMTAuMi0xMC4yYy04Mi41IDgwLTExOS43IDUzLjUtMTIwLjkgNTIuOC0yMi4zLTEyLjYtMzYtNTUuNi0xNS41LTEzNy45IDEyLjQgMi45IDQxLjggOS41IDg0LjYgMTMgNzEuOSAxMDAuNCAxNDAuNiAxNDIgMTgyLjEgMTQyIDMwLjggMCA0My44LTIxIDQ3LjYtMjcuNyAxOC0zMS45IDEzLjMtODQuMS0uMS0xMzMuOCAxNTIuMy00My44IDE1Ni4yLTEzMC4yIDMzLjktMTc2LjN6TTEzNS45IDM2Ljg0YzIuOS01LjEgMTEuOS0yMC4zIDM0LjktMjAuMyAzNi44IDAgOTguOCAzOS42IDE2My4zIDEyNi4yYTcxNCA3MTQgMCAwIDAtOTMuOS45IDU0Ny43NiA1NDcuNzYgMCAwIDEgNDIuMi01Mi40UTI3Ny4zIDg2IDI3Mi4yIDgxYTU5OC4yNSA1OTguMjUgMCAwIDAtNTAuNyA2NC4yIDU2OS42OSA1NjkuNjkgMCAwIDAtODQuNCAxNC42Yy0uMi0xLjQtMjQuMy04Mi4yLTEuMi0xMjN6bTMwNC44IDQzOC4zYy0yLjkgNS4xLTExLjggMjAuMy0zNC45IDIwLjMtMzYuNyAwLTk4LjctMzkuNC0xNjMuMy0xMjYuMmE2OTUuMzggNjk1LjM4IDAgMCAwIDkzLjktLjkgNTQ3Ljc2IDU0Ny43NiAwIDAgMS00Mi4yIDUyLjRxNS4xIDUuMjUgMTAuMiAxMC4yYTU4OC40NyA1ODguNDcgMCAwIDAgNTAuNy02NC4yYzQ3LjMtNC43IDgwLjMtMTMuNSA4NC40LTE0LjYgMjIuNyA4NC40IDQuNSAxMTcgMS4yIDEyM3ptOS4xLTEzOC42Yy0zLjYtMTEuOS03LjctMjQuMS0xMi40LTM2LjRhMTIuNjcgMTIuNjcgMCAwIDEtMTAuNy01LjdsLS4xLjFhMTkuNjEgMTkuNjEgMCAwIDEtNS40IDMuNmM1LjcgMTQuMyAxMC42IDI4LjQgMTQuNyA0Mi4yYTUzNS4zIDUzNS4zIDAgMCAxLTcyIDEzYzMuNS01LjMgMTcuMi0yNi4yIDMyLjItNTQuMmEyNC42IDI0LjYgMCAwIDEtNi0zLjJjLTEuMSAxLjItMy42IDQuMi0xMC45IDQuMi02LjIgMTEuMi0xNy40IDMwLjktMzMuOSA1NS4yYTcxMS45MSA3MTEuOTEgMCAwIDEtMTEyLjQgMWMtNy45LTExLjItMjEuNS0zMS4xLTM2LjgtNTcuOGEyMSAyMSAwIDAgMS0zLTEuNWMtMS45IDEuNi0zLjkgMy4yLTEyLjYgMy4yIDYuMyAxMS4yIDE3LjUgMzAuNyAzMy44IDU0LjZhNTQ4LjgxIDU0OC44MSAwIDAgMS03Mi4yLTExLjdxNS44NS0yMSAxNC4xLTQyLjljLTMuMiAwLTUuNC4yLTguNC0xYTE3LjU4IDE3LjU4IDAgMCAxLTYuOSAxYy00LjkgMTMuNC05LjEgMjYuNS0xMi43IDM5LjRDLTMxLjcgMjk3LTEyLjEgMjE2IDEyNi43IDE3NS42NGMzLjYgMTEuOSA3LjcgMjQuMSAxMi40IDM2LjQgMTAuNCAwIDEyLjkgMy40IDE0LjQgNS4zYTEyIDEyIDAgMCAxIDIuMy0yLjJjLTUuOC0xNC43LTEwLjktMjkuMi0xNS4yLTQzLjMgNy0xLjggMzIuNC04LjQgNzItMTMtMTUuOSAyNC4zLTI2LjcgNDMuOS0zMi44IDU1LjNhMTQuMjIgMTQuMjIgMCAwIDEgNi40IDggMjMuNDIgMjMuNDIgMCAwIDEgMTAuMi04LjRjNi41LTExLjcgMTcuOS0zMS45IDM0LjgtNTYuOWE3MTEuNzIgNzExLjcyIDAgMCAxIDExMi40LTFjMzEuNSA0NC42IDI4LjkgNDguMSA0Mi41IDY0LjVhMjEuNDIgMjEuNDIgMCAwIDEgMTAuNC03LjRjLTYuNC0xMS40LTE3LjYtMzEtMzQuMy01NS41IDQwLjQgNC4xIDY1IDEwIDcyLjIgMTEuNy00IDE0LjQtOC45IDI5LjItMTQuNiA0NC4yYTIwLjc0IDIwLjc0IDAgMCAxIDYuOCA0LjNsLjEuMWExMi43MiAxMi43MiAwIDAgMSA4LjktNS42YzQuOS0xMy40IDkuMi0yNi42IDEyLjgtMzkuNWEzNTkuNzEgMzU5LjcxIDAgMCAxIDM0LjUgMTFjMTA2LjEgMzkuOSA3NCA4Ny45IDcyLjYgOTAuNC0xOS44IDM1LjEtODAuMSA1NS4yLTEwNS43IDYyLjV6bS0xMTQuNC0xMTRoLTEuMmExLjc0IDEuNzQgMCAwIDAtMS45IDEuOXY0OS44YzAgNy45LTIuNiAxMS4xLTEwLjEgMTEuMXMtMTAuMS0zLjEtMTAuMS0xMS4xdi00OS44YTEuNjkgMS42OSAwIDAgMC0xLjktMS45SDMwOWExLjgxIDEuODEgMCAwIDAtMiAxLjl2NTEuNWMwIDkuNiA1IDE0LjEgMTUuMSAxNC4xaC40YzEwLjEgMCAxNS4xLTQuNiAxNS4xLTE0LjF2LTUxLjVhMiAyIDAgMCAwLTIuMi0xLjl6TTMyMS43IDMwOGwtMi4zLTYuOC0yLjMgNi44LTcuMS4xIDUuNyA0LjMtMi4xIDYuOCA1LjgtNC4xIDUuOCA0LjEtMi4xLTYuOCA1LjctNC4zem0tMzEuMSA3LjRsLTIuMy02LjgtMi4zIDYuOC03LjEuMSA1LjcgNC4zLTIuMSA2LjggNS44LTQuMSA1LjggNC4xLTIuMS02LjggNS43LTQuM3ptNS4xLTMwLjhoLTE5LjR2LTI2LjdoMTYuMWExLjg5IDEuODkgMCAwIDAgMi0ydi0uOGExLjg5IDEuODkgMCAwIDAtMi0yaC0xNi4xdi0yNS44aDE5LjFhMS44OSAxLjg5IDAgMCAwIDItMnYtLjhhMS43NyAxLjc3IDAgMCAwLTItMS45aC0yMi4yYTEuODEgMS44MSAwIDAgMC0yIDEuOXY2M2ExLjgxIDEuODEgMCAwIDAgMiAxLjloMjIuNWExLjc3IDEuNzcgMCAwIDAgMi0xLjl2LS44YTEuODMgMS44MyAwIDAgMC0yLTIuMDZ6bS03LjQtOTkuNEwyODYgMTkybC03LjEuMSA1LjcgNC4zLTIuMSA2LjggNS44LTQuMSA1LjggNC4xLTIuMS02LjggNS43LTQuMy03LjEtLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Reacteurope(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M250.6 211.74l5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3-7.1-.1-2.3-6.8-2.3 6.8-7.2.1 5.7 4.3zm63.7 0l5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3-7.2-.1-2.3-6.8-2.3 6.8-7.2.1 5.7 4.3zm-91.3 50.5h-3.4c-4.8 0-3.8 4-3.8 12.1 0 4.7-2.3 6.1-5.8 6.1s-5.8-1.4-5.8-6.1v-36.6c0-4.7 2.3-6.1 5.8-6.1s5.8 1.4 5.8 6.1c0 7.2-.7 10.5 3.8 10.5h3.4c4.7-.1 3.8-3.9 3.8-12.3 0-9.9-6.7-14.1-16.8-14.1h-.2c-10.1 0-16.8 4.2-16.8 14.1V276c0 10.4 6.7 14.1 16.8 14.1h.2c10.1 0 16.8-3.8 16.8-14.1 0-9.86 1.1-13.76-3.8-13.76zm-80.7 17.4h-14.7v-19.3H139c2.5 0 3.8-1.3 3.8-3.8v-2.1c0-2.5-1.3-3.8-3.8-3.8h-11.4v-18.3H142c2.5 0 3.8-1.3 3.8-3.8v-2.1c0-2.5-1.3-3.8-3.8-3.8h-21.7c-2.4-.1-3.7 1.3-3.7 3.8v59.1c0 2.5 1.3 3.8 3.8 3.8h21.9c2.5 0 3.8-1.3 3.8-3.8v-2.1c0-2.5-1.3-3.8-3.8-3.8zm-42-18.5c4.6-2 7.3-6 7.3-12.4v-11.9c0-10.1-6.7-14.1-16.8-14.1H77.4c-2.5 0-3.8 1.3-3.8 3.8v59.1c0 2.5 1.3 3.8 3.8 3.8h3.4c2.5 0 3.8-1.3 3.8-3.8v-22.9h5.6l7.4 23.5a4.1 4.1 0 0 0 4.3 3.2h3.3c2.8 0 4-1.8 3.2-4.4zm-3.8-14c0 4.8-2.5 6.1-6.1 6.1h-5.8v-20.9h5.8c3.6 0 6.1 1.3 6.1 6.1zM176 226a3.82 3.82 0 0 0-4.2-3.4h-6.9a3.68 3.68 0 0 0-4 3.4l-11 59.2c-.5 2.7.9 4.1 3.4 4.1h3a3.74 3.74 0 0 0 4.1-3.5l1.8-11.3h12.2l1.8 11.3a3.74 3.74 0 0 0 4.1 3.5h3.5c2.6 0 3.9-1.4 3.4-4.1zm-12.3 39.3l4.7-29.7 4.7 29.7zm89.3 20.2v-53.2h7.5c2.5 0 3.8-1.3 3.8-3.8v-2.1c0-2.5-1.3-3.8-3.8-3.8h-25.8c-2.5 0-3.8 1.3-3.8 3.8v2.1c0 2.5 1.3 3.8 3.8 3.8h7.3v53.2c0 2.5 1.3 3.8 3.8 3.8h3.4c2.5.04 3.8-1.3 3.8-3.76zm248-.8h-19.4V258h16.1a1.89 1.89 0 0 0 2-2v-.8a1.89 1.89 0 0 0-2-2h-16.1v-25.8h19.1a1.89 1.89 0 0 0 2-2v-.8a1.77 1.77 0 0 0-2-1.9h-22.2a1.62 1.62 0 0 0-2 1.8v63a1.81 1.81 0 0 0 2 1.9H501a1.81 1.81 0 0 0 2-1.9v-.8a1.84 1.84 0 0 0-2-1.96zm-93.1-62.9h-.8c-10.1 0-15.3 4.7-15.3 14.1V276c0 9.3 5.2 14.1 15.3 14.1h.8c10.1 0 15.3-4.8 15.3-14.1v-40.1c0-9.36-5.2-14.06-15.3-14.06zm10.2 52.4c-.1 8-3 11.1-10.5 11.1s-10.5-3.1-10.5-11.1v-36.6c0-7.9 3-11.1 10.5-11.1s10.5 3.2 10.5 11.1zm-46.5-14.5c6.1-1.6 9.2-6.1 9.2-13.3v-9.7c0-9.4-5.2-14.1-15.3-14.1h-13.7a1.81 1.81 0 0 0-2 1.9v63a1.81 1.81 0 0 0 2 1.9h1.2a1.74 1.74 0 0 0 1.9-1.9v-26.9h11.6l10.4 27.2a2.32 2.32 0 0 0 2.3 1.5h1.5c1.4 0 2-1 1.5-2.3zm-6.4-3.9H355v-28.5h10.2c7.5 0 10.5 3.1 10.5 11.1v6.4c0 7.84-3 11.04-10.5 11.04zm85.9-33.1h-13.7a1.62 1.62 0 0 0-2 1.8v63a1.81 1.81 0 0 0 2 1.9h1.2a1.74 1.74 0 0 0 1.9-1.9v-26.1h10.6c10.1 0 15.3-4.8 15.3-14.1v-10.5c0-9.4-5.2-14.1-15.3-14.1zm10.2 22.8c0 7.9-3 11.1-10.5 11.1h-10.2v-29.2h10.2c7.5-.1 10.5 3.1 10.5 11zM259.5 308l-2.3-6.8-2.3 6.8-7.1.1 5.7 4.3-2.1 6.8 5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3zm227.6-136.1a364.42 364.42 0 0 0-35.6-11.3c19.6-78 11.6-134.7-22.3-153.9C394.7-12.66 343.3 11 291 61.94q5.1 4.95 10.2 10.2c82.5-80 119.6-53.5 120.9-52.8 22.4 12.7 36 55.8 15.5 137.8a587.83 587.83 0 0 0-84.6-13C281.1 43.64 212.4 2 170.8 2 140 2 127 23 123.2 29.74c-18.1 32-13.3 84.2.1 133.8-70.5 20.3-120.7 54.1-120.3 95 .5 59.6 103.2 87.8 122.1 92.8-20.5 81.9-10.1 135.6 22.3 153.9 28 15.8 75.1 6 138.2-55.2q-5.1-4.95-10.2-10.2c-82.5 80-119.7 53.5-120.9 52.8-22.3-12.6-36-55.6-15.5-137.9 12.4 2.9 41.8 9.5 84.6 13 71.9 100.4 140.6 142 182.1 142 30.8 0 43.8-21 47.6-27.7 18-31.9 13.3-84.1-.1-133.8 152.3-43.8 156.2-130.2 33.9-176.3zM135.9 36.84c2.9-5.1 11.9-20.3 34.9-20.3 36.8 0 98.8 39.6 163.3 126.2a714 714 0 0 0-93.9.9 547.76 547.76 0 0 1 42.2-52.4Q277.3 86 272.2 81a598.25 598.25 0 0 0-50.7 64.2 569.69 569.69 0 0 0-84.4 14.6c-.2-1.4-24.3-82.2-1.2-123zm304.8 438.3c-2.9 5.1-11.8 20.3-34.9 20.3-36.7 0-98.7-39.4-163.3-126.2a695.38 695.38 0 0 0 93.9-.9 547.76 547.76 0 0 1-42.2 52.4q5.1 5.25 10.2 10.2a588.47 588.47 0 0 0 50.7-64.2c47.3-4.7 80.3-13.5 84.4-14.6 22.7 84.4 4.5 117 1.2 123zm9.1-138.6c-3.6-11.9-7.7-24.1-12.4-36.4a12.67 12.67 0 0 1-10.7-5.7l-.1.1a19.61 19.61 0 0 1-5.4 3.6c5.7 14.3 10.6 28.4 14.7 42.2a535.3 535.3 0 0 1-72 13c3.5-5.3 17.2-26.2 32.2-54.2a24.6 24.6 0 0 1-6-3.2c-1.1 1.2-3.6 4.2-10.9 4.2-6.2 11.2-17.4 30.9-33.9 55.2a711.91 711.91 0 0 1-112.4 1c-7.9-11.2-21.5-31.1-36.8-57.8a21 21 0 0 1-3-1.5c-1.9 1.6-3.9 3.2-12.6 3.2 6.3 11.2 17.5 30.7 33.8 54.6a548.81 548.81 0 0 1-72.2-11.7q5.85-21 14.1-42.9c-3.2 0-5.4.2-8.4-1a17.58 17.58 0 0 1-6.9 1c-4.9 13.4-9.1 26.5-12.7 39.4C-31.7 297-12.1 216 126.7 175.64c3.6 11.9 7.7 24.1 12.4 36.4 10.4 0 12.9 3.4 14.4 5.3a12 12 0 0 1 2.3-2.2c-5.8-14.7-10.9-29.2-15.2-43.3 7-1.8 32.4-8.4 72-13-15.9 24.3-26.7 43.9-32.8 55.3a14.22 14.22 0 0 1 6.4 8 23.42 23.42 0 0 1 10.2-8.4c6.5-11.7 17.9-31.9 34.8-56.9a711.72 711.72 0 0 1 112.4-1c31.5 44.6 28.9 48.1 42.5 64.5a21.42 21.42 0 0 1 10.4-7.4c-6.4-11.4-17.6-31-34.3-55.5 40.4 4.1 65 10 72.2 11.7-4 14.4-8.9 29.2-14.6 44.2a20.74 20.74 0 0 1 6.8 4.3l.1.1a12.72 12.72 0 0 1 8.9-5.6c4.9-13.4 9.2-26.6 12.8-39.5a359.71 359.71 0 0 1 34.5 11c106.1 39.9 74 87.9 72.6 90.4-19.8 35.1-80.1 55.2-105.7 62.5zm-114.4-114h-1.2a1.74 1.74 0 0 0-1.9 1.9v49.8c0 7.9-2.6 11.1-10.1 11.1s-10.1-3.1-10.1-11.1v-49.8a1.69 1.69 0 0 0-1.9-1.9H309a1.81 1.81 0 0 0-2 1.9v51.5c0 9.6 5 14.1 15.1 14.1h.4c10.1 0 15.1-4.6 15.1-14.1v-51.5a2 2 0 0 0-2.2-1.9zM321.7 308l-2.3-6.8-2.3 6.8-7.1.1 5.7 4.3-2.1 6.8 5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3zm-31.1 7.4l-2.3-6.8-2.3 6.8-7.1.1 5.7 4.3-2.1 6.8 5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3zm5.1-30.8h-19.4v-26.7h16.1a1.89 1.89 0 0 0 2-2v-.8a1.89 1.89 0 0 0-2-2h-16.1v-25.8h19.1a1.89 1.89 0 0 0 2-2v-.8a1.77 1.77 0 0 0-2-1.9h-22.2a1.81 1.81 0 0 0-2 1.9v63a1.81 1.81 0 0 0 2 1.9h22.5a1.77 1.77 0 0 0 2-1.9v-.8a1.83 1.83 0 0 0-2-2.06zm-7.4-99.4L286 192l-7.1.1 5.7 4.3-2.1 6.8 5.8-4.1 5.8 4.1-2.1-6.8 5.7-4.3-7.1-.1z" />
        </Icon>
    </>
}