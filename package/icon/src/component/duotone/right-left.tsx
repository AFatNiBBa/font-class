
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=duotone right-left}
 * @preview ![right-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGMwIDguNSAzLjQgMTYuNiA5LjQgMjIuNmw5NiA5NmM5LjIgOS4yIDIyLjkgMTEuOSAzNC45IDYuOXMxOS44LTE2LjYgMTkuOC0yOS42bDAtNjQgMzIwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTMyMCAwIDAtNjRjMC0xMi45LTcuOC0yNC42LTE5LjgtMjkuNnMtMjUuNy0yLjItMzQuOSA2LjlsLTk2IDk2Yy02IDYtOS40IDE0LjEtOS40IDIyLjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDEyOGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMjAgMCAwLTY0YzAtMTIuOSA3LjgtMjQuNiAxOS44LTI5LjZzMjUuNy0yLjIgMzQuOSA2LjlsOTYgOTZjNiA2IDkuNCAxNC4xIDkuNCAyMi42cy0zLjQgMTYuNi05LjQgMjIuNmwtOTYgOTZjLTkuMiA5LjItMjIuOSAxMS45LTM0LjkgNi45cy0xOS44LTE2LjYtMTkuOC0yOS42bDAtNjRMMzIgMTYwYy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384c0 8.5 3.4 16.6 9.4 22.6l96 96c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-64 320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-320 0 0-64c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-96 96c-6 6-9.4 14.1-9.4 22.6z" />
            <path d="M0 128c0-17.7 14.3-32 32-32l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default RightLeft;