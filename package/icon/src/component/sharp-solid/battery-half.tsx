
import { Icon } from "../../index";

/**
 * A component that renders the `battery-half` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-half?s=sharp-solid battery-half}
 * @preview ![battery-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDE2MGwwIDE5Mkw2NCAzNTJsMC0xOTIgNDE2IDB6TTY0IDk2TDAgOTZsMCA2NEwwIDM1MmwwIDY0IDY0IDAgNDE2IDAgNjQgMCAwLTY0IDAtMzIgMzIgMCAwLTEyOC0zMiAwIDAtMzIgMC02NC02NCAwTDY0IDk2em0yMjQgOTZMOTYgMTkybDAgMTI4IDE5MiAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatteryHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 160l0 192L64 352l0-192 416 0zM64 96L0 96l0 64L0 352l0 64 64 0 416 0 64 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L64 96zm224 96L96 192l0 128 192 0 0-128z" />
    </Icon>
);

export default BatteryHalf;