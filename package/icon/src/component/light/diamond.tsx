
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diamond` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=light diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuOTcgMjIyLjEyOUwyODkuODcxIDE0LjAyOUMyODAuNTE3IDQuNjc2IDI2OC4yNTkgMCAyNTYgMEMyNDMuNzQyIDAgMjMxLjQ4MiA0LjY3NiAyMjIuMTI4IDE0LjAyOUwxNC4wMjkgMjIyLjEyOUMtNC42NzYgMjQwLjgzNCAtNC42NzYgMjcxLjE2NCAxNC4wMjkgMjg5Ljg3MUwyMjIuMTI4IDQ5Ny45NjlDMjMxLjQ4MiA1MDcuMzIyIDI0My43NDIgNTEyIDI1NiA1MTJDMjY4LjI1OSA1MTIgMjgwLjUxNyA1MDcuMzIyIDI4OS44NzEgNDk3Ljk2OUw0OTcuOTcgMjg5Ljg3MUM1MTYuNjc1IDI3MS4xNjQgNTE2LjY3NSAyNDAuODM0IDQ5Ny45NyAyMjIuMTI5Wk00NzUuMzQzIDI2Ny4yNDRMMjY3LjI0NCA0NzUuMzQyQzI2My4xOTEgNDc5LjM5NSAyNTguNDYgNDgwIDI1NiA0ODBDMjUzLjU0MSA0ODAgMjQ4LjgwOCA0NzkuMzk1IDI0NC43NTUgNDc1LjM0MkwzNi42NTggMjY3LjI0NkMzMC40NTggMjYxLjA0NSAzMC40NTcgMjUwLjk1NyAzNi42NTggMjQ0Ljc1OEwyNDQuNzU3IDM2LjY1OEMyNDguODA4IDMyLjYwNSAyNTMuNTQxIDMyIDI1NiAzMkMyNTguNDYgMzIgMjYzLjE5MSAzMi42MDUgMjY3LjI0NCAzNi42NThMNDc1LjM0MyAyNDQuNzU2QzQ4MS41NDIgMjUwLjk1NyA0ODEuNTQyIDI2MS4wNDUgNDc1LjM0MyAyNjcuMjQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Diamond(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.97 222.129L289.871 14.029C280.517 4.676 268.259 0 256 0C243.742 0 231.482 4.676 222.128 14.029L14.029 222.129C-4.676 240.834 -4.676 271.164 14.029 289.871L222.128 497.969C231.482 507.322 243.742 512 256 512C268.259 512 280.517 507.322 289.871 497.969L497.97 289.871C516.675 271.164 516.675 240.834 497.97 222.129ZM475.343 267.244L267.244 475.342C263.191 479.395 258.46 480 256 480C253.541 480 248.808 479.395 244.755 475.342L36.658 267.246C30.458 261.045 30.457 250.957 36.658 244.758L244.757 36.658C248.808 32.605 253.541 32 256 32C258.46 32 263.191 32.605 267.244 36.658L475.343 244.756C481.542 250.957 481.542 261.045 475.343 267.244Z" />
        </Icon>
    </>
}