
import { Icon } from "../../index";

/**
 * A component that renders the `phone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone?s=sharp-solid phone}
 * @preview ![phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMkwxNDQgMGw4MCAxNDQtODMuOCA2N2MzNi4xIDY4LjQgOTIuMyAxMjQuNiAxNjAuOCAxNjAuOEwzNjggMjg4bDE0NCA4MEw0ODAgNTEySDQ0OEMyMDAuNiA1MTIgMCAzMTEuNCAwIDY0TDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Phone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512H448C200.6 512 0 311.4 0 64L0 32z" />
    </Icon>
);

export default Phone;