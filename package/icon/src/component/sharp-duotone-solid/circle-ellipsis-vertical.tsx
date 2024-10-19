
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-ellipsis-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis-vertical?s=sharp-duotone-solid circle-ellipsis-vertical}
 * @preview ![circle-ellipsis-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIyNCAxMjhsNjQgMCAwIDY0LTY0IDAgMC02NHptMCA5Nmw2NCAwIDAgNjQtNjQgMCAwLTY0em0wIDk2bDY0IDAgMCA2NC02NCAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMTI4bDAgNjQtNjQgMCAwLTY0IDY0IDB6bTAgOTZsMCA2NC02NCAwIDAtNjQgNjQgMHptMCAxNjBsLTY0IDAgMC02NCA2NCAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleEllipsisVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM224 128l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
            <path d="M288 128l0 64-64 0 0-64 64 0zm0 96l0 64-64 0 0-64 64 0zm0 160l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default CircleEllipsisVertical;