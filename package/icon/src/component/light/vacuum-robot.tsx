
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum-robot` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum-robot?s=light vacuum-robot}
 * @preview ![vacuum-robot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzkuMzEyIDMwOC42ODhDMTMzLjA2MiAzMDIuNDM4IDEyMi45MzcgMzAyLjQzOCAxMTYuNjg4IDMwOC42ODhTMTEwLjQzOCAzMjUuMDYzIDExNi42ODggMzMxLjMxMkwxODAuNjg4IDM5NS4zMTJDMTgzLjgxMiAzOTguNDM4IDE4Ny45MDYgNDAwIDE5MiA0MDBTMjAwLjE4OCAzOTguNDM4IDIwMy4zMTIgMzk1LjMxMkMyMDkuNTYyIDM4OS4wNjIgMjA5LjU2MiAzNzguOTM3IDIwMy4zMTIgMzcyLjY4OEwxMzkuMzEyIDMwOC42ODhaTTIzNS4zMTIgMjEyLjY4OEMyMjkuMDYyIDIwNi40MzggMjE4LjkzNyAyMDYuNDM4IDIxMi42ODggMjEyLjY4OFMyMDYuNDM4IDIyOS4wNjMgMjEyLjY4OCAyMzUuMzEyTDI3Ni42ODggMjk5LjMxMkMyNzkuODEyIDMwMi40MzggMjgzLjkwNiAzMDQgMjg4IDMwNFMyOTYuMTg4IDMwMi40MzggMjk5LjMxMiAyOTkuMzEyQzMwNS41NjIgMjkzLjA2MiAzMDUuNTYyIDI4Mi45MzcgMjk5LjMxMiAyNzYuNjg4TDIzNS4zMTIgMjEyLjY4OFpNMTU1LjMxMiAyMjguNjg4QzE0OS4wNjIgMjIyLjQzOCAxMzguOTM3IDIyMi40MzggMTMyLjY4OCAyMjguNjg4UzEyNi40MzggMjQ1LjA2MyAxMzIuNjg4IDI1MS4zMTJMMjYwLjY4OCAzNzkuMzEyQzI2My44MTIgMzgyLjQzOCAyNjcuOTA2IDM4NCAyNzIgMzg0UzI4MC4xODggMzgyLjQzOCAyODMuMzEyIDM3OS4zMTJDMjg5LjU2MiAzNzMuMDYyIDI4OS41NjIgMzYyLjkzNyAyODMuMzEyIDM1Ni42ODhMMTU1LjMxMiAyMjguNjg4Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk0zODAuNjQxIDEzMS4zNDRDMzQ2LjkzOCA5Ny42NTYgMzAxLjc4MSA3OC45MDYgMjU1Ljc5NyA4MEMyMDkuODEyIDgwLjU2MiAxNjYuMDk0IDk5LjI4MSAxMzIuNjg3IDEzMi42ODhDMTI2LjQzNyAxMzguOTM4IDEyNi40MzcgMTQ5LjA2MyAxMzIuNjg3IDE1NS4zMTJTMTQ5LjA2MiAxNjEuNTYyIDE1NS4zMTIgMTU1LjMxMkMxODIuNzgxIDEyNy44NDQgMjE4LjYwOSAxMTIuNDY5IDI1Ni4xODggMTEyQzI5NS4yOTcgMTEyIDMzMC41IDEyNi40MzggMzU4LjAxNiAxNTMuOTY5QzM4NS41NjIgMTgxLjUgNDAwLjQ2OSAyMTcuNjg4IDQwMCAyNTUuODEyQzM5OS41MzEgMjkzLjM3NSAzODQuMTU2IDMyOS4yMTkgMzU2LjY4OCAzNTYuNjg4QzM1MC40MzggMzYyLjkzOCAzNTAuNDM4IDM3My4wNjMgMzU2LjY4OCAzNzkuMzEyQzM1OS44MTIgMzgyLjQzOCAzNjMuOTA2IDM4NCAzNjggMzg0UzM3Ni4xODggMzgyLjQzOCAzNzkuMzEyIDM3OS4zMTJDNDEyLjcxOSAzNDUuOTA2IDQzMS40MzggMzAyLjE4OCA0MzIgMjU2LjE4OEM0MzIuNTYyIDIwOS4zNzUgNDE0LjMyOCAxNjUuMDMxIDM4MC42NDEgMTMxLjM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const VacuumRobot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M139.312 308.688C133.062 302.438 122.937 302.438 116.688 308.688S110.438 325.063 116.688 331.312L180.688 395.312C183.812 398.438 187.906 400 192 400S200.188 398.438 203.312 395.312C209.562 389.062 209.562 378.937 203.312 372.688L139.312 308.688ZM235.312 212.688C229.062 206.438 218.937 206.438 212.688 212.688S206.438 229.063 212.688 235.312L276.688 299.312C279.812 302.438 283.906 304 288 304S296.188 302.438 299.312 299.312C305.562 293.062 305.562 282.937 299.312 276.688L235.312 212.688ZM155.312 228.688C149.062 222.438 138.937 222.438 132.688 228.688S126.438 245.063 132.688 251.312L260.688 379.312C263.812 382.438 267.906 384 272 384S280.188 382.438 283.312 379.312C289.562 373.062 289.562 362.937 283.312 356.688L155.312 228.688ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM380.641 131.344C346.938 97.656 301.781 78.906 255.797 80C209.812 80.562 166.094 99.281 132.687 132.688C126.437 138.938 126.437 149.063 132.687 155.312S149.062 161.562 155.312 155.312C182.781 127.844 218.609 112.469 256.188 112C295.297 112 330.5 126.438 358.016 153.969C385.562 181.5 400.469 217.688 400 255.812C399.531 293.375 384.156 329.219 356.688 356.688C350.438 362.938 350.438 373.063 356.688 379.312C359.812 382.438 363.906 384 368 384S376.188 382.438 379.312 379.312C412.719 345.906 431.438 302.188 432 256.188C432.562 209.375 414.328 165.031 380.641 131.344Z" />
    </Icon>
);

export default VacuumRobot;