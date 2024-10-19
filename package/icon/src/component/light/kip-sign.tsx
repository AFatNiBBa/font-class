
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `kip-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kip-sign?s=light kip-sign}
 * @preview ![kip-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjU2QzM4NCAyNjQuODQ0IDM3Ni44NDQgMjcyIDM2OCAyNzJIMTI1LjA2NkwzNDYuMDk0IDQ1MS41OTRDMzUyLjkzOCA0NTcuMTU2IDM1NCA0NjcuMjE5IDM0OC40MDYgNDc0LjA5NEMzNDUuMjUgNDc3Ljk2OSAzNDAuNjU2IDQ4MCAzMzYgNDgwQzMzMi40MzggNDgwIDMyOC44NzUgNDc4Ljg0NCAzMjUuOTA2IDQ3Ni40MDZMOTYgMjg5LjYwN1Y0NjRDOTYgNDcyLjg0NCA4OC44NDQgNDgwIDgwIDQ4MFM2NCA0NzIuODQ0IDY0IDQ2NFYyNzJIMTZDNy4xNTYgMjcyIDAgMjY0Ljg0NCAwIDI1NlM3LjE1NiAyNDAgMTYgMjQwSDY0VjQ4QzY0IDM5LjE1NiA3MS4xNTYgMzIgODAgMzJTOTYgMzkuMTU2IDk2IDQ4VjIyMi4zOTNMMzI1LjkwNiAzNS41OTRDMzMyLjcxOSAzMCAzNDIuODEyIDMxLjA2MiAzNDguNDA2IDM3LjkwNkMzNTQgNDQuNzgxIDM1Mi45MzggNTQuODQ0IDM0Ni4wOTQgNjAuNDA2TDEyNS4wNjYgMjQwSDM2OEMzNzYuODQ0IDI0MCAzODQgMjQ3LjE1NiAzODQgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function KipSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 256C384 264.844 376.844 272 368 272H125.066L346.094 451.594C352.938 457.156 354 467.219 348.406 474.094C345.25 477.969 340.656 480 336 480C332.438 480 328.875 478.844 325.906 476.406L96 289.607V464C96 472.844 88.844 480 80 480S64 472.844 64 464V272H16C7.156 272 0 264.844 0 256S7.156 240 16 240H64V48C64 39.156 71.156 32 80 32S96 39.156 96 48V222.393L325.906 35.594C332.719 30 342.812 31.062 348.406 37.906C354 44.781 352.938 54.844 346.094 60.406L125.066 240H368C376.844 240 384 247.156 384 256Z" />
        </Icon>
    </>
}