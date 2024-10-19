
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-ten` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten?s=sharp-duotone-solid clock-ten}
 * @preview ![clock-ten](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyNi43LTU3LjNsMjYuNi0zOS45IDIwIDEzLjNMMjMyIDIxMS4ybDAtOTEuMiAwLTI0IDQ4IDAgMCAyNCAwIDEzNiAwIDQ0LjhMMjQyLjcgMjc2bC05Ni02NC0yMC0xMy4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjMyIDk2bDAgMjQgMCA5MS4yTDE3My4zIDE3MmwtMjAtMTMuMy0yNi42IDM5LjkgMjAgMTMuMyA5NiA2NEwyODAgMzAwLjhsMC00NC44IDAtMTM2IDAtMjQtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockTen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm126.7-57.3l26.6-39.9 20 13.3L232 211.2l0-91.2 0-24 48 0 0 24 0 136 0 44.8L242.7 276l-96-64-20-13.3z" />
            <path d="M232 96l0 24 0 91.2L173.3 172l-20-13.3-26.6 39.9 20 13.3 96 64L280 300.8l0-44.8 0-136 0-24-48 0z" />
    </Icon>
);

export default ClockTen;