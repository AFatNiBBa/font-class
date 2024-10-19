
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-regular tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzY4IDQzMmwwLTI0MGMwLTc5LjUtNjQuNS0xNDQtMTQ0LTE0NFM4MCAxMTIuNSA4MCAxOTJsMCAyNDAtNDggMCAwLTI0MEMzMiA4NiAxMTggMCAyMjQgMFM0MTYgODYgNDE2IDE5MmwwIDI0MC00OCAwek0wIDQ2NGwyNCAwIDQwMCAwIDI0IDAgMCA0OC0yNCAwTDI0IDUxMiAwIDUxMmwwLTQ4ek0yNDggMTUybDAgNDAgNDggMCAyNCAwIDAgNDgtMjQgMC00OCAwIDAgMTIwIDAgMjQtNDggMCAwLTI0IDAtMTIwLTQ4IDAtMjQgMCAwLTQ4IDI0IDAgNDggMCAwLTQwIDAtMjQgNDggMCAwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 432l0-240c0-79.5-64.5-144-144-144S80 112.5 80 192l0 240-48 0 0-240C32 86 118 0 224 0S416 86 416 192l0 240-48 0zM0 464l24 0 400 0 24 0 0 48-24 0L24 512 0 512l0-48zM248 152l0 40 48 0 24 0 0 48-24 0-48 0 0 120 0 24-48 0 0-24 0-120-48 0-24 0 0-48 24 0 48 0 0-40 0-24 48 0 0 24z" />
    </Icon>
);

export default Tombstone;