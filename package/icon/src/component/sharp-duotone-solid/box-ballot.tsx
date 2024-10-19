
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=sharp-duotone-solid box-ballot}
 * @preview ![box-ballot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwxMjggMCAwIDY0LTQ4IDAtMTYgMCAwIDMyIDE2IDAgNDggMCAzMjAgMCA0OCAwIDE2IDAgMC0zMi0xNiAwLTQ4IDAgMC02NCAxMjggMCAwIDE2MEwwIDMyMCAwIDE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAwbDAgMjU2LTMyMCAwTDEyOCAwIDQ0OCAwek01NzYgNTEyTDAgNTEyIDAgMzIwbDU3NiAwIDAgMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l128 0 0 64-48 0-16 0 0 32 16 0 48 0 320 0 48 0 16 0 0-32-16 0-48 0 0-64 128 0 0 160L0 320 0 160z" />
            <path d="M448 0l0 256-320 0L128 0 448 0zM576 512L0 512 0 320l576 0 0 192z" />
    </Icon>
);

export default BoxBallot;