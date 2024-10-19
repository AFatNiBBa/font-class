
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bucket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=sharp-duotone-solid bucket}
 * @preview ![bucket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00NS4yIDE5Mmw0OC42IDBMMTE2LjUgNDhsMjE1IDAgMjIuNyAxNDQgNDguNiAwTDM3NS43IDIwLjMgMzcyLjUgMCAzNTIgMCA5NiAwIDc1LjUgMCA3Mi4zIDIwLjMgNDUuMiAxOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMTkyTDAgMTkybDAgNjQgMzcuMSAwTDY0IDUxMmwzMjAgMCAyNi45LTI1NiAzNy4xIDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M45.2 192l48.6 0L116.5 48l215 0 22.7 144 48.6 0L375.7 20.3 372.5 0 352 0 96 0 75.5 0 72.3 20.3 45.2 192z" />
            <path d="M448 192L0 192l0 64 37.1 0L64 512l320 0 26.9-256 37.1 0 0-64z" />
    </Icon>
);

export default Bucket;