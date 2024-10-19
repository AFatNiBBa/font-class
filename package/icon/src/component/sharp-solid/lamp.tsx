
import { Icon } from "../../index";

/**
 * A component that renders the `lamp` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=sharp-solid lamp}
 * @preview ![lamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMEwwIDI1Nmw0NDggMEwzNTIgMCA5NiAwem02NCAyODhsMCAzMnMtNjQgNTAuNS02NCAxMTJjMCA0OCAzMiA4MCAzMiA4MGwxOTIgMHMzMi0zMiAzMi04MGMwLTYxLjUtNjQtMTEyLTY0LTExMmwwLTMyLTEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0L0 256l448 0L352 0 96 0zm64 288l0 32s-64 50.5-64 112c0 48 32 80 32 80l192 0s32-32 32-80c0-61.5-64-112-64-112l0-32-128 0z" />
    </Icon>
);

export default Lamp;