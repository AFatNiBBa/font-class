
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=sharp-solid chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDgyLjdsMjIuNiAyMi42IDE5MiAxOTJMNDkzLjMgMzIwIDQ0OCAzNjUuM2wtMjIuNi0yMi42TDI1NiAxNzMuMyA4Ni42IDM0Mi42IDY0IDM2NS4zIDE4LjcgMzIwbDIyLjYtMjIuNiAxOTItMTkyTDI1NiA4Mi43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 82.7l22.6 22.6 192 192L493.3 320 448 365.3l-22.6-22.6L256 173.3 86.6 342.6 64 365.3 18.7 320l22.6-22.6 192-192L256 82.7z" />
    </Icon>
);

export default ChevronUp;