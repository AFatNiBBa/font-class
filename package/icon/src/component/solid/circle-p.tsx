
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-p` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=solid circle-p}
 * @preview ![circle-p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI4MCAzMDRIMjA4VjM2MEMyMDggMzczLjI1IDE5Ny4yNSAzODQgMTg0IDM4NFMxNjAgMzczLjI1IDE2MCAzNjBWMTUyQzE2MCAxMzguNzUgMTcwLjc1IDEyOCAxODQgMTI4SDI4MEMzMjguNTMxIDEyOCAzNjggMTY3LjQ2OSAzNjggMjE2UzMyOC41MzEgMzA0IDI4MCAzMDRaTTI4MCAxNzZIMjA4VjI1NkgyODBDMzAyLjA2MiAyNTYgMzIwIDIzOC4wNjIgMzIwIDIxNlMzMDIuMDYyIDE3NiAyODAgMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleP(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM280 304H208V360C208 373.25 197.25 384 184 384S160 373.25 160 360V152C160 138.75 170.75 128 184 128H280C328.531 128 368 167.469 368 216S328.531 304 280 304ZM280 176H208V256H280C302.062 256 320 238.062 320 216S302.062 176 280 176Z" />
        </Icon>
    </>
}