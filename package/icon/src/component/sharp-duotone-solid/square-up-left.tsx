
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-up-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=sharp-duotone-solid square-up-left}
 * @preview ![square-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTEyOCAxNjBsMTYwIDAgMjQgMjQtNTIgNTIgNzYgNzYtNTYgNTYtNzYtNzYtNTIgNTItMjQtMjQgMC0xNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNTIgMzQ0bC0yNC0yNCAwLTE2MCAxNjAgMCAyNCAyNC01MiA1MiA3NiA3Ni01NiA1Ni03Ni03Ni01MiA1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM128 160l160 0 24 24-52 52 76 76-56 56-76-76-52 52-24-24 0-160z" />
            <path d="M152 344l-24-24 0-160 160 0 24 24-52 52 76 76-56 56-76-76-52 52z" />
    </Icon>
);

export default SquareUpLeft;