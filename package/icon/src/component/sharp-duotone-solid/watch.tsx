
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=sharp-duotone-solid watch}
 * @preview ![watch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgMjU2QTE5MiAxOTIgMCAxIDEgMCAyNTZhMTkyIDE5MiAwIDEgMSAzODQgMHpNMTY4IDE1MmwwIDI0IDAgODAgMCAxMi44IDEwLjcgNy4xIDQ4IDMyIDIwIDEzLjMgMjYuNi0zOS45LTIwLTEzLjNMMjE2IDI0My4ybDAtNjcuMiAwLTI0LTQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAwTDMyMCAwbDAgMTEyLjlDMjg2IDgyLjUgMjQxLjIgNjQgMTkyIDY0cy05NCAxOC41LTEyOCA0OC45TDY0IDB6TTE5MiA0NDhjNDkuMiAwIDk0LTE4LjUgMTI4LTQ4LjlMMzIwIDUxMiA2NCA1MTJsMC0xMTIuOUM5OCA0MjkuNSAxNDIuOCA0NDggMTkyIDQ0OHptMjQtMjcybDAgNjcuMkwyNTMuMyAyNjhsMjAgMTMuMy0yNi42IDM5LjktMjAtMTMuMy00OC0zMkwxNjggMjY4LjhsMC0xMi44IDAtODAgMC0yNCA0OCAwIDAgMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M384 256A192 192 0 1 1 0 256a192 192 0 1 1 384 0zM168 152l0 24 0 80 0 12.8 10.7 7.1 48 32 20 13.3 26.6-39.9-20-13.3L216 243.2l0-67.2 0-24-48 0z" />
            <path d="M64 0L320 0l0 112.9C286 82.5 241.2 64 192 64s-94 18.5-128 48.9L64 0zM192 448c49.2 0 94-18.5 128-48.9L320 512 64 512l0-112.9C98 429.5 142.8 448 192 448zm24-272l0 67.2L253.3 268l20 13.3-26.6 39.9-20-13.3-48-32L168 268.8l0-12.8 0-80 0-24 48 0 0 24z" />
    </Icon>
);

export default Watch;