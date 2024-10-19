
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kerning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=sharp-duotone-solid kerning}
 * @preview ![kerning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjggOTZMMTMwLjUgMzk2LjVsOC4zIDE5LjUgNDIuMyAwIDguMy0xOS41TDMxNy4yIDk2bC02OS41IDBMMTYwIDMwMi4yIDcyLjQgOTYgMi44IDk2em0zMjAgMzIwbDY5LjUgMCAyNy4yLTY0IDEyMC45IDAgMjcuMiA2NCA2OS41IDBMNTA5LjQgMTE1LjUgNTAxLjIgOTZsLTQyLjMgMC04LjMgMTkuNUwzMjIuOCA0MTZ6TTQ0Ni44IDI4OEw0ODAgMjA5LjggNTEzLjIgMjg4bC02Ni41IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMDEuMyA0ODkuNmwyMDgtNDgwIDI5LjQgMTIuNy0yMDggNDgwLTI5LjQtMTIuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M2.8 96L130.5 396.5l8.3 19.5 42.3 0 8.3-19.5L317.2 96l-69.5 0L160 302.2 72.4 96 2.8 96zm320 320l69.5 0 27.2-64 120.9 0 27.2 64 69.5 0L509.4 115.5 501.2 96l-42.3 0-8.3 19.5L322.8 416zM446.8 288L480 209.8 513.2 288l-66.5 0z" />
            <path d="M201.3 489.6l208-480 29.4 12.7-208 480-29.4-12.7z" />
    </Icon>
);

export default Kerning;