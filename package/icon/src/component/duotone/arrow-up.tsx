
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=duotone arrow-up}
 * @preview ![arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMTQxLjNjMTAuNy0xMC43IDIxLjMtMjEuMyAzMi0zMmMxMC43IDEwLjcgMjEuMyAyMS4zIDMyIDMyTDIyNCA0NDhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0zMDYuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2OS40IDQxLjRjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBsMTYwIDE2MGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM3MtMzIuOCAxMi41LTQ1LjMgMEwxOTIgMTA5LjMgNTQuNiAyNDYuNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBzLTEyLjUtMzIuOCAwLTQ1LjNsMTYwLTE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 141.3c10.7-10.7 21.3-21.3 32-32c10.7 10.7 21.3 21.3 32 32L224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-306.7z" />
            <path d="M169.4 41.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 109.3 54.6 246.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    </Icon>
);

export default ArrowUp;