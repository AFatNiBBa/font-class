
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=duotone arrow-pointer}
 * @preview ![arrow-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIzNS44NDQgNDE0LjgxQzI0NS4zMzkgNDM0Ljc1MiAyMzYuODc0IDQ1OC42MTUgMjE2LjkzNSA0NjguMTE2TDIxNi45MzUgNDY4LjExNkMxOTYuOTg5IDQ3Ny42MTkgMTczLjExNiA0NjkuMTUxIDE2My42MTggNDQ5LjIwM0wxMTcgMzUxLjI5OEwxNDMuNjA3IDMxOS45OTJIMTkwLjY5NEwyMzUuODQ0IDQxNC44MVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzE4LjQ0OSAzMDQuNDc2QzMxNC45MTggMzEzLjgyIDMwNS45OCAzMTkuOTkyIDI5NS45OTYgMzE5Ljk5MkgxNDMuODg5TDQyLjI4MSA0MzkuNTQ1QzM3LjY0IDQ0NS4wMTQgMzAuOTA2IDQ0Ny45OTggMjQgNDQ3Ljk5OEMyMS4yMTggNDQ3Ljk5OCAxOC40MjIgNDQ3LjUxNCAxNS43MTkgNDQ2LjUyOUM2LjI4MSA0NDMuMDYxIDAgNDM0LjA2IDAgNDIzLjk5N1Y1NS45OEMwIDQ2LjU0MiA1LjUzMSAzNy45NzkgMTQuMTI1IDM0LjEwNEMyMi43NSAzMC4yNiAzMi44MjggMzEuNzYgMzkuODc0IDM3Ljk3OUwzMTEuODcxIDI3Ny45OUMzMTkuMzU1IDI4NC42IDMyMS45OCAyOTUuMTQ3IDMxOC40NDkgMzA0LjQ3NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowPointer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M235.844 414.81C245.339 434.752 236.874 458.615 216.935 468.116L216.935 468.116C196.989 477.619 173.116 469.151 163.618 449.203L117 351.298L143.607 319.992H190.694L235.844 414.81Z" />
            <path d="M318.449 304.476C314.918 313.82 305.98 319.992 295.996 319.992H143.889L42.281 439.545C37.64 445.014 30.906 447.998 24 447.998C21.218 447.998 18.422 447.514 15.719 446.529C6.281 443.061 0 434.06 0 423.997V55.98C0 46.542 5.531 37.979 14.125 34.104C22.75 30.26 32.828 31.76 39.874 37.979L311.871 277.99C319.355 284.6 321.98 295.147 318.449 304.476Z" />
        </Icon>
    </>
}