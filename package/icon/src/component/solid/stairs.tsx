
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stairs` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=solid stairs}
 * @preview ![stairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgNjRDNTc2IDgxLjY3MiA1NjEuNjg4IDk2IDU0NCA5Nkg0NDhWMTkyQzQ0OCAyMDkuNjcyIDQzMy42ODggMjI0IDQxNiAyMjRIMzIwVjMyMEMzMjAgMzM3LjY3MiAzMDUuNjg4IDM1MiAyODggMzUySDE5MlY0NDhDMTkyIDQ2NS42NzIgMTc3LjY4OCA0ODAgMTYwIDQ4MEgzMkMxNC4zMTIgNDgwIDAgNDY1LjY3MiAwIDQ0OFMxNC4zMTIgNDE2IDMyIDQxNkgxMjhWMzIwQzEyOCAzMDIuMzI4IDE0Mi4zMTIgMjg4IDE2MCAyODhIMjU2VjE5MkMyNTYgMTc0LjMyOCAyNzAuMzEyIDE2MCAyODggMTYwSDM4NFY2NEMzODQgNDYuMzI4IDM5OC4zMTIgMzIgNDE2IDMySDU0NEM1NjEuNjg4IDMyIDU3NiA0Ni4zMjggNTc2IDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Stairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M576 64C576 81.672 561.688 96 544 96H448V192C448 209.672 433.688 224 416 224H320V320C320 337.672 305.688 352 288 352H192V448C192 465.672 177.688 480 160 480H32C14.312 480 0 465.672 0 448S14.312 416 32 416H128V320C128 302.328 142.312 288 160 288H256V192C256 174.328 270.312 160 288 160H384V64C384 46.328 398.312 32 416 32H544C561.688 32 576 46.328 576 64Z" />
        </Icon>
    </>
}