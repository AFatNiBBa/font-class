
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pallet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=sharp-duotone-solid pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMjBMMCAzMjBsMCA2NCAzMiAwIDMyIDAgMCA2NC0zMiAwTDAgNDQ4bDAgNjQgMzIgMCAzMiAwIDMyIDAgMzIgMCAxNjAgMCAzMiAwIDMyIDAgMTYwIDAgMzIgMCAzMiAwIDMyIDAgMzIgMCAwLTY0LTMyIDAtMzIgMCAwLTY0IDMyIDAgMzIgMCAwLTY0LTMyIDAtMzIgMC0zMiAwLTMyIDAtMTYwIDAtMzIgMC0zMiAwLTE2MCAwLTMyIDAtMzIgMC0zMiAwem05NiA2NGwxNjAgMCAwIDY0LTE2MCAwIDAtNjR6bTIyNCAwbDE2MCAwIDAgNjQtMTYwIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 320L0 320l0 64 32 0 32 0 0 64-32 0L0 448l0 64 32 0 32 0 32 0 32 0 160 0 32 0 32 0 160 0 32 0 32 0 32 0 32 0 0-64-32 0-32 0 0-64 32 0 32 0 0-64-32 0-32 0-32 0-32 0-160 0-32 0-32 0-160 0-32 0-32 0-32 0zm96 64l160 0 0 64-160 0 0-64zm224 0l160 0 0 64-160 0 0-64z" />
    </Icon>
);

export default Pallet;