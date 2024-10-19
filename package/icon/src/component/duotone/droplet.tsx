
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=duotone droplet}
 * @preview ![droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMEMwIDQyNiA4NiA1MTIgMTkyIDUxMnMxOTItODYgMTkyLTE5MmMwLTkxLjItMTMwLjItMjYyLjMtMTY2LjYtMzA4LjNDMjExLjQgNC4yIDIwMi41IDAgMTkyLjkgMGwtMS44IDBjLTkuNiAwLTE4LjUgNC4yLTI0LjUgMTEuN0MxMzAuMiA1Ny43IDAgMjI4LjggMCAzMjB6bTY0IDE2YzAtOC44IDcuMi0xNiAxNi0xNnMxNiA3LjIgMTYgMTZjMCA0NC4yIDM1LjggODAgODAgODBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZjLTYxLjkgMC0xMTItNTAuMS0xMTItMTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNODAgMzIwYzguOCAwIDE2IDcuMiAxNiAxNmMwIDQ0LjIgMzUuOCA4MCA4MCA4MGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmMtNjEuOSAwLTExMi01MC4xLTExMi0xMTJjMC04LjggNy4yLTE2IDE2LTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320zm64 16c0-8.8 7.2-16 16-16s16 7.2 16 16c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112z" />
            <path d="M80 320c8.8 0 16 7.2 16 16c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Droplet;