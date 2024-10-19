
import { Icon } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=regular wheelchair}
 * @preview ![wheelchair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTEuMzQ0IDM5NC44MjhDMjc5LjY0MSAzODguNjA5IDI2NS4xMjUgMzkyLjk2OSAyNTguODU5IDQwNC42ODhDMjM5LjMxMiA0NDEuMjgxIDIwMS40MzggNDY0IDE2MCA0NjRDOTguMjUgNDY0IDQ4IDQxMy43NSA0OCAzNTJDNDggMzA0Ljg5MSA3Ny43NjYgMjYyLjUzMSAxMjIuMDYyIDI0Ni41NzhDMTM0LjUzMSAyNDIuMDk0IDE0MS4wMTYgMjI4LjM0NCAxMzYuNTE2IDIxNS44NzVDMTMyLjAzMSAyMDMuMzc1IDExOC4yNjYgMTk2LjkwNiAxMDUuODEyIDIwMS40MjJDNDIuNTE2IDIyNC4yMDMgMCAyODQuNzE5IDAgMzUyQzAgNDQwLjIxOSA3MS43ODEgNTEyIDE2MCA1MTJDMjE5LjE4OCA1MTIgMjczLjI5NyA0NzkuNTQ3IDMwMS4yMDMgNDI3LjMxMkMzMDcuNDUzIDQxNS42MjUgMzAzLjAzMSA0MDEuMDc4IDI5MS4zNDQgMzk0LjgyOFpNMTkyIDk2QzIxOC41MSA5NiAyNDAgNzQuNTEgMjQwIDQ4UzIxOC41MSAwIDE5MiAwUzE0NCAyMS40OSAxNDQgNDhTMTY1LjQ5IDk2IDE5MiA5NlpNNTEwLjc2MiA0MzIuNDA2QzUwNi41OSA0MTkuODQ0IDQ5My4wMTIgNDEzIDQ4MC40MDIgNDE3LjIzNEw0NTMuMjAxIDQyNi4yOTdMNDA1Ljk4MiAzMTguMzc1QzQwMi4xNyAzMDkuNjQxIDM5My41MjkgMzA0IDM4My45OTggMzA0SDI0NC4wMzFMMjI5LjQ4NCAyMjRIMzQzLjk5OEMzNTcuMjQ4IDIyNCAzNjcuOTk4IDIxMy4yNSAzNjcuOTk4IDIwMFMzNTcuMjQ4IDE3NiAzNDMuOTk4IDE3NkgyMjAuNzU2TDIxNS42MDkgMTQ3LjcwM0MyMTMuMjM0IDEzNC42NTYgMjAwLjcwMyAxMjUuOTM4IDE4Ny43MDMgMTI4LjM5MUMxNzQuNjcyIDEzMC43NjYgMTY2LjAxNiAxNDMuMjUgMTY4LjM5MSAxNTYuMjk3TDIwMC4zOTEgMzMyLjI5N0MyMDIuNDY5IDM0My43MDMgMjEyLjQwNiAzNTIgMjI0IDM1MkgzNjguMjk1TDQxOC4wMTQgNDY1LjYyNUM0MjEuOTIgNDc0LjU2MiA0MzAuNzAxIDQ4MCA0MzkuOTk4IDQ4MEM0NDIuNTE0IDQ4MCA0NDUuMDc2IDQ3OS42MDkgNDQ3LjU5MiA0NzguNzY2TDQ5NS41OSA0NjIuNzY2QzUwOC4xNjggNDU4LjU3OCA1MTQuOTQ5IDQ0NC45ODQgNTEwLjc2MiA0MzIuNDA2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path d="M291.344 394.828C279.641 388.609 265.125 392.969 258.859 404.688C239.312 441.281 201.438 464 160 464C98.25 464 48 413.75 48 352C48 304.891 77.766 262.531 122.062 246.578C134.531 242.094 141.016 228.344 136.516 215.875C132.031 203.375 118.266 196.906 105.812 201.422C42.516 224.203 0 284.719 0 352C0 440.219 71.781 512 160 512C219.188 512 273.297 479.547 301.203 427.312C307.453 415.625 303.031 401.078 291.344 394.828ZM192 96C218.51 96 240 74.51 240 48S218.51 0 192 0S144 21.49 144 48S165.49 96 192 96ZM510.762 432.406C506.59 419.844 493.012 413 480.402 417.234L453.201 426.297L405.982 318.375C402.17 309.641 393.529 304 383.998 304H244.031L229.484 224H343.998C357.248 224 367.998 213.25 367.998 200S357.248 176 343.998 176H220.756L215.609 147.703C213.234 134.656 200.703 125.938 187.703 128.391C174.672 130.766 166.016 143.25 168.391 156.297L200.391 332.297C202.469 343.703 212.406 352 224 352H368.295L418.014 465.625C421.92 474.562 430.701 480 439.998 480C442.514 480 445.076 479.609 447.592 478.766L495.59 462.766C508.168 458.578 514.949 444.984 510.762 432.406Z" />
    </Icon>
);

export default Wheelchair;