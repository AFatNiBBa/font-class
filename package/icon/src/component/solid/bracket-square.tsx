
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-square` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=solid bracket-square}
 * @preview ![bracket-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMzJIMzJDMTQuNCAzMiAwIDQ2LjQgMCA2NFY0NDhDMCA0NjUuNiAxNC40IDQ4MCAzMiA0ODBIMTI4QzE0NS42NzMgNDgwIDE2MCA0NjUuNjczIDE2MCA0NDhWNDQ4QzE2MCA0MzAuMzI3IDE0NS42NzMgNDE2IDEyOCA0MTZINjRWOTZIMTI4QzE0NS42NzMgOTYgMTYwIDgxLjY3MyAxNjAgNjRWNjRDMTYwIDQ2LjMyNyAxNDUuNjczIDMyIDEyOCAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M128 32H32C14.4 32 0 46.4 0 64V448C0 465.6 14.4 480 32 480H128C145.673 480 160 465.673 160 448V448C160 430.327 145.673 416 128 416H64V96H128C145.673 96 160 81.673 160 64V64C160 46.327 145.673 32 128 32Z" />
        </Icon>
    </>
}