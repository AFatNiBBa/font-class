
import { Icon } from "../../index";

/**
 * A component that renders the `genderless` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/genderless?s=sharp-light genderless}
 * @preview ![genderless](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDExMmExNDQgMTQ0IDAgMSAxIDAgMjg4IDE0NCAxNDQgMCAxIDEgMC0yODh6bTAgMzIwYTE3NiAxNzYgMCAxIDAgMC0zNTIgMTc2IDE3NiAwIDEgMCAwIDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Genderless: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 320a176 176 0 1 0 0-352 176 176 0 1 0 0 352z" />
    </Icon>
);

export default Genderless;