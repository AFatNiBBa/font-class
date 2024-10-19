
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-exclamation?s=duotone diamond-exclamation}
 * @preview ![diamond-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDEwLjIgMy45IDIwLjUgMTEuNyAyOC4zbDIxNiAyMTZjMTUuNiAxNS42IDQwLjkgMTUuNiA1Ni42IDBsMjE2LTIxNmMxNS42LTE1LjYgMTUuNi00MC45IDAtNTYuNmwtMjE2LTIxNkMyNzYuNSAzLjkgMjY2LjIgMCAyNTYgMHMtMjAuNSAzLjktMjguMyAxMS43bC0yMTYgMjE2QzMuOSAyMzUuNSAwIDI0NS44IDAgMjU2em0yODggOTZhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHpNMjMyIDE1MmMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0bDAgMTEyYzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0bDAtMTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjgwIDE1MmMwLTEzLjMtMTAuNy0yNC0yNC0yNHMtMjQgMTAuNy0yNCAyNGwwIDExMmMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0bDAtMTEyek0yNTYgMzg0YTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiamondExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 10.2 3.9 20.5 11.7 28.3l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216C276.5 3.9 266.2 0 256 0s-20.5 3.9-28.3 11.7l-216 216C3.9 235.5 0 245.8 0 256zm288 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM232 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
            <path d="M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DiamondExclamation;