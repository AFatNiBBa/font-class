
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=sharp-duotone-solid vr-cardboard}
 * @preview ![vr-cardboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDIyNCAwIDY0LTEyOCA2NCAwIDY0IDEyOCAyMjQgMCAwLTM4NEwwIDY0ek0yMjQgMjQwQTY0IDY0IDAgMSAxIDk2IDI0MGE2NCA2NCAwIDEgMSAxMjggMHptMzIwIDBhNjQgNjQgMCAxIDEgLTEyOCAwIDY0IDY0IDAgMSAxIDEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDMwNGE2NCA2NCAwIDEgMCAwLTEyOCA2NCA2NCAwIDEgMCAwIDEyOHptMzIwIDBhNjQgNjQgMCAxIDAgMC0xMjggNjQgNjQgMCAxIDAgMCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l224 0 64-128 64 0 64 128 224 0 0-384L0 64zM224 240A64 64 0 1 1 96 240a64 64 0 1 1 128 0zm320 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M160 304a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm320 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default VrCardboard;