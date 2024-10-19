
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-tie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=sharp-duotone-solid user-tie}
 * @preview ![user-tie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMTI4QTEyOCAxMjggMCAxIDEgOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMzA0bDMzLjEgNTUuMkwxNzUuOCA0ODMuMSAxMzUuOCAzMjAgNjQgMzIwIDAgNTEybDE2OCAwIDE0LjkgMCA4Mi4zIDAgMTQuOSAwIDE2OCAwTDM4NCAzMjBsLTcxLjggMEwyNzIuMiA0ODMuMSAyMzguOSAzNTkuMiAyNzIgMzA0bC00OCAwLTQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const UserTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M176 304l33.1 55.2L175.8 483.1 135.8 320 64 320 0 512l168 0 14.9 0 82.3 0 14.9 0 168 0L384 320l-71.8 0L272.2 483.1 238.9 359.2 272 304l-48 0-48 0z" />
    </Icon>
);

export default UserTie;