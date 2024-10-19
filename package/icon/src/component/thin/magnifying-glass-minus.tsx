
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `magnifying-glass-minus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-minus?s=thin magnifying-glass-minus}
 * @preview ![magnifying-glass-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDkuNjU2IDQ5OC4zNDRMMzYwLjQ2NSAzNDkuMTUyQzM5NC44MjggMzEyLjA1NSA0MTYgMjYyLjU1NSA0MTYgMjA4QzQxNiA5My4xMjUgMzIyLjg3NSAwIDIwOCAwUzAgOTMuMTI1IDAgMjA4UzkzLjEyNSA0MTYgMjA4IDQxNkMyNjIuNTU1IDQxNiAzMTIuMDU1IDM5NC44MjggMzQ5LjE1MiAzNjAuNDY1TDQ5OC4zNDQgNTA5LjY1NkM0OTkuOTA2IDUxMS4yMTkgNTAxLjkzOCA1MTIgNTA0IDUxMlM1MDguMDk0IDUxMS4yMTkgNTA5LjY1NiA1MDkuNjU2QzUxMi43ODEgNTA2LjUzMSA1MTIuNzgxIDUwMS40NjkgNTA5LjY1NiA0OTguMzQ0Wk0yMDggNDAwQzEwMi4xMzMgNDAwIDE2IDMxMy44NjcgMTYgMjA4UzEwMi4xMzMgMTYgMjA4IDE2UzQwMCAxMDIuMTMzIDQwMCAyMDhTMzEzLjg2NyA0MDAgMjA4IDQwMFpNMjk2IDIwMEgxMjBDMTE1LjU4IDIwMCAxMTIgMjAzLjU3OCAxMTIgMjA4UzExNS41NzggMjE2IDEyMCAyMTZIMjk2QzMwMC40MiAyMTYgMzA0IDIxMi40MjIgMzA0IDIwOFMzMDAuNDIgMjAwIDI5NiAyMDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MagnifyingGlassMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M509.656 498.344L360.465 349.152C394.828 312.055 416 262.555 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C262.555 416 312.055 394.828 349.152 360.465L498.344 509.656C499.906 511.219 501.938 512 504 512S508.094 511.219 509.656 509.656C512.781 506.531 512.781 501.469 509.656 498.344ZM208 400C102.133 400 16 313.867 16 208S102.133 16 208 16S400 102.133 400 208S313.867 400 208 400ZM296 200H120C115.58 200 112 203.578 112 208S115.578 216 120 216H296C300.42 216 304 212.422 304 208S300.42 200 296 200Z" />
        </Icon>
    </>
}