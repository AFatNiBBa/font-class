
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chimney` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=duotone chimney}
 * @preview ![chimney](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAxOTJIMzJWMzIwSDEyOFYxOTJaTTMyIDQ4MEgyODhWMzUySDMyVjQ4MFpNMTYwIDE5MlYzMjBINDE2VjE5MkgxNjBaTTMyMCA0ODBINDE2VjM1MkgzMjBWNDgwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MTYgMzJIMzJDMTQuMjUgMzIgMCA0Ni4yNSAwIDY0VjEyOEMwIDE0NS43NSAxNC4yNSAxNjAgMzIgMTYwSDQxNkM0MzMuNzUgMTYwIDQ0OCAxNDUuNzUgNDQ4IDEyOFY2NEM0NDggNDYuMjUgNDMzLjc1IDMyIDQxNiAzMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 192H32V320H128V192ZM32 480H288V352H32V480ZM160 192V320H416V192H160ZM320 480H416V352H320V480Z" />
            <path d="M416 32H32C14.25 32 0 46.25 0 64V128C0 145.75 14.25 160 32 160H416C433.75 160 448 145.75 448 128V64C448 46.25 433.75 32 416 32Z" />
    </Icon>
);

export default Chimney;