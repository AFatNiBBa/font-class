
import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=thin window-minimize}
 * @preview ![window-minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOCA0NjRjLTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDhsNDk2IDBjNC40IDAgOC0zLjYgOC04cy0zLjYtOC04LThMOCA0NjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l496 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 464z" />
    </Icon>
);

export default WindowMinimize;