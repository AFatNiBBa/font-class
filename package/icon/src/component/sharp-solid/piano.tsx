
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=sharp-solid piano}
 * @preview ![piano](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxOTJMMCA1MTJsNTEyIDAgMC0yMjRMMzg0IDIyNGwwLTMyQzM4NCA4NiAyOTggMCAxOTIgMFMwIDg2IDAgMTkyek00MTYgMzUybDMyIDAgMCA5Nkw2NCA0NDhsMC05NiAzMiAwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC00OCAzMiAwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC00OCAzMiAwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC00OCA2NCAwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC00OCAzMiAwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192L0 512l512 0 0-224L384 224l0-32C384 86 298 0 192 0S0 86 0 192zM416 352l32 0 0 96L64 448l0-96 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 64 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48z" />
    </Icon>
);

export default Piano;