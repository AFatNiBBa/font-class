
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-left?s=sharp-duotone-solid square-down-left}
 * @preview ![square-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTEyOCAxOTJsMjQtMjQgNTIgNTIgNzYtNzYgNTYgNTYtNzYgNzYgNTIgNTItMjQgMjQtMTYwIDAgMC0xNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNTIgMTY4bC0yNCAyNCAwIDE2MCAxNjAgMCAyNC0yNC01Mi01MiA3Ni03Ni01Ni01Ni03NiA3Ni01Mi01MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM128 192l24-24 52 52 76-76 56 56-76 76 52 52-24 24-160 0 0-160z" />
            <path d="M152 168l-24 24 0 160 160 0 24-24-52-52 76-76-56-56-76 76-52-52z" />
    </Icon>
);

export default SquareDownLeft;