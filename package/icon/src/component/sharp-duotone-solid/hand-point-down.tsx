
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-point-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-down?s=sharp-duotone-solid hand-point-down}
 * @preview ![hand-point-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0OWMwLTMzLjkgMTMuNS02Ni41IDM3LjUtOTAuNUw0OS4xIDQ2LjlDNzkuMSAxNi45IDExOS44IDAgMTYyLjMgMEwyMjQgMGM4OC40IDAgMTYwIDcxLjYgMTYwIDE2MGwtOTYgMCAwIDMyLTY0IDAgMC00OCAwLTE2LTE2IDBMOTYgMTI4bC0xNiAwIDAgMzIgMTYgMCA5NiAwIDAgMzIgMCA0OEwwIDI0MGwwLTkxek0zMiAyNzJsNjQgMCAwIDI0MC02NCAwIDAtMjQweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDMyMGwtNjQgMCAwLTEyOCA2NCAwIDAgMTI4ek0yMjQgMzUybDAtMTI4IDY0IDAgMCAxMjgtNjQgMHptLTk2IDMybDAtMTEyIDY0IDAgMCAxMTItNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HandPointDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 149c0-33.9 13.5-66.5 37.5-90.5L49.1 46.9C79.1 16.9 119.8 0 162.3 0L224 0c88.4 0 160 71.6 160 160l-96 0 0 32-64 0 0-48 0-16-16 0L96 128l-16 0 0 32 16 0 96 0 0 32 0 48L0 240l0-91zM32 272l64 0 0 240-64 0 0-240z" />
            <path d="M384 320l-64 0 0-128 64 0 0 128zM224 352l0-128 64 0 0 128-64 0zm-96 32l0-112 64 0 0 112-64 0z" />
    </Icon>
);

export default HandPointDown;