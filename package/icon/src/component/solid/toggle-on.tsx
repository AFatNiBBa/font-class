
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=solid toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDY0Qzg2IDY0IDAgMTUwIDAgMjU2Uzg2IDQ0OCAxOTIgNDQ4bDE5MiAwYzEwNiAwIDE5Mi04NiAxOTItMTkycy04Ni0xOTItMTkyLTE5MkwxOTIgNjR6bTE5MiA5NmE5NiA5NiAwIDEgMSAwIDE5MiA5NiA5NiAwIDEgMSAwLTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default ToggleOn;