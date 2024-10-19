
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-filter` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=regular bars-filter}
 * @preview ![bars-filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjQgMzkySDE4NEMxNzAuOCAzOTIgMTYwIDQwMi44IDE2MCA0MTZWNDE2QzE2MCA0MjkuMiAxNzAuOCA0NDAgMTg0IDQ0MEgyNjRDMjc3LjIgNDQwIDI4OCA0MjkuMiAyODggNDE2VjQxNkMyODggNDAyLjggMjc3LjIgMzkyIDI2NCAzOTJaTTQyNCA3MkgyNEMxMC44IDcyIDAgODIuOCAwIDk2Vjk2QzAgMTA5LjIgMTAuOCAxMjAgMjQgMTIwSDQyNEM0MzcuMiAxMjAgNDQ4IDEwOS4yIDQ0OCA5NlY5NkM0NDggODIuOCA0MzcuMiA3MiA0MjQgNzJaTTM2MCAyMzJIODhDNzQuOCAyMzIgNjQgMjQyLjggNjQgMjU2VjI1NkM2NCAyNjkuMiA3NC44IDI4MCA4OCAyODBIMzYwQzM3My4yIDI4MCAzODQgMjY5LjIgMzg0IDI1NlYyNTZDMzg0IDI0Mi44IDM3My4yIDIzMiAzNjAgMjMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BarsFilter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M264 392H184C170.8 392 160 402.8 160 416V416C160 429.2 170.8 440 184 440H264C277.2 440 288 429.2 288 416V416C288 402.8 277.2 392 264 392ZM424 72H24C10.8 72 0 82.8 0 96V96C0 109.2 10.8 120 24 120H424C437.2 120 448 109.2 448 96V96C448 82.8 437.2 72 424 72ZM360 232H88C74.8 232 64 242.8 64 256V256C64 269.2 74.8 280 88 280H360C373.2 280 384 269.2 384 256V256C384 242.8 373.2 232 360 232Z" />
        </Icon>
    </>
}