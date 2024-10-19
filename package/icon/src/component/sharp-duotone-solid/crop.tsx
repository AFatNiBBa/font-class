
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=sharp-duotone-solid crop}
 * @preview ![crop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwbDAgMzIgMCAzMiAwIDY0IDAgMjg4IDAgMzIgMzIgMCAyODggMCAwLTY0LTIxMC43IDBMMzg0IDE3My4zbDAtNDUuMy00NS4zIDBMMTI4IDMzOC43IDEyOCAxMjhsMC02NCAwLTMyIDAtMzJMNjQgMHpNNDAyLjcgNjRMNDE2IDY0bDMyIDAgMCAzMiAwIDEzLjMgNjIuNi02Mi42TDQ2NS40IDEuNCA0MDIuNyA2NHpNNDQ4IDM4NGwwIDY0IDMyIDAgMzIgMCAwLTY0LTMyIDAtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDY0TDAgNjRsMCA2NCAzMiAwIDMyIDAgMC02NEwzMiA2NHpNMzg0IDQ4MGwwIDMyIDY0IDAgMC0zMiAwLTM4NCAwLTMyLTMyIDBMMTI4IDY0bDAgNjQgMjU2IDAgMCAzNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 32 0 32 0 64 0 288 0 32 32 0 288 0 0-64-210.7 0L384 173.3l0-45.3-45.3 0L128 338.7 128 128l0-64 0-32 0-32L64 0zM402.7 64L416 64l32 0 0 32 0 13.3 62.6-62.6L465.4 1.4 402.7 64zM448 384l0 64 32 0 32 0 0-64-32 0-32 0z" />
            <path d="M32 64L0 64l0 64 32 0 32 0 0-64L32 64zM384 480l0 32 64 0 0-32 0-384 0-32-32 0L128 64l0 64 256 0 0 352z" />
    </Icon>
);

export default Crop;