
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=sharp-solid ring-diamond}
 * @preview ![ring-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDBMOTYgNzJsMzUuOCA2NS42QzU1LjIgMTYyLjkgMCAyMzUgMCAzMjBDMCA0MjYgODYgNTEyIDE5MiA1MTJzMTkyLTg2IDE5Mi0xOTJjMC04NS01NS4yLTE1Ny4xLTEzMS44LTE4Mi40TDI4OCA3MiAyNTYgMCAxMjggMHpNMzIwIDMyMEExMjggMTI4IDAgMSAxIDY0IDMyMGExMjggMTI4IDAgMSAxIDI1NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 0L96 72l35.8 65.6C55.2 162.9 0 235 0 320C0 426 86 512 192 512s192-86 192-192c0-85-55.2-157.1-131.8-182.4L288 72 256 0 128 0zM320 320A128 128 0 1 1 64 320a128 128 0 1 1 256 0z" />
    </Icon>
);

export default RingDiamond;