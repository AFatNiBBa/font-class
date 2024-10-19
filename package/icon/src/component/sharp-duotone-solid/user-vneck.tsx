
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=sharp-duotone-solid user-vneck}
 * @preview ![user-vneck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMTI4QTEyOCAxMjggMCAxIDEgOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMzguNyAzMDRMMjI0IDQzMmw4NS4zLTEyOCA3NC43IDAgNjQgMjA4TDAgNTEyIDY0IDMwNGw3NC43IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M138.7 304L224 432l85.3-128 74.7 0 64 208L0 512 64 304l74.7 0z" />
    </Icon>
);

export default UserVneck;