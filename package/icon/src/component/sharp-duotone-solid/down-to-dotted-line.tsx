
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-dotted-line?s=sharp-duotone-solid down-to-dotted-line}
 * @preview ![down-to-dotted-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDY0IDY0IDAgMC02NEwwIDQxNnptOTYgMGwwIDY0IDY0IDAgMC02NC02NCAwem05NiAwbDAgNjQgNjQgMCAwLTY0LTY0IDB6bTk2IDBsMCA2NCA2NCAwIDAtNjQtNjQgMHptOTYgMGwwIDY0IDY0IDAgMC02NC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDM4NEw2NCAyMjRsMC0zMiA5NiAwIDAtMTYwIDEyOCAwIDAgMTYwIDk2IDAgMCAzMkwyMjQgMzg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DownToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 64 0 0-64L0 416zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
            <path d="M224 384L64 224l0-32 96 0 0-160 128 0 0 160 96 0 0 32L224 384z" />
    </Icon>
);

export default DownToDottedLine;