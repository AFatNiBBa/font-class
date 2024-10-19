
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=sharp-solid bolt-lightning}
 * @preview ![bolt-lightning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyODhMMzIgMEgyNTZMMjA4IDE2MEgzODR2NDhMMTI4IDUxMmw0OC0yMjRIMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoltLightning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 288L32 0H256L208 160H384v48L128 512l48-224H0z" />
    </Icon>
);

export default BoltLightning;