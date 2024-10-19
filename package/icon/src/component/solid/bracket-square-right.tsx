
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=solid bracket-square-right}
 * @preview ![bracket-square-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiA2NFY2NEMzMiA4MS42NzMgNDYuMzI3IDk2IDY0IDk2SDEyOFY0MTZINjRDNDYuMzI3IDQxNiAzMiA0MzAuMzI3IDMyIDQ0OFY0NDhDMzIgNDY1LjY3MyA0Ni4zMjcgNDgwIDY0IDQ4MEgxNjBDMTc3LjYgNDgwIDE5MiA0NjUuNiAxOTIgNDQ4VjY0QzE5MiA0Ni40IDE3Ny42IDMyIDE2MCAzMkg2NEM0Ni4zMjcgMzIgMzIgNDYuMzI3IDMyIDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BracketSquareRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M32 64V64C32 81.673 46.327 96 64 96H128V416H64C46.327 416 32 430.327 32 448V448C32 465.673 46.327 480 64 480H160C177.6 480 192 465.6 192 448V64C192 46.4 177.6 32 160 32H64C46.327 32 32 46.327 32 64Z" />
        </Icon>
    </>
}