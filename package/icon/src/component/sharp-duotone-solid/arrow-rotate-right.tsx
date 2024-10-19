
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-rotate-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-right?s=sharp-duotone-solid arrow-rotate-right}
 * @preview ![arrow-rotate-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNTZjMCA1Ny4zIDIxLjkgMTE0LjcgNjUuNiAxNTguNFMxOTguNyA0ODAgMjU2IDQ4MHMxMTQuNy0yMS45IDE1OC40LTY1LjZsLTQ1LjMtNDUuM2MtNjIuNSA2Mi41LTE2My44IDYyLjUtMjI2LjMgMHMtNjIuNS0xNjMuOCAwLTIyNi4zczE2My44LTYyLjUgMjI2LjMgMEwzODYuMyAxNjBsNDUuNyAwIDAtNDQuOEw0MTQuNCA5Ny42QzM3MC42IDUzLjkgMzEzLjMgMzIgMjU2IDMyUzE0MS4zIDUzLjkgOTcuNiA5Ny42UzMyIDE5OC43IDMyIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ5NiAyMjRsLTMyIDAtMTI4IDAtMzIgMCAwLTY0IDMyIDAgOTYgMCAwLTk2IDAtMzIgNjQgMCAwIDMyIDAgMTI4IDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowRotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256c0 57.3 21.9 114.7 65.6 158.4S198.7 480 256 480s114.7-21.9 158.4-65.6l-45.3-45.3c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160l45.7 0 0-44.8L414.4 97.6C370.6 53.9 313.3 32 256 32S141.3 53.9 97.6 97.6S32 198.7 32 256z" />
            <path d="M496 224l-32 0-128 0-32 0 0-64 32 0 96 0 0-96 0-32 64 0 0 32 0 128 0 32z" />
    </Icon>
);

export default ArrowRotateRight;