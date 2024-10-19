
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=sharp-light headphones}
 * @preview ![headphones](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDY0QzE0My4yIDY0IDQ5LjggMTQ3LjQgMzQuMyAyNTZsOTMuNyAwIDAgMjI0TDAgNDgwIDAgMzY4bDAtODBDMCAxNDYuNiAxMTQuNiAzMiAyNTYgMzJzMjU2IDExNC42IDI1NiAyNTZsMCA4MCAwIDExMi0xMjggMCAwLTIyNCA5My43IDBDNDYyLjIgMTQ3LjQgMzY4LjggNjQgMjU2IDY0ek00ODAgMzY4bDAtODAtNjQgMCAwIDE2MCA2NCAwIDAtODB6TTMyIDQ0OGw2NCAwIDAtMTYwLTY0IDAgMCA4MCAwIDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64C143.2 64 49.8 147.4 34.3 256l93.7 0 0 224L0 480 0 368l0-80C0 146.6 114.6 32 256 32s256 114.6 256 256l0 80 0 112-128 0 0-224 93.7 0C462.2 147.4 368.8 64 256 64zM480 368l0-80-64 0 0 160 64 0 0-80zM32 448l64 0 0-160-64 0 0 80 0 80z" />
    </Icon>
);

export default Headphones;