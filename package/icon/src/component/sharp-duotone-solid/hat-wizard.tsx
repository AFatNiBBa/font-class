
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-wizard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-wizard?s=sharp-duotone-solid hat-wizard}
 * @preview ![hat-wizard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwwIDY0IDMyIDAgNDQ4IDAgMzIgMCAwLTY0LTMyIDAtMTYgMEw0OCA0NDhsLTE2IDBMMCA0NDh6TTIyNCAxNzZsMzIgMTYgMTYgMzIgMTYtMzIgMzItMTYtMzItMTYtMTYtMzItMTYgMzItMzIgMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMTI4TDQ4IDQ0OGw0MTYgMEwzNTIgMTkyIDQxNiAwIDE5MiAxMjh6bTggMjAwbDI0LTU2IDI0IDU2IDU2IDI0LTU2IDI0LTI0IDU2LTI0LTU2LTU2LTI0IDU2LTI0em03Mi0xMDRsLTE2LTMyLTMyLTE2IDMyLTE2IDE2LTMyIDE2IDMyIDMyIDE2LTMyIDE2LTE2IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HatWizard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l0 64 32 0 448 0 32 0 0-64-32 0-16 0L48 448l-16 0L0 448zM224 176l32 16 16 32 16-32 32-16-32-16-16-32-16 32-32 16z" />
            <path d="M192 128L48 448l416 0L352 192 416 0 192 128zm8 200l24-56 24 56 56 24-56 24-24 56-24-56-56-24 56-24zm72-104l-16-32-32-16 32-16 16-32 16 32 32 16-32 16-16 32z" />
    </Icon>
);

export default HatWizard;