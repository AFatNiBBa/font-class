
import { Icon } from "../../index";

/**
 * A component that renders the `droplet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=sharp-solid droplet}
 * @preview ![droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDUxMmMxMDYgMCAxOTItODYgMTkyLTE5MlMxOTIgMCAxOTIgMFMwIDIxNCAwIDMyMFM4NiA1MTIgMTkyIDUxMnpNOTYgMzM2YzAgNDQuMiAzNS44IDgwIDgwIDgwbDE2IDAgMCAzMi0xNiAwYy02MS45IDAtMTEyLTUwLjEtMTEyLTExMmwwLTE2IDMyIDAgMCAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512c106 0 192-86 192-192S192 0 192 0S0 214 0 320S86 512 192 512zM96 336c0 44.2 35.8 80 80 80l16 0 0 32-16 0c-61.9 0-112-50.1-112-112l0-16 32 0 0 16z" />
    </Icon>
);

export default Droplet;