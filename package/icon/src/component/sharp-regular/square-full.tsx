
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=sharp-regular square-full}
 * @preview ![square-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDQ4bDAgNDE2TDQ4IDQ2NCA0OCA0OGw0MTYgMHpNNDggMEwwIDAgMCA0OCAwIDQ2NGwwIDQ4IDQ4IDAgNDE2IDAgNDggMCAwLTQ4IDAtNDE2IDAtNDhMNDY0IDAgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 48l0 416L48 464 48 48l416 0zM48 0L0 0 0 48 0 464l0 48 48 0 416 0 48 0 0-48 0-416 0-48L464 0 48 0z" />
    </Icon>
);

export default SquareFull;