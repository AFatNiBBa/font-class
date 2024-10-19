
import { Icon } from "../../index";

/**
 * A component that renders the `gitter` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gitter?s=brands gitter}
 * @preview ![gitter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjYuNCAzMjIuNUgxNlYwaDUwLjR2MzIyLjV6TTE2Ni45IDc2LjFoLTUwLjRWNTEyaDUwLjRWNzYuMXptMTAwLjYgMGgtNTAuNFY1MTJoNTAuNFY3Ni4xek0zNjggNzZoLTUwLjR2MjQ3SDM2OFY3NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Gitter: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z" />
    </Icon>
);

export default Gitter;