
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-duotone-solid trash}
 * @preview ![trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5Nkw1NiA1MTJsMzM2IDBMNDE2IDk2IDMyIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzA0IDBMMTQ0IDAgMTI4IDMyIDAgMzIgMCA5Nmw0NDggMCAwLTY0TDMyMCAzMiAzMDQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96z" />
            <path d="M304 0L144 0 128 32 0 32 0 96l448 0 0-64L320 32 304 0z" />
    </Icon>
);

export default Trash;