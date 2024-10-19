
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=duotone window-minimize}
 * @preview ![window-minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA0MDBWNDMyQzUxMiA0NTguNSA0OTAuNSA0ODAgNDY0IDQ4MEg0OEMyMS41IDQ4MCAwIDQ1OC41IDAgNDMyVjQwMEMwIDM3My41IDIxLjUgMzUyIDQ4IDM1Mkg0NjRDNDkwLjUgMzUyIDUxMiAzNzMuNSA1MTIgNDAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindowMinimize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512 400V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V400C0 373.5 21.5 352 48 352H464C490.5 352 512 373.5 512 400Z" />
        </Icon>
    </>
}