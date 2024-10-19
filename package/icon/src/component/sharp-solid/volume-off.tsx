
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=sharp-solid volume-off}
 * @preview ![volume-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzNTJWMTYwSDEyOEwyNzIgMzJoNDhWNDgwSDI3MkwxMjggMzUySDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const VolumeOff: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 352V160H128L272 32h48V480H272L128 352H0z" />
    </Icon>
);

export default VolumeOff;