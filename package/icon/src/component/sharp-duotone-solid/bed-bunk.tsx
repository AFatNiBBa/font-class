
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-bunk` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-bunk?s=sharp-duotone-solid bed-bunk}
 * @preview ![bed-bunk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA0OGE0OCA0OCAwIDEgMCA5NiAwQTQ4IDQ4IDAgMSAwIDk2IDQ4em0wIDI1NmE0OCA0OCAwIDEgMCA5NiAwIDQ4IDQ4IDAgMSAwIC05NiAwek0yMjQgMGwwIDEyOCAzMiAwIDI1NiAwIDMyIDAgMzIgMEM1NzYgNTcuMyA1MTguNyAwIDQ0OCAwTDIyNCAwem0wIDI1NmwwIDEyOCAzMiAwIDI1NiAwIDAtMTI4LTI4OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzJMNjQgMCAwIDAgMCAzMiAwIDQ4MGwwIDMyIDY0IDAgMC0zMiAwLTMyIDE5MiAwIDI1NiAwIDAgMzIgMCAzMiA2NCAwIDAtMzIgMC0zMjAgMC0zMi0zMiAwLTMyIDAtMjU2IDBMNjQgMTI4bDAtOTZ6TTUxMiAzODRsLTI1NiAwTDY0IDM4NGwwLTE5MiAxOTIgMCAyNTYgMCAwIDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BedBunk: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 48a48 48 0 1 0 96 0A48 48 0 1 0 96 48zm0 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM224 0l0 128 32 0 256 0 32 0 32 0C576 57.3 518.7 0 448 0L224 0zm0 256l0 128 32 0 256 0 0-128-288 0z" />
            <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32 0-32 192 0 256 0 0 32 0 32 64 0 0-32 0-320 0-32-32 0-32 0-256 0L64 128l0-96zM512 384l-256 0L64 384l0-192 192 0 256 0 0 192z" />
    </Icon>
);

export default BedBunk;