
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=duotone box-ballot}
 * @preview ![box-ballot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOEwwIDMyMGw1NzYgMCAwLTExMmMwLTI2LjUtMjEuNS00OC00OC00OGwtODAgMCAwIDY0IDQ4IDBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZsLTQ4IDAtMzIwIDAtNDggMGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNmw0OCAwIDAtNjQtODAgMGMtMjYuNSAwLTQ4IDIxLjUtNDggNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMEw0MTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDIyNC0zMjAgMCAwLTIyNGMwLTE3LjcgMTQuMy0zMiAzMi0zMnpNMzIgNTEyYy0xNy43IDAtMzItMTQuMy0zMi0zMkwwIDMyMGw1NzYgMCAwIDE2MGMwIDE3LjctMTQuMyAzMi0zMiAzMkwzMiA1MTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 208L0 320l576 0 0-112c0-26.5-21.5-48-48-48l-80 0 0 64 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-320 0-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-64-80 0c-26.5 0-48 21.5-48 48z" />
            <path d="M160 0L416 0c17.7 0 32 14.3 32 32l0 224-320 0 0-224c0-17.7 14.3-32 32-32zM32 512c-17.7 0-32-14.3-32-32L0 320l576 0 0 160c0 17.7-14.3 32-32 32L32 512z" />
    </Icon>
);

export default BoxBallot;