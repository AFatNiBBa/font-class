
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=sharp-duotone-solid square-left}
 * @preview ![square-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ0OCAwIDAgNDQ4TDAgNDgwIDAgMzJ6TTY0IDI1NkwxOTIgMzg0bDMyIDAgMC04MCAxMjggMCAwLTk2LTEyOCAwIDAtODAtMzIgMEw2NCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMjA4bDAtODAtMzIgMEw2NCAyNTYgMTkyIDM4NGwzMiAwIDAtODAgMTI4IDAgMC05Ni0xMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM64 256L192 384l32 0 0-80 128 0 0-96-128 0 0-80-32 0L64 256z" />
            <path d="M224 208l0-80-32 0L64 256 192 384l32 0 0-80 128 0 0-96-128 0z" />
    </Icon>
);

export default SquareLeft;