
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seedling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=sharp-duotone-solid seedling}
 * @preview ![seedling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMzcuNyAxNDYuNmMyNS4xIDMwLjcgNDIuMSA2OC4zIDQ4IDEwOS40bDIuMyAwYzEyMy43IDAgMjI0LTEwMC4zIDIyNC0yMjRsMC0zMkw0NDggMEMzNTEuNSAwIDI2OS4yIDYxIDIzNy43IDE0Ni42eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgNjRMMCA2NCAwIDk2QzAgMjE5LjcgMTAwLjMgMzIwIDIyNCAzMjBsMCAxNjAgMCAzMiA2NCAwIDAtMzIgMC0xNjAgMC0zMkMyODggMTY0LjMgMTg3LjcgNjQgNjQgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M237.7 146.6c25.1 30.7 42.1 68.3 48 109.4l2.3 0c123.7 0 224-100.3 224-224l0-32L448 0C351.5 0 269.2 61 237.7 146.6z" />
            <path d="M64 64L0 64 0 96C0 219.7 100.3 320 224 320l0 160 0 32 64 0 0-32 0-160 0-32C288 164.3 187.7 64 64 64z" />
    </Icon>
);

export default Seedling;