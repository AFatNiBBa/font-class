
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `6` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=thin 6}
 * @preview ![6](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMyMEMwIDQwOC4yMTkgNzEuNzgxIDQ4MCAxNjAgNDgwUzMyMCA0MDguMjE5IDMyMCAzMjBTMjQ4LjIxOSAxNjAgMTYwIDE2MEMxMzkuMDA2IDE2MCAxMTkuMDU3IDE2NC4zMTEgMTAwLjY3IDE3MS42OTVMMjIxLjc4MSA0NS41MzFDMjI0Ljg0NCA0Mi4zNDQgMjI0LjcxOSAzNy4yODEgMjIxLjUzMSAzNC4yMTlDMjIwIDMyLjc1IDIxOCAzMiAyMTYgMzJDMjEzLjkwNiAzMiAyMTEuODEyIDMyLjgxMiAyMTAuMjE5IDM0LjQ2OUMzOS44MzYgMjExLjk2MSAwIDIzOC4wOTkgMCAzMjBaTTMwNCAzMjBDMzA0IDM5OS40MDYgMjM5LjQwNiA0NjQgMTYwIDQ2NFMxNiAzOTkuNDA2IDE2IDMyMFM4MC41OTQgMTc2IDE2MCAxNzZTMzA0IDI0MC41OTQgMzA0IDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function $6(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M0 320C0 408.219 71.781 480 160 480S320 408.219 320 320S248.219 160 160 160C139.006 160 119.057 164.311 100.67 171.695L221.781 45.531C224.844 42.344 224.719 37.281 221.531 34.219C220 32.75 218 32 216 32C213.906 32 211.812 32.812 210.219 34.469C39.836 211.961 0 238.099 0 320ZM304 320C304 399.406 239.406 464 160 464S16 399.406 16 320S80.594 176 160 176S304 240.594 304 320Z" />
        </Icon>
    </>
}