
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=light circle-exclamation}
 * @preview ![circle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyYTIyNCAyMjQgMCAxIDEgMCA0NDggMjI0IDIyNCAwIDEgMSAwLTQ0OHptMCA0ODBBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0wLTM4NGMtOC44IDAtMTYgNy4yLTE2IDE2bDAgMTI4YzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZsMC0xMjhjMC04LjgtNy4yLTE2LTE2LTE2em0yNCAyMjRhMjQgMjQgMCAxIDAgLTQ4IDAgMjQgMjQgMCAxIDAgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CircleExclamation;