
import { Icon } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=sharp-solid box-heart}
 * @preview ![box-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA4IDMybDAgMTI4TDAgMTYwIDY0IDMybDE0NCAwem0zMiAwbDE0NCAwIDY0IDEyOC0yMDggMCAwLTEyOHpNMCAxOTJsNDQ4IDAgMCAyODhMMCA0ODAgMCAxOTJ6TTIyNCA0MzJsODguNi04OC42YzIwLjUtMjAuNSAyMC41LTUzLjggMC03NC4zcy01My44LTIwLjUtNzQuMyAwTDIyNCAyODMuNGwtMTQuMy0xNC4zYy0yMC41LTIwLjUtNTMuOC0yMC41LTc0LjMgMHMtMjAuNSA1My44IDAgNzQuM0wyMjQgNDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 32l0 128L0 160 64 32l144 0zm32 0l144 0 64 128-208 0 0-128zM0 192l448 0 0 288L0 480 0 192zM224 432l88.6-88.6c20.5-20.5 20.5-53.8 0-74.3s-53.8-20.5-74.3 0L224 283.4l-14.3-14.3c-20.5-20.5-53.8-20.5-74.3 0s-20.5 53.8 0 74.3L224 432z" />
    </Icon>
);

export default BoxHeart;