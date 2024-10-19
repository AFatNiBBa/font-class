
import { Icon } from "../../index";

/**
 * A component that renders the `down-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=sharp-solid down-right}
 * @preview ![down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzY4IDQzMmwwLTI4OC0zMi0zMkwyMzIgMjE2IDgwIDY0IDAgMTQ0IDE1MiAyOTYgNDggNDAwbDMyIDMyIDI4OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 432l0-288-32-32L232 216 80 64 0 144 152 296 48 400l32 32 288 0z" />
    </Icon>
);

export default DownRight;