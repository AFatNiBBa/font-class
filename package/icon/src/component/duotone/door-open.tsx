
import { Icon, generic } from "../../index";

/**
 * A component that renders the `door-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=duotone door-open}
 * @preview ![door-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA5Mi41TDY0IDQ0OGwwIDMyIDAgMzIgMzIgMCAxOTIgMCAzMiAwIDAtMzIgMC0zNTIgMC02NCAwLTMyYzAtOS45LTQuNS0xOS4yLTEyLjMtMjUuMkMzMDIgMi4zIDI5NS4xIDAgMjg4IDBjLTIuNiAwLTUuMiAuMy03LjggMWwtMTc5LjkgNDVDNzkgNTEuMyA2NCA3MC41IDY0IDkyLjV6TTIwOCAyNTZjMC0xNy43IDEwLjctMzIgMjQtMzJzMjQgMTQuMyAyNCAzMnMtMTAuNyAzMi0yNCAzMnMtMjQtMTQuMy0yNC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCAxMjhsMTI4IDAgMCAzNTJjMCAxNy43IDE0LjMgMzIgMzIgMzJsNjQgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtMzIgMCAwLTMyMGMwLTM1LjMtMjguNy02NC02NC02NEwzMjAgNjRsMCA2NHpNMzIgNDQ4Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDMyIDAgMC02NC0zMiAwek0yMzIgMjg4YzEzLjMgMCAyNC0xNC4zIDI0LTMycy0xMC43LTMyLTI0LTMycy0yNCAxNC4zLTI0IDMyczEwLjcgMzIgMjQgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 92.5L64 448l0 32 0 32 32 0 192 0 32 0 0-32 0-352 0-64 0-32c0-9.9-4.5-19.2-12.3-25.2C302 2.3 295.1 0 288 0c-2.6 0-5.2 .3-7.8 1l-179.9 45C79 51.3 64 70.5 64 92.5zM208 256c0-17.7 10.7-32 24-32s24 14.3 24 32s-10.7 32-24 32s-24-14.3-24-32z" />
            <path d="M320 128l128 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320c0-35.3-28.7-64-64-64L320 64l0 64zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0-64-32 0zM232 288c13.3 0 24-14.3 24-32s-10.7-32-24-32s-24 14.3-24 32s10.7 32 24 32z" />
    </Icon>
);

export default DoorOpen;