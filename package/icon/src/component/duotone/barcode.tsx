
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `barcode` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=duotone barcode}
 * @preview ![barcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwMCAzMkgxODRDMTcwLjggMzIgMTYwIDQyLjggMTYwIDU2VjQ1NkMxNjAgNDY5LjIgMTcwLjggNDgwIDE4NCA0ODBIMjAwQzIxMy4yIDQ4MCAyMjQgNDY5LjIgMjI0IDQ1NlY1NkMyMjQgNDIuOCAyMTMuMiAzMiAyMDAgMzJaTTExMiAzMkMxMDMuMiAzMiA5NiAzOS4yIDk2IDQ4VjQ2NEM5NiA0NzIuOCAxMDMuMiA0ODAgMTEyIDQ4MFMxMjggNDcyLjggMTI4IDQ2NFY0OEMxMjggMzkuMiAxMjAuOCAzMiAxMTIgMzJaTTQwIDMySDI0QzEwLjggMzIgMCA0Mi44IDAgNTZWNDU2QzAgNDY5LjIgMTAuOCA0ODAgMjQgNDgwSDQwQzUzLjIgNDgwIDY0IDQ2OS4yIDY0IDQ1NlY1NkM2NCA0Mi44IDUzLjIgMzIgNDAgMzJaTTQ4OCAzMkg0NzJDNDU4LjggMzIgNDQ4IDQyLjggNDQ4IDU2VjQ1NkM0NDggNDY5LjIgNDU4LjggNDgwIDQ3MiA0ODBINDg4QzUwMS4yIDQ4MCA1MTIgNDY5LjIgNTEyIDQ1NlY1NkM1MTIgNDIuOCA1MDEuMiAzMiA0ODggMzJaTTQwMCAzMkMzOTEuMiAzMiAzODQgMzkuMiAzODQgNDhWNDY0QzM4NCA0NzIuOCAzOTEuMiA0ODAgNDAwIDQ4MFM0MTYgNDcyLjggNDE2IDQ2NFY0OEM0MTYgMzkuMiA0MDguOCAzMiA0MDAgMzJaTTI5NiAzMkgyODBDMjY2LjggMzIgMjU2IDQyLjggMjU2IDU2VjQ1NkMyNTYgNDY5LjIgMjY2LjggNDgwIDI4MCA0ODBIMjk2QzMwOS4yIDQ4MCAzMjAgNDY5LjIgMzIwIDQ1NlY1NkMzMjAgNDIuOCAzMDkuMiAzMiAyOTYgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Barcode(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M200 32H184C170.8 32 160 42.8 160 56V456C160 469.2 170.8 480 184 480H200C213.2 480 224 469.2 224 456V56C224 42.8 213.2 32 200 32ZM112 32C103.2 32 96 39.2 96 48V464C96 472.8 103.2 480 112 480S128 472.8 128 464V48C128 39.2 120.8 32 112 32ZM40 32H24C10.8 32 0 42.8 0 56V456C0 469.2 10.8 480 24 480H40C53.2 480 64 469.2 64 456V56C64 42.8 53.2 32 40 32ZM488 32H472C458.8 32 448 42.8 448 56V456C448 469.2 458.8 480 472 480H488C501.2 480 512 469.2 512 456V56C512 42.8 501.2 32 488 32ZM400 32C391.2 32 384 39.2 384 48V464C384 472.8 391.2 480 400 480S416 472.8 416 464V48C416 39.2 408.8 32 400 32ZM296 32H280C266.8 32 256 42.8 256 56V456C256 469.2 266.8 480 280 480H296C309.2 480 320 469.2 320 456V56C320 42.8 309.2 32 296 32Z" />
        </Icon>
    </>
}