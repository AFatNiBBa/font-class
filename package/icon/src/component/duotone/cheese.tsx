
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=duotone cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI5OS44NzUgMzIuMDE3QzI5Mi4xMjUgMzEuNzY3IDI4NC42MjUgMzQuMjY3IDI3OC43NSAzOS4wMTdMMCAyNTYuMDA5SDUxMkM1MTIgMTM2LjEzOCA0MTcuOTk5IDM4LjI2NyAyOTkuODc1IDMyLjAxN1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTEyIDI1NlY0NDguMDAxQzUxMiA0NjUuNjI2IDQ5Ny42MjUgNDgwIDQ4MCA0ODBIMzJDMTQuMzc1IDQ4MCAwIDQ2NS42MjYgMCA0NDguMDAxVjI1Nkg1MTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cheese(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M299.875 32.017C292.125 31.767 284.625 34.267 278.75 39.017L0 256.009H512C512 136.138 417.999 38.267 299.875 32.017Z" />
            <path d="M512 256V448.001C512 465.626 497.625 480 480 480H32C14.375 480 0 465.626 0 448.001V256H512Z" />
        </Icon>
    </>
}