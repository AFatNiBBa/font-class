
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=sharp-solid paper-plane}
 * @preview ![paper-plane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyODhMNTEyIDAgNDQ4IDQ4MCAyNzEuOCA0MDQuNSAyMDggNTEybC00OC0xNiAwLTgwIDAtMzJMMzg0IDE2MCAxMzMgMzQ1IDAgMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 288L512 0 448 480 271.8 404.5 208 512l-48-16 0-80 0-32L384 160 133 345 0 288z" />
    </Icon>
);

export default PaperPlane;