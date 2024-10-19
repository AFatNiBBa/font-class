
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `forward-step` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=duotone forward-step}
 * @preview ![forward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OC4wMDIgNDQ3Ljk2OEMzMDUuNjc0IDQ0Ny45NjggMzIwIDQzMy42NDIgMzIwIDQxNS45NjhWOTYuMDMyQzMyMCA3OC4zNTkgMzA1LjY3MiA2NC4wMzIgMjg3Ljk5OCA2NC4wMzJDMjcwLjMyNiA2NC4wMzIgMjU2IDc4LjM1OSAyNTYgOTYuMDNWMjU1Ljk5OVY0MTUuOTY2QzI1NiA0MzMuNjQgMjcwLjMyOCA0NDcuOTY4IDI4OC4wMDIgNDQ3Ljk2OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTIuNTA2IDQ0MC41OTNMMjQ0LjUyOSAyODAuNjJDMjUyLjE1NCAyNzQuMTg1IDI1NS45NjkgMjY1LjA5MSAyNTUuOTY5IDI1NS45OTlDMjU1Ljk2OSAyNDYuOTA1IDI1Mi4xNTQgMjM3LjgxNiAyNDQuNTI5IDIzMS4zNzhMNTIuNTA2IDcxLjQwNUMzMS44NzkgNTQuMjg0IDAgNjguNjU1IDAgOTYuMDI2VjQxNS45NzJDMCA0NDMuMzQzIDMxLjg3OSA0NTcuNzE2IDUyLjUwNiA0NDAuNTkzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ForwardStep(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M288.002 447.968C305.674 447.968 320 433.642 320 415.968V96.032C320 78.359 305.672 64.032 287.998 64.032C270.326 64.032 256 78.359 256 96.03V255.999V415.966C256 433.64 270.328 447.968 288.002 447.968Z" />
            <path d="M52.506 440.593L244.529 280.62C252.154 274.185 255.969 265.091 255.969 255.999C255.969 246.905 252.154 237.816 244.529 231.378L52.506 71.405C31.879 54.284 0 68.655 0 96.026V415.972C0 443.343 31.879 457.716 52.506 440.593Z" />
        </Icon>
    </>
}