
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=duotone bars-progress}
 * @preview ![bars-progress](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjg4bDAgNjQgMjU2IDAgMCAzMi0yNTYgMCAwIDY0IDI3MiAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtNjRjMC0yNi41LTIxLjUtNDgtNDgtNDhsLTI3MiAwek0zMjAgNjRsMCA2NCAxMjggMCAwIDMyLTEyOCAwIDAgNjQgMTQ0IDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhsMC02NGMwLTI2LjUtMjEuNS00OC00OC00OEwzMjAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDExMkMwIDg1LjUgMjEuNSA2NCA0OCA2NEgzMjBWMjI0SDQ4Yy0yNi41IDAtNDgtMjEuNS00OC00OFYxMTJ6TTAgMzM2YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4SDE5MlY0NDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjMzNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 288l0 64 256 0 0 32-256 0 0 64 272 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-272 0zM320 64l0 64 128 0 0 32-128 0 0 64 144 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L320 64z" />
            <path d="M0 112C0 85.5 21.5 64 48 64H320V224H48c-26.5 0-48-21.5-48-48V112zM0 336c0-26.5 21.5-48 48-48H192V448H48c-26.5 0-48-21.5-48-48V336z" />
    </Icon>
);

export default BarsProgress;