
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=duotone arrow-down}
 * @preview ![arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNjRsMCAzMDYuN2MxMC43IDEwLjcgMjEuMyAyMS4zIDMyIDMyYzEwLjctMTAuNyAyMS4zLTIxLjMgMzItMzJMMjI0IDY0YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTY5LjQgNDcwLjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTYwLTE2MGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMEwxOTIgNDAyLjcgNTQuNiAyNjUuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTYwIDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 64l0 306.7c10.7 10.7 21.3 21.3 32 32c10.7-10.7 21.3-21.3 32-32L224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </Icon>
);

export default ArrowDown;