
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `claw-marks` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/claw-marks?s=duotone claw-marks}
 * @preview ![claw-marks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYuOTg1IDIyNC41MDhDNi4yNDUgMjI0LjE1NiA1LjUxOCAyMjMuOTk5IDQuODMxIDIyMy45OTlDMi4xMTYgMjIzLjk5OSAwIDIyNi40NDUgMCAyMjkuMDQ3QzAgMjMwLjI0MiAwLjQ0NiAyMzEuNDY5IDEuNDg1IDIzMi41MDhMODYuNjA2IDMxNy42MzNDOTIuNjA2IDMyMy42MzMgOTUuOTgxIDMzMS43NTggOTUuOTgxIDM0MC4yNThWMzg0LjAwOEgxMzkuNzI5QzE0OC4yMjkgMzg0LjAwOCAxNTYuMzU0IDM4Ny4zODMgMTYyLjM1MiAzOTMuMzgzTDI3OS40NzMgNTEwLjUwOEMyODAuNTEyIDUxMS41NDcgMjgxLjczOSA1MTEuOTkyIDI4Mi45MzMgNTExLjk5MkMyODUuNTM1IDUxMS45OTIgMjg3Ljk4MSA1MDkuODc2IDI4Ny45ODEgNTA3LjE2MkMyODcuOTgxIDUwMi41MTggMjA4LjQyMiAzMjAuMDk3IDYuOTg1IDIyNC41MDhaTTUwNi45MjYgMjg3Ljk5MkM1MDkuNTI4IDI4Ny45OTIgNTExLjk3NCAyODUuODc2IDUxMS45NzQgMjgzLjE2MkM1MTEuOTc0IDI4Mi40NzQgNTExLjgxNyAyODEuNzQ4IDUxMS40NjUgMjgxLjAwOEM0MTguNDg5IDg0LjAyIDIzNC44MjcgLTAuMDAxIDIyOC44MjEgLTAuMDAxQzIyNi4xMDcgLTAuMDAxIDIyMy45OSAyLjQ0NSAyMjMuOTkgNS4wNDdDMjIzLjk5IDYuMjQyIDIyNC40MzYgNy40NjkgMjI1LjQ3NSA4LjUwOEwyNDYuNiAyOS42MzNDMjUyLjYgMzUuNjMzIDI1NS45NzUgNDMuNzU4IDI1NS45NzUgNTIuMjU4Vjk2LjAwOEgyOTkuNzIzQzMwOC4yMjMgOTYuMDA4IDMxNi4zNDYgOTkuMzgzIDMyMi4zNDYgMTA1LjM4M0wzNzQuNTk0IDE1Ny42MzNDMzgwLjU5NCAxNjMuNjMzIDM4My45NjkgMTcxLjc1OCAzODMuOTY5IDE4MC4yNThWMjI0LjAwOEg0MjcuNzE3QzQzNi4yMTcgMjI0LjAwOCA0NDQuMzQyIDIyNy4zODMgNDUwLjM0MiAyMzMuMzgzTDUwMy40NjUgMjg2LjUwOEM1MDQuNTA0IDI4Ny41NDcgNTA1LjczMSAyODcuOTkyIDUwNi45MjYgMjg3Ljk5MlogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PHBhdGggZD0iTTIwNC4yNTMgMTIwLjM4NEMxOTYuNTA0IDExNC4yNTkgMTkyLjAwNCAxMDUuMTM0IDE5Mi4wMDQgOTUuMjU5VjY0LjAwOUgxMzQuMDA2QzEyOC4wMDYgNjQuMDA5IDEyMi4wMDYgNjIuMTM0IDExNi44ODIgNTkuMDA5QzY4LjgxOCAyOC41MzkgMTMuNjI0IDAuMDA2IDguNTkgMC4wMDZDMy43NjQgMC4wMDYgMCA0LjMwOSAwIDguOTM5QzAgMTEuMDYzIDAuNzkyIDEzLjI1NiAyLjYzNiAxNS4xMzRMMTgyLjYyOSAxOTUuMTM0QzE4OC42MjkgMjAxLjEzNCAxOTIuMDA0IDIwOS4yNTkgMTkyLjAwNCAyMTcuNzU5VjI1Ni4wMDlIMjMwLjI1MkMyMzguNzUyIDI1Ni4wMDkgMjQ2Ljg3NyAyNTkuMzg0IDI1Mi44NzYgMjY1LjM4NEwzNDIuNjIzIDM1NS4xMzRDMzQ4LjYyMyAzNjEuMTM0IDM1MS45OTggMzY5LjI1OSAzNTEuOTk4IDM3Ny43NTlWNDE2LjAwOUgzOTAuMjQ2QzM5OC43NDYgNDE2LjAwOSA0MDYuODcgNDE5LjM4NCA0MTIuODcgNDI1LjM4NEw0OTYuODY3IDUwOS4zODRDNDk4LjY5OSA1MTEuMjE1IDUwMC44NTkgNTEyIDUwMi45NjQgNTEyQzUwNy42MDkgNTEyIDUxMS45ODcgNTA4LjE4MSA1MTEuOTg3IDUwMy4zNjFDNTExLjk4NyA0OTguMDAzIDQyNC40MDkgMjkwLjkyNiAyMDQuMjUzIDEyMC4zODRaICIgY2xhc3M9ImZhLXByaW1hcnkiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function ClawMarks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M6.985 224.508C6.245 224.156 5.518 223.999 4.831 223.999C2.116 223.999 0 226.445 0 229.047C0 230.242 0.446 231.469 1.485 232.508L86.606 317.633C92.606 323.633 95.981 331.758 95.981 340.258V384.008H139.729C148.229 384.008 156.354 387.383 162.352 393.383L279.473 510.508C280.512 511.547 281.739 511.992 282.933 511.992C285.535 511.992 287.981 509.876 287.981 507.162C287.981 502.518 208.422 320.097 6.985 224.508ZM506.926 287.992C509.528 287.992 511.974 285.876 511.974 283.162C511.974 282.474 511.817 281.748 511.465 281.008C418.489 84.02 234.827 -0.001 228.821 -0.001C226.107 -0.001 223.99 2.445 223.99 5.047C223.99 6.242 224.436 7.469 225.475 8.508L246.6 29.633C252.6 35.633 255.975 43.758 255.975 52.258V96.008H299.723C308.223 96.008 316.346 99.383 322.346 105.383L374.594 157.633C380.594 163.633 383.969 171.758 383.969 180.258V224.008H427.717C436.217 224.008 444.342 227.383 450.342 233.383L503.465 286.508C504.504 287.547 505.731 287.992 506.926 287.992Z " />
            <path d="M204.253 120.384C196.504 114.259 192.004 105.134 192.004 95.259V64.009H134.006C128.006 64.009 122.006 62.134 116.882 59.009C68.818 28.539 13.624 0.006 8.59 0.006C3.764 0.006 0 4.309 0 8.939C0 11.063 0.792 13.256 2.636 15.134L182.629 195.134C188.629 201.134 192.004 209.259 192.004 217.759V256.009H230.252C238.752 256.009 246.877 259.384 252.876 265.384L342.623 355.134C348.623 361.134 351.998 369.259 351.998 377.759V416.009H390.246C398.746 416.009 406.87 419.384 412.87 425.384L496.867 509.384C498.699 511.215 500.859 512 502.964 512C507.609 512 511.987 508.181 511.987 503.361C511.987 498.003 424.409 290.926 204.253 120.384Z " />
        </Icon>
    </>
}