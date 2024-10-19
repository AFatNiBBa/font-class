
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `border-all` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=duotone border-all}
 * @preview ![border-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAyODhIMjU2VjQxNkgxOTJWMjg4SDY0VjIyNEgxOTJWOTZIMjU2VjIyNEgzODRWMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguOCAzMiAwIDYwLjggMCA5NlY0MTZDMCA0NTEuMiAyOC44IDQ4MCA2NCA0ODBIMzg0QzQxOS4yIDQ4MCA0NDggNDUxLjIgNDQ4IDQxNlY5NkM0NDggNjAuOCA0MTkuMiAzMiAzODQgMzJaTTM4NCA0MTZINjRWOTZIMzg0VjQxNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BorderAll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M384 288H256V416H192V288H64V224H192V96H256V224H384V288Z" />
            <path d="M384 32H64C28.8 32 0 60.8 0 96V416C0 451.2 28.8 480 64 480H384C419.2 480 448 451.2 448 416V96C448 60.8 419.2 32 384 32ZM384 416H64V96H384V416Z" />
        </Icon>
    </>
}