
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=duotone landmark-flag}
 * @preview ![landmark-flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGMwIDMuMSAuNCA2LjIgMS40IDkuM0M1LjUgNTAyLjggMTcuOSA1MTIgMzIgNTEybDQ0OCAwYzE0LjEgMCAyNi41LTkuMiAzMC42LTIyLjdjLjktMy4xIDEuNC02LjIgMS40LTkuM2MwLTEwLjUtNS4yLTIwLjYtMTQuMi0yNi42bC00OC0zMmMtLjYtLjQtMS4yLS43LTEuOC0xLjFMNDQ4IDE5MmwtNjQgMCAwIDIyNC00MCAwIDAtMjI0LTY0IDAgMCAyMjQtNDggMCAwLTIyNC02NCAwIDAgMjI0LTQwIDAgMC0yMjQtNjQgMCAwIDIyOC4zYy0uNiAuMy0xLjIgLjctMS43IDEuMWwtNDggMzJDNS4yIDQ1OS40IDAgNDY5LjUgMCA0ODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNzIgMGw4MCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDY0YzAgOC44LTcuMiAxNi0xNiAxNmwtODAgMCAwIDMyIDE5MiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDQ4IDE5MmMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxOTIgMCAwLTExMmMwLTguOCA3LjItMTYgMTYtMTZsMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 3.1 .4 6.2 1.4 9.3C5.5 502.8 17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7c.9-3.1 1.4-6.2 1.4-9.3c0-10.5-5.2-20.6-14.2-26.6l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 192l-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 228.3c-.6 .3-1.2 .7-1.7 1.1l-48 32C5.2 459.4 0 469.5 0 480z" />
            <path d="M272 0l80 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-80 0 0 32 192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0 0-112c0-8.8 7.2-16 16-16l16 0z" />
    </Icon>
);

export default LandmarkFlag;