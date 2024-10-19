
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=solid square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMTYwVjM1MkMzMjAgMzg3LjM0NiAyOTEuMzQ2IDQxNiAyNTYgNDE2SDY0QzI4LjY1NCA0MTYgMCAzODcuMzQ2IDAgMzUyVjE2MEMwIDEyNC42NTQgMjguNjU0IDk2IDY0IDk2SDI1NkMyOTEuMzQ2IDk2IDMyMCAxMjQuNjU0IDMyMCAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareSmall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 160V352C320 387.346 291.346 416 256 416H64C28.654 416 0 387.346 0 352V160C0 124.654 28.654 96 64 96H256C291.346 96 320 124.654 320 160Z" />
        </Icon>
    </>
}