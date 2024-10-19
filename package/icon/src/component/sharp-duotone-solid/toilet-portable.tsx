
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-portable` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-portable?s=sharp-duotone-solid toilet-portable}
 * @preview ![toilet-portable](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDI0IDAgMjcyIDAgMjQgMCAwIDI0IDAgNDAwIDAgMjQtNDggMCAwLTI0IDAtOEw0OCA0ODBsMCA4IDAgMjRMMCA1MTJsMC0yNEwwIDg4IDAgNjR6TTIyNCAyMjRsMCAxNiAwIDY0IDAgMTYgMzIgMCAwLTE2IDAtNjQgMC0xNi0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDBMMCAwIDAgNjRsMzIwIDAgMC02NHpNMjU2IDI0MGwwLTE2LTMyIDAgMCAxNiAwIDY0IDAgMTYgMzIgMCAwLTE2IDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ToiletPortable: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64l24 0 272 0 24 0 0 24 0 400 0 24-48 0 0-24 0-8L48 480l0 8 0 24L0 512l0-24L0 88 0 64zM224 224l0 16 0 64 0 16 32 0 0-16 0-64 0-16-32 0z" />
            <path d="M320 0L0 0 0 64l320 0 0-64zM256 240l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64z" />
    </Icon>
);

export default ToiletPortable;