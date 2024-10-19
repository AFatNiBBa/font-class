
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-curly` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=sharp-duotone-solid bracket-curly}
 * @preview ![bracket-curly](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMkw2NCAzMmwwIDMyIDAgMTE0LjdMOS40IDIzMy40IDAgMjQyLjdsMCAyNi41IDkuNCA5LjRMNjQgMzMzLjMgNjQgNDQ4bDAgMzIgMzIgMCA5NiAwIDMyIDAgMC02NC0zMiAwLTY0IDAgMC05NiAwLTEzLjMtOS40LTkuNEw3Ny4zIDI1Nmw0MS40LTQxLjQgOS40LTkuNCAwLTEzLjMgMC05NiA2NCAwIDMyIDAgMC02NC0zMiAwTDk2IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const BracketCurly: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M96 32L64 32l0 32 0 114.7L9.4 233.4 0 242.7l0 26.5 9.4 9.4L64 333.3 64 448l0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-96 0-13.3-9.4-9.4L77.3 256l41.4-41.4 9.4-9.4 0-13.3 0-96 64 0 32 0 0-64-32 0L96 32z" />
    </Icon>
);

export default BracketCurly;