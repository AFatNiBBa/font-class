
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=sharp-duotone-solid square-right}
 * @preview ![square-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk2IDIwOGwxMjggMCAwLTgwIDMyIDBMMzg0IDI1NiAyNTYgMzg0bC0zMiAwIDAtODBMOTYgMzA0bDAtOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMzA0bDAgODAgMzIgMEwzODQgMjU2IDI1NiAxMjhsLTMyIDAgMCA4MEw5NiAyMDhsMCA5NiAxMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 208l128 0 0-80 32 0L384 256 256 384l-32 0 0-80L96 304l0-96z" />
            <path d="M224 304l0 80 32 0L384 256 256 128l-32 0 0 80L96 208l0 96 128 0z" />
    </Icon>
);

export default SquareRight;