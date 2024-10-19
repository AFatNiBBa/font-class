
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=sharp-duotone-solid arrow-down-long}
 * @preview ![arrow-down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMGwwIDMyIDAgMzU3LjUgMzIgMzIgMzItMzJMMjI0IDMybDAtMzJMMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgNTEybC0yMi42LTIyLjYtMTI4LTEyOEwxOC43IDMzOC43IDY0IDI5My41bDIyLjYgMjIuNkwxOTIgNDIxLjUgMjk3LjQgMzE2LjEgMzIwIDI5My41bDQ1LjMgNDUuMy0yMi42IDIyLjYtMTI4IDEyOEwxOTIgNTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 0l0 32 0 357.5 32 32 32-32L224 32l0-32L160 0z" />
            <path d="M192 512l-22.6-22.6-128-128L18.7 338.7 64 293.5l22.6 22.6L192 421.5 297.4 316.1 320 293.5l45.3 45.3-22.6 22.6-128 128L192 512z" />
    </Icon>
);

export default ArrowDownLong;