
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=duotone p}
 * @preview ![p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4IDQ4MEMyMS41IDQ4MCAwIDQ1OC41IDAgNDMyVjgwQzAgNTMuNSAyMS41IDMyIDQ4IDMySDE2MEMyNDguMjE5IDMyIDMyMCAxMDMuNzgxIDMyMCAxOTJTMjQ4LjIxOSAzNTIgMTYwIDM1Mkg5NlY0MzJDOTYgNDU4LjUgNzQuNSA0ODAgNDggNDgwWk05NiAyNTZIMTYwQzE5NS4yODEgMjU2IDIyNCAyMjcuMjgxIDIyNCAxOTJTMTk1LjI4MSAxMjggMTYwIDEyOEg5NlYyNTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function P(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M48 480C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32H160C248.219 32 320 103.781 320 192S248.219 352 160 352H96V432C96 458.5 74.5 480 48 480ZM96 256H160C195.281 256 224 227.281 224 192S195.281 128 160 128H96V256Z" />
        </Icon>
    </>
}