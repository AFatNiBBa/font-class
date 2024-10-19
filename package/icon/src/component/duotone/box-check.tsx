
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=duotone box-check}
 * @preview ![box-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwyMDggMCAwLTEyOEw5My43IDMyQzc1LjUgMzIgNTguOSA0Mi4zIDUwLjcgNTguNUwwIDE2MHpNMjQwIDMybDAgMTI4IDIwOCAwTDM5Ny4zIDU4LjVDMzg5LjEgNDIuMyAzNzIuNSAzMiAzNTQuMyAzMkwyNDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMTYwbC0yMDggMCAwLTEyOC0zMiAwIDAgMTI4TDAgMTYwIDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjU2ek0zMzcgMjY1TDIwOSAzOTNjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC02NC02NGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlzMjQuNi05LjQgMzMuOSAwbDQ3IDQ3TDMwMyAyMzFjOS40LTkuNCAyNC42LTkuNCAzMy45IDBzOS40IDI0LjYgMCAzMy45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5L0 160zM240 32l0 128 208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32z" />
            <path d="M448 160l-208 0 0-128-32 0 0 128L0 160 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256zM337 265L209 393c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 231c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </Icon>
);

export default BoxCheck;