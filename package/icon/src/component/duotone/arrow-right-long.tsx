
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=duotone arrow-right-long}
 * @preview ![arrow-right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzNzAuNyAwYzEwLjctMTAuNyAyMS4zLTIxLjMgMzItMzJjLTEwLjctMTAuNy0yMS4zLTIxLjMtMzItMzJMMzIgMjI0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUwMi42IDIzMy40YzEyLjUgMTIuNSAxMi41IDMyLjggMCA0NS4zbC0xMjggMTI4Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMHMtMTIuNS0zMi44IDAtNDUuM0w0MzQuNyAyNTYgMzI5LjQgMTUwLjZjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zczMyLjgtMTIuNSA0NS4zIDBsMTI4IDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l370.7 0c10.7-10.7 21.3-21.3 32-32c-10.7-10.7-21.3-21.3-32-32L32 224c-17.7 0-32 14.3-32 32z" />
            <path d="M502.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256 329.4 150.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128z" />
    </Icon>
);

export default ArrowRightLong;