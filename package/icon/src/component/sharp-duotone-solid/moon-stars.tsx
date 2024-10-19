
import { Icon, generic } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=sharp-duotone-solid moon-stars}
 * @preview ![moon-stars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNDAgODBsNDggMTYgMTYgNDggMTYtNDggNDgtMTZMMzIwIDY0IDMwNCAxNiAyODggNjQgMjQwIDgwem04MCAxNDRsNzIgMjQgMjQgNzIgMjQtNzIgNzItMjQtNzItMjQtMjQtNzItMjQgNzItNzIgMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNDIuMiAxMzQuNkMxNzYuMiAxNTQuMyAxMjggMjE1LjUgMTI4IDI4OGMwIDg4LjQgNzEuNiAxNjAgMTYwIDE2MGMxOS41IDAgMzguMS0zLjUgNTUuMy05LjhDMzA4LjIgNDgzLjEgMjUzLjUgNTEyIDE5MiA1MTJDODYgNTEyIDAgNDI2IDAgMzIwUzg2IDEyOCAxOTIgMTI4YzE3LjQgMCAzNC4yIDIuMyA1MC4yIDYuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const MoonStars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M240 80l48 16 16 48 16-48 48-16L320 64 304 16 288 64 240 80zm80 144l72 24 24 72 24-72 72-24-72-24-24-72-24 72-72 24z" />
            <path d="M242.2 134.6C176.2 154.3 128 215.5 128 288c0 88.4 71.6 160 160 160c19.5 0 38.1-3.5 55.3-9.8C308.2 483.1 253.5 512 192 512C86 512 0 426 0 320S86 128 192 128c17.4 0 34.2 2.3 50.2 6.6z" />
    </Icon>
);

export default MoonStars;