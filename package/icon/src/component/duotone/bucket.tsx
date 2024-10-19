
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bucket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=duotone bucket}
 * @preview ![bucket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAxNTJsMCA0MCA0OCAwIDAtNDBDOTYgOTQuNiAxNDIuNiA0OCAyMDAgNDhsNDggMGM1Ny40IDAgMTA0IDQ2LjYgMTA0IDEwNGwwIDQwIDQ4IDAgMC00MEM0MDAgNjguMSAzMzEuOSAwIDI0OCAwTDIwMCAwQzExNi4xIDAgNDggNjguMSA0OCAxNTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsNS4xIDBMNTkuNSA0NjljMi42IDI0LjQgMjMuMiA0MyA0Ny43IDQzbDIzMy42IDBjMjQuNiAwIDQ1LjItMTguNSA0Ny43LTQzbDIyLjQtMjEzIDUuMSAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDMyIDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 152l0 40 48 0 0-40C96 94.6 142.6 48 200 48l48 0c57.4 0 104 46.6 104 104l0 40 48 0 0-40C400 68.1 331.9 0 248 0L200 0C116.1 0 48 68.1 48 152z" />
            <path d="M32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32l5.1 0L59.5 469c2.6 24.4 23.2 43 47.7 43l233.6 0c24.6 0 45.2-18.5 47.7-43l22.4-213 5.1 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 192z" />
    </Icon>
);

export default Bucket;