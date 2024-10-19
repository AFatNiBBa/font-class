
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mars` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mars?s=regular mars}
 * @preview ![mars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgMzJIMzEyQzI5OC43NSAzMiAyODggNDIuNzUgMjg4IDU2UzI5OC43NSA4MCAzMTIgODBIMzY2LjA2NUwyODEuNzggMTY0LjI5N0MyNTAuNDc3IDE0MC41NjggMjEzLjQyOCAxMjggMTc2IDEyOEMxMzAuOTU4IDEyOCA4NS45MTcgMTQ1LjE4MiA1MS41NDkgMTc5LjU0OUMtMTcuMTgzIDI0OC4yODEgLTE3LjE4MyAzNTkuNzE5IDUxLjU0OSA0MjguNDUxQzg1LjkxNyA0NjIuODE4IDEzMC45NTggNDgwIDE3NiA0ODBTMjY2LjA4NCA0NjIuODE4IDMwMC40NTIgNDI4LjQ1MUMzNjMuMzcgMzY1LjUzMyAzNjcuOTg3IDI2Ny4yMDkgMzE1LjcxNSAxOTguMjM2TDQwMCAxMTMuOTM5VjE2OEM0MDAgMTgxLjI1IDQxMC43NSAxOTIgNDI0IDE5MlM0NDggMTgxLjI1IDQ0OCAxNjhWNTZDNDQ4IDQyLjc1IDQzNy4yNSAzMiA0MjQgMzJaTTI2Ni41MSAzOTQuNTFDMjQyLjMzNCA0MTguNjg2IDIxMC4xOSA0MzIgMTc2IDQzMlMxMDkuNjY3IDQxOC42ODYgODUuNDkxIDM5NC41MUMzNS41ODQgMzQ0LjYwNCAzNS41ODQgMjYzLjM5NiA4NS40OTEgMjEzLjQ5QzEwOS42NjcgMTg5LjMxNCAxNDEuODExIDE3NiAxNzYgMTc2UzI0Mi4zMzMgMTg5LjMxMiAyNjYuNTA4IDIxMy40ODhDMjY2LjUxMiAyMTMuNDkyIDI2Ni41MTIgMjEzLjQ5NiAyNjYuNTE2IDIxMy41QzI2Ni41MTggMjEzLjUwMiAyNjYuNTE4IDIxMy41MDIgMjY2LjUyIDIxMy41MDRDMzE2LjQxNSAyNjMuNDEgMzE2LjQxMyAzNDQuNjA3IDI2Ni41MSAzOTQuNTFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Mars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424 32H312C298.75 32 288 42.75 288 56S298.75 80 312 80H366.065L281.78 164.297C250.477 140.568 213.428 128 176 128C130.958 128 85.917 145.182 51.549 179.549C-17.183 248.281 -17.183 359.719 51.549 428.451C85.917 462.818 130.958 480 176 480S266.084 462.818 300.452 428.451C363.37 365.533 367.987 267.209 315.715 198.236L400 113.939V168C400 181.25 410.75 192 424 192S448 181.25 448 168V56C448 42.75 437.25 32 424 32ZM266.51 394.51C242.334 418.686 210.19 432 176 432S109.667 418.686 85.491 394.51C35.584 344.604 35.584 263.396 85.491 213.49C109.667 189.314 141.811 176 176 176S242.333 189.312 266.508 213.488C266.512 213.492 266.512 213.496 266.516 213.5C266.518 213.502 266.518 213.502 266.52 213.504C316.415 263.41 316.413 344.607 266.51 394.51Z" />
        </Icon>
    </>
}