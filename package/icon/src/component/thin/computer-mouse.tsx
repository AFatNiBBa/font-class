
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `computer-mouse` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=thin computer-mouse}
 * @preview ![computer-mouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMEgxNjBDNzEuNjI1IDAgMCA3MS42MjUgMCAxNjBWMzUyQzAgNDQwLjM3NSA3MS42MjUgNTEyIDE2MCA1MTJIMjI0QzMxMi4zNzUgNTEyIDM4NCA0NDAuMzc1IDM4NCAzNTJWMTYwQzM4NCA3MS42MjUgMzEyLjM3NSAwIDIyNCAwWk0xNiAxNjBDMTYgODAuNTk4IDgwLjU5OCAxNiAxNjAgMTZIMTg0VjE5MkgxNlYxNjBaTTM2OCAzNTJDMzY4IDQzMS40MDIgMzAzLjQwMiA0OTYgMjI0IDQ5NkgxNjBDODAuNTk4IDQ5NiAxNiA0MzEuNDAyIDE2IDM1MlYyMDhIMzY4VjM1MlpNMzY4IDE5MkgyMDBWMTZIMjI0QzMwMy40MDIgMTYgMzY4IDgwLjU5OCAzNjggMTYwVjE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ComputerMouse(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 0H160C71.625 0 0 71.625 0 160V352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V160C384 71.625 312.375 0 224 0ZM16 160C16 80.598 80.598 16 160 16H184V192H16V160ZM368 352C368 431.402 303.402 496 224 496H160C80.598 496 16 431.402 16 352V208H368V352ZM368 192H200V16H224C303.402 16 368 80.598 368 160V192Z" />
        </Icon>
    </>
}