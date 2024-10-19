
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-right-to-line` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=light arrow-right-to-line}
 * @preview ![arrow-right-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgNjRDNDIzLjE1NiA2NCA0MTYgNzEuMTU2IDQxNiA4MFY0MzJDNDE2IDQ0MC44NDQgNDIzLjE1NiA0NDggNDMyIDQ0OFM0NDggNDQwLjg0NCA0NDggNDMyVjgwQzQ0OCA3MS4xNTYgNDQwLjg0NCA2NCA0MzIgNjRaTTIxOS4zMTIgMTAwLjY4OEMyMTMuMDYyIDk0LjQzOCAyMDIuOTM3IDk0LjQzOCAxOTYuNjg4IDEwMC42ODhTMTkwLjQzOCAxMTcuMDYzIDE5Ni42ODggMTIzLjMxMkwzMTMuMzc1IDI0MEgxNkM3LjE1NiAyNDAgMCAyNDcuMTU2IDAgMjU2UzcuMTU2IDI3MiAxNiAyNzJIMzEzLjM3NUwxOTYuNjg4IDM4OC42ODhDMTkwLjQzOCAzOTQuOTM4IDE5MC40MzggNDA1LjA2MyAxOTYuNjg4IDQxMS4zMTJTMjEzLjA2MyA0MTcuNTYyIDIxOS4zMTIgNDExLjMxMkwzNjMuMzEyIDI2Ny4zMTJDMzY2LjQzOCAyNjQuMTg4IDM2OCAyNjAuMDk0IDM2OCAyNTZTMzY2LjQzOCAyNDcuODEyIDM2My4zMTIgMjQ0LjY4OEwyMTkuMzEyIDEwMC42ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowRightToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 64C423.156 64 416 71.156 416 80V432C416 440.844 423.156 448 432 448S448 440.844 448 432V80C448 71.156 440.844 64 432 64ZM219.312 100.688C213.062 94.438 202.937 94.438 196.688 100.688S190.438 117.063 196.688 123.312L313.375 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H313.375L196.688 388.688C190.438 394.938 190.438 405.063 196.688 411.312S213.063 417.562 219.312 411.312L363.312 267.312C366.438 264.188 368 260.094 368 256S366.438 247.812 363.312 244.688L219.312 100.688Z" />
        </Icon>
    </>
}