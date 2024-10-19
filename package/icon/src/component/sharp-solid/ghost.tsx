
import { Icon } from "../../index";

/**
 * A component that renders the `ghost` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=sharp-solid ghost}
 * @preview ![ghost](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggNDQ4TDAgNDgwIDAgMTkyQzAgODYgODYgMCAxOTIgMFMzODQgODYgMzg0IDE5MmwwIDI4OC00OC0zMi03MiA2NC03Mi02NC03MiA2NEw0OCA0NDh6TTE2MCAxOTJhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHptOTYgMzJhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 448L0 480 0 192C0 86 86 0 192 0S384 86 384 192l0 288-48-32-72 64-72-64-72 64L48 448zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Ghost;