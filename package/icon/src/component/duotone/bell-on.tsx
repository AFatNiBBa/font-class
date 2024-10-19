
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bell-on` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=duotone bell-on}
 * @preview ![bell-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCAzODRDNTQzLjg3NSA0MDAuMzc1IDUzMSA0MTYgNTExLjg3NSA0MTZIMTI4LjEyNUMxMDkgNDE2IDk2LjEyNSA0MDAuMzc1IDk2IDM4NEM5NiAzNzUuODc1IDk5IDM2OC4xMjUgMTA0LjYyNSAzNjIuMjVDMTI0IDM0MS41IDE2MC4xMjUgMzEwLjI1IDE2MC4xMjUgMjA4QzE2MC4xMjUgMTMwLjI1IDIxNC41IDY4LjEyNSAyODggNTIuODc1VjMyQzI4OCAxNC4zNzUgMzAyLjI1IDAgMzIwIDBDMzM3LjYyNSAwIDM1MiAxNC4zNzUgMzUyIDMyVjUyLjg3NUM0MjUuNSA2OC4xMjUgNDc5Ljg3NSAxMzAuMjUgNDc5Ljg3NSAyMDhDNDc5Ljg3NSAzMTAuMjUgNTE2IDM0MS41IDUzNS4zNzUgMzYyLjI1QzU0MSAzNjguMTI1IDU0NCAzNzUuODc1IDU0NCAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTg4IDE2OEgyNEMxMC43NSAxNjggMCAxNzguNzUgMCAxOTJTMTAuNzUgMjE2IDI0IDIxNkg4OEMxMDEuMjUgMjE2IDExMiAyMDUuMjUgMTEyIDE5MlMxMDEuMjUgMTY4IDg4IDE2OFpNMTMxLjEyNSA1NS4yNUw3NS42MjUgMjMuMjVDNjguMjUgMTguNzUgNTkgMTguNjI1IDUxLjM3NSAyMi44NzVDNDMuODc1IDI3LjI1IDM5LjI1IDM1LjI1IDM5LjI1IDQzLjg3NUMzOS4zNzUgNTIuNjI1IDQ0LjEyNSA2MC42MjUgNTEuNjI1IDY0Ljc1TDEwNy4xMjUgOTYuNzVDMTE0LjUgMTAxLjI1IDEyMy43NSAxMDEuMzc1IDEzMS4zNzUgOTcuMTI1QzEzOC44NzUgOTIuNzUgMTQzLjUgODQuNzUgMTQzLjUgNzYuMTI1QzE0My4zNzUgNjcuMzc1IDEzOC42MjUgNTkuMzc1IDEzMS4xMjUgNTUuMjVaTTU4OC4zNzUgNjQuNzVDNTk5LjYyNSA1OCA2MDMuMjUgNDMuNSA1OTYuNzUgMzIuMjVDNTkwLjI1IDIwLjg3NSA1NzUuNzUgMTYuODc1IDU2NC4zNzUgMjMuMjVMNTA5IDU1LjI1QzQ5OS41IDYwLjYyNSA0OTUgNzEuNzUgNDk3Ljc1IDgyLjI1QzUwMC42MjUgOTIuNzUgNTEwLjEyNSAxMDAgNTIxIDEwMEM1MjUuMTI1IDEwMCA1MjkuMjUgOTguODc1IDUzMyA5Ni43NUw1ODguMzc1IDY0Ljc1Wk0zMjAgNTEyQzM1NS4zNzUgNTEyIDM4NCA0ODMuMzc1IDM4NCA0NDhIMjU2QzI1NiA0ODMuMzc1IDI4NC42MjUgNTEyIDMyMCA1MTJaTTYxNiAxNjhINTUyQzUzOC43NSAxNjggNTI4IDE3OC43NSA1MjggMTkyUzUzOC43NSAyMTYgNTUyIDIxNkg2MTZDNjI5LjI1IDIxNiA2NDAgMjA1LjI1IDY0MCAxOTJTNjI5LjI1IDE2OCA2MTYgMTY4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BellOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M544 384C543.875 400.375 531 416 511.875 416H128.125C109 416 96.125 400.375 96 384C96 375.875 99 368.125 104.625 362.25C124 341.5 160.125 310.25 160.125 208C160.125 130.25 214.5 68.125 288 52.875V32C288 14.375 302.25 0 320 0C337.625 0 352 14.375 352 32V52.875C425.5 68.125 479.875 130.25 479.875 208C479.875 310.25 516 341.5 535.375 362.25C541 368.125 544 375.875 544 384Z" />
            <path d="M88 168H24C10.75 168 0 178.75 0 192S10.75 216 24 216H88C101.25 216 112 205.25 112 192S101.25 168 88 168ZM131.125 55.25L75.625 23.25C68.25 18.75 59 18.625 51.375 22.875C43.875 27.25 39.25 35.25 39.25 43.875C39.375 52.625 44.125 60.625 51.625 64.75L107.125 96.75C114.5 101.25 123.75 101.375 131.375 97.125C138.875 92.75 143.5 84.75 143.5 76.125C143.375 67.375 138.625 59.375 131.125 55.25ZM588.375 64.75C599.625 58 603.25 43.5 596.75 32.25C590.25 20.875 575.75 16.875 564.375 23.25L509 55.25C499.5 60.625 495 71.75 497.75 82.25C500.625 92.75 510.125 100 521 100C525.125 100 529.25 98.875 533 96.75L588.375 64.75ZM320 512C355.375 512 384 483.375 384 448H256C256 483.375 284.625 512 320 512ZM616 168H552C538.75 168 528 178.75 528 192S538.75 216 552 216H616C629.25 216 640 205.25 640 192S629.25 168 616 168Z" />
        </Icon>
    </>
}