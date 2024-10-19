
import { Icon, generic } from "../../index";

/**
 * A component that renders the `credit-card-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-blank?s=sharp-duotone-solid credit-card-blank}
 * @preview ![credit-card-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDU3NiAwIDAtNDQ4TDAgMzJ6TTk2IDM1Mmw5NiAwIDAgMzItOTYgMCAwLTMyem0xMjggMGwxNjAgMCAwIDMyLTE2MCAwIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMzUybC05NiAwIDAgMzIgOTYgMCAwLTMyem0xOTIgMGwtMTYwIDAgMCAzMiAxNjAgMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CreditCardBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM96 352l96 0 0 32-96 0 0-32zm128 0l160 0 0 32-160 0 0-32z" />
            <path d="M192 352l-96 0 0 32 96 0 0-32zm192 0l-160 0 0 32 160 0 0-32z" />
    </Icon>
);

export default CreditCardBlank;