
import { Icon, generic } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=duotone greater-than}
 * @preview ![greater-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zLjQgODEuN2MtNy45IDE1LjgtMS41IDM1IDE0LjMgNDIuOUwyODAuNSAyNTYgMTcuNyAzODcuNEMxLjkgMzk1LjMtNC41IDQxNC41IDMuNCA0MzAuM3MyNy4xIDIyLjIgNDIuOSAxNC4zbDMyMC0xNjBjMTAuOC01LjQgMTcuNy0xNi41IDE3LjctMjguNnMtNi44LTIzLjItMTcuNy0yOC42bC0zMjAtMTYwYy0xNS44LTcuOS0zNS0xLjUtNDIuOSAxNC4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
    </Icon>
);

export default GreaterThan;