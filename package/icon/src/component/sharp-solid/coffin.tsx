
import { Icon } from "../../index";

/**
 * A component that renders the `coffin` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=sharp-solid coffin}
 * @preview ![coffin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNDRMMTA0IDUxMkgyODBMMzg0IDE0NCAyNzIgMEgxMTJMMCAxNDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Coffin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 144L104 512H280L384 144 272 0H112L0 144z" />
    </Icon>
);

export default Coffin;