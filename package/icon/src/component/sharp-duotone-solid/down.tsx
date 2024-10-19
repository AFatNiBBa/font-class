
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=sharp-duotone-solid down}
 * @preview ![down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMzJsMCAyMjQgMTI4IDAgMC0yMjRMMTI4IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyNTZsMCAzMkwxOTIgNDgwIDM4NCAyODhsMC0zMi0xMjggMC0xMjggMEwwIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 32l0 224 128 0 0-224L128 32z" />
            <path d="M0 256l0 32L192 480 384 288l0-32-128 0-128 0L0 256z" />
    </Icon>
);

export default Down;