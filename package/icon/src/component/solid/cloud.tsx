
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud?s=solid cloud}
 * @preview ![cloud](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMzUyQzY0MCA0MjIuNzAzIDU4Mi42ODggNDgwIDUxMiA0ODBIMTQ0QzY0LjUgNDgwIDAgNDE1LjUgMCAzMzZDMCAyNzMuMjAzIDQwLjE4OCAyMTkuNzk3IDk2LjE4OCAyMDAuMDk0Qzk2LjA5NCAxOTcuNDA2IDk2IDE5NC43MDMgOTYgMTkyQzk2IDEwMy41OTQgMTY3LjU5NCAzMiAyNTYgMzJDMzE1LjMxMiAzMiAzNjcgNjQuMjAzIDM5NC42ODggMTEyLjIwM0M0MDkuOTA2IDEwMiA0MjguMzEyIDk2IDQ0OCA5NkM1MDEgOTYgNTQ0IDEzOSA1NDQgMTkyQzU0NCAyMDQuMjAzIDU0MS42ODggMjE1LjkwNiA1MzcuNTk0IDIyNi41OTRDNTk2IDIzOC40MDYgNjQwIDI5MC4wOTQgNjQwIDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cloud(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 352C640 422.703 582.688 480 512 480H144C64.5 480 0 415.5 0 336C0 273.203 40.188 219.797 96.188 200.094C96.094 197.406 96 194.703 96 192C96 103.594 167.594 32 256 32C315.312 32 367 64.203 394.688 112.203C409.906 102 428.312 96 448 96C501 96 544 139 544 192C544 204.203 541.688 215.906 537.594 226.594C596 238.406 640 290.094 640 352Z" />
        </Icon>
    </>
}