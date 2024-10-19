
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-solid browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw1MTIgMCAwIDQ0OEwwIDQ4MCAwIDMyem0xNjAgNzJsMCA0OCAyODggMCAwLTQ4LTI4OCAwem0tMzItOEw2NCA5NmwwIDY0IDY0IDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zm160 72l0 48 288 0 0-48-288 0zm-32-8L64 96l0 64 64 0 0-64z" />
    </Icon>
);

export default Browser;