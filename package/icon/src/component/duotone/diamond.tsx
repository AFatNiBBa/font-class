
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diamond` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=duotone diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5Ny45NyAyMjIuMTNMMjg5Ljg3MSAxNC4wM0MyNzEuMTY0IC00LjY3NyAyNDAuODM1IC00LjY3NyAyMjIuMTI4IDE0LjAzTDE0LjAyOSAyMjIuMTNDLTQuNjc2IDI0MC44MzUgLTQuNjc2IDI3MS4xNjUgMTQuMDI5IDI4OS44NzJMMjIyLjEyOCA0OTcuOTdDMjQwLjgzNSA1MTYuNjc3IDI3MS4xNjQgNTE2LjY3NyAyODkuODcxIDQ5Ny45N0w0OTcuOTcgMjg5Ljg3MkM1MTYuNjc1IDI3MS4xNjUgNTE2LjY3NSAyNDAuODM1IDQ5Ny45NyAyMjIuMTNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Diamond(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M497.97 222.13L289.871 14.03C271.164 -4.677 240.835 -4.677 222.128 14.03L14.029 222.13C-4.676 240.835 -4.676 271.165 14.029 289.872L222.128 497.97C240.835 516.677 271.164 516.677 289.871 497.97L497.97 289.872C516.675 271.165 516.675 240.835 497.97 222.13Z" />
        </Icon>
    </>
}