
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-solid envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw1MTIgMCAwIDgwTDI1NiAzMjAgMCAxNDQgMCA2NHpNMCA0NDhMMCAxODIuOCAyMzcuOSAzNDYuNCAyNTYgMzU4LjhsMTguMS0xMi41TDUxMiAxODIuOCA1MTIgNDQ4IDAgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l512 0 0 80L256 320 0 144 0 64zM0 448L0 182.8 237.9 346.4 256 358.8l18.1-12.5L512 182.8 512 448 0 448z" />
    </Icon>
);

export default Envelope;