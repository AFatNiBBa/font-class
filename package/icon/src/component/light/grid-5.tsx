
import { Icon } from "../../index";

/**
 * A component that renders the `grid-5` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-5?s=light grid-5}
 * @preview ![grid-5](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQgNTZsMTYgMCAwIDE2TDI0IDcybDAtMTZ6TTE2IDMyQzcuMiAzMiAwIDM5LjIgMCA0OEwwIDgwYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNkwxNiAzMnptOCAxMjBsMTYgMCAwIDE2LTE2IDAgMC0xNnptLTgtMjRjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMHptOCAxMzZsMC0xNiAxNiAwIDAgMTYtMTYgMHpNMCAyNDBsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDBjLTguOCAwLTE2IDcuMi0xNiAxNnpNMjQgMzQ0bDE2IDAgMCAxNi0xNiAwIDAtMTZ6bS04LTI0Yy04LjggMC0xNiA3LjItMTYgMTZsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDB6bTggMTM2bDAtMTYgMTYgMCAwIDE2LTE2IDB6TTAgNDMybDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwYy04LjggMC0xNiA3LjItMTYgMTZ6TTEyMCA1NmwxNiAwIDAgMTYtMTYgMCAwLTE2em0tOC0yNGMtOC44IDAtMTYgNy4yLTE2IDE2bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwem04IDEzNmwwLTE2IDE2IDAgMCAxNi0xNiAwek05NiAxNDRsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDBjLTguOCAwLTE2IDcuMi0xNiAxNnptMjQgMTA0bDE2IDAgMCAxNi0xNiAwIDAtMTZ6bS04LTI0Yy04LjggMC0xNiA3LjItMTYgMTZsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDB6bTggMTM2bDAtMTYgMTYgMCAwIDE2LTE2IDB6TTk2IDMzNmwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMGMtOC44IDAtMTYgNy4yLTE2IDE2em0yNCAxMDRsMTYgMCAwIDE2LTE2IDAgMC0xNnptLTgtMjRjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMHpNMjE2IDcybDAtMTYgMTYgMCAwIDE2LTE2IDB6TTE5MiA0OGwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMGMtOC44IDAtMTYgNy4yLTE2IDE2em0yNCAxMDRsMTYgMCAwIDE2LTE2IDAgMC0xNnptLTgtMjRjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMHptOCAxMzZsMC0xNiAxNiAwIDAgMTYtMTYgMHptLTI0LTI0bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwYy04LjggMC0xNiA3LjItMTYgMTZ6bTI0IDEwNGwxNiAwIDAgMTYtMTYgMCAwLTE2em0tOC0yNGMtOC44IDAtMTYgNy4yLTE2IDE2bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwem04IDEzNmwwLTE2IDE2IDAgMCAxNi0xNiAwem0tMjQtMjRsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDBjLTguOCAwLTE2IDcuMi0xNiAxNnpNMzEyIDU2bDE2IDAgMCAxNi0xNiAwIDAtMTZ6bS04LTI0Yy04LjggMC0xNiA3LjItMTYgMTZsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDB6bTggMTM2bDAtMTYgMTYgMCAwIDE2LTE2IDB6bS0yNC0yNGwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMGMtOC44IDAtMTYgNy4yLTE2IDE2em0yNCAxMDRsMTYgMCAwIDE2LTE2IDAgMC0xNnptLTgtMjRjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMHptOCAxMzZsMC0xNiAxNiAwIDAgMTYtMTYgMHptLTI0LTI0bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwYy04LjggMC0xNiA3LjItMTYgMTZ6bTI0IDEwNGwxNiAwIDAgMTYtMTYgMCAwLTE2em0tOC0yNGMtOC44IDAtMTYgNy4yLTE2IDE2bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwek00MDggNzJsMC0xNiAxNiAwIDAgMTYtMTYgMHpNMzg0IDQ4bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwYy04LjggMC0xNiA3LjItMTYgMTZ6bTI0IDEwNGwxNiAwIDAgMTYtMTYgMCAwLTE2em0tOC0yNGMtOC44IDAtMTYgNy4yLTE2IDE2bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwem04IDEzNmwwLTE2IDE2IDAgMCAxNi0xNiAwem0tMjQtMjRsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDBjLTguOCAwLTE2IDcuMi0xNiAxNnptMjQgMTA0bDE2IDAgMCAxNi0xNiAwIDAtMTZ6bS04LTI0Yy04LjggMC0xNiA3LjItMTYgMTZsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDB6bTggMTM2bDAtMTYgMTYgMCAwIDE2LTE2IDB6bS0yNC0yNGwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMGMtOC44IDAtMTYgNy4yLTE2IDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Grid_5: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 56l16 0 0 16L24 72l0-16zM16 32C7.2 32 0 39.2 0 48L0 80c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L16 32zm8 120l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zM0 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM24 344l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zM0 432l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM120 56l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zM96 144l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm24 104l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zM96 336l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm24 104l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM216 72l0-16 16 0 0 16-16 0zM192 48l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm24 104l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zm-24-24l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm24 104l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zm-24-24l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM312 56l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zm-24-24l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm24 104l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zm-24-24l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm24 104l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM408 72l0-16 16 0 0 16-16 0zM384 48l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm24 104l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zm-24-24l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm24 104l16 0 0 16-16 0 0-16zm-8-24c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm8 136l0-16 16 0 0 16-16 0zm-24-24l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Grid_5;