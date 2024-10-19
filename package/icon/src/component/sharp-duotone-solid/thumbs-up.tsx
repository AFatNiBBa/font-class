
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbs-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-up?s=sharp-duotone-solid thumbs-up}
 * @preview ![thumbs-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMjAwLjlsMCAyMy4xIDAgOTYgMCA2NCAwIDI1LjcgMjEuNCAxNC4yIDcyIDQ4IDEyLjEgOC4xIDE0LjUgMCAxMjAgMCA0OCAwIDAtNTYgMjQgMCAwLTcyIDI0IDAgMC04MCAxNiAwIDAtOTYtNDggMC0xNTMuOCAwQzMyNyAxNDIuOCAzMzYgMTA1LjggMzM2IDY3LjdMMzM2IDMybC05NiAwIDAgMzUuN2MwIDQzLjctMTkuOSA4NS4xLTU0IDExMi40bC03LjkgNi40LTE4IDE0LjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDE5MkgxMjhWNDgwSDBWMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ThumbsUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 200.9l0 23.1 0 96 0 64 0 25.7 21.4 14.2 72 48 12.1 8.1 14.5 0 120 0 48 0 0-56 24 0 0-72 24 0 0-80 16 0 0-96-48 0-153.8 0C327 142.8 336 105.8 336 67.7L336 32l-96 0 0 35.7c0 43.7-19.9 85.1-54 112.4l-7.9 6.4-18 14.4z" />
            <path d="M0 192H128V480H0V192z" />
    </Icon>
);

export default ThumbsUp;