
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=duotone tablet-screen}
 * @preview ![tablet-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwzODQgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDM4NGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA1MTJjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6bTY0IDBsMCAzMjAgMzIwIDAgMC0zMjBMNjQgNjR6bTk2IDM4NGMwIDguOCA3LjIgMTYgMTYgMTZsOTYgMGM4LjggMCAxNi03LjIgMTYtMTZzLTcuMi0xNi0xNi0xNmwtOTYgMGMtOC44IDAtMTYgNy4yLTE2IDE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgNjRIMzg0VjM4NEg2NFY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm64 0l0 320 320 0 0-320L64 64zm96 384c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" />
            <path d="M64 64H384V384H64V64z" />
    </Icon>
);

export default TabletScreen;