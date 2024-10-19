
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=sharp-duotone-solid brackets-square}
 * @preview ![brackets-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggMzJsMCA2NCAzMiAwIDY0IDAgMCAzMjAtNjQgMC0zMiAwIDAgNjQgMzIgMCA5NiAwIDMyIDAgMC0zMiAwLTM4NCAwLTMyLTMyIDAtOTYgMC0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMmwzMiAwIDk2IDAgMzIgMCAwIDY0LTMyIDBMNjQgOTZsMCAzMjAgNjQgMCAzMiAwIDAgNjQtMzIgMC05NiAwTDAgNDgwbDAtMzJMMCA2NCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M288 32l0 64 32 0 64 0 0 320-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-384 0-32-32 0-96 0-32 0z" />
            <path d="M0 32l32 0 96 0 32 0 0 64-32 0L64 96l0 320 64 0 32 0 0 64-32 0-96 0L0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default BracketsSquare;