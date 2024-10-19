
import { Icon } from "../../index";

/**
 * A component that renders the `desktop` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=solid desktop}
 * @preview ![desktop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMEMyOC43IDAgMCAyOC43IDAgNjRMMCAzNTJjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMTc2IDAtMTAuNyAzMkwxNjAgNDQ4Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDI1NiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC02OS4zIDBMMzM2IDQxNmwxNzYgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTI4OGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAwek01MTIgNjRsMCAyMjRMNjQgMjg4IDY0IDY0bDQ0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Desktop: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" />
    </Icon>
);

export default Desktop;