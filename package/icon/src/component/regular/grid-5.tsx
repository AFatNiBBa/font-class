
import { Icon } from "../../index";

/**
 * A component that renders the `grid-5` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-5?s=regular grid-5}
 * @preview ![grid-5](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0OGMwLTguOCA3LjItMTYgMTYtMTZsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZMMTYgOTZDNy4yIDk2IDAgODguOCAwIDgwTDAgNDh6bTAgOTZjMC04LjggNy4yLTE2IDE2LTE2bDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMnptMTYgODBsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyYzAtOC44IDcuMi0xNiAxNi0xNnpNMCAzMzZjMC04LjggNy4yLTE2IDE2LTE2bDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMnptMTYgODBsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyYzAtOC44IDcuMi0xNiAxNi0xNnpNOTYgNDhjMC04LjggNy4yLTE2IDE2LTE2bDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMnptMTYgODBsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyYzAtOC44IDcuMi0xNiAxNi0xNnpNOTYgMjQwYzAtOC44IDcuMi0xNiAxNi0xNmwzMiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDMyYzAgOC44LTcuMiAxNi0xNiAxNmwtMzIgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMzJ6bTE2IDgwbDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMmMwLTguOCA3LjItMTYgMTYtMTZ6TTk2IDQzMmMwLTguOCA3LjItMTYgMTYtMTZsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyek0yMDggMzJsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyYzAtOC44IDcuMi0xNiAxNi0xNnpNMTkyIDE0NGMwLTguOCA3LjItMTYgMTYtMTZsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyem0xNiA4MGwzMiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDMyYzAgOC44LTcuMiAxNi0xNiAxNmwtMzIgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMzJjMC04LjggNy4yLTE2IDE2LTE2ek0xOTIgMzM2YzAtOC44IDcuMi0xNiAxNi0xNmwzMiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDMyYzAgOC44LTcuMiAxNi0xNiAxNmwtMzIgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMzJ6bTE2IDgwbDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMmMwLTguOCA3LjItMTYgMTYtMTZ6TTI4OCA0OGMwLTguOCA3LjItMTYgMTYtMTZsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyem0xNiA4MGwzMiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDMyYzAgOC44LTcuMiAxNi0xNiAxNmwtMzIgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMzJjMC04LjggNy4yLTE2IDE2LTE2ek0yODggMjQwYzAtOC44IDcuMi0xNiAxNi0xNmwzMiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDMyYzAgOC44LTcuMiAxNi0xNiAxNmwtMzIgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMzJ6bTE2IDgwbDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMmMwLTguOCA3LjItMTYgMTYtMTZ6TTI4OCA0MzJjMC04LjggNy4yLTE2IDE2LTE2bDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMnpNNDAwIDMybDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMmMwLTguOCA3LjItMTYgMTYtMTZ6TTM4NCAxNDRjMC04LjggNy4yLTE2IDE2LTE2bDMyIDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMzJjMCA4LjgtNy4yIDE2LTE2IDE2bC0zMiAwYy04LjggMC0xNi03LjItMTYtMTZsMC0zMnptMTYgODBsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyYzAtOC44IDcuMi0xNiAxNi0xNnpNMzg0IDMzNmMwLTguOCA3LjItMTYgMTYtMTZsMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAzMmMwIDguOC03LjIgMTYtMTYgMTZsLTMyIDBjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTMyem0xNiA4MGwzMiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDMyYzAgOC44LTcuMiAxNi0xNiAxNmwtMzIgMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMzJjMC04LjggNy4yLTE2IDE2LTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Grid_5: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80L0 48zm0 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM0 336c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 432c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM208 32l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM192 144c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM192 336c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM288 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM288 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM288 432c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM400 32l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM384 144c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM384 336c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Grid_5;