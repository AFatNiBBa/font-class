
import { Icon } from "../../index";

/**
 * A component that renders the `vacuum-robot` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum-robot?s=regular vacuum-robot}
 * @preview ![vacuum-robot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2NyA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzMgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0yNTYgOTZDMjEzLjE1NiA5NiAxNzIuOTA2IDExMi43MTkgMTQyLjY3MiAxNDMuMDYyQzEzMy4zMTIgMTUyLjQzOCAxMzMuMzQ0IDE2Ny42NTYgMTQyLjczNCAxNzdDMTUyLjE0MSAxODYuMzQ0IDE2Ny4zMjggMTg2LjM0NCAxNzYuNjcyIDE3Ni45MzhDMTk3LjgyOCAxNTUuNjg4IDIyNiAxNDQgMjU2IDE0NEMzMTcuNzUgMTQ0IDM2OCAxOTQuMjUgMzY4IDI1NkMzNjggMjg2IDM1Ni4yOTcgMzE0LjE1NiAzMzUuMDYyIDMzNS4zNDRDMzI1LjY3MiAzNDQuNzE5IDMyNS42NDEgMzU5LjkwNiAzMzUgMzY5LjI4MUMzMzkuNjg4IDM3NCAzNDUuODQ0IDM3Ni4zNDQgMzUyIDM3Ni4zNDRDMzU4LjEyNSAzNzYuMzQ0IDM2NC4yNjYgMzc0IDM2OC45MzggMzY5LjM0NEMzOTkuMjgxIDMzOS4wOTQgNDE2IDI5OC44NDQgNDE2IDI1NkM0MTYgMTY3Ljc4MSAzNDQuMjE5IDk2IDI1NiA5NlpNMTU1LjMxMiAyMjguNjg4QzE0OS4wNjIgMjIyLjQzOCAxMzguOTM3IDIyMi40MzggMTMyLjY4OCAyMjguNjg4UzEyNi40MzggMjQ1LjA2MyAxMzIuNjg4IDI1MS4zMTJMMjYwLjY4OCAzNzkuMzEyQzI2My44MTIgMzgyLjQzOCAyNjcuOTA2IDM4NCAyNzIgMzg0UzI4MC4xODggMzgyLjQzOCAyODMuMzEyIDM3OS4zMTJDMjg5LjU2MiAzNzMuMDYyIDI4OS41NjIgMzYyLjkzNyAyODMuMzEyIDM1Ni42ODhMMTU1LjMxMiAyMjguNjg4Wk0xMzkuMzEyIDMwOC42ODhDMTMzLjA2MiAzMDIuNDM4IDEyMi45MzcgMzAyLjQzOCAxMTYuNjg4IDMwOC42ODhTMTEwLjQzOCAzMjUuMDYzIDExNi42ODggMzMxLjMxMkwxODAuNjg4IDM5NS4zMTJDMTgzLjgxMiAzOTguNDM4IDE4Ny45MDYgNDAwIDE5MiA0MDBTMjAwLjE4OCAzOTguNDM4IDIwMy4zMTIgMzk1LjMxMkMyMDkuNTYyIDM4OS4wNjIgMjA5LjU2MiAzNzguOTM3IDIwMy4zMTIgMzcyLjY4OEwxMzkuMzEyIDMwOC42ODhaTTIzNS4zMTIgMjEyLjY4OEMyMjkuMDYyIDIwNi40MzggMjE4LjkzNyAyMDYuNDM4IDIxMi42ODggMjEyLjY4OFMyMDYuNDM4IDIyOS4wNjMgMjEyLjY4OCAyMzUuMzEyTDI3Ni42ODggMjk5LjMxMkMyNzkuODEyIDMwMi40MzggMjgzLjkwNiAzMDQgMjg4IDMwNFMyOTYuMTg4IDMwMi40MzggMjk5LjMxMiAyOTkuMzEyQzMwNS41NjIgMjkzLjA2MiAzMDUuNTYyIDI4Mi45MzcgMjk5LjMxMiAyNzYuNjg4TDIzNS4zMTIgMjEyLjY4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
const VacuumRobot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.867 64 256S150.131 64 256 64S448 150.133 448 256S361.869 448 256 448ZM256 96C213.156 96 172.906 112.719 142.672 143.062C133.312 152.438 133.344 167.656 142.734 177C152.141 186.344 167.328 186.344 176.672 176.938C197.828 155.688 226 144 256 144C317.75 144 368 194.25 368 256C368 286 356.297 314.156 335.062 335.344C325.672 344.719 325.641 359.906 335 369.281C339.688 374 345.844 376.344 352 376.344C358.125 376.344 364.266 374 368.938 369.344C399.281 339.094 416 298.844 416 256C416 167.781 344.219 96 256 96ZM155.312 228.688C149.062 222.438 138.937 222.438 132.688 228.688S126.438 245.063 132.688 251.312L260.688 379.312C263.812 382.438 267.906 384 272 384S280.188 382.438 283.312 379.312C289.562 373.062 289.562 362.937 283.312 356.688L155.312 228.688ZM139.312 308.688C133.062 302.438 122.937 302.438 116.688 308.688S110.438 325.063 116.688 331.312L180.688 395.312C183.812 398.438 187.906 400 192 400S200.188 398.438 203.312 395.312C209.562 389.062 209.562 378.937 203.312 372.688L139.312 308.688ZM235.312 212.688C229.062 206.438 218.937 206.438 212.688 212.688S206.438 229.063 212.688 235.312L276.688 299.312C279.812 302.438 283.906 304 288 304S296.188 302.438 299.312 299.312C305.562 293.062 305.562 282.937 299.312 276.688L235.312 212.688Z" />
    </Icon>
);

export default VacuumRobot;