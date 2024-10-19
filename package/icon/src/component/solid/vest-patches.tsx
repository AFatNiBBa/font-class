
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vest-patches` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vest-patches?s=solid vest-patches}
 * @preview ![vest-patches](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzcuMjUyIDIzOS44NzdMMzg0IDE2MFYzMkMzODQgMTQuMzI2IDM2OS42NzQgMCAzNTIgMEgzMjBDMzE1LjI1IDAgMzEwLjYyNSAxLjQwNiAzMDYuNjg4IDQuMDMxTDI4MS42ODggMjAuNjg4QzI0Ni42NTYgNDQuMDYzIDIwMS40MDYgNDQuMDYzIDE2Ni4zMTIgMjAuNjg4TDE0MS4zMTIgNC4wMzFDMTM3LjM3NSAxLjQwNiAxMzIuNzUgMCAxMjggMEg5NkM3OC4zMjYgMCA2NCAxNC4zMjYgNjQgMzJWMTYwTDEwLjc0OCAyMzkuODc3QzMuNzQgMjUwLjM4OSAwIDI2Mi43NDIgMCAyNzUuMzc3VjQ4MEMwIDQ5Ny42NzIgMTQuMzI2IDUxMiAzMiA1MTJIMTkyVjI4OEMxOTIgMjg0LjU2MSAxOTIuNTU1IDI4MS4xNDUgMTkzLjY0MyAyNzcuODgxTDIwNy4xMzUgMjM3LjQwNEwxNTAuMTg2IDY2LjU1OUMxNzMuMjA1IDc5LjQyOCAxOTguNTM3IDg2LjI1IDIyNCA4Ni4yNVMyNzQuNzk1IDc5LjQyNiAyOTcuODE0IDY2LjU1OUwyMjQgMjg4VjUxMkg0MTZDNDMzLjY3NCA1MTIgNDQ4IDQ5Ny42NzIgNDQ4IDQ4MFYyNzUuMzc3QzQ0OCAyNjIuNzQyIDQ0NC4yNiAyNTAuMzg5IDQzNy4yNTIgMjM5Ljg3N1pNNjMuNSAyNzIuNUM1OC44NDQgMjY3LjgxMiA1OC44NDQgMjYwLjE4OCA2My41IDI1NS41QzY4LjE4OCAyNTAuODEyIDc1LjgxMiAyNTAuODEyIDgwLjUgMjU1LjVMOTYgMjcxTDExMS41IDI1NS41QzExNi4xODggMjUwLjgxMiAxMjMuODEyIDI1MC44MTIgMTI4LjUgMjU1LjVDMTMzLjE1NiAyNjAuMTg4IDEzMy4xNTYgMjY3LjgxMiAxMjguNSAyNzIuNUwxMTMgMjg4TDEyOC41IDMwMy41QzEzMy4xNTYgMzA4LjE4OCAxMzMuMTU2IDMxNS44MTIgMTI4LjUgMzIwLjVDMTI2LjE1NiAzMjIuODQ0IDEyMy4wNjIgMzI0IDEyMCAzMjRTMTEzLjg0NCAzMjIuODQ0IDExMS41IDMyMC41TDk2IDMwNUw4MC41IDMyMC41Qzc4LjE1NiAzMjIuODQ0IDc1LjA2MiAzMjQgNzIgMzI0UzY1Ljg0NCAzMjIuODQ0IDYzLjUgMzIwLjVDNTguODQ0IDMxNS44MTIgNTguODQ0IDMwOC4xODggNjMuNSAzMDMuNUw3OSAyODhMNjMuNSAyNzIuNVpNOTYgNDU2QzczLjkwOCA0NTYgNTYgNDM4LjA5MiA1NiA0MTZTNzMuOTA4IDM3NiA5NiAzNzZTMTM2IDM5My45MDggMTM2IDQxNlMxMTguMDkyIDQ1NiA5NiA0NTZaTTM1OS4yMjcgMzM1Ljc4NUwzMTAuNjk3IDMzNkMzMDYuOTkyIDMzNi4wMTYgMzAzLjk4NCAzMzMuMDA2IDMwNCAzMjkuMjk3TDMwNC4yMTUgMjgwLjcyM0MzMDQuMzU5IDI2Ni4zMiAzMTYuNzUgMjU0Ljc5MSAzMzEuNDMgMjU2LjEwMkMzNDQuMjE5IDI1Ny4yNjQgMzUzLjU1OSAyNjguNzIxIDM1My40ODYgMjgxLjUyMUwzNTMuNDQ5IDI4Ni41NzhMMzU4LjUgMjg2LjU0MUMzNzEuMzI2IDI4Ni41MDYgMzgyLjczNiAyOTUuODE2IDM4My44OTggMzA4LjYxN0MzODUuMjA3IDMyMy4zMTEgMzczLjY1MiAzMzUuNjc2IDM1OS4yMjcgMzM1Ljc4NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function VestPatches(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M437.252 239.877L384 160V32C384 14.326 369.674 0 352 0H320C315.25 0 310.625 1.406 306.688 4.031L281.688 20.688C246.656 44.063 201.406 44.063 166.312 20.688L141.312 4.031C137.375 1.406 132.75 0 128 0H96C78.326 0 64 14.326 64 32V160L10.748 239.877C3.74 250.389 0 262.742 0 275.377V480C0 497.672 14.326 512 32 512H192V288C192 284.561 192.555 281.145 193.643 277.881L207.135 237.404L150.186 66.559C173.205 79.428 198.537 86.25 224 86.25S274.795 79.426 297.814 66.559L224 288V512H416C433.674 512 448 497.672 448 480V275.377C448 262.742 444.26 250.389 437.252 239.877ZM63.5 272.5C58.844 267.812 58.844 260.188 63.5 255.5C68.188 250.812 75.812 250.812 80.5 255.5L96 271L111.5 255.5C116.188 250.812 123.812 250.812 128.5 255.5C133.156 260.188 133.156 267.812 128.5 272.5L113 288L128.5 303.5C133.156 308.188 133.156 315.812 128.5 320.5C126.156 322.844 123.062 324 120 324S113.844 322.844 111.5 320.5L96 305L80.5 320.5C78.156 322.844 75.062 324 72 324S65.844 322.844 63.5 320.5C58.844 315.812 58.844 308.188 63.5 303.5L79 288L63.5 272.5ZM96 456C73.908 456 56 438.092 56 416S73.908 376 96 376S136 393.908 136 416S118.092 456 96 456ZM359.227 335.785L310.697 336C306.992 336.016 303.984 333.006 304 329.297L304.215 280.723C304.359 266.32 316.75 254.791 331.43 256.102C344.219 257.264 353.559 268.721 353.486 281.521L353.449 286.578L358.5 286.541C371.326 286.506 382.736 295.816 383.898 308.617C385.207 323.311 373.652 335.676 359.227 335.785Z" />
        </Icon>
    </>
}