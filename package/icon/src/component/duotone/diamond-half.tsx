
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=duotone diamond-half}
 * @preview ![diamond-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMGMxMC4yIDAgMjAuNSAzLjkgMjguMyAxMS43bDIxNiAyMTZjNy44IDcuOCAxMS43IDE4IDExLjcgMjguM3MtMy45IDIwLjUtMTEuNyAyOC4zbC0yMTYgMjE2Yy03LjggNy44LTE4IDExLjctMjguMyAxMS43TDI1NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDBjLTEwLjIgMC0yMC41IDMuOS0yOC4zIDExLjdsLTIxNiAyMTZjLTE1LjYgMTUuNi0xNS42IDQwLjkgMCA1Ni42bDIxNiAyMTZjNy44IDcuOCAxOCAxMS43IDI4LjMgMTEuN0wyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0c10.2 0 20.5 3.9 28.3 11.7l216 216c7.8 7.8 11.7 18 11.7 28.3s-3.9 20.5-11.7 28.3l-216 216c-7.8 7.8-18 11.7-28.3 11.7L256 0z" />
            <path d="M256 0c-10.2 0-20.5 3.9-28.3 11.7l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c7.8 7.8 18 11.7 28.3 11.7L256 0z" />
    </Icon>
);

export default DiamondHalf;