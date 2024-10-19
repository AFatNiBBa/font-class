
import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=sharp-solid popsicle}
 * @preview ![popsicle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDBDNzEuNiAwIDAgNzEuNiAwIDE2MEwwIDM4NGwzMjAgMCAwLTIyNEMzMjAgNzEuNiAyNDguNCAwIDE2MCAwem0zMiA1MTJsMC05Ni02NCAwIDAgOTYgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 0C71.6 0 0 71.6 0 160L0 384l320 0 0-224C320 71.6 248.4 0 160 0zm32 512l0-96-64 0 0 96 64 0z" />
    </Icon>
);

export default Popsicle;