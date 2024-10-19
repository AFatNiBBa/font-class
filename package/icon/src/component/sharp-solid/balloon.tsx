
import { Icon } from "../../index";

/**
 * A component that renders the `balloon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloon?s=sharp-solid balloon}
 * @preview ![balloon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxOTJDMCA4NiA4NiAwIDE5MiAwUzM4NCA4NiAzODQgMTkyYzAgMTI4LTE2MCAyNDAtMTYwIDI0MGwzMiA4MC0xMjggMCAzMi04MFMwIDMyMCAwIDE5MnptOTYgMGMwLTUzIDQzLTk2IDk2LTk2bDAtMzJDMTIxLjMgNjQgNjQgMTIxLjMgNjQgMTkybDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Balloon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 192C0 86 86 0 192 0S384 86 384 192c0 128-160 240-160 240l32 80-128 0 32-80S0 320 0 192zm96 0c0-53 43-96 96-96l0-32C121.3 64 64 121.3 64 192l32 0z" />
    </Icon>
);

export default Balloon;