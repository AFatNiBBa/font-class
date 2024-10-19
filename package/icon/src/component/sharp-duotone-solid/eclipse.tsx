
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eclipse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eclipse?s=sharp-duotone-solid eclipse}
 * @preview ![eclipse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE1MEw3My4xIDI1NiAwIDM2MmwxMjYuNyAyMy4zTDE1MCA1MTJsMTA2LTczLjFMMzYyIDUxMmwxMi41LTY4LjJjLTMxLjYtMTUuMS01OC44LTM3LjktNzkuMi02NmMtMTIuNCA0LTI1LjYgNi4yLTM5LjQgNi4yYy03MC43IDAtMTI4LTU3LjMtMTI4LTEyOHM1Ny4zLTEyOCAxMjgtMTI4YzEzLjcgMCAyNyAyLjIgMzkuNCA2LjJjMjAuMy0yOC4xIDQ3LjYtNTAuOSA3OS4yLTY2TDM2MiAwIDI1NiA3My4xIDE1MCAwIDEyNi43IDEyNi43IDAgMTUwek0xNjAgMjU2YzAgNTMgNDMgOTYgOTYgOTZjNy42IDAgMTUtLjkgMjIuMS0yLjZDMjY0IDMyMS4zIDI1NiAyODkuNiAyNTYgMjU2czgtNjUuNCAyMi4xLTkzLjRjLTcuMS0xLjctMTQuNS0yLjYtMjIuMS0yLjZjLTUzIDAtOTYgNDMtOTYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NjQgODBhMTc2IDE3NiAwIDEgMCAwIDM1MiAxNzYgMTc2IDAgMSAwIDAtMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Eclipse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 150L73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l12.5-68.2c-31.6-15.1-58.8-37.9-79.2-66c-12.4 4-25.6 6.2-39.4 6.2c-70.7 0-128-57.3-128-128s57.3-128 128-128c13.7 0 27 2.2 39.4 6.2c20.3-28.1 47.6-50.9 79.2-66L362 0 256 73.1 150 0 126.7 126.7 0 150zM160 256c0 53 43 96 96 96c7.6 0 15-.9 22.1-2.6C264 321.3 256 289.6 256 256s8-65.4 22.1-93.4c-7.1-1.7-14.5-2.6-22.1-2.6c-53 0-96 43-96 96z" />
            <path d="M464 80a176 176 0 1 0 0 352 176 176 0 1 0 0-352z" />
    </Icon>
);

export default Eclipse;