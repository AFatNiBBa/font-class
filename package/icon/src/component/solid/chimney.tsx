
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=solid chimney}
 * @preview ![chimney](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NEMwIDQ2LjMgMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDY0YzAgMTcuNy0xNC4zIDMyLTMyIDMyTDMyIDE2MGMtMTcuNyAwLTMyLTE0LjMtMzItMzJMMCA2NHpNMzIgMTkybDk2IDAgMCAxMjgtOTYgMCAwLTEyOHptMzg0IDBsMCAxMjgtMjU2IDAgMC0xMjggMjU2IDB6TTI4OCAzNTJsMCAxMjhMMzIgNDgwbDAtMTI4IDI1NiAwem0xMjggMGwwIDEyOC05NiAwIDAtMTI4IDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L32 160c-17.7 0-32-14.3-32-32L0 64zM32 192l96 0 0 128-96 0 0-128zm384 0l0 128-256 0 0-128 256 0zM288 352l0 128L32 480l0-128 256 0zm128 0l0 128-96 0 0-128 96 0z" />
    </Icon>
);

export default Chimney;