
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb-on` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-on?s=solid lightbulb-on}
 * @preview ![lightbulb-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgNDU0LjM3NUMyNDAuMTI1IDQ2MC42MjUgMjQxLjk5OSA0NjYuNzUgMjQ1LjM3NSA0NzJMMjYyLjUgNDk3Ljc1QzI2Ny43NSA1MDUuNjI1IDI3OS43NSA1MTIgMjg5LjEyNSA1MTJIMzUwLjg3NUMzNjAuMzc1IDUxMiAzNzIuMjUgNTA1LjYyNSAzNzcuNSA0OTcuNzVMMzk0LjYyNSA0NzJDMzk3Ljg3NSA0NjYuNjI1IDM5OS43NSA0NjAuNjI1IDQwMCA0NTQuMzc1VjQxNkgyNDBWNDU0LjM3NVpNMzE5LjUgMEMyMTcuNSAwLjI1IDE0NCA4MyAxNDQgMTc2QzE0NCAyMTguNjI1IDE1OS4zNzUgMjU5Ljc1IDE4Ny41IDI5MS43NUMyMDQuMTI1IDMxMC42MjUgMjI5Ljg3NSAzNTAgMjM5Ljc1IDM4My4yNUMyMzkuNzUgMzgzLjUgMjM5Ljg3NSAzODMuNzUgMjM5Ljg3NSAzODRINDAwLjEyNUM0MDAuMTI1IDM4My43NSA0MDAuMjUgMzgzLjUgNDAwLjI1IDM4My4yNUM0MTAuMTI1IDM1MCA0MzUuODc1IDMxMC42MjUgNDUyLjUgMjkxLjc1QzQ4MC42MjUgMjU5Ljc1IDQ5NiAyMTguNjI1IDQ5NiAxNzZDNDk2IDc4LjYyNSA0MTYuODc1IC0wLjI1IDMxOS41IDBaTTMyMCA5NkMyNzUuODc1IDk2IDI0MCAxMzEuODc1IDI0MCAxNzZDMjQwIDE4NC44NzUgMjMyLjg3NSAxOTIgMjI0IDE5MlMyMDggMTg0Ljg3NSAyMDggMTc2QzIwOC4xMjUgMTE0LjEyNSAyNTguMTI1IDY0LjEyNSAzMjAgNjRDMzI4Ljg3NSA2NCAzMzYgNzEuMTI1IDMzNiA4MFMzMjguODc1IDk2IDMyMCA5NlpNMTEyIDE5MkMxMTIgMTc4Ljc1IDEwMS4yNSAxNjggODggMTY4SDI0QzEwLjc1IDE2OCAwIDE3OC43NSAwIDE5MlMxMC43NSAyMTYgMjQgMjE2SDg4QzEwMS4yNSAyMTYgMTEyIDIwNS4yNSAxMTIgMTkyWk02MTYgMTY4SDU1MkM1MzguNzUgMTY4IDUyOCAxNzguNzUgNTI4IDE5MlM1MzguNzUgMjE2IDU1MiAyMTZINjE2QzYyOS4yNSAyMTYgNjQwIDIwNS4yNSA2NDAgMTkyUzYyOS4yNSAxNjggNjE2IDE2OFpNMTMxLjEyNSA1NS4yNUw3NS42MjUgMjMuMjVDNjguMjUgMTguNzUgNTkgMTguNjI1IDUxLjM3NSAyMi44NzVDNDMuODc1IDI3LjI1IDM5LjI1IDM1LjI1IDM5LjI1IDQzLjg3NUMzOS4zNzUgNTIuNjI1IDQ0LjEyNSA2MC42MjUgNTEuNjI1IDY0Ljc1TDEwNy4xMjUgOTYuNzVDMTE0LjUgMTAxLjI1IDEyMy43NSAxMDEuMzc1IDEzMS4zNzUgOTcuMTI1QzEzOC44NzUgOTIuNzUgMTQzLjUgODQuNzUgMTQzLjUgNzYuMTI1QzE0My4zNzUgNjcuMzc1IDEzOC42MjUgNTkuMzc1IDEzMS4xMjUgNTUuMjVaTTU4OC4zNzUgMzE5LjI1TDUzMi44NzUgMjg3LjI1QzUyNS41IDI4Mi43NSA1MTYuMjUgMjgyLjYyNSA1MDguNjI1IDI4Ni44NzVDNTAxLjEyNSAyOTEuMjUgNDk2LjUgMjk5LjI1IDQ5Ni41IDMwNy44NzVDNDk2LjYyNSAzMTYuNjI1IDUwMS4zNzUgMzI0LjYyNSA1MDguODc1IDMyOC43NUw1NjQuMzc1IDM2MC43NUM1NzUuNzUgMzY3LjEyNSA1OTAuMjUgMzYzLjEyNSA1OTYuNzUgMzUxLjc1QzYwMy4yNSAzNDAuNSA1OTkuNSAzMjYgNTg4LjM3NSAzMTkuMjVaTTEwNy4xMjUgMjg3LjI1TDUxLjYyNSAzMTkuMjVDNDQuMTI1IDMyMy4zNzUgMzkuMzc1IDMzMS4zNzUgMzkuMjUgMzQwLjEyNUMzOS4yNSAzNDguNzUgNDMuODc1IDM1Ni43NSA1MS4zNzUgMzYxLjEyNUM1OSAzNjUuMzc1IDY4LjI1IDM2NS4yNSA3NS42MjUgMzYwLjc1TDEzMS4xMjUgMzI4Ljc1QzE0Mi4yNSAzMjIgMTQ1Ljk5OSAzMDcuNSAxMzkuNSAyOTYuMjVDMTMzIDI4NC44NzUgMTE4LjUgMjgwLjg3NSAxMDcuMTI1IDI4Ny4yNVpNNTIxIDEwMEM1MjUuMTI1IDEwMCA1MjkuMjUgOTguODc1IDUzMyA5Ni43NUw1ODguMzc1IDY0Ljc1QzU5OS42MjUgNTggNjAzLjI1IDQzLjUgNTk2Ljc1IDMyLjI1QzU5MC4yNSAyMC44NzUgNTc1Ljc1IDE2Ljg3NSA1NjQuMzc1IDIzLjI1TDUwOSA1NS4yNUM0OTkuNSA2MC42MjUgNDk1IDcxLjc1IDQ5Ny43NSA4Mi4yNUM1MDAuNjI1IDkyLjc1IDUxMC4xMjUgMTAwIDUyMSAxMDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LightbulbOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M240 454.375C240.125 460.625 241.999 466.75 245.375 472L262.5 497.75C267.75 505.625 279.75 512 289.125 512H350.875C360.375 512 372.25 505.625 377.5 497.75L394.625 472C397.875 466.625 399.75 460.625 400 454.375V416H240V454.375ZM319.5 0C217.5 0.25 144 83 144 176C144 218.625 159.375 259.75 187.5 291.75C204.125 310.625 229.875 350 239.75 383.25C239.75 383.5 239.875 383.75 239.875 384H400.125C400.125 383.75 400.25 383.5 400.25 383.25C410.125 350 435.875 310.625 452.5 291.75C480.625 259.75 496 218.625 496 176C496 78.625 416.875 -0.25 319.5 0ZM320 96C275.875 96 240 131.875 240 176C240 184.875 232.875 192 224 192S208 184.875 208 176C208.125 114.125 258.125 64.125 320 64C328.875 64 336 71.125 336 80S328.875 96 320 96ZM112 192C112 178.75 101.25 168 88 168H24C10.75 168 0 178.75 0 192S10.75 216 24 216H88C101.25 216 112 205.25 112 192ZM616 168H552C538.75 168 528 178.75 528 192S538.75 216 552 216H616C629.25 216 640 205.25 640 192S629.25 168 616 168ZM131.125 55.25L75.625 23.25C68.25 18.75 59 18.625 51.375 22.875C43.875 27.25 39.25 35.25 39.25 43.875C39.375 52.625 44.125 60.625 51.625 64.75L107.125 96.75C114.5 101.25 123.75 101.375 131.375 97.125C138.875 92.75 143.5 84.75 143.5 76.125C143.375 67.375 138.625 59.375 131.125 55.25ZM588.375 319.25L532.875 287.25C525.5 282.75 516.25 282.625 508.625 286.875C501.125 291.25 496.5 299.25 496.5 307.875C496.625 316.625 501.375 324.625 508.875 328.75L564.375 360.75C575.75 367.125 590.25 363.125 596.75 351.75C603.25 340.5 599.5 326 588.375 319.25ZM107.125 287.25L51.625 319.25C44.125 323.375 39.375 331.375 39.25 340.125C39.25 348.75 43.875 356.75 51.375 361.125C59 365.375 68.25 365.25 75.625 360.75L131.125 328.75C142.25 322 145.999 307.5 139.5 296.25C133 284.875 118.5 280.875 107.125 287.25ZM521 100C525.125 100 529.25 98.875 533 96.75L588.375 64.75C599.625 58 603.25 43.5 596.75 32.25C590.25 20.875 575.75 16.875 564.375 23.25L509 55.25C499.5 60.625 495 71.75 497.75 82.25C500.625 92.75 510.125 100 521 100Z" />
        </Icon>
    </>
}