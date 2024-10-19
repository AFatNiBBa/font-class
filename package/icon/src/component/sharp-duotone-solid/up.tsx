
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=sharp-duotone-solid up}
 * @preview ![up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjU2bDEyOCAwIDAgMjI0LTEyOCAwIDAtMjI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyMjRMMTkyIDMyIDM4NCAyMjRsMCAzMi0xMjggMC0xMjggMEwwIDI1NmwwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 256l128 0 0 224-128 0 0-224z" />
            <path d="M0 224L192 32 384 224l0 32-128 0-128 0L0 256l0-32z" />
    </Icon>
);

export default Up;