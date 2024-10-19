
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location?s=duotone location}
 * @preview ![location](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMTkyLjAwMUMwIDg1Ljk2OSA4NS45NjkgMCAxOTIgMFMzODQgODUuOTY5IDM4NCAxOTIuMDAxQzM4NCAyNjkuNDA4IDM1Ny4wMzEgMjkxLjAzMyAyMTEuNzE5IDUwMS42NzZDMjAyLjE4NyA1MTUuNDQxIDE4MS44MTIgNTE1LjQ0MSAxNzIuMjgxIDUwMS42NzZDMjYuOTY5IDI5MS4wMzMgMCAyNjkuNDA4IDAgMTkyLjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Location(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M0 192.001C0 85.969 85.969 0 192 0S384 85.969 384 192.001C384 269.408 357.031 291.033 211.719 501.676C202.187 515.441 181.812 515.441 172.281 501.676C26.969 291.033 0 269.408 0 192.001Z" />
        </Icon>
    </>
}