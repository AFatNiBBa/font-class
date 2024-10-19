
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `quote-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/quote-right?s=solid quote-right}
 * @preview ![quote-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMzJIMzM2QzMwOS41IDMyIDI4OCA1My41IDI4OCA4MFYyMDhDMjg4IDIzNC41IDMwOS41IDI1NiAzMzYgMjU2SDQxNlYzMjBDNDE2IDM1NS4yNSAzODcuMjUgMzg0IDM1MiAzODRIMzQ0QzMzMC43NSAzODQgMzIwIDM5NC43NSAzMjAgNDA4VjQ1NkMzMjAgNDY5LjI1IDMzMC43NSA0ODAgMzQ0IDQ4MEgzNTJDNDQwLjM3NSA0ODAgNTEyIDQwOC4zNzUgNTEyIDMyMFY4MEM1MTIgNTMuNSA0OTAuNSAzMiA0NjQgMzJaTTE3NiAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwVjIwOEMwIDIzNC41IDIxLjUgMjU2IDQ4IDI1NkgxMjhWMzIwQzEyOCAzNTUuMjUgOTkuMjUgMzg0IDY0IDM4NEg1NkM0Mi43NSAzODQgMzIgMzk0Ljc1IDMyIDQwOFY0NTZDMzIgNDY5LjI1IDQyLjc1IDQ4MCA1NiA0ODBINjRDMTUyLjM3NSA0ODAgMjI0IDQwOC4zNzUgMjI0IDMyMFY4MEMyMjQgNTMuNSAyMDIuNSAzMiAxNzYgMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function QuoteRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 32H336C309.5 32 288 53.5 288 80V208C288 234.5 309.5 256 336 256H416V320C416 355.25 387.25 384 352 384H344C330.75 384 320 394.75 320 408V456C320 469.25 330.75 480 344 480H352C440.375 480 512 408.375 512 320V80C512 53.5 490.5 32 464 32ZM176 32H48C21.5 32 0 53.5 0 80V208C0 234.5 21.5 256 48 256H128V320C128 355.25 99.25 384 64 384H56C42.75 384 32 394.75 32 408V456C32 469.25 42.75 480 56 480H64C152.375 480 224 408.375 224 320V80C224 53.5 202.5 32 176 32Z" />
        </Icon>
    </>
}