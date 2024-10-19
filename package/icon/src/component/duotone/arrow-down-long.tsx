
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=duotone arrow-down-long}
 * @preview ![arrow-down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzJsMCAzNzAuN2MxMC43IDEwLjcgMjEuMyAyMS4zIDMyIDMyYzEwLjctMTAuNyAyMS4zLTIxLjMgMzItMzJMMjI0IDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTY5LjQgNTAyLjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTI4LTEyOGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMEwxOTIgNDM0LjcgODYuNiAzMjkuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTI4IDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 370.7c10.7 10.7 21.3 21.3 32 32c10.7-10.7 21.3-21.3 32-32L224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 434.7 86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
    </Icon>
);

export default ArrowDownLong;