
import { Icon, generic } from "../../index";

/**
 * A component that renders the `integral` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=sharp-duotone-solid integral}
 * @preview ![integral](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMGwzMiAwTDI3MiAwbDMyIDAgMCAzMiAwIDY0IDAgMzItNjQgMCAwLTMyIDAtMzItNDggMCAwIDQxNiAwIDMyLTMyIDBMNDggNTEybC0zMiAwIDAtMzIgMC02NCAwLTMyIDY0IDAgMCAzMiAwIDMyIDQ4IDAgMC00MTYgMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M128 0l32 0L272 0l32 0 0 32 0 64 0 32-64 0 0-32 0-32-48 0 0 416 0 32-32 0L48 512l-32 0 0-32 0-64 0-32 64 0 0 32 0 32 48 0 0-416 0-32z" />
    </Icon>
);

export default Integral;