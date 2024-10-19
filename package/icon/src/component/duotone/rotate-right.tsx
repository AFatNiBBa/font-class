
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-right?s=duotone rotate-right}
 * @preview ![rotate-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNTZjMCA1Ny4zIDIxLjkgMTE0LjcgNjUuNiAxNTguNGM4Ny41IDg3LjUgMjI5LjMgODcuNSAzMTYuOCAwYzYuMi02LjIgOS40LTE0LjQgOS40LTIyLjZzLTMuMS0xNi40LTkuNC0yMi42Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMGMtNjIuNSA2Mi41LTE2My44IDYyLjUtMjI2LjMgMHMtNjIuNS0xNjMuOCAwLTIyNi4zYzYyLjItNjIuMiAxNjIuNy02Mi41IDIyNS4zLTFjMTUuMS0xNS4xIDMwLjItMzAuMiA0NS4zLTQ1LjNDMzY5LjggNTMuNSAzMTIuOSAzMiAyNTYgMzJDMTk4LjcgMzIgMTQxLjMgNTMuOSA5Ny42IDk3LjZTMzIgMTk4LjcgMzIgMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzQ0IDIyNGwxMjggMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTEyOGMwLTkuNy01LjgtMTguNS0xNC44LTIyLjJzLTE5LjMtMS43LTI2LjIgNS4yTDMyNyAxODNjLTYuOSA2LjktOC45IDE3LjItNS4yIDI2LjJzMTIuNSAxNC44IDIyLjIgMTQuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const RotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256c0 57.3 21.9 114.7 65.6 158.4c87.5 87.5 229.3 87.5 316.8 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1c15.1-15.1 30.2-30.2 45.3-45.3C369.8 53.5 312.9 32 256 32C198.7 32 141.3 53.9 97.6 97.6S32 198.7 32 256z" />
            <path d="M344 224l128 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8z" />
    </Icon>
);

export default RotateRight;