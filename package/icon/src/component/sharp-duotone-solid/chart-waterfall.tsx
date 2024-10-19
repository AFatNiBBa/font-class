
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-waterfall` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-waterfall?s=sharp-duotone-solid chart-waterfall}
 * @preview ![chart-waterfall](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjQgMCA0NDhsMCAzMiAzMiAwIDQ0OCAwIDMyIDAgMC02NC0zMiAwTDY0IDQxNiA2NCA2NGwwLTMyTDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgNjRsLTY0IDAgMCAzMiAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtNjQgMC0zMnptLTk2IDk2bDAtMzItNjQgMCAwIDMyIDAgNjQgMCAzMiA2NCAwIDAtMzIgMC02NHptLTk2IDk2bDAtMzItNjQgMCAwIDMyIDAgNjQgMCAzMiA2NCAwIDAtMzIgMC02NHpNNDgwIDk2bDAtMzItNjQgMCAwIDMyIDAgMjI0IDAgMzIgNjQgMCAwLTMyIDAtMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChartWaterfall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
            <path d="M384 64l-64 0 0 32 0 64 0 32 64 0 0-32 0-64 0-32zm-96 96l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64zm-96 96l0-32-64 0 0 32 0 64 0 32 64 0 0-32 0-64zM480 96l0-32-64 0 0 32 0 224 0 32 64 0 0-32 0-224z" />
    </Icon>
);

export default ChartWaterfall;