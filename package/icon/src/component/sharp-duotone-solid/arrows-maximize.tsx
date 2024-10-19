
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=sharp-duotone-solid arrows-maximize}
 * @preview ![arrows-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMmwwIDMyIDAgMTI4IDAgMzIgNjQgMCAwLTMyIDAtNTAuN0wyMTAuNyAyNTYgMjU2IDIxMC43IDE0MS4zIDk2IDE5MiA5NmwzMiAwIDAtNjQtMzIgMEw2NCAzMiAzMiAzMnpNMjU2IDMwMS4zTDM3MC43IDQxNiAzMjAgNDE2bC0zMiAwIDAgNjQgMzIgMCAxMjggMCAzMiAwIDAtMzIgMC0xMjggMC0zMi02NCAwIDAgMzIgMCA1MC43TDMwMS4zIDI1NiAyNTYgMzAxLjN6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzJsMzIgMCAxMjggMCAzMiAwIDAgMzIgMCAxMjggMCAzMi02NCAwIDAtMzIgMC01MC43TDE0MS4zIDQxNmw1MC43IDAgMzIgMCAwIDY0LTMyIDBMNjQgNDgwbC0zMiAwIDAtMzIgMC0xMjggMC0zMiA2NCAwIDAgMzIgMCA1MC43TDM3MC43IDk2IDMyMCA5NmwtMzIgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32l0 32 0 128 0 32 64 0 0-32 0-50.7L210.7 256 256 210.7 141.3 96 192 96l32 0 0-64-32 0L64 32 32 32zM256 301.3L370.7 416 320 416l-32 0 0 64 32 0 128 0 32 0 0-32 0-128 0-32-64 0 0 32 0 50.7L301.3 256 256 301.3z" />
            <path d="M288 32l32 0 128 0 32 0 0 32 0 128 0 32-64 0 0-32 0-50.7L141.3 416l50.7 0 32 0 0 64-32 0L64 480l-32 0 0-32 0-128 0-32 64 0 0 32 0 50.7L370.7 96 320 96l-32 0 0-64z" />
    </Icon>
);

export default ArrowsMaximize;