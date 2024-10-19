
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=sharp-duotone-solid computer-classic}
 * @preview ![computer-classic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNDQ4IDBsMCA0MTZMMCA0MTYgMCAwek0zMiA0NDhsMzg0IDAgMCA2NEwzMiA1MTJsMC02NHpNNTYgMzM2YTI0IDI0IDAgMSAwIDQ4IDAgMjQgMjQgMCAxIDAgLTQ4IDB6TTY0IDY0bDAgMTkyIDMyMCAwIDAtMTkyTDY0IDY0ek0yMjQgMzIwbDAgMzIgMTYgMCAxMjggMCAxNiAwIDAtMzItMTYgMC0xMjggMC0xNiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgNjRIMzg0VjI1Nkg2NFY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L448 0l0 416L0 416 0 0zM32 448l384 0 0 64L32 512l0-64zM56 336a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM64 64l0 192 320 0 0-192L64 64zM224 320l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0z" />
            <path d="M64 64H384V256H64V64z" />
    </Icon>
);

export default ComputerClassic;