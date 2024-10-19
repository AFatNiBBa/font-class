
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-light pager}
 * @preview ![pager](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDk2bDAgMzIwTDMyIDQxNiAzMiA5Nmw0NDggMHpNMzIgNjRMMCA2NCAwIDk2IDAgNDE2bDAgMzIgMzIgMCA0NDggMCAzMiAwIDAtMzIgMC0zMjAgMC0zMi0zMiAwTDMyIDY0ek02NCAzMjBsMCAzMiAxNiAwIDY0IDAgMTYgMCAwLTMyLTE2IDAtNjQgMC0xNiAwem0xMjggMGwwIDMyIDE2IDAgNjQgMCAxNiAwIDAtMzItMTYgMC02NCAwLTE2IDB6TTk2IDE2MGwzMjAgMCAwIDk2TDk2IDI1NmwwLTk2ek02NCAxMjhsMCAzMiAwIDk2IDAgMzIgMzIgMCAzMjAgMCAzMiAwIDAtMzIgMC05NiAwLTMyLTMyIDBMOTYgMTI4bC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 96l0 320L32 416 32 96l448 0zM32 64L0 64 0 96 0 416l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0L32 64zM64 320l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm128 0l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zM96 160l320 0 0 96L96 256l0-96zM64 128l0 32 0 96 0 32 32 0 320 0 32 0 0-32 0-96 0-32-32 0L96 128l-32 0z" />
    </Icon>
);

export default Pager;