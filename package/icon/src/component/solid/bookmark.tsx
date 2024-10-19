
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=solid bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0OFY0ODcuN0MwIDUwMS4xIDEwLjkgNTEyIDI0LjMgNTEyYzUgMCA5LjktMS41IDE0LTQuNEwxOTIgNDAwIDM0NS43IDUwNy42YzQuMSAyLjkgOSA0LjQgMTQgNC40YzEzLjQgMCAyNC4zLTEwLjkgMjQuMy0yNC4zVjQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4SDQ4QzIxLjUgMCAwIDIxLjUgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
    </Icon>
);

export default Bookmark;