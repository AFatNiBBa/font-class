
import { Icon } from "../../index";

/**
 * A component that renders the `worm` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/worm?s=sharp-solid worm}
 * @preview ![worm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDk2YzAtNTMgNDMtOTYgOTYtOTZMNDgwIDBsMCAxMjggMCA0OCAwIDE2IDAgMTg0YzAgNzUuMS02MC45IDEzNi0xMzYgMTM2cy0xMzYtNjAuOS0xMzYtMTM2bDAtODBjMC0yMi4xLTE3LjktNDAtNDAtNDBzLTQwIDE3LjktNDAgNDBsMCAxNjggMCA0OC05NiAwIDAtNDggMC0xNjhjMC03NS4xIDYwLjktMTM2IDEzNi0xMzZzMTM2IDYwLjkgMTM2IDEzNmwwIDgwYzAgMjIuMSAxNy45IDQwIDQwIDQwczQwLTE3LjkgNDAtNDBsMC0xODQtMzIgMGMtNTMgMC05Ni00My05Ni05NnptMTQ0LThhMjQgMjQgMCAxIDAgLTQ4IDAgMjQgMjQgMCAxIDAgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Worm: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96c0-53 43-96 96-96L480 0l0 128 0 48 0 16 0 184c0 75.1-60.9 136-136 136s-136-60.9-136-136l0-80c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 168 0 48-96 0 0-48 0-168c0-75.1 60.9-136 136-136s136 60.9 136 136l0 80c0 22.1 17.9 40 40 40s40-17.9 40-40l0-184-32 0c-53 0-96-43-96-96zm144-8a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Worm;