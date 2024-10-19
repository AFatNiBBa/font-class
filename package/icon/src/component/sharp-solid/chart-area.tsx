
import { Icon } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=sharp-solid chart-area}
 * @preview ![chart-area](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNjRsMC0zMkwwIDMyIDAgNjQgMCA0NDhsMCAzMiAzMiAwIDQ0OCAwIDMyIDAgMC02NC0zMiAwTDY0IDQxNiA2NCA2NHptNjQgMjg4bDM1MiAwIDAtMTEyTDM4NCAxMjhsLTY0IDY0TDI0MCA5NiAxMjggMjI0bDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64zm64 288l352 0 0-112L384 128l-64 64L240 96 128 224l0 128z" />
    </Icon>
);

export default ChartArea;