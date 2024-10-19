
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=sharp-solid gauge-simple}
 * @preview ![gauge-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMEEyNTYgMjU2IDAgMSAxIDAgMjU2em0zMjAgOTZjMC0yNi45LTE2LjUtNDkuOS00MC01OS4zTDI4MCA4OGwwLTI0LTQ4IDAgMCAyNCAwIDIwNC43Yy0yMy41IDkuNS00MCAzMi41LTQwIDU5LjNjMCAzNS4zIDI4LjcgNjQgNjQgNjRzNjQtMjguNyA2NC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88l0-24-48 0 0 24 0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default GaugeSimple;