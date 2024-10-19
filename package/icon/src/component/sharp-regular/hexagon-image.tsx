
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=sharp-regular hexagon-image}
 * @preview ![hexagon-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTAzLjMgMzQwbC00OC04NEwxNTUuOSA4MGwyMDAuMyAwTDQ1Ni43IDI1NiA0MTcgMzI1LjZsLTc2LjItOTEuOC0xOC41LTIyLjItMTguNSAyMi4yTDIzMi4yIDMyMGwtMzguOS00MC42LTE3LjgtMTguNi0xNy4zIDE5LTU1IDYwLjJ6TTEyOCAzMkwwIDI1NiAxMjggNDgwbDI1NiAwTDUxMiAyNTYgMzg0IDMyIDEyOCAzMnpNMjMyIDE2MGE0MCA0MCAwIDEgMCAtODAgMCA0MCA0MCAwIDEgMCA4MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M103.3 340l-48-84L155.9 80l200.3 0L456.7 256 417 325.6l-76.2-91.8-18.5-22.2-18.5 22.2L232.2 320l-38.9-40.6-17.8-18.6-17.3 19-55 60.2zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM232 160a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default HexagonImage;