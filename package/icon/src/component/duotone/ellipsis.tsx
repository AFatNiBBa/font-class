
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=duotone ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjggMjU2YTU2IDU2IDAgMSAwIDExMiAwIDU2IDU2IDAgMSAwIC0xMTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDMxMmE1NiA1NiAwIDEgMCAwLTExMiA1NiA1NiAwIDEgMCAwIDExMnptMzIwIDBhNTYgNTYgMCAxIDAgMC0xMTIgNTYgNTYgMCAxIDAgMCAxMTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M168 256a56 56 0 1 0 112 0 56 56 0 1 0 -112 0z" />
            <path d="M64 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm320 0a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" />
    </Icon>
);

export default Ellipsis;