
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-right?s=sharp-duotone-solid square-down-right}
 * @preview ![square-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTExMiAyMDBsNTYtNTYgNzYgNzYgNTItNTIgMjQgMjQgMCAxNjAtMTYwIDAtMjQtMjQgNTItNTItNzYtNzZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOTYgMTY4bDI0IDI0IDAgMTYwLTE2MCAwLTI0LTI0IDUyLTUyLTc2LTc2IDU2LTU2IDc2IDc2IDUyLTUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 200l56-56 76 76 52-52 24 24 0 160-160 0-24-24 52-52-76-76z" />
            <path d="M296 168l24 24 0 160-160 0-24-24 52-52-76-76 56-56 76 76 52-52z" />
    </Icon>
);

export default SquareDownRight;