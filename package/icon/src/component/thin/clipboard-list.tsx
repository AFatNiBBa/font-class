
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-list` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-list?s=thin clipboard-list}
 * @preview ![clipboard-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgOTZDMjAwLjgzNiA5NiAyMDggODguODM2IDIwOCA4MEMyMDggNzEuMTYyIDIwMC44MzYgNjQgMTkyIDY0UzE3NiA3MS4xNjIgMTc2IDgwQzE3NiA4OC44MzYgMTgzLjE2NCA5NiAxOTIgOTZaTTk2IDE2MEgyODhDMzA1LjY3MyAxNjAgMzIwIDE0NS42NzMgMzIwIDEyOFYxMTMuNjEzQzMyMCA4Ni4yMTMgMjk3Ljc4NyA2NCAyNzAuMzg3IDY0SDI3MC4zODdDMjYyLjk3MyAyNy40ODQgMjMwLjcwMyAwIDE5MiAwUzEyMS4wMjcgMjcuNDg0IDExMy42MTMgNjRIMTEzLjYxM0M4Ni4yMTMgNjQgNjQgODYuMjEzIDY0IDExMy42MTNWMTI4QzY0IDE0NS42NzMgNzguMzI3IDE2MCA5NiAxNjBaTTgwIDExMy42MTNDODAgOTUuMDQ5IDk1LjA0OSA4MCAxMTMuNjEzIDgwSDEyNi42OTFMMTI4LjUzNyA3MC45MDZDMTMzLjUyMyA0Ni4zNDMgMTUwLjgwOSAyNC43MzMgMTc1LjAyMSAxOC4yNTZDMjExLjk1MiA4LjM3NiAyNDcuNTc5IDMyLjA4NSAyNTQuNzA3IDY3LjE4NEwyNTcuMzA5IDgwSDI3MC4zODdDMjg4Ljk1MSA4MCAzMDQgOTUuMDQ5IDMwNCAxMTMuNjEzVjEyOEMzMDQgMTM2LjgzNyAyOTYuODM3IDE0NCAyODggMTQ0SDk2Qzg3LjE2MyAxNDQgODAgMTM2LjgzNyA4MCAxMjhWMTEzLjYxM1pNMzU1LjE4OCAxMDBDMzUxLjA5NCA5OC4yODEgMzQ2LjQzOCAxMDAuMDYyIDM0NC42NTYgMTA0LjE1NkMzNDIuOTA2IDEwOC4xODggMzQ0Ljc1IDExMi45MDYgMzQ4LjgxMiAxMTQuNjg4QzM2MC40NjkgMTE5Ljc1IDM2OCAxMzEuMjgxIDM2OCAxNDRWNDY0QzM2OCA0ODEuNjU2IDM1My42NTYgNDk2IDMzNiA0OTZINDhDMzAuMzQ0IDQ5NiAxNiA0ODEuNjU2IDE2IDQ2NFYxNDRDMTYgMTMxLjMxMiAyMy41MzEgMTE5LjgxMiAzNS4yMTkgMTE0LjY4OEMzOS4yNSAxMTIuOTM4IDQxLjA5NCAxMDguMjE5IDM5LjMxMiAxMDQuMTU2QzM3LjU2MiAxMDAuMTI1IDMyLjkzOCA5OC4yMTkgMjguNzgxIDEwMC4wNjJDMTEuMzEyIDEwNy43MTkgMCAxMjQuOTY5IDAgMTQ0VjQ2NEMwIDQ5MC40NjkgMjEuNTMxIDUxMiA0OCA1MTJIMzM2QzM2Mi40NjkgNTEyIDM4NCA0OTAuNDY5IDM4NCA0NjRWMTQ0QzM4NCAxMjQuOTA2IDM3Mi42ODggMTA3LjYyNSAzNTUuMTg4IDEwMFpNOTYgMjA4Qzg3LjE2NCAyMDggODAgMjE1LjE2MiA4MCAyMjRDODAgMjMyLjgzNiA4Ny4xNjQgMjQwIDk2IDI0MFMxMTIgMjMyLjgzNiAxMTIgMjI0QzExMiAyMTUuMTYyIDEwNC44MzYgMjA4IDk2IDIwOFpNOTYgMzA0Qzg3LjE2NCAzMDQgODAgMzExLjE2MiA4MCAzMjBDODAgMzI4LjgzNiA4Ny4xNjQgMzM2IDk2IDMzNlMxMTIgMzI4LjgzNiAxMTIgMzIwQzExMiAzMTEuMTYyIDEwNC44MzYgMzA0IDk2IDMwNFpNOTYgNDAwQzg3LjE2NCA0MDAgODAgNDA3LjE2MiA4MCA0MTZDODAgNDI0LjgzNiA4Ny4xNjQgNDMyIDk2IDQzMlMxMTIgNDI0LjgzNiAxMTIgNDE2QzExMiA0MDcuMTYyIDEwNC44MzYgNDAwIDk2IDQwMFpNMzEyIDQwOEgxNjhDMTYzLjU5NCA0MDggMTYwIDQxMS41NzggMTYwIDQxNlMxNjMuNTk0IDQyNCAxNjggNDI0SDMxMkMzMTYuNDA2IDQyNCAzMjAgNDIwLjQyMiAzMjAgNDE2UzMxNi40MDYgNDA4IDMxMiA0MDhaTTMxMiAyMTZIMTY4QzE2My41OTQgMjE2IDE2MCAyMTkuNTc4IDE2MCAyMjRTMTYzLjU5NCAyMzIgMTY4IDIzMkgzMTJDMzE2LjQwNiAyMzIgMzIwIDIyOC40MjIgMzIwIDIyNFMzMTYuNDA2IDIxNiAzMTIgMjE2Wk0zMTIgMzEySDE2OEMxNjMuNTk0IDMxMiAxNjAgMzE1LjU3OCAxNjAgMzIwUzE2My41OTQgMzI4IDE2OCAzMjhIMzEyQzMxNi40MDYgMzI4IDMyMCAzMjQuNDIyIDMyMCAzMjBTMzE2LjQwNiAzMTIgMzEyIDMxMloiLz48L3N2Zz4=|width=32|height=32)
 */
const ClipboardList: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 96C200.836 96 208 88.836 208 80C208 71.162 200.836 64 192 64S176 71.162 176 80C176 88.836 183.164 96 192 96ZM96 160H288C305.673 160 320 145.673 320 128V113.613C320 86.213 297.787 64 270.387 64H270.387C262.973 27.484 230.703 0 192 0S121.027 27.484 113.613 64H113.613C86.213 64 64 86.213 64 113.613V128C64 145.673 78.327 160 96 160ZM80 113.613C80 95.049 95.049 80 113.613 80H126.691L128.537 70.906C133.523 46.343 150.809 24.733 175.021 18.256C211.952 8.376 247.579 32.085 254.707 67.184L257.309 80H270.387C288.951 80 304 95.049 304 113.613V128C304 136.837 296.837 144 288 144H96C87.163 144 80 136.837 80 128V113.613ZM355.188 100C351.094 98.281 346.438 100.062 344.656 104.156C342.906 108.188 344.75 112.906 348.812 114.688C360.469 119.75 368 131.281 368 144V464C368 481.656 353.656 496 336 496H48C30.344 496 16 481.656 16 464V144C16 131.312 23.531 119.812 35.219 114.688C39.25 112.938 41.094 108.219 39.312 104.156C37.562 100.125 32.938 98.219 28.781 100.062C11.312 107.719 0 124.969 0 144V464C0 490.469 21.531 512 48 512H336C362.469 512 384 490.469 384 464V144C384 124.906 372.688 107.625 355.188 100ZM96 208C87.164 208 80 215.162 80 224C80 232.836 87.164 240 96 240S112 232.836 112 224C112 215.162 104.836 208 96 208ZM96 304C87.164 304 80 311.162 80 320C80 328.836 87.164 336 96 336S112 328.836 112 320C112 311.162 104.836 304 96 304ZM96 400C87.164 400 80 407.162 80 416C80 424.836 87.164 432 96 432S112 424.836 112 416C112 407.162 104.836 400 96 400ZM312 408H168C163.594 408 160 411.578 160 416S163.594 424 168 424H312C316.406 424 320 420.422 320 416S316.406 408 312 408ZM312 216H168C163.594 216 160 219.578 160 224S163.594 232 168 232H312C316.406 232 320 228.422 320 224S316.406 216 312 216ZM312 312H168C163.594 312 160 315.578 160 320S163.594 328 168 328H312C316.406 328 320 324.422 320 320S316.406 312 312 312Z" />
    </Icon>
);

export default ClipboardList;