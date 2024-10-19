
import { Icon } from "../../index";

/**
 * A component that renders the `circle-o` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-o?s=solid circle-o}
 * @preview ![circle-o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTE3NiAyNTZhODAgODAgMCAxIDAgMTYwIDAgODAgODAgMCAxIDAgLTE2MCAwem04MCAxMjhhMTI4IDEyOCAwIDEgMSAwLTI1NiAxMjggMTI4IDAgMSAxIDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleO: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 256a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm80 128a128 128 0 1 1 0-256 128 128 0 1 1 0 256z" />
    </Icon>
);

export default CircleO;