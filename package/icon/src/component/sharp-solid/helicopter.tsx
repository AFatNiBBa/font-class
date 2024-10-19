
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter?s=sharp-solid helicopter}
 * @preview ![helicopter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTc2IDY0TDM4NCA2NGwwIDY0IDMyIDBjODguNCAwIDE2MCA3MS42IDE2MCAxNjBsMCA2NCAwIDMyLTMyIDAtMTYwIDAtOTYgMEwxOTIgMjU2IDMyIDE5MiAwIDY0bDY0IDAgNDggNjQgMjA4IDAgMC02NEwxMjggNjRsMC02NEw1NzYgMGwwIDY0ek0zODQgMzIwbDEyOCAwIDAtMzJjMC01My00My05Ni05Ni05NmwtMzIgMCAwIDEyOHptMjU2IDk2bDAgNjQgMCAzMi0zMiAwLTM4NCAwIDAtNjQgMzUyIDAgMC0zMiA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Helicopter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 64L384 64l0 64 32 0c88.4 0 160 71.6 160 160l0 64 0 32-32 0-160 0-96 0L192 256 32 192 0 64l64 0 48 64 208 0 0-64L128 64l0-64L576 0l0 64zM384 320l128 0 0-32c0-53-43-96-96-96l-32 0 0 128zm256 96l0 64 0 32-32 0-384 0 0-64 352 0 0-32 64 0z" />
    </Icon>
);

export default Helicopter;