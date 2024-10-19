
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=sharp-regular stop}
 * @preview ![stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzM2IDExMmwwIDI4OEw0OCA0MDBsMC0yODggMjg4IDB6TTQ4IDY0TDAgNjRsMCA0OEwwIDQwMGwwIDQ4IDQ4IDAgMjg4IDAgNDggMCAwLTQ4IDAtMjg4IDAtNDgtNDggMEw0OCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 112l0 288L48 400l0-288 288 0zM48 64L0 64l0 48L0 400l0 48 48 0 288 0 48 0 0-48 0-288 0-48-48 0L48 64z" />
    </Icon>
);

export default Stop;