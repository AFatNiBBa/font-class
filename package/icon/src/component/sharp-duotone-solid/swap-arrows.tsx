
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=sharp-duotone-solid swap-arrows}
 * @preview ![swap-arrows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggMzJsMCAzMmMwIDY0IDAgMTI4IDAgMTkyYzIxLjMgMCA0Mi43IDAgNjQgMGwwLTE2MCAxMjggMCAwIDI5MC43LTI1LjQtMjUuNEw0MzIgMzM4LjcgMzg2LjcgMzg0bDIyLjYgMjIuNiA4MCA4MEw1MTIgNTA5LjNsMjIuNi0yMi42IDgwLTgwTDYzNy4zIDM4NCA1OTIgMzM4LjdsLTIyLjYgMjIuNkw1NDQgMzg2LjcgNTQ0IDY0bDAtMzItMzIgMEwzMjAgMzJsLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNTAuNiAyNS40TDEyOCAyLjcgMTA1LjQgMjUuNGwtODAgODBMMi43IDEyOCA0OCAxNzMuM2wyMi42LTIyLjZMOTYgMTI1LjMgOTYgNDQ4bDAgMzIgMzIgMCAxOTIgMCAzMiAwIDAtMzIgMC0xOTItNjQgMCAwIDE2MC0xMjggMCAwLTI5MC43IDI1LjQgMjUuNEwyMDggMTczLjMgMjUzLjMgMTI4bC0yMi42LTIyLjYtODAtODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 32l0 32c0 64 0 128 0 192c21.3 0 42.7 0 64 0l0-160 128 0 0 290.7-25.4-25.4L432 338.7 386.7 384l22.6 22.6 80 80L512 509.3l22.6-22.6 80-80L637.3 384 592 338.7l-22.6 22.6L544 386.7 544 64l0-32-32 0L320 32l-32 0z" />
            <path d="M150.6 25.4L128 2.7 105.4 25.4l-80 80L2.7 128 48 173.3l22.6-22.6L96 125.3 96 448l0 32 32 0 192 0 32 0 0-32 0-192-64 0 0 160-128 0 0-290.7 25.4 25.4L208 173.3 253.3 128l-22.6-22.6-80-80z" />
    </Icon>
);

export default SwapArrows;