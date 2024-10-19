
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-nib` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=sharp-duotone-solid pen-nib}
 * @preview ![pen-nib](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwyMC43IDIwLjcgMTQ0LTE0NGMtMy02LjMtNC43LTEzLjMtNC43LTIwLjdjMC0yNi41IDIxLjUtNDggNDgtNDhzNDggMjEuNSA0OCA0OHMtMjEuNSA0OC00OCA0OGMtNy40IDAtMTQuNC0xLjctMjAuNy00LjdsLTE0NCAxNDRMNjQgNTEybDI4OC05NiA2NC0xOTJMMjg4IDk2IDk2IDE2MCAwIDQ0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAxMjhsLTk2IDk2TDI4OCA5NiAzODQgMCA1MTIgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PenNib: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l20.7 20.7 144-144c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7l-144 144L64 512l288-96 64-192L288 96 96 160 0 448z" />
            <path d="M512 128l-96 96L288 96 384 0 512 128z" />
    </Icon>
);

export default PenNib;