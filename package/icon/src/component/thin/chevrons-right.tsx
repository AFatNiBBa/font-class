
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevrons-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=thin chevrons-right}
 * @preview ![chevrons-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTQuNzc0IDQ1LjkzNEw0MjguMTggMjU2TDE5NC43NzQgNDY2LjA2NkMxOTMuMDI0IDQ2Ny42MjkgMTkyLjEzMyA0NjkuODE2IDE5Mi4xMzMgNDcyLjAwNEMxOTIuMTMzIDQ3My45MSAxOTIuODA1IDQ3NS44MTcgMTk0LjE4IDQ3Ny4zNDhDMTk3LjE0OSA0ODAuNjI5IDIwMi4xOTUgNDgwLjkxIDIwNS40OTIgNDc3Ljk0Mkw0NDUuNDkyIDI2MS45MzhDNDQ4LjgzNiAyNTguOTM4IDQ0OC44MzYgMjUzLjA2MiA0NDUuNDkyIDI1MC4wNjJMMjA1LjQ5MiAzNC4wNThDMjAyLjE5NSAzMS4wOSAxOTcuMTQ5IDMxLjM3MSAxOTQuMTggMzQuNjUyQzE5MS4xOTUgMzcuOTM0IDE5MS40OTIgNDMuMDI3IDE5NC43NzQgNDUuOTM0Wk0yNTMuMzc3IDI2MS45MzhDMjU2LjcyMSAyNTguOTM4IDI1Ni43MjEgMjUzLjA2MiAyNTMuMzc3IDI1MC4wNjJMMTMuMzc3IDM0LjA1OEMxMC4wOCAzMS4wOSA1LjAzMyAzMS4zNzEgMi4wNjUgMzQuNjUyQy0wLjkyIDM3LjkzNCAtMC42MjMgNDMuMDI3IDIuNjU4IDQ1LjkzNEwyMzYuMDY1IDI1NkwyLjY1OCA0NjYuMDY2QzAuOTA4IDQ2Ny42MjkgMC4wMTggNDY5LjgxNiAwLjAxOCA0NzIuMDA0QzAuMDE4IDQ3My45MSAwLjY5IDQ3NS44MTcgMi4wNjUgNDc3LjM0OEM1LjAzMyA0ODAuNjI5IDEwLjA4IDQ4MC45MSAxMy4zNzcgNDc3Ljk0MkwyNTMuMzc3IDI2MS45MzhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronsRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M194.774 45.934L428.18 256L194.774 466.066C193.024 467.629 192.133 469.816 192.133 472.004C192.133 473.91 192.805 475.817 194.18 477.348C197.149 480.629 202.195 480.91 205.492 477.942L445.492 261.938C448.836 258.938 448.836 253.062 445.492 250.062L205.492 34.058C202.195 31.09 197.149 31.371 194.18 34.652C191.195 37.934 191.492 43.027 194.774 45.934ZM253.377 261.938C256.721 258.938 256.721 253.062 253.377 250.062L13.377 34.058C10.08 31.09 5.033 31.371 2.065 34.652C-0.92 37.934 -0.623 43.027 2.658 45.934L236.065 256L2.658 466.066C0.908 467.629 0.018 469.816 0.018 472.004C0.018 473.91 0.69 475.817 2.065 477.348C5.033 480.629 10.08 480.91 13.377 477.942L253.377 261.938Z" />
        </Icon>
    </>
}