
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=duotone reflect-horizontal}
 * @preview ![reflect-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDM4NGMwIDEyLjkgNy44IDI0LjYgMTkuOCAyOS42YzQgMS42IDguMSAyLjQgMTIuMiAyLjRjOC4zIDAgMTYuNS0zLjMgMjIuNi05LjRsMTI4LTEyOGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTI4LTEyOGMtOS4yLTkuMi0yMi45LTExLjktMzQuOS02LjlTMCAxMTUuMSAwIDEyOHpNMzI5LjQgMjMzLjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zbDEyOCAxMjhjNi4xIDYuMSAxNC4zIDkuNCAyMi42IDkuNGM0LjEgMCA4LjMtLjggMTIuMi0yLjRjMTItNSAxOS44LTE2LjYgMTkuOC0yOS42bDAtMjU2YzAtMTIuOS03LjgtMjQuNi0xOS44LTI5LjZzLTI1LjctMi4yLTM0LjkgNi45bC0xMjggMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCA0NjRjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC00NjRjMC0xMy4zIDEwLjctMjQgMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 12.9 7.8 24.6 19.8 29.6c4 1.6 8.1 2.4 12.2 2.4c8.3 0 16.5-3.3 22.6-9.4l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S0 115.1 0 128zM329.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c6.1 6.1 14.3 9.4 22.6 9.4c4.1 0 8.3-.8 12.2-2.4c12-5 19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128z" />
            <path d="M256 0c13.3 0 24 10.7 24 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-464c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ReflectHorizontal;