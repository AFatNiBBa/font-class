
import { Icon } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-thin trash}
 * @preview ![trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTU1LjYgMEwxNjAgMCAyODggMGw0LjQgMCAyLjQgMy44TDMzMi40IDY0IDQ0OCA2NGwwIDE2TDAgODAgMCA2NGwxMTUuNiAwTDE1My4yIDMuOCAxNTUuNiAwem0xMjggMTZMMTY0LjQgMTZsLTMwIDQ4IDE3OS4xIDAtMzAtNDh6TTI0IDExMi44TDI0IDExMiA0MCAxMTIgNzkuMiA0OTZsMjg5LjUgMEw0MDggMTEybDE2LjEgMC0uMSAuOC00MCAzOTItLjcgNy4yLTcuMiAwTDcyIDUxMmwtNy4yIDAtLjctNy4yLTQwLTM5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M155.6 0L160 0 288 0l4.4 0 2.4 3.8L332.4 64 448 64l0 16L0 80 0 64l115.6 0L153.2 3.8 155.6 0zm128 16L164.4 16l-30 48 179.1 0-30-48zM24 112.8L24 112 40 112 79.2 496l289.5 0L408 112l16.1 0-.1 .8-40 392-.7 7.2-7.2 0L72 512l-7.2 0-.7-7.2-40-392z" />
    </Icon>
);

export default Trash;