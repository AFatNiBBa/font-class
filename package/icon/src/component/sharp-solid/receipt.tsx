
import { Icon } from "../../index";

/**
 * A component that renders the `receipt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=sharp-solid receipt}
 * @preview ![receipt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDAgNTEybDY0LTQ4IDY0IDQ4IDY0LTQ4IDY0IDQ4IDY0LTQ4IDY0IDQ4TDM4NCAwIDMyMCA0OCAyNTYgMCAxOTIgNDggMTI4IDAgNjQgNDggMCAwek05NiAxNDRsMTkyIDAgMTYgMCAwIDMyLTE2IDBMOTYgMTc2bC0xNiAwIDAtMzIgMTYgMHpNODAgMzM2bDE2IDAgMTkyIDAgMTYgMCAwIDMyLTE2IDBMOTYgMzY4bC0xNiAwIDAtMzJ6bTE2LTk2bDE5MiAwIDE2IDAgMCAzMi0xNiAwTDk2IDI3MmwtMTYgMCAwLTMyIDE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L0 512l64-48 64 48 64-48 64 48 64-48 64 48L384 0 320 48 256 0 192 48 128 0 64 48 0 0zM96 144l192 0 16 0 0 32-16 0L96 176l-16 0 0-32 16 0zM80 336l16 0 192 0 16 0 0 32-16 0L96 368l-16 0 0-32zm16-96l192 0 16 0 0 32-16 0L96 272l-16 0 0-32 16 0z" />
    </Icon>
);

export default Receipt;