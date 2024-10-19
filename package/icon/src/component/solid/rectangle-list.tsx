
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rectangle-list` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-list?s=solid rectangle-list}
 * @preview ![rectangle-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0NiA0ODAgNTc2IDQ1MS4zNDYgNTc2IDQxNlY5NkM1NzYgNjAuNjU0IDU0Ny4zNDYgMzIgNTEyIDMyWk0xMjggMzg0QzExMC4zMDEgMzg0IDk2IDM2OS42OTkgOTYgMzUyQzk2IDMzNC4yOTcgMTEwLjMwMSAzMjAgMTI4IDMyMFMxNjAgMzM0LjI5NyAxNjAgMzUyQzE2MCAzNjkuNjk5IDE0NS42OTkgMzg0IDEyOCAzODRaTTEyOCAyODhDMTEwLjMwMSAyODggOTYgMjczLjY5OSA5NiAyNTZDOTYgMjM4LjI5NyAxMTAuMzAxIDIyNCAxMjggMjI0UzE2MCAyMzguMjk3IDE2MCAyNTZDMTYwIDI3My42OTkgMTQ1LjY5OSAyODggMTI4IDI4OFpNMTI4IDE5MkMxMTAuMzAxIDE5MiA5NiAxNzcuNjk5IDk2IDE2MEM5NiAxNDIuMjk3IDExMC4zMDEgMTI4IDEyOCAxMjhTMTYwIDE0Mi4yOTcgMTYwIDE2MEMxNjAgMTc3LjY5OSAxNDUuNjk5IDE5MiAxMjggMTkyWk00ODAgMzUyQzQ4MCAzNjUuMjU1IDQ2OS4yNTUgMzc2IDQ1NiAzNzZIMjE2QzIwMi43NDUgMzc2IDE5MiAzNjUuMjU1IDE5MiAzNTJWMzUyQzE5MiAzMzguNzQ1IDIwMi43NDUgMzI4IDIxNiAzMjhINDU2QzQ2OS4yNTUgMzI4IDQ4MCAzMzguNzQ1IDQ4MCAzNTJWMzUyWk00ODAgMjU2QzQ4MCAyNjkuMjU1IDQ2OS4yNTUgMjgwIDQ1NiAyODBIMjE2QzIwMi43NDUgMjgwIDE5MiAyNjkuMjU1IDE5MiAyNTZWMjU2QzE5MiAyNDIuNzQ1IDIwMi43NDUgMjMyIDIxNiAyMzJINDU2QzQ2OS4yNTUgMjMyIDQ4MCAyNDIuNzQ1IDQ4MCAyNTZWMjU2Wk00ODAgMTYwQzQ4MCAxNzMuMjU1IDQ2OS4yNTUgMTg0IDQ1NiAxODRIMjE2QzIwMi43NDUgMTg0IDE5MiAxNzMuMjU1IDE5MiAxNjBWMTYwQzE5MiAxNDYuNzQ1IDIwMi43NDUgMTM2IDIxNiAxMzZINDU2QzQ2OS4yNTUgMTM2IDQ4MCAxNDYuNzQ1IDQ4MCAxNjBWMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RectangleList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.654 547.346 32 512 32ZM128 384C110.301 384 96 369.699 96 352C96 334.297 110.301 320 128 320S160 334.297 160 352C160 369.699 145.699 384 128 384ZM128 288C110.301 288 96 273.699 96 256C96 238.297 110.301 224 128 224S160 238.297 160 256C160 273.699 145.699 288 128 288ZM128 192C110.301 192 96 177.699 96 160C96 142.297 110.301 128 128 128S160 142.297 160 160C160 177.699 145.699 192 128 192ZM480 352C480 365.255 469.255 376 456 376H216C202.745 376 192 365.255 192 352V352C192 338.745 202.745 328 216 328H456C469.255 328 480 338.745 480 352V352ZM480 256C480 269.255 469.255 280 456 280H216C202.745 280 192 269.255 192 256V256C192 242.745 202.745 232 216 232H456C469.255 232 480 242.745 480 256V256ZM480 160C480 173.255 469.255 184 456 184H216C202.745 184 192 173.255 192 160V160C192 146.745 202.745 136 216 136H456C469.255 136 480 146.745 480 160V160Z" />
        </Icon>
    </>
}