
import { Icon } from "../../index";

/**
 * A component that renders the `snake` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snake?s=sharp-solid snake}
 * @preview ![snake](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDgwTDM1MiAxNiAyODggNjQgMTc2IDY0Qzk2LjUgNjQgMzIgMTI4LjUgMzIgMjA4czY0LjUgMTQ0IDE0NCAxNDRsMTQ0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTYzLjkgMC0uMSAwTDk2IDQxNiAwIDQ2NGw5NiA0OCA3OS45IDAgLjEgMCAxNDQgMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOHMtNTcuMy0xMjgtMTI4LTEyOGwtMTQ0IDBjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDhsMTEyIDAgNjQgNDggMTYwLTY0IDAtNjR6TTM1MiA4MGExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAwem0xNiA0OGExNiAxNiAwIDEgMSAwIDMyIDE2IDE2IDAgMSAxIDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Snake: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 80L352 16 288 64 176 64C96.5 64 32 128.5 32 208s64.5 144 144 144l144 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-63.9 0-.1 0L96 416 0 464l96 48 79.9 0 .1 0 144 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-144 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l112 0 64 48 160-64 0-64zM352 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Snake;