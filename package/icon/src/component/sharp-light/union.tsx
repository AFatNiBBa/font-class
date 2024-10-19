
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=sharp-light union}
 * @preview ![union](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyODhMMCAzMmwzMiAwIDAgMjU2YzAgODguNCA3MS42IDE2MCAxNjAgMTYwczE2MC03MS42IDE2MC0xNjBsMC0yNTYgMzIgMCAwIDI1NmMwIDEwNi04NiAxOTItMTkyIDE5MlMwIDM5NCAwIDI4OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 288L0 32l32 0 0 256c0 88.4 71.6 160 160 160s160-71.6 160-160l0-256 32 0 0 256c0 106-86 192-192 192S0 394 0 288z" />
    </Icon>
);

export default Union;