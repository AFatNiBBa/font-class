
import { Icon, generic } from "../../index";

/**
 * A component that renders the `campground` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=duotone campground}
 * @preview ![campground](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwxNjguNSAwTDI4OCA0NDhsMTE5LjUgMEw1NzYgNDQ4bDAgMTZjMCAyNi40LTIxLjMgNDcuOC00Ny43IDQ4bC0uMyAwLTI0MCAwTDQ4IDUxMmwtLjMgMEMyMS4zIDUxMS44IDAgNDkwLjQgMCA0NjRsMC0xNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM3MiA3YzEzLjggMTEgMTYgMzEuMiA1IDQ1bC00OCA2MEw1NjMuNyA0MDUuNGM3LjkgOS45IDEyLjMgMjIuMyAxMi4zIDM1bDAgNy42LTE2OC41IDBMMjg4IDI5MS43IDE2OC41IDQ0OCAwIDQ0OGwwLTcuNmMwLTEyLjcgNC4zLTI1LjEgMTIuMy0zNUwyNDcgMTEyIDE5OSA1MmMtMTEtMTMuOC04LjgtMzMuOSA1LTQ1czMzLjktOC44IDQ1IDVsMzkgNDguOEwzMjcgMTJjMTEtMTMuOCAzMS4yLTE2IDQ1LTV6TTQ3LjcgNTEybDQ4MC43IDAtLjMgMC0yNDAgMEw0OCA1MTJsLS4zIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448l168.5 0L288 448l119.5 0L576 448l0 16c0 26.4-21.3 47.8-47.7 48l-.3 0-240 0L48 512l-.3 0C21.3 511.8 0 490.4 0 464l0-16z" />
            <path d="M372 7c13.8 11 16 31.2 5 45l-48 60L563.7 405.4c7.9 9.9 12.3 22.3 12.3 35l0 7.6-168.5 0L288 291.7 168.5 448 0 448l0-7.6c0-12.7 4.3-25.1 12.3-35L247 112 199 52c-11-13.8-8.8-33.9 5-45s33.9-8.8 45 5l39 48.8L327 12c11-13.8 31.2-16 45-5zM47.7 512l480.7 0-.3 0-240 0L48 512l-.3 0z" />
    </Icon>
);

export default Campground;