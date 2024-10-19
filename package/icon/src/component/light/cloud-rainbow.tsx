
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-rainbow` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=light cloud-rainbow}
 * @preview ![cloud-rainbow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTQuNjg4IDMwNC4yMTlDNDA3LjE1NiAyNTguNzUgMzY3LjU2MiAyMjQgMzIwIDIyNEMzMDEuMDMxIDIyNCAyODIuOTA2IDIyOS40NjkgMjY3LjQwNiAyMzkuNjg4QzI0Ni42ODggMjEwLjIxOSAyMTIuNTk0IDE5MiAxNzYgMTkyQzExNC4yNSAxOTIgNjQgMjQyLjI1IDY0IDMwNEM2NCAzMDYuNzE5IDY0LjA5NCAzMDkuNDM4IDY0LjMxMiAzMTIuMTg4QzI1Ljg0NCAzMjguMDYyIDAgMzY1LjY1NiAwIDQwOEMwIDQ2NS4zNDQgNDYuNjU2IDUxMiAxMDQgNTEySDQwOEM0NjUuMzQ0IDUxMiA1MTIgNDY1LjM0NCA1MTIgNDA4QzUxMiAzNTIuOTA2IDQ2OC45MzggMzA3LjY4OCA0MTQuNjg4IDMwNC4yMTlaTTQwOCA0ODBIMTA0QzY0LjMxMiA0ODAgMzIgNDQ3LjY4OCAzMiA0MDhDMzIgMzc1LjQwNiA1NC4xODggMzQ2Ljg3NSA4NS45NjkgMzM4LjYyNUM5NC4xODcgMzM2LjQ2OSA5OS4zMTIgMzI4LjI4MSA5Ny42MjUgMzE5Ljk2OUM5Ni41NjIgMzE0Ljc4MSA5NiAzMDkuNDY5IDk2IDMwNEM5NiAyNTkuODc1IDEzMS44NzUgMjI0IDE3NiAyMjRDMjA2Ljk2OSAyMjQgMjM1LjQwNiAyNDIuMzEyIDI0OC40NjkgMjcwLjYyNUMyNTAuNjU2IDI3NS40MDYgMjU1LjA2MiAyNzguODEyIDI2MC4yNSAyNzkuNjg3QzI2NS40MzggMjgwLjc4MSAyNzAuNzE5IDI3OC45MzcgMjc0LjQwNiAyNzUuMTU2QzI4Ni41NjIgMjYyLjgxMiAzMDIuNzUgMjU2IDMyMCAyNTZDMzU1LjI4MSAyNTYgMzg0IDI4NC43MTkgMzg0IDMyMEMzODQgMzI4Ljg0NCAzOTEuMTU2IDMzNiA0MDAgMzM2SDQwOEM0NDcuNjg4IDMzNiA0ODAgMzY4LjMxMiA0ODAgNDA4UzQ0Ny42ODggNDgwIDQwOCA0ODBaTTI1NiAxNzIuMDMxQzI2MC41IDE3Mi4wMzEgMjY1IDE3MC4xMjUgMjY4LjE1NiAxNjYuNDM4QzM0MS4yNSA4MSA0NDcuNjI1IDMyIDU2MCAzMkM1NjguODQ0IDMyIDU3NiAyNC44NDQgNTc2IDE2UzU2OC44NDQgMCA1NjAgMEM0MzguMjgxIDAgMzIzLjAzMSA1My4wOTQgMjQzLjg0NCAxNDUuNjI1QzIzOC4wOTQgMTUyLjM0NCAyMzguODc1IDE2Mi40MzggMjQ1LjU5NCAxNjguMTg4QzI0OC42MjUgMTcwLjc4MSAyNTIuMzEyIDE3Mi4wMzEgMjU2IDE3Mi4wMzFaTTU2MCA5NkM0NzkuNjI1IDk2IDQwMi44MTIgMTI1LjkwNiAzNDMuNjg4IDE4MC4yMTlDMzM3LjE1NiAxODYuMTg3IDMzNi43NSAxOTYuMzEyIDM0Mi43MTkgMjAyLjgxMkMzNDUuODc1IDIwNi4yNSAzNTAuMTg4IDIwOCAzNTQuNSAyMDhDMzU4LjM3NSAyMDggMzYyLjI1IDIwNi41OTQgMzY1LjMxMiAyMDMuNzgxQzQxOC41MzEgMTU0LjkwNiA0ODcuNjU2IDEyOCA1NjAgMTI4QzU2OC44NDQgMTI4IDU3NiAxMjAuODQ0IDU3NiAxMTJTNTY4Ljg0NCA5NiA1NjAgOTZaTTU2MCAxOTJDNTE3LjA5NCAxOTIgNDc1LjQwNiAyMDQuMTg4IDQzOS4zNzUgMjI3LjIxOUM0MzEuOTM4IDIzMS45NjkgNDI5Ljc1IDI0MS44NzUgNDM0LjUzMSAyNDkuMzEyQzQzNy41NjIgMjU0LjA5NCA0NDIuNzUgMjU2LjY4OCA0NDggMjU2LjY4OEM0NTAuOTY5IDI1Ni42ODggNDUzLjkzOCAyNTUuODc1IDQ1Ni42MjUgMjU0LjE1NkM0ODcuNDY5IDIzNC40MzggNTIzLjIxOSAyMjQgNTYwIDIyNEM1NjguODQ0IDIyNCA1NzYgMjE2Ljg0NCA1NzYgMjA4UzU2OC44NDQgMTkyIDU2MCAxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CloudRainbow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M414.688 304.219C407.156 258.75 367.562 224 320 224C301.031 224 282.906 229.469 267.406 239.688C246.688 210.219 212.594 192 176 192C114.25 192 64 242.25 64 304C64 306.719 64.094 309.438 64.312 312.188C25.844 328.062 0 365.656 0 408C0 465.344 46.656 512 104 512H408C465.344 512 512 465.344 512 408C512 352.906 468.938 307.688 414.688 304.219ZM408 480H104C64.312 480 32 447.688 32 408C32 375.406 54.188 346.875 85.969 338.625C94.187 336.469 99.312 328.281 97.625 319.969C96.562 314.781 96 309.469 96 304C96 259.875 131.875 224 176 224C206.969 224 235.406 242.312 248.469 270.625C250.656 275.406 255.062 278.812 260.25 279.687C265.438 280.781 270.719 278.937 274.406 275.156C286.562 262.812 302.75 256 320 256C355.281 256 384 284.719 384 320C384 328.844 391.156 336 400 336H408C447.688 336 480 368.312 480 408S447.688 480 408 480ZM256 172.031C260.5 172.031 265 170.125 268.156 166.438C341.25 81 447.625 32 560 32C568.844 32 576 24.844 576 16S568.844 0 560 0C438.281 0 323.031 53.094 243.844 145.625C238.094 152.344 238.875 162.438 245.594 168.188C248.625 170.781 252.312 172.031 256 172.031ZM560 96C479.625 96 402.812 125.906 343.688 180.219C337.156 186.187 336.75 196.312 342.719 202.812C345.875 206.25 350.188 208 354.5 208C358.375 208 362.25 206.594 365.312 203.781C418.531 154.906 487.656 128 560 128C568.844 128 576 120.844 576 112S568.844 96 560 96ZM560 192C517.094 192 475.406 204.188 439.375 227.219C431.938 231.969 429.75 241.875 434.531 249.312C437.562 254.094 442.75 256.688 448 256.688C450.969 256.688 453.938 255.875 456.625 254.156C487.469 234.438 523.219 224 560 224C568.844 224 576 216.844 576 208S568.844 192 560 192Z" />
        </Icon>
    </>
}