
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=sharp-duotone-solid left-long}
 * @preview ![left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMTkybDAgMTI4YzQyLjcgMCA4NS4zIDAgMTI4IDBjNjQgMCAxMjggMCAxOTIgMGwwLTEyOC0zMjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCA5NkwwIDI1NiAxNjAgNDE2bDMyIDBzMCAwIDAgMGwwLTk2IDAtMTI4IDAtOTYtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 192l0 128c42.7 0 85.3 0 128 0c64 0 128 0 192 0l0-128-320 0z" />
            <path d="M160 96L0 256 160 416l32 0s0 0 0 0l0-96 0-128 0-96-32 0z" />
    </Icon>
);

export default LeftLong;