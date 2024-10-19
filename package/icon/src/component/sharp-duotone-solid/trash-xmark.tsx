
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-xmark?s=sharp-duotone-solid trash-xmark}
 * @preview ![trash-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5Nkw1NiA1MTJsMzM2IDBMNDE2IDk2IDMyIDk2em05NC4xIDEyOEwxNjAgMTkwLjFsMTcgMTcgNDcgNDcgNDctNDcgMTctMTdMMzIxLjkgMjI0bC0xNyAxNy00NyA0NyA0NyA0NyAxNyAxN0wyODggMzg1LjlsLTE3LTE3LTQ3LTQ3LTQ3IDQ3LTE3IDE3TDEyNi4xIDM1MmwxNy0xNyA0Ny00Ny00Ny00Ny0xNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0NCAwTDMwNCAwbDE2IDMyIDEyOCAwIDAgNjRMMCA5NiAwIDMybDEyOCAwTDE0NCAwek0zMjEuOSAyMjRsLTE3IDE3LTQ3IDQ3IDQ3IDQ3IDE3IDE3TDI4OCAzODUuOWwtMTctMTctNDctNDctNDcgNDctMTcgMTdMMTI2LjEgMzUybDE3LTE3IDQ3LTQ3LTQ3LTQ3LTE3LTE3TDE2MCAxOTAuMWwxNyAxNyA0NyA0NyA0Ny00NyAxNy0xN0wzMjEuOSAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const TrashXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96zm94.1 128L160 190.1l17 17 47 47 47-47 17-17L321.9 224l-17 17-47 47 47 47 17 17L288 385.9l-17-17-47-47-47 47-17 17L126.1 352l17-17 47-47-47-47-17-17z" />
            <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zM321.9 224l-17 17-47 47 47 47 17 17L288 385.9l-17-17-47-47-47 47-17 17L126.1 352l17-17 47-47-47-47-17-17L160 190.1l17 17 47 47 47-47 17-17L321.9 224z" />
    </Icon>
);

export default TrashXmark;