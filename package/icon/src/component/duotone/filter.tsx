
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=duotone filter}
 * @preview ![filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zLjkgNTQuOUMxMC41IDQwLjkgMjQuNSAzMiA0MCAzMmw0MzIgMGMxNS41IDAgMjkuNSA4LjkgMzYuMSAyMi45czQuNiAzMC41LTUuMiA0Mi41TDMyMCAzMjAuOSAzMjAgNDQ4YzAgMTIuMS02LjggMjMuMi0xNy43IDI4LjZzLTIzLjggNC4zLTMzLjUtM2wtNjQtNDhjLTguMS02LTEyLjgtMTUuNS0xMi44LTI1LjZsMC03OS4xTDkgOTcuM0MtLjcgODUuNC0yLjggNjguOCAzLjkgNTQuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
    </Icon>
);

export default Filter;