
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-bracket?s=sharp-duotone-solid arrow-down-to-bracket}
 * @preview ![arrow-down-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDMyTDAgNDgwbDAgMzIgMzIgMCAzODQgMCAzMiAwIDAtMzIgMC0xMjggMC0zMi02NCAwIDAgMzIgMCA5Nkw2NCA0NDhsMC05NiAwLTMyTDAgMzIweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDM2NS4zbDIyLjYtMjIuNiAxMjgtMTI4TDM5Ny4zIDE5MiAzNTIgMTQ2LjdsLTIyLjYgMjIuNkwyNTYgMjQyLjcgMjU2IDMybDAtMzJMMTkyIDBsMCAzMiAwIDIxMC43LTczLjQtNzMuNEw5NiAxNDYuNyA1MC43IDE5MmwyMi42IDIyLjYgMTI4IDEyOEwyMjQgMzY1LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowDownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96L64 448l0-96 0-32L0 320z" />
            <path d="M224 365.3l22.6-22.6 128-128L397.3 192 352 146.7l-22.6 22.6L256 242.7 256 32l0-32L192 0l0 32 0 210.7-73.4-73.4L96 146.7 50.7 192l22.6 22.6 128 128L224 365.3z" />
    </Icon>
);

export default ArrowDownToBracket;