
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=sharp-duotone-solid rectangle-history}
 * @preview ![rectangle-history](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCA4MGwwIDQ4IDQxNiAwIDAtNDhMNDggODB6TTk2IDBsMCA0OCAzMjAgMCAwLTQ4TDk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMTYwbDAgMzUyTDAgNTEyIDAgMTYwbDUxMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 80l0 48 416 0 0-48L48 80zM96 0l0 48 320 0 0-48L96 0z" />
            <path d="M512 160l0 352L0 512 0 160l512 0z" />
    </Icon>
);

export default RectangleHistory;