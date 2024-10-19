
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb-on` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-on?s=duotone lightbulb-on}
 * @preview ![lightbulb-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxOS41IDAuMDAxQzIxNy41IDAuMjUxIDE0NCA4My4wMDIgMTQ0IDE3Ni4wMDNDMTQ0IDIxOC42MjkgMTU5LjM3NSAyNTkuNzU0IDE4Ny41IDI5MS43NTVDMjA0LjEyNSAzMTAuNjMgMjI5Ljg3NSAzNTAuMDA2IDIzOS43NSAzODMuMjU2QzIzOS43NSAzODMuNTA2IDIzOS44NzUgMzgzLjc1NiAyMzkuODc1IDM4NC4wMDZINDAwLjEyNUM0MDAuMTI1IDM4My43NTYgNDAwLjI1IDM4My41MDYgNDAwLjI1IDM4My4yNTZDNDEwLjEyNSAzNTAuMDA2IDQzNS44NzUgMzEwLjYzIDQ1Mi41IDI5MS43NTVDNDgwLjYyNSAyNTkuNzU0IDQ5NiAyMTguNjI5IDQ5NiAxNzYuMDAzQzQ5NiA3OC42MjcgNDE2Ljg3NSAtMC4yNDkgMzE5LjUgMC4wMDFaTTMyMCA5Ni4wMDJDMjc1Ljg3NSA5Ni4wMDIgMjQwIDEzMS44NzcgMjQwIDE3Ni4wMDNDMjQwIDE4NC44NzggMjMyLjg3NSAxOTIuMDAzIDIyNCAxOTIuMDAzUzIwOCAxODQuODc4IDIwOCAxNzYuMDAzQzIwOC4xMjUgMTE0LjEyNyAyNTguMTI1IDY0LjEyNiAzMjAgNjQuMDAxQzMyOC44NzUgNjQuMDAxIDMzNiA3MS4xMjcgMzM2IDgwLjAwMlMzMjguODc1IDk2LjAwMiAzMjAgOTYuMDAyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNDAuMjUgNDE1Ljc3M0wyNDAuMzEyIDQ1NC4wOTRDMjQwLjMxMiA0NjAuMzkxIDI0Mi4xODggNDY2LjU0NyAyNDUuNjU2IDQ3MS43OTdMMjYyLjc1IDQ5Ny40ODVDMjY4IDUwNS4zNiAyNzkuOTM4IDUxMS43NjcgMjg5LjQwNiA1MTEuNzY3SDM1MS4xMjVDMzYwLjU2MiA1MTEuNzY3IDM3Mi41IDUwNS4zNiAzNzcuNzUgNDk3LjQ4NUwzOTQuODQ0IDQ3MS43OTdDMzk3Ljc4MSA0NjcuMzYgNDAwLjE4NyA0NTkuNDIyIDQwMC4xODcgNDU0LjA5NEw0MDAuMjUgNDE1Ljc3M1YzODMuNzczSDI0MC4yNVY0MTUuNzczWk0xMTIgMTkxLjc3QzExMiAxNzguNTIgMTAxLjI1IDE2Ny43NyA4OCAxNjcuNzdIMjRDMTAuNzUgMTY3Ljc3IDAgMTc4LjUyIDAgMTkxLjc3QzAgMjA1LjAyIDEwLjc1IDIxNS43NyAyNCAyMTUuNzdIODhDMTAxLjI1IDIxNS43NyAxMTIgMjA1LjAyIDExMiAxOTEuNzdaTTYxNiAxNjcuNzdINTUyQzUzOC43NSAxNjcuNzcgNTI4IDE3OC41MiA1MjggMTkxLjc3QzUyOCAyMDUuMDIgNTM4Ljc1IDIxNS43NyA1NTIgMjE1Ljc3SDYxNkM2MjkuMjUgMjE1Ljc3IDY0MCAyMDUuMDIgNjQwIDE5MS43N0M2NDAgMTc4LjUyIDYyOS4yNSAxNjcuNzcgNjE2IDE2Ny43N1pNMTMxLjEyNSA1NS4wMThMNzUuNjI1IDIzLjAxOEM2OC4yNSAxOC41MTggNTkgMTguMzkzIDUxLjM3NSAyMi42NDNDNDMuODc1IDI3LjAxOCAzOS4yNSAzNS4wMTggMzkuMjUgNDMuNjQzQzM5LjM3NSA1Mi4zOTMgNDQuMTI1IDYwLjM5MyA1MS42MjUgNjQuNTE4TDEwNy4xMjUgOTYuNTE5QzExNC41IDEwMS4wMTkgMTIzLjc1IDEwMS4xNDQgMTMxLjM3NSA5Ni44OTRDMTM4Ljg3NSA5Mi41MTkgMTQzLjUgODQuNTE4IDE0My41IDc1Ljg5M0MxNDMuMzc1IDY3LjE0MyAxMzguNjI1IDU5LjE0MyAxMzEuMTI1IDU1LjAxOFpNNTg4LjM3NSAzMTkuMDIyTDUzMi44NzUgMjg3LjAyMUM1MjUuNSAyODIuNTIxIDUxNi4yNSAyODIuMzk2IDUwOC42MjUgMjg2LjY0NkM1MDEuMTI1IDI5MS4wMjEgNDk2LjUgMjk5LjAyMSA0OTYuNSAzMDcuNjQ3QzQ5Ni42MjUgMzE2LjM5NyA1MDEuMzc1IDMyNC4zOTcgNTA4Ljg3NSAzMjguNTIyTDU2NC4zNzUgMzYwLjUyMkM1NzUuNzUgMzY2Ljg5NyA1OTAuMjUgMzYyLjg5NyA1OTYuNzUgMzUxLjUyMkM2MDMuMjUgMzQwLjI3MiA1OTkuNSAzMjUuNzcyIDU4OC4zNzUgMzE5LjAyMlpNMTA3LjEyNSAyODcuMDIxTDUxLjYyNSAzMTkuMDIyQzQ0LjEyNSAzMjMuMTQ3IDM5LjM3NSAzMzEuMTQ3IDM5LjI1IDMzOS44OTdDMzkuMjUgMzQ4LjUyMiA0My44NzUgMzU2LjUyMiA1MS4zNzUgMzYwLjg5N0M1OSAzNjUuMTQ3IDY4LjI1IDM2NS4wMjIgNzUuNjI1IDM2MC41MjJMMTMxLjEyNSAzMjguNTIyQzE0Mi4yNSAzMjEuNzcyIDE0NS45OTkgMzA3LjI3MiAxMzkuNSAyOTYuMDIxQzEzMyAyODQuNjQ2IDExOC41IDI4MC42NDYgMTA3LjEyNSAyODcuMDIxWk01MjEgOTkuNzY5QzUyNS4xMjUgOTkuNzY5IDUyOS4yNSA5OC42NDQgNTMzIDk2LjUxOUw1ODguMzc1IDY0LjUxOEM1OTkuNjI1IDU3Ljc2OCA2MDMuMjUgNDMuMjY4IDU5Ni43NSAzMi4wMThDNTkwLjI1IDIwLjY0MyA1NzUuNzUgMTYuNjQyIDU2NC4zNzUgMjMuMDE4TDUwOSA1NS4wMThDNDk5LjUgNjAuMzkzIDQ5NSA3MS41MTggNDk3Ljc1IDgyLjAxOEM1MDAuNjI1IDkyLjUxOSA1MTAuMTI1IDk5Ljc2OSA1MjEgOTkuNzY5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LightbulbOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M319.5 0.001C217.5 0.251 144 83.002 144 176.003C144 218.629 159.375 259.754 187.5 291.755C204.125 310.63 229.875 350.006 239.75 383.256C239.75 383.506 239.875 383.756 239.875 384.006H400.125C400.125 383.756 400.25 383.506 400.25 383.256C410.125 350.006 435.875 310.63 452.5 291.755C480.625 259.754 496 218.629 496 176.003C496 78.627 416.875 -0.249 319.5 0.001ZM320 96.002C275.875 96.002 240 131.877 240 176.003C240 184.878 232.875 192.003 224 192.003S208 184.878 208 176.003C208.125 114.127 258.125 64.126 320 64.001C328.875 64.001 336 71.127 336 80.002S328.875 96.002 320 96.002Z" />
            <path d="M240.25 415.773L240.312 454.094C240.312 460.391 242.188 466.547 245.656 471.797L262.75 497.485C268 505.36 279.938 511.767 289.406 511.767H351.125C360.562 511.767 372.5 505.36 377.75 497.485L394.844 471.797C397.781 467.36 400.187 459.422 400.187 454.094L400.25 415.773V383.773H240.25V415.773ZM112 191.77C112 178.52 101.25 167.77 88 167.77H24C10.75 167.77 0 178.52 0 191.77C0 205.02 10.75 215.77 24 215.77H88C101.25 215.77 112 205.02 112 191.77ZM616 167.77H552C538.75 167.77 528 178.52 528 191.77C528 205.02 538.75 215.77 552 215.77H616C629.25 215.77 640 205.02 640 191.77C640 178.52 629.25 167.77 616 167.77ZM131.125 55.018L75.625 23.018C68.25 18.518 59 18.393 51.375 22.643C43.875 27.018 39.25 35.018 39.25 43.643C39.375 52.393 44.125 60.393 51.625 64.518L107.125 96.519C114.5 101.019 123.75 101.144 131.375 96.894C138.875 92.519 143.5 84.518 143.5 75.893C143.375 67.143 138.625 59.143 131.125 55.018ZM588.375 319.022L532.875 287.021C525.5 282.521 516.25 282.396 508.625 286.646C501.125 291.021 496.5 299.021 496.5 307.647C496.625 316.397 501.375 324.397 508.875 328.522L564.375 360.522C575.75 366.897 590.25 362.897 596.75 351.522C603.25 340.272 599.5 325.772 588.375 319.022ZM107.125 287.021L51.625 319.022C44.125 323.147 39.375 331.147 39.25 339.897C39.25 348.522 43.875 356.522 51.375 360.897C59 365.147 68.25 365.022 75.625 360.522L131.125 328.522C142.25 321.772 145.999 307.272 139.5 296.021C133 284.646 118.5 280.646 107.125 287.021ZM521 99.769C525.125 99.769 529.25 98.644 533 96.519L588.375 64.518C599.625 57.768 603.25 43.268 596.75 32.018C590.25 20.643 575.75 16.642 564.375 23.018L509 55.018C499.5 60.393 495 71.518 497.75 82.018C500.625 92.519 510.125 99.769 521 99.769Z" />
        </Icon>
    </>
}