
import { Icon } from "../../index";

/**
 * A component that renders the `tent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=sharp-solid tent}
 * @preview ![tent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMTYwTDAgNTEySDI4OFYyODhMNDE2IDUxMkg1NzZMNTQ0IDE3NiAyODggMCAzMiAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 160L0 512H288V288L416 512H576L544 176 288 0 32 160z" />
    </Icon>
);

export default Tent;