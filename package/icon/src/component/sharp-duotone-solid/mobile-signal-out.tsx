
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-signal-out` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal-out?s=sharp-duotone-solid mobile-signal-out}
 * @preview ![mobile-signal-out](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA2NCAwIDQ0OGwwIDY0IDY0IDAgMjI0IDAgNjQgMCAwLTY0IDAtMTYwLTY0IDAgMCAxNjBMNjQgNDQ4IDY0IDY0bDE2MCAwIDAtNjRMNjQgMCAwIDB6TTEyOCAzODRsMCAzMiAxNiAwIDY0IDAgMTYgMCAwLTMyLTE2IDAtNjQgMC0xNiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDY0IDI1NmMwLTExNC45LTkzLjEtMjA4LTIwOC0yMDhsMC00OEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2bC00OCAwek0yNTYgMjI0YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bTAtODBsMC00OGM4OC40IDAgMTYwIDcxLjYgMTYwIDE2MGwtNDggMGMwLTYxLjktNTAuMS0xMTItMTEyLTExMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const MobileSignalOut: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 64 0 448l0 64 64 0 224 0 64 0 0-64 0-160-64 0 0 160L64 448 64 64l160 0 0-64L64 0 0 0zM128 384l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0z" />
            <path d="M464 256c0-114.9-93.1-208-208-208l0-48C397.4 0 512 114.6 512 256l-48 0zM256 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm0-80l0-48c88.4 0 160 71.6 160 160l-48 0c0-61.9-50.1-112-112-112z" />
    </Icon>
);

export default MobileSignalOut;