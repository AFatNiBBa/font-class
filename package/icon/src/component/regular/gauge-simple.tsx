
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=regular gauge-simple}
 * @preview ![gauge-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ4YTIwOCAyMDggMCAxIDEgMCA0MTYgMjA4IDIwOCAwIDEgMSAwLTQxNnptMCA0NjRBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem01Ni0xNjBjMC0yMi4zLTEzLjEtNDEuNi0zMi01MC42TDI4MCAxMjBjMC0xMy4zLTEwLjctMjQtMjQtMjRzLTI0IDEwLjctMjQgMjRsMCAxODEuNGMtMTguOSA5LTMyIDI4LjMtMzIgNTAuNmMwIDMwLjkgMjUuMSA1NiA1NiA1NnM1Ni0yNS4xIDU2LTU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm56-160c0-22.3-13.1-41.6-32-50.6L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 181.4c-18.9 9-32 28.3-32 50.6c0 30.9 25.1 56 56 56s56-25.1 56-56z" />
    </Icon>
);

export default GaugeSimple;