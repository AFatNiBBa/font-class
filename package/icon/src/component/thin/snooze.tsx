
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `snooze` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=thin snooze}
 * @preview ![snooze](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTYuMDAxIDI0MEg0MC4wMDVDMzUuNTk4IDI0MCAzMi4wMDUgMjQzLjU5NCAzMi4wMDUgMjQ4UzM1LjU5OCAyNTYgNDAuMDA1IDI1NkgxOTkuMTg5TDEuNzg3IDQ5OC45NjlDLTAuMTUxIDUwMS4zNDQgLTAuNTU3IDUwNC42NTYgMC43ODcgNTA3LjQzN0MyLjA5OSA1MTAuMjE5IDQuOTEyIDUxMiA4LjAwNSA1MTJIMjAwLjAwMUMyMDQuNDA4IDUxMiAyMDguMDAxIDUwOC40MDYgMjA4LjAwMSA1MDRTMjA0LjQwOCA0OTYgMjAwLjAwMSA0OTZIMjQuODE3TDIyMi4yMiAyNTMuMDMxQzIyNC4xNTcgMjUwLjY1NiAyMjQuNTYzIDI0Ny4zNDQgMjIzLjIyIDI0NC41NjNDMjIxLjkwNyAyNDEuNzgxIDIxOS4wOTUgMjQwIDIxNi4wMDEgMjQwWk00MzkuOTk3IDQxNkgzMTIuODc0TDQ0Ni4xODQgMjUzLjA2MkM0NDguMTUzIDI1MC42ODcgNDQ4LjU1OSAyNDcuMzc1IDQ0Ny4yMTUgMjQ0LjU2MkM0NDUuOTAzIDI0MS43ODEgNDQzLjA5IDI0MCA0MzkuOTk3IDI0MEgzMTEuOTk5QzMwNy41OTMgMjQwIDMwMy45OTkgMjQzLjU5NCAzMDMuOTk5IDI0OFMzMDcuNTkzIDI1NiAzMTEuOTk5IDI1Nkg0MjMuMTIyTDI4OS44MTIgNDE4LjkzOEMyODcuODQzIDQyMS4zMTMgMjg3LjQzNyA0MjQuNjI1IDI4OC43ODEgNDI3LjQzOEMyOTAuMDkzIDQzMC4yMTkgMjkyLjkwNiA0MzIgMjk2IDQzMkg0MzkuOTk3QzQ0NC40MDMgNDMyIDQ0Ny45OTYgNDI4LjQwNiA0NDcuOTk2IDQyNFM0NDQuNDAzIDQxNiA0MzkuOTk3IDQxNlpNMTY4LjAwMiAxNzZIMzExLjk5OUMzMTYuNDA1IDE3NiAzMTkuOTk5IDE3Mi40MDYgMzE5Ljk5OSAxNjhTMzE2LjQwNSAxNjAgMzExLjk5OSAxNjBIMTg1Ljk3TDMxNy45MzcgMTMuMzQ0QzMyMC4wNjIgMTEgMzIwLjU5MyA3LjYyNSAzMTkuMzEyIDQuNzVDMzE4LjAzIDEuODQ0IDMxNS4xNTUgMCAzMTEuOTk5IDBIMTg0LjAwMkMxNzkuNTk2IDAgMTc2LjAwMiAzLjU5NCAxNzYuMDAyIDhTMTc5LjU5NiAxNiAxODQuMDAyIDE2SDI5NC4wMzFMMTYyLjA2NSAxNjIuNjU2QzE1OS45NCAxNjUgMTU5LjQwOCAxNjguMzc1IDE2MC42OSAxNzEuMjVDMTYxLjk3MSAxNzQuMTU2IDE2NC44NDYgMTc2IDE2OC4wMDIgMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Snooze(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M216.001 240H40.005C35.598 240 32.005 243.594 32.005 248S35.598 256 40.005 256H199.189L1.787 498.969C-0.151 501.344 -0.557 504.656 0.787 507.437C2.099 510.219 4.912 512 8.005 512H200.001C204.408 512 208.001 508.406 208.001 504S204.408 496 200.001 496H24.817L222.22 253.031C224.157 250.656 224.563 247.344 223.22 244.563C221.907 241.781 219.095 240 216.001 240ZM439.997 416H312.874L446.184 253.062C448.153 250.687 448.559 247.375 447.215 244.562C445.903 241.781 443.09 240 439.997 240H311.999C307.593 240 303.999 243.594 303.999 248S307.593 256 311.999 256H423.122L289.812 418.938C287.843 421.313 287.437 424.625 288.781 427.438C290.093 430.219 292.906 432 296 432H439.997C444.403 432 447.996 428.406 447.996 424S444.403 416 439.997 416ZM168.002 176H311.999C316.405 176 319.999 172.406 319.999 168S316.405 160 311.999 160H185.97L317.937 13.344C320.062 11 320.593 7.625 319.312 4.75C318.03 1.844 315.155 0 311.999 0H184.002C179.596 0 176.002 3.594 176.002 8S179.596 16 184.002 16H294.031L162.065 162.656C159.94 165 159.408 168.375 160.69 171.25C161.971 174.156 164.846 176 168.002 176Z" />
        </Icon>
    </>
}