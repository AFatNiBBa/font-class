
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-y` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=sharp-duotone-solid square-y}
 * @preview ![square-y](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTg4LjYgMTQ0bDU5LjUgMEwyMjQgMjQ3LjQgMjk5LjggMTQ0bDU5LjUgMEwyNDggMjk1LjlsMCA4MC4xIDAgMjQtNDggMCAwLTI0IDAtODAuMUw4OC42IDE0NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTg4LjYgMTQ0TDIwMCAyOTUuOWwwIDgwLjEgMCAyNCA0OCAwIDAtMjQgMC04MC4xTDM1OS40IDE0NGwtNTkuNSAwTDIyNCAyNDcuNCAxNDguMiAxNDRsLTU5LjUgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM88.6 144l59.5 0L224 247.4 299.8 144l59.5 0L248 295.9l0 80.1 0 24-48 0 0-24 0-80.1L88.6 144z" />
            <path d="M88.6 144L200 295.9l0 80.1 0 24 48 0 0-24 0-80.1L359.4 144l-59.5 0L224 247.4 148.2 144l-59.5 0z" />
    </Icon>
);

export default SquareY;