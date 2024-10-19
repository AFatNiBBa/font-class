
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=duotone bore-hole}
 * @preview ![bore-hole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3NkwwIDQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGw0MTYgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTI4OGMwLTI2LjUtMjEuNS00OC00OC00OGwtODAgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCAxOTJjMCA1My00MyA5Ni05NiA5NnMtOTYtNDMtOTYtOTZsMC0xOTJjMC0xNy43LTE0LjMtMzItMzItMzJsLTgwIDBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMjY0LjZjLTE5LjEgMTEuMS0zMiAzMS43LTMyIDU1LjRjMCAzNS4zIDI4LjcgNjQgNjQgNjRzNjQtMjguNyA2NC02NGMwLTIzLjctMTIuOS00NC40LTMyLTU1LjRMMjg4IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 176L0 464c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-80 0c-17.7 0-32 14.3-32 32l0 192c0 53-43 96-96 96s-96-43-96-96l0-192c0-17.7-14.3-32-32-32l-80 0c-26.5 0-48 21.5-48 48z" />
            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 264.6c-19.1 11.1-32 31.7-32 55.4c0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4L288 32z" />
    </Icon>
);

export default BoreHole;