
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=solid chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDMuNjU4IDQzLjExNEMyMjcuNjkgMjcuODM0IDIwMi4zNjIgMjguMzY1IDE4Ny4wOTYgNDQuMzY0TDExLjA5OCAyMjguMzU2Qy0zLjY5OSAyNDMuODI0IC0zLjY5OSAyNjguMTk4IDExLjA5OCAyODMuNjY2TDE4Ny4wOTYgNDY3LjY1N0MxOTQuOTU1IDQ3NS44NzUgMjA1LjQ3MSA0ODAgMjE2LjAwMiA0ODBDMjI1Ljk0IDQ4MCAyMzUuOTA4IDQ3Ni4zMTMgMjQzLjY1OCA0NjguOTA3QzI1OS42MTEgNDUzLjYyNiAyNjAuMTc0IDQyOC4zMTUgMjQ0LjkwOCA0MTIuMzQ3TDk1LjM2MyAyNTYuMDExTDI0NC45MDggOTkuNjc0QzI2MC4xNzQgODMuNzA2IDI1OS42MTEgNTguMzk1IDI0My42NTggNDMuMTE0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M243.658 43.114C227.69 27.834 202.362 28.365 187.096 44.364L11.098 228.356C-3.699 243.824 -3.699 268.198 11.098 283.666L187.096 467.657C194.955 475.875 205.471 480 216.002 480C225.94 480 235.908 476.313 243.658 468.907C259.611 453.626 260.174 428.315 244.908 412.347L95.363 256.011L244.908 99.674C260.174 83.706 259.611 58.395 243.658 43.114Z" />
        </Icon>
    </>
}