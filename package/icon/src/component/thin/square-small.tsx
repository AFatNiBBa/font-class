
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-small` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=thin square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgOTZINjRDMjguNjU0IDk2IDAgMTI0LjY1NCAwIDE2MFYzNTJDMCAzODcuMzQ2IDI4LjY1NCA0MTYgNjQgNDE2SDI1NkMyOTEuMzQ2IDQxNiAzMjAgMzg3LjM0NiAzMjAgMzUyVjE2MEMzMjAgMTI0LjY1NCAyOTEuMzQ2IDk2IDI1NiA5NlpNMzA0IDM1MkMzMDQgMzc4LjQ2NyAyODIuNDY3IDQwMCAyNTYgNDAwSDY0QzM3LjUzMyA0MDAgMTYgMzc4LjQ2NyAxNiAzNTJWMTYwQzE2IDEzMy41MzMgMzcuNTMzIDExMiA2NCAxMTJIMjU2QzI4Mi40NjcgMTEyIDMwNCAxMzMuNTMzIDMwNCAxNjBWMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareSmall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M256 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H256C291.346 416 320 387.346 320 352V160C320 124.654 291.346 96 256 96ZM304 352C304 378.467 282.467 400 256 400H64C37.533 400 16 378.467 16 352V160C16 133.533 37.533 112 64 112H256C282.467 112 304 133.533 304 160V352Z" />
        </Icon>
    </>
}