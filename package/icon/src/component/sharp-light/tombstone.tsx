
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-light tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDQ0OGwwLTI1NmMwLTg4LjQtNzEuNi0xNjAtMTYwLTE2MFM2NCAxMDMuNiA2NCAxOTJsMCAyNTYtMzIgMCAwLTI1NkMzMiA4NiAxMTggMCAyMjQgMFM0MTYgODYgNDE2IDE5MmwwIDI1Ni0zMiAwek0wIDQ4MGwxNiAwIDQxNiAwIDE2IDAgMCAzMi0xNiAwTDE2IDUxMiAwIDUxMmwwLTMyek0yNDAgMTQ0bDAgNjQgNjQgMCAxNiAwIDAgMzItMTYgMC02NCAwIDAgMTI4IDAgMTYtMzIgMCAwLTE2IDAtMTI4LTY0IDAtMTYgMCAwLTMyIDE2IDAgNjQgMCAwLTY0IDAtMTYgMzIgMCAwIDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 448l0-256c0-88.4-71.6-160-160-160S64 103.6 64 192l0 256-32 0 0-256C32 86 118 0 224 0S416 86 416 192l0 256-32 0zM0 480l16 0 416 0 16 0 0 32-16 0L16 512 0 512l0-32zM240 144l0 64 64 0 16 0 0 32-16 0-64 0 0 128 0 16-32 0 0-16 0-128-64 0-16 0 0-32 16 0 64 0 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default Tombstone;