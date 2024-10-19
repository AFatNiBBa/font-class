
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=duotone rhombus}
 * @preview ![rhombus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTQuNCAxNC4xQzI0Ni44IDUuMSAyMzUuNyAwIDIyNCAwcy0yMi44IDUuMS0zMC40IDE0LjFsLTE4NCAyMTZDLTMuMiAyNDUtMy4yIDI2NyA5LjYgMjgxLjlsMTg0IDIxNmM3LjYgOC45IDE4LjcgMTQuMSAzMC40IDE0LjFzMjIuOC01LjEgMzAuNC0xNC4xbDE4NC0yMTZjMTIuNy0xNC45IDEyLjctMzYuOSAwLTUxLjlsLTE4NC0yMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M254.4 14.1C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9l-184-216z" />
    </Icon>
);

export default Rhombus;