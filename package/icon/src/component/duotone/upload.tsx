
import { Icon, generic } from "../../index";

/**
 * A component that renders the `upload` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=duotone upload}
 * @preview ![upload](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDMyYzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzJjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTE2MCAwIDAgMzJjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0zMkw2NCAzNTJjLTM1LjMgMC02NCAyOC43LTY0IDY0em00NTYgMTZhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA0MTZjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0yNzQuNyA3My40IDczLjRjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM2wtMTI4LTEyOGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBsLTEyOCAxMjhjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zczMyLjggMTIuNSA0NS4zIDBMMjI0IDEwOS4zIDIyNCAzODRjMCAxNy43IDE0LjMgMzIgMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-160 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L64 352c-35.3 0-64 28.7-64 64zm456 16a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M256 416c17.7 0 32-14.3 32-32l0-274.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 224 384c0 17.7 14.3 32 32 32z" />
    </Icon>
);

export default Upload;