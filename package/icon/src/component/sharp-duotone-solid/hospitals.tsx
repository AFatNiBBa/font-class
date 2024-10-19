
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hospitals` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospitals?s=sharp-duotone-solid hospitals}
 * @preview ![hospitals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMEw1NzYgMGwwIDI1Ni0xMTIgMC0xNiAwIDAgMzIgMTYgMCAxMTIgMCAwIDY0LTExMiAwLTE2IDAgMCAzMiAxNiAwIDExMiAwIDAgMTI4LTI1NiAwIDAtNDQ4LTY0IDAgMC02NHpNMzY4IDEyMGwwIDQ4IDQwIDAgMCA0MCA0OCAwIDAtNDAgNDAgMCAwLTQ4LTQwIDAgMC00MC00OCAwIDAgNDAtNDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQwOCA4MGwwIDQwLTQwIDAgMCA0OCA0MCAwIDAgNDAgNDggMCAwLTQwIDQwIDAgMC00OC00MCAwIDAtNDAtNDggMHpNMjg4IDk2TDAgOTYgMCAzODRsMTQ0IDAgMTYgMCAwIDMyLTE2IDBMMCA0MTZsMCA5NiAyODggMCAwLTQxNnpNMTY4IDE3NmwwIDQwIDQwIDAgMCA0OC00MCAwIDAgNDAtNDggMCAwLTQwLTQwIDAgMC00OCA0MCAwIDAtNDAgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hospitals: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 0L576 0l0 256-112 0-16 0 0 32 16 0 112 0 0 64-112 0-16 0 0 32 16 0 112 0 0 128-256 0 0-448-64 0 0-64zM368 120l0 48 40 0 0 40 48 0 0-40 40 0 0-48-40 0 0-40-48 0 0 40-40 0z" />
            <path d="M408 80l0 40-40 0 0 48 40 0 0 40 48 0 0-40 40 0 0-48-40 0 0-40-48 0zM288 96L0 96 0 384l144 0 16 0 0 32-16 0L0 416l0 96 288 0 0-416zM168 176l0 40 40 0 0 48-40 0 0 40-48 0 0-40-40 0 0-48 40 0 0-40 48 0z" />
    </Icon>
);

export default Hospitals;