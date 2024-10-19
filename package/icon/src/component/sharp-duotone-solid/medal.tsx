
import { Icon, generic } from "../../index";

/**
 * A component that renders the `medal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=sharp-duotone-solid medal}
 * @preview ![medal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMTQ0IDAgMjUwLjcgMTYwLjFjLTQzLjYgMS4zLTgzLjMgMTguNS0xMTMuNCA0NS45TDAgMHpNMjYxLjMgMTYwLjFMMzY4IDAgNTEyIDAgMzc0LjcgMjA2Yy0zMC4xLTI3LjUtNjkuNy00NC42LTExMy40LTQ1Ljl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNTEyYTE3NiAxNzYgMCAxIDAgMC0zNTIgMTc2IDE3NiAwIDEgMCAwIDM1MnptMjkuNy0yMTQuOGw2Ni4zIDkuMi00OCA0NC41IDExLjMgNjIuOEwyNTYgMzg0bC01OS4zIDI5LjdMMjA4IDM1MC44bC00OC00NC41IDY2LjMtOS4yTDI1NiAyNDBsMjkuNyA1Ny4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Medal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L144 0 250.7 160.1c-43.6 1.3-83.3 18.5-113.4 45.9L0 0zM261.3 160.1L368 0 512 0 374.7 206c-30.1-27.5-69.7-44.6-113.4-45.9z" />
            <path d="M256 512a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm29.7-214.8l66.3 9.2-48 44.5 11.3 62.8L256 384l-59.3 29.7L208 350.8l-48-44.5 66.3-9.2L256 240l29.7 57.2z" />
    </Icon>
);

export default Medal;