
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=light exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgNDhjMC04LjgtNy4yLTE2LTE2LTE2cy0xNiA3LjItMTYgMTZsMCAzMDRjMCA4LjggNy4yIDE2IDE2IDE2czE2LTcuMiAxNi0xNkw4MCA0OHpNNjQgNDcyYTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M80 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 304c0 8.8 7.2 16 16 16s16-7.2 16-16L80 48zM64 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Exclamation;