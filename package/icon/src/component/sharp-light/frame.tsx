
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-light frame}
 * @preview ![frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDEyOGwwLTMyLTY0IDAgMC02NC0zMiAwIDAgNjRMOTYgOTZsMC02NEw2NCAzMmwwIDY0TDAgOTZsMCAzMiA2NCAwIDAgMjU2TDAgMzg0bDAgMzIgNjQgMCAwIDY0IDMyIDAgMC02NCAyNTYgMCAwIDY0IDMyIDAgMC02NCA2NCAwIDAtMzItNjQgMCAwLTI1NiA2NCAwek05NiAzODRsMC0yNTYgMjU2IDAgMCAyNTZMOTYgMzg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 128l0-32-64 0 0-64-32 0 0 64L96 96l0-64L64 32l0 64L0 96l0 32 64 0 0 256L0 384l0 32 64 0 0 64 32 0 0-64 256 0 0 64 32 0 0-64 64 0 0-32-64 0 0-256 64 0zM96 384l0-256 256 0 0 256L96 384z" />
    </Icon>
);

export default Frame;