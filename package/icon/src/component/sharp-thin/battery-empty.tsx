
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=sharp-thin battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMTEybDAgMjg4IDQ5NiAwIDAtODAgMC0xNiAwLTk2IDAtMTYgMC04MEwxNiAxMTJ6TTUyOCAzMjBsMCA4MCAwIDE2LTE2IDBMMTYgNDE2IDAgNDE2bDAtMTZMMCAxMTIgMCA5NmwxNiAwIDQ5NiAwIDE2IDAgMCAxNiAwIDgwIDMyIDAgMTYgMCAwIDE2IDAgOTYgMCAxNi0xNiAwLTMyIDB6bTAtMTEybDAgOTYgMzIgMCAwLTk2LTMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 112l0 288 496 0 0-80 0-16 0-96 0-16 0-80L16 112zM528 320l0 80 0 16-16 0L16 416 0 416l0-16L0 112 0 96l16 0 496 0 16 0 0 16 0 80 32 0 16 0 0 16 0 96 0 16-16 0-32 0zm0-112l0 96 32 0 0-96-32 0z" />
    </Icon>
);

export default BatteryEmpty;