
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=sharp-duotone-solid computer-mouse}
 * @preview ![computer-mouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMTc2IDBsMCAxOTJMMCAxOTIgMCAwek0wIDIyNGwxOTIgMCAxOTIgMCAwIDEyOGMwIDg4LjQtNzEuNiAxNjAtMTYwIDE2MGwtNjQgMEM3MS42IDUxMiAwIDQ0MC40IDAgMzUyTDAgMjI0ek0yMDggMEwzODQgMGwwIDE5Mi0xNzYgMEwyMDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiAxOTJMMCAxOTJsMCAzMiAxOTIgMCAxOTIgMCAwLTMyLTE3NiAwTDIwOCAwIDE3NiAwbDAgMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L176 0l0 192L0 192 0 0zM0 224l192 0 192 0 0 128c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 224zM208 0L384 0l0 192-176 0L208 0z" />
            <path d="M176 192L0 192l0 32 192 0 192 0 0-32-176 0L208 0 176 0l0 192z" />
    </Icon>
);

export default ComputerMouse;