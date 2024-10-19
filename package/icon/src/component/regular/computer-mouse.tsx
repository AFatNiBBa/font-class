
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `computer-mouse` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=regular computer-mouse}
 * @preview ![computer-mouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMEgxNjBDNzEuNjI1IDAgMCA3MS42MjUgMCAxNjBWMzUyQzAgNDQwLjM3NSA3MS42MjUgNTEyIDE2MCA1MTJIMjI0QzMxMi4zNzUgNTEyIDM4NCA0NDAuMzc1IDM4NCAzNTJWMTYwQzM4NCA3MS42MjUgMzEyLjM3NSAwIDIyNCAwWk0zMzYgMTYwVjE3NkgyMTZWNDhIMjI0QzI4NS44NzUgNDguMTI1IDMzNS44NzUgOTguMTI1IDMzNiAxNjBaTTE2MCA0OEgxNjhWMTc2SDQ4VjE2MEM0OC4xMjUgOTguMTI1IDk4LjEyNSA0OC4xMjUgMTYwIDQ4Wk0yMjQgNDY0SDE2MEM5OC4xMjUgNDYzLjg3NSA0OC4xMjUgNDEzLjg3NSA0OCAzNTJWMjI0SDMzNlYzNTJDMzM1Ljg3NSA0MTMuODc1IDI4NS44NzUgNDYzLjg3NSAyMjQgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ComputerMouse(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 0H160C71.625 0 0 71.625 0 160V352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V160C384 71.625 312.375 0 224 0ZM336 160V176H216V48H224C285.875 48.125 335.875 98.125 336 160ZM160 48H168V176H48V160C48.125 98.125 98.125 48.125 160 48ZM224 464H160C98.125 463.875 48.125 413.875 48 352V224H336V352C335.875 413.875 285.875 463.875 224 464Z" />
        </Icon>
    </>
}