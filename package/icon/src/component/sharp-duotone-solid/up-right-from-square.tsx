
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-right-from-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=sharp-duotone-solid up-right-from-square}
 * @preview ![up-right-from-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgMTI4IDAgMzIgMCAwIDY0LTMyIDBMNjQgOTZsMCAzNTIgMzUyIDAgMC05NiAwLTMyIDY0IDAgMCAzMiAwIDEyOCAwIDMyLTMyIDBMMzIgNTEyIDAgNTEybDAtMzJMMCA2NCAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDgwIDIwOGwzMi0zMkw1MTIgMCAzMzYgMCAzMDQgMzJsNjUuNCA2NS40LTE2OCAxNjhMMTc4LjcgMjg4IDIyNCAzMzMuM2wyMi42LTIyLjYgMTY4LTE2OEw0ODAgMjA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l32 0 128 0 32 0 0 64-32 0L64 96l0 352 352 0 0-96 0-32 64 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
            <path d="M480 208l32-32L512 0 336 0 304 32l65.4 65.4-168 168L178.7 288 224 333.3l22.6-22.6 168-168L480 208z" />
    </Icon>
);

export default UpRightFromSquare;