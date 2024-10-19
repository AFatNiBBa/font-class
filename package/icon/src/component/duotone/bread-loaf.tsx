
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=duotone bread-loaf}
 * @preview ![bread-loaf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmMwIDM1LjMgMjguNyA2NCA2NCA2NGwwIDE3NmMwIDI2LjUgMjEuNSA0OCA0OCA0OGwyNTYgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTE3NmMzNS4zIDAgNjQtMjguNyA2NC02NEM0ODAgNjQgMzA0IDMyIDI0MCAzMlMwIDY0IDAgMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzY4IDQ4MGwxNjAgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTE3NmMzNS4zIDAgNjQtMjguNyA2NC02NEM2NDAgNjQgNDY0IDMyIDQwMCAzMkwyNDAgMzJjNjQgMCAyNDAgMzIgMjQwIDE2MGMwIDM1LjMtMjguNyA2NC02NCA2NGwwIDE3NmMwIDI2LjUtMjEuNSA0OC00OCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 35.3 28.7 64 64 64l0 176c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-176c35.3 0 64-28.7 64-64C480 64 304 32 240 32S0 64 0 192z" />
            <path d="M368 480l160 0c26.5 0 48-21.5 48-48l0-176c35.3 0 64-28.7 64-64C640 64 464 32 400 32L240 32c64 0 240 32 240 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48z" />
    </Icon>
);

export default BreadLoaf;