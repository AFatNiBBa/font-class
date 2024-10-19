
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=sharp-duotone-solid h4}
 * @preview ![h4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgOTYgMCAyNTYgMCA0MTZsMCAzMiA2NCAwIDAtMzIgMC0xMjggMTkyIDAgMCAxMjggMCAzMiA2NCAwIDAtMzIgMC0xNjAgMC0xNjAgMC0zMi02NCAwIDAgMzIgMCAxMjhMNjQgMjI0IDY0IDk2bDAtMzJMMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NC41IDI4Mi4yTDQyNC41IDY0bDY1LjEgMEw0NTQuNCAyNTYgNTc2IDI1NmwwLTE2MCAwLTMyIDY0IDAgMCAzMiAwIDMyMCAwIDMyLTY0IDAgMC0zMiAwLTk2LTE2MCAwLTM4LjQgMCA2LjktMzcuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 256 0 416l0 32 64 0 0-32 0-128 192 0 0 128 0 32 64 0 0-32 0-160 0-160 0-32-64 0 0 32 0 128L64 224 64 96l0-32L0 64z" />
            <path d="M384.5 282.2L424.5 64l65.1 0L454.4 256 576 256l0-160 0-32 64 0 0 32 0 320 0 32-64 0 0-32 0-96-160 0-38.4 0 6.9-37.8z" />
    </Icon>
);

export default H4;