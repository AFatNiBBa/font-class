
import { Icon } from "../../index";

/**
 * A component that renders the `repeat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=sharp-solid repeat}
 * @preview ![repeat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMjRMMCA5NiAwIDY0bDMyIDAgMjg4IDAgMC02NCAzMiAwIDk2IDk2LTk2IDk2LTMyIDAgMC02NEw2NCAxMjhsMCA5NiAwIDMyTDAgMjU2bDAtMzJ6bTUxMiA2NGwwIDEyOCAwIDMyLTMyIDAtMjg4IDAgMCA2NC0zMiAwTDY0IDQxNmw5Ni05NiAzMiAwIDAgNjQgMjU2IDAgMC05NiAwLTMyIDY0IDAgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Repeat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 224L0 96 0 64l32 0 288 0 0-64 32 0 96 96-96 96-32 0 0-64L64 128l0 96 0 32L0 256l0-32zm512 64l0 128 0 32-32 0-288 0 0 64-32 0L64 416l96-96 32 0 0 64 256 0 0-96 0-32 64 0 0 32z" />
    </Icon>
);

export default Repeat;