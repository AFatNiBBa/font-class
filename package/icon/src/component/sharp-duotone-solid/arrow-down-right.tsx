
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=sharp-duotone-solid arrow-down-right}
 * @preview ![arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOC43IDEyOGwyMi42IDIyLjZMMjQyLjcgMzUybDQ1LjMgMCAwLTQ1LjNMODYuNiAxMDUuNCA2NCA4Mi43IDE4LjcgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDQxNmwtMzIgMEw5NiA0MTZsLTMyIDAgMC02NCAzMiAwIDE5MiAwIDAtMTkyIDAtMzIgNjQgMCAwIDMyIDAgMjI0IDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M18.7 128l22.6 22.6L242.7 352l45.3 0 0-45.3L86.6 105.4 64 82.7 18.7 128z" />
            <path d="M352 416l-32 0L96 416l-32 0 0-64 32 0 192 0 0-192 0-32 64 0 0 32 0 224 0 32z" />
    </Icon>
);

export default ArrowDownRight;