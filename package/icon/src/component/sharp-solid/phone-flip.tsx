
import { Icon } from "../../index";

/**
 * A component that renders the `phone-flip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=sharp-solid phone-flip}
 * @preview ![phone-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDMyTDM2OCAwIDI4OCAxNDRsODMuOCA2N2MtMzYuMSA2OC40LTkyLjMgMTI0LjYtMTYwLjggMTYwLjhMMTQ0IDI4OCAwIDM2OCAzMiA1MTJINjRjMjQ3LjQgMCA0NDgtMjAwLjYgNDQ4LTQ0OGwwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L368 0 288 144l83.8 67c-36.1 68.4-92.3 124.6-160.8 160.8L144 288 0 368 32 512H64c247.4 0 448-200.6 448-448l0-32z" />
    </Icon>
);

export default PhoneFlip;