
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-spoon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-spoon?s=duotone bowl-spoon}
 * @preview ![bowl-spoon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2YzAgNTMgNTAuMSA5NiAxMTIgOTZjNDguOCAwIDkwLjMtMjYuNyAxMDUuNi02NEw0ODAgMTI4YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDIxNy42IDY0QzIwMi4zIDI2LjcgMTYwLjggMCAxMTIgMEM1MC4xIDAgMCA0MyAwIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzMuNiAyMjRDMTUuNCAyMjQgLjkgMjM5LjMgMiAyNTcuNWM1LjQgOTEuNyA1OS43IDE2OS43IDEzNi40IDIwOS43bDEuMiA5LjdjMi41IDIwIDE5LjUgMzUgMzkuNyAzNWwxNTMuNCAwYzIwLjIgMCAzNy4yLTE1IDM5LjctMzVsMS4yLTkuN2M3Ni44LTQwIDEzMS0xMTggMTM2LjQtMjA5LjdjMS4xLTE4LjItMTMuNC0zMy41LTMxLjYtMzMuNUwzMy42IDIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BowlSpoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96c0 53 50.1 96 112 96c48.8 0 90.3-26.7 105.6-64L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L217.6 64C202.3 26.7 160.8 0 112 0C50.1 0 0 43 0 96z" />
            <path d="M33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35l153.4 0c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7c1.1-18.2-13.4-33.5-31.6-33.5L33.6 224z" />
    </Icon>
);

export default BowlSpoon;