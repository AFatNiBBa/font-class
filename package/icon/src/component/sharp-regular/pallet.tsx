
import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=sharp-regular pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQgMzIwTDAgMzIwbDAgNDggMjQgMCA0MCAwIDAgOTYtNDAgMEwwIDQ2NGwwIDQ4IDI0IDAgNDAgMCAyNCAwIDI0IDAgMTg0IDAgMjQgMCAyNCAwIDE4NCAwIDI0IDAgMjQgMCA0MCAwIDI0IDAgMC00OC0yNCAwLTQwIDAgMC05NiA0MCAwIDI0IDAgMC00OC0yNCAwLTQwIDAtMjQgMC0yNCAwLTE4NCAwLTI0IDAtMjQgMC0xODQgMC0yNCAwLTI0IDAtNDAgMHptODggNDhsMTg0IDAgMCA5Ni0xODQgMCAwLTk2em0yMzIgMGwxODQgMCAwIDk2LTE4NCAwIDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 320L0 320l0 48 24 0 40 0 0 96-40 0L0 464l0 48 24 0 40 0 24 0 24 0 184 0 24 0 24 0 184 0 24 0 24 0 40 0 24 0 0-48-24 0-40 0 0-96 40 0 24 0 0-48-24 0-40 0-24 0-24 0-184 0-24 0-24 0-184 0-24 0-24 0-40 0zm88 48l184 0 0 96-184 0 0-96zm232 0l184 0 0 96-184 0 0-96z" />
    </Icon>
);

export default Pallet;