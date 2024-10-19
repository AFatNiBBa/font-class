
import { Icon, generic } from "../../index";

/**
 * A component that renders the `expand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=sharp-duotone-solid expand}
 * @preview ![expand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGw2NCAwIDAgMzIgMCA2NCA2NCAwIDMyIDAgMCA2NC0zMiAwLTk2IDBMMCA0ODBsMC0zMiAwLTk2IDAtMzJ6TTI4OCAzMmwzMiAwIDk2IDAgMzIgMCAwIDMyIDAgOTYgMCAzMi02NCAwIDAtMzIgMC02NC02NCAwLTMyIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMzJsMzIgMCA5NiAwIDMyIDAgMCA2NC0zMiAwTDY0IDk2bDAgNjQgMCAzMkwwIDE5MmwwLTMyTDAgNjQgMCAzMnpNNDQ4IDMyMGwwIDMyIDAgOTYgMCAzMi0zMiAwLTk2IDAtMzIgMCAwLTY0IDMyIDAgNjQgMCAwLTY0IDAtMzIgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l64 0 0 32 0 64 64 0 32 0 0 64-32 0-96 0L0 480l0-32 0-96 0-32zM288 32l32 0 96 0 32 0 0 32 0 96 0 32-64 0 0-32 0-64-64 0-32 0 0-64z" />
            <path d="M0 32l32 0 96 0 32 0 0 64-32 0L64 96l0 64 0 32L0 192l0-32L0 64 0 32zM448 320l0 32 0 96 0 32-32 0-96 0-32 0 0-64 32 0 64 0 0-64 0-32 64 0z" />
    </Icon>
);

export default Expand;