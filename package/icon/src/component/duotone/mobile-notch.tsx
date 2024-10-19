
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=duotone mobile-notch}
 * @preview ![mobile-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiA4MEMxNiAzNS44IDUxLjggMCA5NiAwTDI4OCAwYzQ0LjIgMCA4MCAzNS44IDgwIDgwbDAgMzUyYzAgNDQuMi0zNS44IDgwLTgwIDgwTDk2IDUxMmMtNDQuMiAwLTgwLTM1LjgtODAtODBMMTYgODB6bTY0IDBsMCAzNTJjMCA4LjggNy4yIDE2IDE2IDE2bDE5MiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTM1MmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDAgMCAxNmMwIDguOC03LjIgMTYtMTYgMTZsLTk2IDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTE2TDk2IDY0Yy04LjggMC0xNiA3LjItMTYgMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggNjRIOTZjLTguOCAwLTE2IDcuMi0xNiAxNlY0MzJjMCA4LjggNy4yIDE2IDE2IDE2SDI4OGM4LjggMCAxNi03LjIgMTYtMTZWODBjMC04LjgtNy4yLTE2LTE2LTE2SDI1NlY4MGMwIDguOC03LjIgMTYtMTYgMTZIMTQ0Yy04LjggMC0xNi03LjItMTYtMTZWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 80C16 35.8 51.8 0 96 0L288 0c44.2 0 80 35.8 80 80l0 352c0 44.2-35.8 80-80 80L96 512c-44.2 0-80-35.8-80-80L16 80zm64 0l0 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16l0-352c0-8.8-7.2-16-16-16l-32 0 0 16c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-16L96 64c-8.8 0-16 7.2-16 16z" />
            <path d="M128 64H96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H256V80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V64z" />
    </Icon>
);

export default MobileNotch;