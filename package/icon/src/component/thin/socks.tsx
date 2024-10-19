
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `socks` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/socks?s=thin socks}
 * @preview ![socks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTAuNTgyIDQ3OC45NjlDMTM1Ljg4MiA0OTAuMTI1IDExOC40MzMgNDk2IDEwMC4wOTMgNDk2QzY5LjUwNiA0OTYgNDIuMDc1IDQ3OS45NjkgMjYuNzAzIDQ1My4xNTZDNS44MTggNDE2Ljc1IDE3LjIzNyAzNjcuMjUgNTIuNTI2IDM0MC42MjVMMTQ0LjA4MyAyNzUuNjI1VjExMkgyNjQuMDU2QzI2OC40NzcgMTEyIDI3Mi4wNTQgMTA4LjQwNiAyNzIuMDU0IDEwNFMyNjguNDc3IDk2IDI2NC4wNTYgOTZIMTQ0LjA4M1YzOUMxNDQuMDgzIDI2LjMxMiAxNTQuMzE1IDE2IDE2Ni44NzUgMTZIMjgwLjA1MkMyODQuNDczIDE2IDI4OC4wNTEgMTIuNDA2IDI4OC4wNTEgOFMyODQuNDczIDAgMjgwLjA1MiAwSDE2Ni44NzVDMTQ1LjQ4OSAwIDEyOC4wODcgMTcuNSAxMjguMDg3IDM5VjI2Ny4zNzVMNDMuMDkgMzI3LjcxOUMwLjU4NCAzNTkuNzgxIC0xMi40MTMgNDE3LjEyNSAxMi44MzIgNDYxLjA5NEMzMS4wNzcgNDkyLjk2OSA2My43MTEgNTEyIDEwMC4wOTMgNTEyQzEyMS45NDggNTEyIDE0Mi43NCA1MDUgMTYwLjIzNiA0OTEuNzE5QzE2My43NjYgNDg5LjA2MiAxNjQuNDU0IDQ4NC4wMzEgMTYxLjc4MiA0ODAuNUMxNTkuMDk1IDQ3Ni45NjkgMTU0LjA4MSA0NzYuMzEyIDE1MC41ODIgNDc4Ljk2OVpNNDczLjIxMiAwSDM1MC44MzNDMzI5LjQ0OCAwIDMxMi4wNDUgMTcuNSAzMTIuMDQ1IDM5VjI2Ny4zNzVMMjI3LjA0OSAzMjcuNzE5QzE4NC41NDMgMzU5Ljc4MSAxNzEuNTQ2IDQxNy4xMjUgMTk2Ljc5IDQ2MS4wOTRDMjE1LjAzNiA0OTIuOTY5IDI0Ny42NjkgNTEyIDI4NC4wNTIgNTEyQzMwNS45MDYgNTEyIDMyNi42OTggNTA1IDM0NC4wNjkgNDkxLjgxMkw0NTkuNTEyIDQwOC4wNjJDNDkyLjM3OSAzODMuMzEyIDUxMiAzNDMuODQ0IDUxMiAzMDIuNVYzOUM1MTIgMTcuNSA0OTQuNTk4IDAgNDczLjIxMiAwWk00OTYuMDA0IDMwMi41QzQ5Ni4wMDQgMzM4Ljg0NCA0NzguNzU4IDM3My41MzEgNDQ5Ljk5OCAzOTUuMjE5TDMzNC41NCA0NzguOTY5QzMxOS44NCA0OTAuMTI1IDMwMi4zOTEgNDk2IDI4NC4wNTIgNDk2QzI1My40NjUgNDk2IDIyNi4wMzMgNDc5Ljk2OSAyMTAuNjYyIDQ1My4xNTZDMTg5Ljc3NiA0MTYuNzUgMjAxLjE5NSAzNjcuMjUgMjM2LjQ4NCAzNDAuNjI1TDMyOC4wNDIgMjc1LjYyNVYxMTJINDk2LjAwNFYzMDIuNVpNNDk2LjAwNCA5NkgzMjguMDQyVjM5QzMyOC4wNDIgMjYuMzEyIDMzOC4yNzQgMTYgMzUwLjgzMyAxNkg0NzMuMjEyQzQ4NS43NzIgMTYgNDk2LjAwNCAyNi4zMTIgNDk2LjAwNCAzOVY5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Socks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M150.582 478.969C135.882 490.125 118.433 496 100.093 496C69.506 496 42.075 479.969 26.703 453.156C5.818 416.75 17.237 367.25 52.526 340.625L144.083 275.625V112H264.056C268.477 112 272.054 108.406 272.054 104S268.477 96 264.056 96H144.083V39C144.083 26.312 154.315 16 166.875 16H280.052C284.473 16 288.051 12.406 288.051 8S284.473 0 280.052 0H166.875C145.489 0 128.087 17.5 128.087 39V267.375L43.09 327.719C0.584 359.781 -12.413 417.125 12.832 461.094C31.077 492.969 63.711 512 100.093 512C121.948 512 142.74 505 160.236 491.719C163.766 489.062 164.454 484.031 161.782 480.5C159.095 476.969 154.081 476.312 150.582 478.969ZM473.212 0H350.833C329.448 0 312.045 17.5 312.045 39V267.375L227.049 327.719C184.543 359.781 171.546 417.125 196.79 461.094C215.036 492.969 247.669 512 284.052 512C305.906 512 326.698 505 344.069 491.812L459.512 408.062C492.379 383.312 512 343.844 512 302.5V39C512 17.5 494.598 0 473.212 0ZM496.004 302.5C496.004 338.844 478.758 373.531 449.998 395.219L334.54 478.969C319.84 490.125 302.391 496 284.052 496C253.465 496 226.033 479.969 210.662 453.156C189.776 416.75 201.195 367.25 236.484 340.625L328.042 275.625V112H496.004V302.5ZM496.004 96H328.042V39C328.042 26.312 338.274 16 350.833 16H473.212C485.772 16 496.004 26.312 496.004 39V96Z" />
        </Icon>
    </>
}