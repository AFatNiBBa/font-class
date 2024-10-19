
import { Icon } from "../../index";

/**
 * A component that renders the `circle-minus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-minus?s=thin circle-minus}
 * @preview ![circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2YTI0MCAyNDAgMCAxIDEgMCA0ODAgMjQwIDI0MCAwIDEgMSAwLTQ4MHptMCA0OTZBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek0xNjAgMjQ4Yy00LjQgMC04IDMuNi04IDhzMy42IDggOCA4bDE5MiAwYzQuNCAwIDgtMy42IDgtOHMtMy42LTgtOC04bC0xOTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-192 0z" />
    </Icon>
);

export default CircleMinus;