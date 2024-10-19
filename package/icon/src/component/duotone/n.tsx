
import { Icon, generic } from "../../index";

/**
 * A component that renders the `n` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=duotone n}
 * @preview ![n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMS4xIDMzLjljMTIuNy00LjYgMjYuOS0uNyAzNS41IDkuNkwzMjAgMzU5LjYgMzIwIDY0YzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJsMCAzODRjMCAxMy41LTguNCAyNS41LTIxLjEgMzAuMXMtMjYuOSAuNy0zNS41LTkuNkw2NCAxNTIuNCA2NCA0NDhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJMMCA2NEMwIDUwLjUgOC40IDM4LjUgMjEuMSAzMy45eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4 64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 50.5 8.4 38.5 21.1 33.9z" />
    </Icon>
);

export default N;