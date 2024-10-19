
import { Icon } from "../../index";

/**
 * A component that renders the `up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=sharp-solid up-right}
 * @preview ![up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzY4IDgwbDAgMjg4LTMyIDMyTDIzMiAyOTYgODAgNDQ4IDAgMzY4IDE1MiAyMTYgNDggMTEyIDgwIDgwbDI4OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 80l0 288-32 32L232 296 80 448 0 368 152 216 48 112 80 80l288 0z" />
    </Icon>
);

export default UpRight;