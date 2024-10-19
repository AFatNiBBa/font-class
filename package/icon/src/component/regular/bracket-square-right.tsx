
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=regular bracket-square-right}
 * @preview ![bracket-square-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCA1NlY1NkM0OCA2OS4yNTUgNTguNzQ1IDgwIDcyIDgwSDE0NFY0MzJINzJDNTguNzQ1IDQzMiA0OCA0NDIuNzQ1IDQ4IDQ1NlY0NTZDNDggNDY5LjI1NSA1OC43NDUgNDgwIDcyIDQ4MEgxNjBDMTc3LjYgNDgwIDE5MiA0NjUuNiAxOTIgNDQ4VjY0QzE5MiA0Ni40IDE3Ny42IDMyIDE2MCAzMkg3MkM1OC43NDUgMzIgNDggNDIuNzQ1IDQ4IDU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BracketSquareRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M48 56V56C48 69.255 58.745 80 72 80H144V432H72C58.745 432 48 442.745 48 456V456C48 469.255 58.745 480 72 480H160C177.6 480 192 465.6 192 448V64C192 46.4 177.6 32 160 32H72C58.745 32 48 42.745 48 56Z" />
        </Icon>
    </>
}