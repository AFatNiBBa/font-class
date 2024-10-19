
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=sharp-duotone-solid square-dashed}
 * @preview ![square-dashed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjRsMCA5NiA2NCAwIDAtNjQgNjQgMCAwLTY0TDMyIDMyIDAgMzJ6TTAgMzUybDAgOTYgMCAzMiAzMiAwIDk2IDAgMC02NC02NCAwIDAtNjRMMCAzNTJ6TTMyMCAzMmwwIDY0IDY0IDAgMCA2NCA2NCAwIDAtOTYgMC0zMi0zMiAwLTk2IDB6bTAgMzg0bDAgNjQgOTYgMCAzMiAwIDAtMzIgMC05Ni02NCAwIDAgNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTkyTDAgMzIwbDY0IDAgMC0xMjhMMCAxOTJ6bTM4NCAwbDAgMTI4IDY0IDAgMC0xMjgtNjQgMHpNMjg4IDQ4MGwwLTY0LTEyOCAwIDAgNjQgMTI4IDB6TTE2MCA5NmwxMjggMCAwLTY0TDE2MCAzMmwwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64l0 96 64 0 0-64 64 0 0-64L32 32 0 32zM0 352l0 96 0 32 32 0 96 0 0-64-64 0 0-64L0 352zM320 32l0 64 64 0 0 64 64 0 0-96 0-32-32 0-96 0zm0 384l0 64 96 0 32 0 0-32 0-96-64 0 0 64-64 0z" />
            <path d="M0 192L0 320l64 0 0-128L0 192zm384 0l0 128 64 0 0-128-64 0zM288 480l0-64-128 0 0 64 128 0zM160 96l128 0 0-64L160 32l0 64z" />
    </Icon>
);

export default SquareDashed;