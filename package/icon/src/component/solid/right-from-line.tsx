
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `right-from-line` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-line?s=solid right-from-line}
 * @preview ![right-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiA2NEgzMkMxNC4zMjcgNjQgMCA3OC4zMjcgMCA5NlY0MTZDMCA0MzMuNjczIDE0LjMyNyA0NDggMzIgNDQ4SDMyQzQ5LjY3MyA0NDggNjQgNDMzLjY3MyA2NCA0MTZWOTZDNjQgNzguMzI3IDQ5LjY3MyA2NCAzMiA2NFpNNDQwLjgwMSAyMzguNTQ3TDI5Ni42OTcgMTAyLjU0N0MyODkuNzIzIDk1Ljk2OSAyNzkuNDk4IDk0LjE3MiAyNzAuNjkzIDk3Ljk1M0MyNjEuODkxIDEwMS43NSAyNTYuMTg0IDExMC40MjIgMjU2LjE4NCAxMjBWMTkySDEyOC4wOTJDMTEwLjQwNiAxOTIgOTYuMDY4IDIwNi4zMjggOTYuMDY4IDIyNFYyODhDOTYuMDY4IDMwNS42NzQgMTEwLjQwNiAzMjAgMTI4LjA5MiAzMjBIMjU2LjE4NFYzOTJDMjU2LjE4NCA0MDEuNTc4IDI2MS44OTEgNDEwLjI1IDI3MC42OTMgNDE0LjA0N0MyNzkuNDk4IDQxNy44MjggMjg5LjcyMyA0MTYuMDMxIDI5Ni42OTcgNDA5LjQ1M0w0NDAuODAxIDI3My40NTNDNDUwLjQgMjY0LjM5MSA0NTAuNCAyNDcuNjA5IDQ0MC44MDEgMjM4LjU0N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RightFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M32 64H32C14.327 64 0 78.327 0 96V416C0 433.673 14.327 448 32 448H32C49.673 448 64 433.673 64 416V96C64 78.327 49.673 64 32 64ZM440.801 238.547L296.697 102.547C289.723 95.969 279.498 94.172 270.693 97.953C261.891 101.75 256.184 110.422 256.184 120V192H128.092C110.406 192 96.068 206.328 96.068 224V288C96.068 305.674 110.406 320 128.092 320H256.184V392C256.184 401.578 261.891 410.25 270.693 414.047C279.498 417.828 289.723 416.031 296.697 409.453L440.801 273.453C450.4 264.391 450.4 247.609 440.801 238.547Z" />
        </Icon>
    </>
}