
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clapperboard-play` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard-play?s=sharp-duotone-solid clapperboard-play}
 * @preview ![clapperboard-play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGw2LjEgMCA2Ny45IDAgOTIuMSAwIDY3LjkgMCA5Mi4xIDAgNjcuOSAwTDUxMiAxNjBsMCAzMjBMMCA0ODAgMCAxNjB6bTIwOCA3MmwwIDE3NiAxMzYtODhMMjA4IDIzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2MS45IDMybC0xIDEtMTI3IDEyNyA5Mi4xIDAgMS0xIDEyNy0xMjctOTIuMSAwek01MTIgMTYwbDAtMTE4LjFMMzkzLjkgMTYwIDUxMiAxNjB6TTI5NC4xIDMybC05Mi4xIDAtMSAxTDczLjkgMTYwbDkyLjEgMCAxLTEgMTI3LTEyN3pNMCAzMkwwIDE2MGw2LjEgMCAxLTEgMTI3LTEyN0wwIDMyek0zNDQgMzIwTDIwOCAyMzJsMCAxNzYgMTM2LTg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClapperboardPlay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l6.1 0 67.9 0 92.1 0 67.9 0 92.1 0 67.9 0L512 160l0 320L0 480 0 160zm208 72l0 176 136-88L208 232z" />
            <path d="M361.9 32l-1 1-127 127 92.1 0 1-1 127-127-92.1 0zM512 160l0-118.1L393.9 160 512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM0 32L0 160l6.1 0 1-1 127-127L0 32zM344 320L208 232l0 176 136-88z" />
    </Icon>
);

export default ClapperboardPlay;