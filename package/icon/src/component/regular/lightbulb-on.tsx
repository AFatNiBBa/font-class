
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb-on` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-on?s=regular lightbulb-on}
 * @preview ![lightbulb-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDcuMTI1IDI4Ny4yNUw1MS42MjUgMzE5LjI1QzQ0LjEyNSAzMjMuMzc1IDM5LjM3NSAzMzEuMzc1IDM5LjI1IDM0MC4xMjVDMzkuMjUgMzQ4Ljc1IDQzLjg3NSAzNTYuNzUgNTEuMzc1IDM2MS4xMjVDNTkgMzY1LjM3NSA2OC4yNSAzNjUuMjUgNzUuNjI1IDM2MC43NUwxMzEuMTI1IDMyOC43NUMxNDIuMjUgMzIyIDE0NiAzMDcuNSAxMzkuNSAyOTYuMjVDMTMzIDI4NC44NzUgMTE4LjUgMjgwLjg3NSAxMDcuMTI1IDI4Ny4yNVpNMTMxLjEyNSA1NS4yNUw3NS42MjUgMjMuMjVDNjguMjUgMTguNzUgNTkgMTguNjI1IDUxLjM3NSAyMi44NzVDNDMuODc1IDI3LjI1IDM5LjI1IDM1LjI1IDM5LjI1IDQzLjg3NUMzOS4zNzUgNTIuNjI1IDQ0LjEyNSA2MC42MjUgNTEuNjI1IDY0Ljc1TDEwNy4xMjUgOTYuNzVDMTE0LjUgMTAxLjI1IDEyMy43NSAxMDEuMzc1IDEzMS4zNzUgOTcuMTI1QzEzOC44NzUgOTIuNzUgMTQzLjUgODQuNzUgMTQzLjUgNzYuMTI1QzE0My4zNzUgNjcuMzc1IDEzOC42MjUgNTkuMzc1IDEzMS4xMjUgNTUuMjVaTTExMiAxOTJDMTEyIDE3OC43NSAxMDEuMjUgMTY4IDg4IDE2OEgyNEMxMC43NSAxNjggMCAxNzguNzUgMCAxOTJTMTAuNzUgMjE2IDI0IDIxNkg4OEMxMDEuMjUgMjE2IDExMiAyMDUuMjUgMTEyIDE5MlpNNTIxIDEwMEM1MjUuMTI1IDEwMCA1MjkuMjUgOTguODc1IDUzMyA5Ni43NUw1ODguMzc1IDY0Ljc1QzU5OS42MjUgNTggNjAzLjI1IDQzLjUgNTk2Ljc1IDMyLjI1QzU5MC4yNSAyMC44NzUgNTc1Ljc1IDE2Ljg3NSA1NjQuMzc1IDIzLjI1TDUwOSA1NS4yNUM0OTkuNSA2MC42MjUgNDk1IDcxLjc1IDQ5Ny43NSA4Mi4yNUM1MDAuNjI1IDkyLjc1IDUxMC4xMjUgMTAwIDUyMSAxMDBaTTYxNiAxNjhINTUyQzUzOC43NSAxNjggNTI4IDE3OC43NSA1MjggMTkyUzUzOC43NSAyMTYgNTUyIDIxNkg2MTZDNjI5LjI1IDIxNiA2NDAgMjA1LjI1IDY0MCAxOTJTNjI5LjI1IDE2OCA2MTYgMTY4Wk01ODguMzc1IDMxOS4yNUw1MzIuODc1IDI4Ny4yNUM1MjUuNSAyODIuNzUgNTE2LjI1IDI4Mi42MjUgNTA4LjYyNSAyODYuODc1QzUwMS4xMjUgMjkxLjI1IDQ5Ni41IDI5OS4yNSA0OTYuNSAzMDcuODc1QzQ5Ni42MjUgMzE2LjYyNSA1MDEuMzc1IDMyNC42MjUgNTA4Ljg3NSAzMjguNzVMNTY0LjM3NSAzNjAuNzVDNTc1Ljc1IDM2Ny4xMjUgNTkwLjI1IDM2My4xMjUgNTk2Ljc1IDM1MS43NUM2MDMuMjUgMzQwLjUgNTk5LjUgMzI2IDU4OC4zNzUgMzE5LjI1Wk0zMjAgMEMyMTguMDA0IDAuMzIgMTQ0IDgyLjk3MyAxNDQgMTc1Ljk5MkMxNDQgMjIwLjM2NyAxNjAuNDM4IDI2MC44MzYgMTg3LjU2MiAyOTEuNzczQzIwNC4wOTQgMzEwLjYxNyAyMjkuOTA2IDM1MC4wMDQgMjM5Ljc4MSAzODMuMjIzQzIzOS44MTIgMzgzLjQ3MyAyMzkuODQ0IDM4My43MzggMjM5Ljg3NSAzODQuMDA0SDQwMC4xMjVDNDAwLjE1NiAzODMuNzM4IDQwMC4xODcgMzgzLjQ4OCA0MDAuMjE5IDM4My4yMjNDNDEwLjA5NCAzNTAuMDA0IDQzNS45MDYgMzEwLjYxNyA0NTIuNDM3IDI5MS43NzNDNDc5LjU2MiAyNjAuODM2IDQ5NiAyMjAuMzY3IDQ5NiAxNzUuOTkyQzQ5NiA3OC43OTcgNDE3LjIxMyAwLjAwNCAzMjAgMFpNNDE2LjM1NSAyNjAuMTE3QzQwMC42OTkgMjc3Ljk2NSAzODEuMzE4IDMwNi40MTQgMzY3LjMwNyAzMzYuMDA0SDI3Mi42OTNDMjU4LjY4NCAzMDYuNDE0IDIzOS4zMDUgMjc3Ljk2OSAyMjMuNjU0IDI2MC4xMjlDMjAzLjI0MiAyMzYuODQ4IDE5MiAyMDYuOTY1IDE5MiAxNzUuOTkyQzE5MiAxMTMuMjczIDI0MC4xMTUgNDguMjUgMzE5Ljk5NCA0OEMzOTAuNTggNDguMDA0IDQ0OCAxMDUuNDIyIDQ0OCAxNzUuOTkyQzQ0OCAyMDYuOTY1IDQzNi43NTggMjM2Ljg0OCA0MTYuMzU1IDI2MC4xMTdaTTI0MC4wNjIgNDU0LjMyOEMyNDAuMDYyIDQ2MC42MjUgMjQxLjkzOCA0NjYuNzgxIDI0NS40MDYgNDcyLjAzMUwyNjIuNSA0OTcuNzE5QzI2Ny43NSA1MDUuNTk0IDI3OS42ODggNTEyIDI4OS4xNTYgNTEySDM1MC44NzVDMzYwLjMxMiA1MTIgMzcyLjI1IDUwNS41OTQgMzc3LjUgNDk3LjcxOUwzOTQuNTk0IDQ3Mi4wMzFDMzk3LjUzMSA0NjcuNTk0IDM5OS45MzcgNDU5LjY1NiAzOTkuOTM3IDQ1NC4zMjhMNDAwIDQxNS45ODRIMjQwTDI0MC4wNjIgNDU0LjMyOFpNMzA0IDgwQzI1OS44OTEgODAgMjI0IDExNS44NzUgMjI0IDE2MEMyMjQgMTY4Ljg0NCAyMzEuMTU2IDE3NiAyNDAgMTc2UzI1NiAxNjguODQ0IDI1NiAxNjBDMjU2IDEzMy41MzEgMjc3LjUzMSAxMTIgMzA0IDExMkMzMTIuODQ0IDExMiAzMjAgMTA0Ljg0NCAzMjAgOTZTMzEyLjg0NCA4MCAzMDQgODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LightbulbOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M107.125 287.25L51.625 319.25C44.125 323.375 39.375 331.375 39.25 340.125C39.25 348.75 43.875 356.75 51.375 361.125C59 365.375 68.25 365.25 75.625 360.75L131.125 328.75C142.25 322 146 307.5 139.5 296.25C133 284.875 118.5 280.875 107.125 287.25ZM131.125 55.25L75.625 23.25C68.25 18.75 59 18.625 51.375 22.875C43.875 27.25 39.25 35.25 39.25 43.875C39.375 52.625 44.125 60.625 51.625 64.75L107.125 96.75C114.5 101.25 123.75 101.375 131.375 97.125C138.875 92.75 143.5 84.75 143.5 76.125C143.375 67.375 138.625 59.375 131.125 55.25ZM112 192C112 178.75 101.25 168 88 168H24C10.75 168 0 178.75 0 192S10.75 216 24 216H88C101.25 216 112 205.25 112 192ZM521 100C525.125 100 529.25 98.875 533 96.75L588.375 64.75C599.625 58 603.25 43.5 596.75 32.25C590.25 20.875 575.75 16.875 564.375 23.25L509 55.25C499.5 60.625 495 71.75 497.75 82.25C500.625 92.75 510.125 100 521 100ZM616 168H552C538.75 168 528 178.75 528 192S538.75 216 552 216H616C629.25 216 640 205.25 640 192S629.25 168 616 168ZM588.375 319.25L532.875 287.25C525.5 282.75 516.25 282.625 508.625 286.875C501.125 291.25 496.5 299.25 496.5 307.875C496.625 316.625 501.375 324.625 508.875 328.75L564.375 360.75C575.75 367.125 590.25 363.125 596.75 351.75C603.25 340.5 599.5 326 588.375 319.25ZM320 0C218.004 0.32 144 82.973 144 175.992C144 220.367 160.438 260.836 187.562 291.773C204.094 310.617 229.906 350.004 239.781 383.223C239.812 383.473 239.844 383.738 239.875 384.004H400.125C400.156 383.738 400.187 383.488 400.219 383.223C410.094 350.004 435.906 310.617 452.437 291.773C479.562 260.836 496 220.367 496 175.992C496 78.797 417.213 0.004 320 0ZM416.355 260.117C400.699 277.965 381.318 306.414 367.307 336.004H272.693C258.684 306.414 239.305 277.969 223.654 260.129C203.242 236.848 192 206.965 192 175.992C192 113.273 240.115 48.25 319.994 48C390.58 48.004 448 105.422 448 175.992C448 206.965 436.758 236.848 416.355 260.117ZM240.062 454.328C240.062 460.625 241.938 466.781 245.406 472.031L262.5 497.719C267.75 505.594 279.688 512 289.156 512H350.875C360.312 512 372.25 505.594 377.5 497.719L394.594 472.031C397.531 467.594 399.937 459.656 399.937 454.328L400 415.984H240L240.062 454.328ZM304 80C259.891 80 224 115.875 224 160C224 168.844 231.156 176 240 176S256 168.844 256 160C256 133.531 277.531 112 304 112C312.844 112 320 104.844 320 96S312.844 80 304 80Z" />
        </Icon>
    </>
}