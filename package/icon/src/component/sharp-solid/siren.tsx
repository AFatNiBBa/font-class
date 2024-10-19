
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=sharp-solid siren}
 * @preview ![siren](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgOTZMNDggMzUybDU3LjkgMCAyMi4yLTE3OCAxLjgtMTQgMzIuMiAwLTIuMiAxOEwxMzguMSAzNTIgNDAwIDM1MiAzNjggOTYgODAgOTZ6TTQ0OCAzODRMMCAzODRsMCA5NiA0NDggMCAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 96L48 352l57.9 0 22.2-178 1.8-14 32.2 0-2.2 18L138.1 352 400 352 368 96 80 96zM448 384L0 384l0 96 448 0 0-96z" />
    </Icon>
);

export default Siren;