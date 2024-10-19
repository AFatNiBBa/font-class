
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=regular toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDExMmMtNzkuNSAwLTE0NCA2NC41LTE0NCAxNDRzNjQuNSAxNDQgMTQ0IDE0NGwxOTIgMGM3OS41IDAgMTQ0LTY0LjUgMTQ0LTE0NHMtNjQuNS0xNDQtMTQ0LTE0NGwtMTkyIDB6TTAgMjU2QzAgMTUwIDg2IDY0IDE5MiA2NGwxOTIgMGMxMDYgMCAxOTIgODYgMTkyIDE5MnMtODYgMTkyLTE5MiAxOTJsLTE5MiAwQzg2IDQ0OCAwIDM2MiAwIDI1NnptMzg0LTk2YTk2IDk2IDAgMSAxIDAgMTkyIDk2IDk2IDAgMSAxIDAtMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 112c-79.5 0-144 64.5-144 144s64.5 144 144 144l192 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-192 0zM0 256C0 150 86 64 192 64l192 0c106 0 192 86 192 192s-86 192-192 192l-192 0C86 448 0 362 0 256zm384-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default ToggleOn;