
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=sharp-light gauge-simple}
 * @preview ![gauge-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyYTIyNCAyMjQgMCAxIDEgMCA0NDggMjI0IDIyNCAwIDEgMSAwLTQ0OHptMCA0ODBBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0wLTE5MmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6bTAgOTZjMzUuMyAwIDY0LTI4LjcgNjQtNjRjMC0yOS44LTIwLjQtNTQuOS00OC02MmwwLTE5NCAwLTE2LTMyIDAgMCAxNiAwIDE5NGMtMjcuNiA3LjEtNDggMzIuMi00OCA2MmMwIDM1LjMgMjguNyA2NCA2NCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96c35.3 0 64-28.7 64-64c0-29.8-20.4-54.9-48-62l0-194 0-16-32 0 0 16 0 194c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default GaugeSimple;