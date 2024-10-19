
import { Icon } from "../../index";

/**
 * A component that renders the `eraser` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=sharp-thin eraser}
 * @preview ![eraser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTY2LjYgNDY0TDI4OCA0NjRsMjUuNCAwTDM4MyAzOTQuMyAxODEuNyAxOTMgMzguNiAzMzZsMTI4IDEyOHpNMjg4IDQ4MGwtMTI4IDBMMjcuMyAzNDcuMyAxNiAzMzZsMTEuMy0xMS4zTDMyNC43IDI3LjMgMzM2IDE2bDExLjMgMTEuM0w1NDguNyAyMjguNyA1NjAgMjQwbC0xMS4zIDExLjNMMzM2IDQ2NGwyMDAgMCA4IDAgMCAxNi04IDAtMjE2IDAtMzIgMHptMTA2LjMtOTdsMTQzLTE0M0wzMzYgMzguNmwtMTQzIDE0M0wzOTQuMyAzODN6Ii8+PC9zdmc+|width=32|height=32)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M166.6 464L288 464l25.4 0L383 394.3 181.7 193 38.6 336l128 128zM288 480l-128 0L27.3 347.3 16 336l11.3-11.3L324.7 27.3 336 16l11.3 11.3L548.7 228.7 560 240l-11.3 11.3L336 464l200 0 8 0 0 16-8 0-216 0-32 0zm106.3-97l143-143L336 38.6l-143 143L394.3 383z" />
    </Icon>
);

export default Eraser;