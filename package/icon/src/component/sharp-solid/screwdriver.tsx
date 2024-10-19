
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=sharp-solid screwdriver}
 * @preview ![screwdriver](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUzLjkgMTkybDYyLjEgMEw1MTIgNjQgNDQ4IDAgMzIwIDk2bDAgNjIuMS04Mi4zIDgyLjMgMzMuOSAzMy45TDM1My45IDE5MnpNMCA0MTZsOTYgOTZMMjgwIDMyOGwtOTYtOTZMMCA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path d="M353.9 192l62.1 0L512 64 448 0 320 96l0 62.1-82.3 82.3 33.9 33.9L353.9 192zM0 416l96 96L280 328l-96-96L0 416z" />
    </Icon>
);

export default Screwdriver;