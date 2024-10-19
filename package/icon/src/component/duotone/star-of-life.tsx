
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-of-life` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-life?s=duotone star-of-life}
 * @preview ![star-of-life](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDggMzJjMC0xNy43IDE0LjMtMzIgMzItMzJsMzIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDE0MC45IDEyMi03MC40YzE1LjMtOC44IDM0LjktMy42IDQzLjcgMTEuN2wxNiAyNy43YzguOCAxNS4zIDMuNiAzNC45LTExLjcgNDMuN0wzNTIgMjU2bDEyMiA3MC40YzE1LjMgOC44IDIwLjYgMjguNCAxMS43IDQzLjdsLTE2IDI3LjdjLTguOCAxNS4zLTI4LjQgMjAuNi00My43IDExLjdMMzA0IDMzOS4xIDMwNCA0ODBjMCAxNy43LTE0LjMgMzItMzIgMzJsLTMyIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtMTQwLjlMODYgNDA5LjZjLTE1LjMgOC44LTM0LjkgMy42LTQzLjctMTEuN2wtMTYtMjcuN2MtOC44LTE1LjMtMy42LTM0LjkgMTEuNy00My43TDE2MCAyNTYgMzggMTg1LjZjLTE1LjMtOC44LTIwLjUtMjguNC0xMS43LTQzLjdsMTYtMjcuN0M1MS4xIDk4LjggNzAuNyA5My42IDg2IDEwMi40bDEyMiA3MC40TDIwOCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const StarOfLife: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M208 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 140.9 122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L352 256l122 70.4c15.3 8.8 20.6 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L304 339.1 304 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-140.9L86 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7c-8.8-15.3-3.6-34.9 11.7-43.7L160 256 38 185.6c-15.3-8.8-20.5-28.4-11.7-43.7l16-27.7C51.1 98.8 70.7 93.6 86 102.4l122 70.4L208 32z" />
    </Icon>
);

export default StarOfLife;