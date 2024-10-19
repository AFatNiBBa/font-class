
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-maximize` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=duotone window-maximize}
 * @preview ![window-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAxOTIuMDAxSDY0Vjk2LjAwMUg0NDhWMTkyLjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ4IDMyLjAwMUg2NEMyOC42NTQgMzIuMDAxIDAgNjAuNjU0IDAgOTYuMDAxVjQxNi4wMDFDMCA0NTEuMzQ3IDI4LjY1NCA0ODAuMDAxIDY0IDQ4MC4wMDFINDQ4QzQ4My4zNDYgNDgwLjAwMSA1MTIgNDUxLjM0NyA1MTIgNDE2LjAwMVY5Ni4wMDFDNTEyIDYwLjY1NCA0ODMuMzQ2IDMyLjAwMSA0NDggMzIuMDAxWk00NDggMTkyLjAwMUg2NFY5Ni4wMDFINDQ4VjE5Mi4wMDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindowMaximize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M448 192.001H64V96.001H448V192.001Z" />
            <path d="M448 32.001H64C28.654 32.001 0 60.654 0 96.001V416.001C0 451.347 28.654 480.001 64 480.001H448C483.346 480.001 512 451.347 512 416.001V96.001C512 60.654 483.346 32.001 448 32.001ZM448 192.001H64V96.001H448V192.001Z" />
        </Icon>
    </>
}