
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diamond` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=regular diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuOTcgMjIyLjEyOUwyODkuODcxIDE0LjAyOUMyODAuNTE3IDQuNjc2IDI2OC4yNTkgMCAyNTYgMEMyNDMuNzQyIDAgMjMxLjQ4MiA0LjY3NiAyMjIuMTI4IDE0LjAyOUwxNC4wMjkgMjIyLjEyOUMtNC42NzYgMjQwLjgzNCAtNC42NzYgMjcxLjE2NCAxNC4wMjkgMjg5Ljg3MUwyMjIuMTI4IDQ5Ny45NjlDMjMxLjQ4MiA1MDcuMzIyIDI0My43NDIgNTEyIDI1NiA1MTJDMjY4LjI1OSA1MTIgMjgwLjUxNyA1MDcuMzIyIDI4OS44NzEgNDk3Ljk2OUw0OTcuOTcgMjg5Ljg3MUM1MTYuNjc1IDI3MS4xNjQgNTE2LjY3NSAyNDAuODM0IDQ5Ny45NyAyMjIuMTI5Wk0yNTYuMDcgNDY0LjAyN0w0Ny45NyAyNTYuMDdMMjU1Ljk2OCA0OC4wMDhMNDY0LjAzMSAyNTUuOTNMMjU2LjA3IDQ2NC4wMjdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Diamond(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.97 222.129L289.871 14.029C280.517 4.676 268.259 0 256 0C243.742 0 231.482 4.676 222.128 14.029L14.029 222.129C-4.676 240.834 -4.676 271.164 14.029 289.871L222.128 497.969C231.482 507.322 243.742 512 256 512C268.259 512 280.517 507.322 289.871 497.969L497.97 289.871C516.675 271.164 516.675 240.834 497.97 222.129ZM256.07 464.027L47.97 256.07L255.968 48.008L464.031 255.93L256.07 464.027Z" />
        </Icon>
    </>
}