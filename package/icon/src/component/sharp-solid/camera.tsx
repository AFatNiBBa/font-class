
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=sharp-solid camera}
 * @preview ![camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDMyTDEzOC43IDk2IDAgOTYgMCA0ODBsNTEyIDAgMC0zODRMMzczLjMgOTYgMzUyIDMyIDE2MCAzMnptOTYgMTYwYTk2IDk2IDAgMSAxIDAgMTkyIDk2IDk2IDAgMSAxIDAtMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 32L138.7 96 0 96 0 480l512 0 0-384L373.3 96 352 32 160 32zm96 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Camera;