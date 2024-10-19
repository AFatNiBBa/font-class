
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=sharp-duotone-solid shekel-sign}
 * @preview ![shekel-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMTYwbDAgMjg4IDAgMzIgMzIgMCAxNjAgMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOGwwLTMyMC02NCAwIDAgMzIwYzAgMzUuMy0yOC43IDY0LTY0IDY0bC0xMjggMCAwLTI1Ni02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMmwzMiAwIDE2MCAwYzcwLjcgMCAxMjggNTcuMyAxMjggMTI4bDAgMTkyLTY0IDAgMC0xOTJjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgOTZsMCAzODRMMCA0ODAgMCA2NCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 160l0 288 0 32 32 0 160 0c70.7 0 128-57.3 128-128l0-320-64 0 0 320c0 35.3-28.7 64-64 64l-128 0 0-256-64 0z" />
            <path d="M0 32l32 0 160 0c70.7 0 128 57.3 128 128l0 192-64 0 0-192c0-35.3-28.7-64-64-64L64 96l0 384L0 480 0 64 0 32z" />
    </Icon>
);

export default ShekelSign;