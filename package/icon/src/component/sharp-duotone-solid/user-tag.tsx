
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-tag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-tag?s=sharp-duotone-solid user-tag}
 * @preview ![user-tag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmw0NDggMC04LjMtMjcuMUwzMjAgMzY1LjNsMC02MS4zTDY0IDMwNCAwIDUxMnpNOTYgMTI4YTEyOCAxMjggMCAxIDAgMjU2IDBBMTI4IDEyOCAwIDEgMCA5NiAxMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NDAgMzg0TDUxMiA1MTIgMzUyIDM1MmwwLTk2IDMyLTMyIDk2IDBMNjQwIDM4NHpNNDMyIDMyOGEyNCAyNCAwIDEgMCAwLTQ4IDI0IDI0IDAgMSAwIDAgNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const UserTag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l448 0-8.3-27.1L320 365.3l0-61.3L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M640 384L512 512 352 352l0-96 32-32 96 0L640 384zM432 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default UserTag;