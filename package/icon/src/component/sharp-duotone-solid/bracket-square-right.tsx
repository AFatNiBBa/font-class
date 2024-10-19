
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-square-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square-right?s=sharp-duotone-solid bracket-square-right}
 * @preview ![bracket-square-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMzJsLTMyIDBMNjQgMzIgMzIgMzJsMCA2NCAzMiAwIDY0IDAgMCAzMjAtNjQgMC0zMiAwIDAgNjQgMzIgMCA5NiAwIDMyIDAgMC0zMiAwLTM4NCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const BracketSquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M192 32l-32 0L64 32 32 32l0 64 32 0 64 0 0 320-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-384 0-32z" />
    </Icon>
);

export default BracketSquareRight;