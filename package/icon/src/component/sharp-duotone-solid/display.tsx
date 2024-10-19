
import { Icon, generic } from "../../index";

/**
 * A component that renders the `display` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=sharp-duotone-solid display}
 * @preview ![display](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA0MTZsMjQwIDAgOTYgMCAyNDAgMEw1NzYgMCAwIDB6TTY0IDY0bDQ0OCAwIDAgMjg4TDY0IDM1MiA2NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiA2NEw2NCA2NGwwIDI4OCA0NDggMCAwLTI4OHpNNDE2IDQ0OGwtNjkuMyAwTDMzNiA0MTZsLTk2IDAtMTAuNyAzMkwxNjAgNDQ4bC0zMiAwIDAgNjQgMzIgMCAyNTYgMCAzMiAwIDAtNjQtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 416l240 0 96 0 240 0L576 0 0 0zM64 64l448 0 0 288L64 352 64 64z" />
            <path d="M512 64L64 64l0 288 448 0 0-288zM416 448l-69.3 0L336 416l-96 0-10.7 32L160 448l-32 0 0 64 32 0 256 0 32 0 0-64-32 0z" />
    </Icon>
);

export default Display;