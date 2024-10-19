
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=sharp-duotone-solid comment-slash}
 * @preview ![comment-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNDBjMC0yNy44IDYuNy01NC40IDE4LjktNzguN0w0MjQuMSA0MzAuMUMzOTIuMyA0NDEuNiAzNTcgNDQ4IDMyMCA0NDhjLTMxLjUgMC02MS43LTQuNi04OS42LTEzLjFMODAgNDgwbDQwLjktMTA5LjJDODUuMyAzMzUuMSA2NCAyODkuNiA2NCAyNDB6TTE0NCA4OWM0NS45LTM1LjMgMTA3LjktNTcgMTc2LTU3YzE0MS40IDAgMjU2IDkzLjEgMjU2IDIwOGMwIDUyLTIzLjUgOTkuNi02Mi4zIDEzNkMzOTAuNCAyODAuNCAyNjcuMiAxODQuNyAxNDQgODl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOS40IC4xbDE5IDE0LjdMNjIwLjkgNDU5LjNsMTkgMTQuNy0yOS40IDM3LjktMTktMTQuN0wxOSA1Mi43IDAgMzggMjkuNCAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CommentSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 240c0-27.8 6.7-54.4 18.9-78.7L424.1 430.1C392.3 441.6 357 448 320 448c-31.5 0-61.7-4.6-89.6-13.1L80 480l40.9-109.2C85.3 335.1 64 289.6 64 240zM144 89c45.9-35.3 107.9-57 176-57c141.4 0 256 93.1 256 208c0 52-23.5 99.6-62.3 136C390.4 280.4 267.2 184.7 144 89z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CommentSlash;