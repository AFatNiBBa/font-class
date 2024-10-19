
import { Icon } from "../../index";

/**
 * A component that renders the `battery-low` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-low?s=sharp-light battery-low}
 * @preview ![battery-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDEyOGwwIDI1NkwzMiAzODRsMC0yNTYgNDQ4IDB6TTMyIDk2TDAgOTZsMCAzMkwwIDM4NGwwIDMyIDMyIDAgNDQ4IDAgMzIgMCAwLTMyIDAtMjU2IDAtMzItMzIgMEwzMiA5NnptNTQ0IDk2bC0zMiAwIDAgMzIgMCA2NCAwIDMyIDMyIDAgMC0zMiAwLTY0IDAtMzJ6TTk2IDE5MmwzMiAwIDAgMTI4LTMyIDAgMC0xMjh6TTY0IDE2MGwwIDMyIDAgMTI4IDAgMzIgMzIgMCAzMiAwIDMyIDAgMC0zMiAwLTEyOCAwLTMyLTMyIDAtMzIgMC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatteryLow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 128l0 256L32 384l0-256 448 0zM32 96L0 96l0 32L0 384l0 32 32 0 448 0 32 0 0-32 0-256 0-32-32 0L32 96zm544 96l-32 0 0 32 0 64 0 32 32 0 0-32 0-64 0-32zM96 192l32 0 0 128-32 0 0-128zM64 160l0 32 0 128 0 32 32 0 32 0 32 0 0-32 0-128 0-32-32 0-32 0-32 0z" />
    </Icon>
);

export default BatteryLow;