
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=sharp-duotone-solid left-to-bracket}
 * @preview ![left-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjQgMCA0NDhsMCAzMiAzMiAwIDEyOCAwIDMyIDAgMC02NC0zMiAwLTk2IDBMNjQgOTZsOTYgMCAzMiAwIDAtNjQtMzIgMEwzMiAzMiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDI1NkwzMjAgNDE2bDMyIDAgMC05NiAxNjAgMCAwLTEyOC0xNjAgMCAwLTk2LTMyIDBMMTYwIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 128 0 32 0 0-64-32 0-96 0L64 96l96 0 32 0 0-64-32 0L32 32 0 32z" />
            <path d="M160 256L320 416l32 0 0-96 160 0 0-128-160 0 0-96-32 0L160 256z" />
    </Icon>
);

export default LeftToBracket;