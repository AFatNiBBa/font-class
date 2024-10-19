
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-running` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-running?s=duotone person-running}
 * @preview ![person-running](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCA5NkMzMTQuNSA5NiAzMzYgNzQuNSAzMzYgNDhTMzE0LjUgMCAyODggMFMyNDAgMjEuNSAyNDAgNDhTMjYxLjUgOTYgMjg4IDk2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMjkuNzUgMzE3LjVMMTE0Ljg3NSAzNTJINDhDMzAuMzc1IDM1MiAxNiAzNjYuMzc1IDE2IDM4NFMzMC4zNzUgNDE2IDQ4IDQxNkgxMjUuNUMxNDQuNzUgNDE2IDE2MiA0MDQuNSAxNjkuNSAzODYuODc1TDE3OC4zNzUgMzY2LjM3NUwxNjcuNjI1IDM2MC4xMjVDMTUwLjM3NSAzNDkuODc1IDEzNy42MjUgMzM0Ljc1IDEyOS43NSAzMTcuNVpNNDAwIDIyNEgzNTZMMzI5Ljg3NSAxNzAuNzVDMzE3LjM3NSAxNDUuMjUgMjk0LjUgMTI2LjUgMjY4LjEyNSAxMTkuNzVMMTk3IDk4LjYyNUMxNjguNzUgOTEuODc1IDEzOS4yNSA5OC4xMjUgMTE2LjI1IDExNS43NUw3Ni41IDE0Ni4yNUM2Mi41IDE1NyA1OS44NzUgMTc3IDcwLjYyNSAxOTEuMTI1QzgxLjM3NSAyMDUuMTI1IDEwMS41IDIwNy43NSAxMTUuNSAxOTdMMTU1LjEyNSAxNjYuNjI1QzE2Mi44NzUgMTYwLjc1IDE3Mi42MjUgMTU4LjYyNSAxODAuNSAxNjAuNUwxOTUuMTI1IDE2NC43NUwxNTcuNjI1IDI1Mi4yNUMxNDUgMjgxLjYyNSAxNTYuMzc1IDMxNi4yNSAxODQgMzMyLjVMMjY5IDM4Mi42MjVMMjQxLjUgNDcwLjM3NUMyMzYuMjUgNDg3LjI1IDI0NS42MjUgNTA1LjI1IDI2Mi41IDUxMC41QzI2NS42MjUgNTExLjUgMjY4Ljg3NSA1MTIgMjcyIDUxMkMyODUuNjI1IDUxMiAyOTguMjUgNTAzLjI1IDMwMi41IDQ4OS41TDMzNC4yNSAzODguNUMzNDAuMTI1IDM2Ny43NSAzMzEuMjUgMzQ1LjM3NSAzMTIuNSAzMzQuMTI1TDI1MS4zNzUgMjk4TDI4Mi42MjUgMjE5LjYyNUwzMDIuODc1IDI2MS4xMjVDMzEwLjg3NSAyNzcuMzc1IDMyNy44NzUgMjg4IDM0NiAyODhINDAwQzQxNy42MjUgMjg4IDQzMiAyNzMuNjI1IDQzMiAyNTZDNDMyIDIzOC4yNSA0MTcuNjI1IDIyNCA0MDAgMjI0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonRunning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M288 96C314.5 96 336 74.5 336 48S314.5 0 288 0S240 21.5 240 48S261.5 96 288 96Z" />
            <path d="M129.75 317.5L114.875 352H48C30.375 352 16 366.375 16 384S30.375 416 48 416H125.5C144.75 416 162 404.5 169.5 386.875L178.375 366.375L167.625 360.125C150.375 349.875 137.625 334.75 129.75 317.5ZM400 224H356L329.875 170.75C317.375 145.25 294.5 126.5 268.125 119.75L197 98.625C168.75 91.875 139.25 98.125 116.25 115.75L76.5 146.25C62.5 157 59.875 177 70.625 191.125C81.375 205.125 101.5 207.75 115.5 197L155.125 166.625C162.875 160.75 172.625 158.625 180.5 160.5L195.125 164.75L157.625 252.25C145 281.625 156.375 316.25 184 332.5L269 382.625L241.5 470.375C236.25 487.25 245.625 505.25 262.5 510.5C265.625 511.5 268.875 512 272 512C285.625 512 298.25 503.25 302.5 489.5L334.25 388.5C340.125 367.75 331.25 345.375 312.5 334.125L251.375 298L282.625 219.625L302.875 261.125C310.875 277.375 327.875 288 346 288H400C417.625 288 432 273.625 432 256C432 238.25 417.625 224 400 224Z" />
        </Icon>
    </>
}