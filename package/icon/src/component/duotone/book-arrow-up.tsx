
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=duotone book-arrow-up}
 * @preview ![book-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0MTZjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTIwIDAgMC02NEw5NiAzODRjLTE3LjcgMC0zMiAxNC4zLTMyIDMyem0yMDAtMzJsMCA2NCA4OCAwIDY0IDAgMC02NC02NCAwLTg4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAwQzQzIDAgMCA0MyAwIDk2TDAgNDE2YzAgNTMgNDMgOTYgOTYgOTZsMTIwIDAgMC02NEw5NiA0NDhjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMTIwIDAgMC0xNzQuMS0zOSAzOWMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBzLTkuNC0yNC42IDAtMzMuOWw4MC04MGM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGw4MCA4MGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOXMtMjQuNiA5LjQtMzMuOSAwbC0zOS0zOUwyNjQgMzg0bDg4IDAgNjQgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMkwzODQgMCA5NiAwek0yNjQgNDQ4bDAgNjQgMTIwIDAgMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtNjQgMC04OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BookArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0 17.7 14.3 32 32 32l120 0 0-64L96 384c-17.7 0-32 14.3-32 32zm200-32l0 64 88 0 64 0 0-64-64 0-88 0z" />
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l120 0 0-64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l120 0 0-174.1-39 39c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39L264 384l88 0 64 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zM264 448l0 64 120 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-88 0z" />
    </Icon>
);

export default BookArrowUp;