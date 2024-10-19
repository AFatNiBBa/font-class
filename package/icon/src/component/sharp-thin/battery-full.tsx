
import { Icon } from "../../index";

/**
 * A component that renders the `battery-full` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-full?s=sharp-thin battery-full}
 * @preview ![battery-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDExMmwwIDgwIDAgMTYgMCA5NiAwIDE2IDAgODBMMTYgNDAwbDAtMjg4IDQ5NiAwem0xNiAyODhsMC04MCAzMiAwIDE2IDAgMC0xNiAwLTk2IDAtMTYtMTYgMC0zMiAwIDAtODAgMC0xNi0xNiAwTDE2IDk2IDAgOTZsMCAxNkwwIDQwMGwwIDE2IDE2IDAgNDk2IDAgMTYgMCAwLTE2em0wLTk2bDAtOTYgMzIgMCAwIDk2LTMyIDB6TTgwIDE3NmwzNjggMCAwIDE2MEw4MCAzMzZsMC0xNjB6TTY0IDE2MGwwIDE2IDAgMTYwIDAgMTYgMTYgMCAzNjggMCAxNiAwIDAtMTYgMC0xNjAgMC0xNi0xNiAwTDgwIDE2MGwtMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryFull: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 112l0 80 0 16 0 96 0 16 0 80L16 400l0-288 496 0zm16 288l0-80 32 0 16 0 0-16 0-96 0-16-16 0-32 0 0-80 0-16-16 0L16 96 0 96l0 16L0 400l0 16 16 0 496 0 16 0 0-16zm0-96l0-96 32 0 0 96-32 0zM80 176l368 0 0 160L80 336l0-160zM64 160l0 16 0 160 0 16 16 0 368 0 16 0 0-16 0-160 0-16-16 0L80 160l-16 0z" />
    </Icon>
);

export default BatteryFull;