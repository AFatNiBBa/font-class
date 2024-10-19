
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=duotone right-to-bracket}
 * @preview ![right-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgNjRjMCAxNy43IDE0LjMgMzIgMzIgMzJsNjQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDI1NmMwIDE3LjctMTQuMyAzMi0zMiAzMmwtNjQgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmw2NCAwYzUzIDAgOTYtNDMgOTYtOTZsMC0yNTZjMC01My00My05Ni05Ni05NmwtNjQgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNDAuNyAyMjguN0wyMTcuOSAxMDUuOWMtNi40LTYuNC0xNS05LjktMjQtOS45Yy0xOC43IDAtMzMuOSAxNS4yLTMzLjkgMzMuOWwwIDYyLjFMMzIgMTkyYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDY0YzAgMTcuNyAxNC4zIDMyIDMyIDMybDEyOCAwIDAgNjIuMWMwIDE4LjcgMTUuMiAzMy45IDMzLjkgMzMuOWM5IDAgMTcuNi0zLjYgMjQtOS45TDM0MC43IDI4My4zYzcuMi03LjIgMTEuMy0xNy4xIDExLjMtMjcuM3MtNC4xLTIwLjEtMTEuMy0yNy4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32z" />
            <path d="M340.7 228.7L217.9 105.9c-6.4-6.4-15-9.9-24-9.9c-18.7 0-33.9 15.2-33.9 33.9l0 62.1L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0 0 62.1c0 18.7 15.2 33.9 33.9 33.9c9 0 17.6-3.6 24-9.9L340.7 283.3c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3z" />
    </Icon>
);

export default RightToBracket;