
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=sharp-light lock}
 * @preview ![lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDEyOGwwIDY0IDE5MiAwIDAtNjRjMC01My00My05Ni05Ni05NnMtOTYgNDMtOTYgOTZ6TTk2IDE5MmwwLTY0Qzk2IDU3LjMgMTUzLjMgMCAyMjQgMHMxMjggNTcuMyAxMjggMTI4bDAgNjQgNjQgMCAzMiAwIDAgMzIgMCAyNTYgMCAzMi0zMiAwTDMyIDUxMiAwIDUxMmwwLTMyTDAgMjI0bDAtMzIgMzIgMCA2NCAwek0zMiA0ODBsMzg0IDAgMC0yNTZMMzIgMjI0bDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128l0 64 192 0 0-64c0-53-43-96-96-96s-96 43-96 96zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 64 0 32 0 0 32 0 256 0 32-32 0L32 512 0 512l0-32L0 224l0-32 32 0 64 0zM32 480l384 0 0-256L32 224l0 256z" />
    </Icon>
);

export default Lock;