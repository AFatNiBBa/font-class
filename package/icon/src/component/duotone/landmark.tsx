
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=duotone landmark}
 * @preview ![landmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGMwIDMuMSAuNCA2LjIgMS40IDkuM0M1LjUgNTAyLjggMTcuOSA1MTIgMzIgNTEybDQ0OCAwYzE0LjEgMCAyNi41LTkuMiAzMC42LTIyLjdjLjktMy4xIDEuNC02LjIgMS40LTkuM2MwLTEwLjUtNS4yLTIwLjYtMTQuMi0yNi42bC00OC0zMmMtLjYtLjQtMS4yLS43LTEuOC0xLjFMNDQ4IDE5MmwtNjQgMCAwIDIyNC00MCAwIDAtMjI0LTY0IDAgMCAyMjQtNDggMCAwLTIyNC02NCAwIDAgMjI0LTQwIDAgMC0yMjQtNjQgMCAwIDIyOC4zYy0uNiAuMy0xLjIgLjctMS43IDEuMWwtNDggMzJDNS4yIDQ1OS40IDAgNDY5LjUgMCA0ODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNzEuOSA0LjJjLTkuOC01LjYtMjEuOS01LjYtMzEuOCAwbC0yMjQgMTI4Yy0xMi42IDcuMi0xOC44IDIyLTE1LjEgMzZTMTcuNSAxOTIgMzIgMTkybDQ0OCAwYzE0LjUgMCAyNy4yLTkuOCAzMC45LTIzLjhzLTIuNS0yOC44LTE1LTM2bC0yMjQtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 3.1 .4 6.2 1.4 9.3C5.5 502.8 17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7c.9-3.1 1.4-6.2 1.4-9.3c0-10.5-5.2-20.6-14.2-26.6l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 192l-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 228.3c-.6 .3-1.2 .7-1.7 1.1l-48 32C5.2 459.4 0 469.5 0 480z" />
            <path d="M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128c-12.6 7.2-18.8 22-15.1 36S17.5 192 32 192l448 0c14.5 0 27.2-9.8 30.9-23.8s-2.5-28.8-15-36l-224-128z" />
    </Icon>
);

export default Landmark;