
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=sharp-regular rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDExMmwwIDI4OEw0OCA0MDBsMC0yODggNDE2IDB6TTQ4IDY0TDAgNjRsMCA0OEwwIDQwMGwwIDQ4IDQ4IDAgNDE2IDAgNDggMCAwLTQ4IDAtMjg4IDAtNDgtNDggMEw0OCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 112l0 288L48 400l0-288 416 0zM48 64L0 64l0 48L0 400l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0L48 64z" />
    </Icon>
);

export default Rectangle;