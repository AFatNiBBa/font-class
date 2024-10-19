
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-light envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMTU5LjJsMjI0IDE1NCAyMjQtMTU0TDQ4MCA5NiAzMiA5NmwwIDYzLjJ6TTQ4MCAxOThMMjU2IDM1MiAzMiAxOThsMCAyMTggNDQ4IDAgMC0yMTh6TTAgNDE2TDAgMTc2IDAgOTYgMCA2NGwzMiAwIDQ0OCAwIDMyIDAgMCAzMiAwIDgwIDAgMjQwIDAgMzItMzIgMEwzMiA0NDggMCA0NDhsMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 159.2l224 154 224-154L480 96 32 96l0 63.2zM480 198L256 352 32 198l0 218 448 0 0-218zM0 416L0 176 0 96 0 64l32 0 448 0 32 0 0 32 0 80 0 240 0 32-32 0L32 448 0 448l0-32z" />
    </Icon>
);

export default Envelope;