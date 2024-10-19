
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rugby-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rugby-ball?s=sharp-duotone-solid rugby-ball}
 * @preview ![rugby-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAzMzZsMCA5NkwxMjAuMiAyMzMuNCAyMzMuNCAxMjAuMiA0MzIgMTZsLTk2IDBDMTU5LjMgMTYgMTYgMTU5LjMgMTYgMzM2ek04MCA0OTZsOTYgMGMxNzYuNyAwIDMyMC0xNDMuMyAzMjAtMzIwbDAtOTZMMzkxLjggMjc4LjYgMjc4LjYgMzkxLjggODAgNDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjMzLjQgMTIwLjJMNDMyIDE2bDY0IDY0TDM5MS44IDI3OC42IDI3OC42IDM5MS44IDgwIDQ5NiAxNiA0MzIgMTIwLjIgMjMzLjQgMjMzLjQgMTIwLjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const RugbyBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 336l0 96L120.2 233.4 233.4 120.2 432 16l-96 0C159.3 16 16 159.3 16 336zM80 496l96 0c176.7 0 320-143.3 320-320l0-96L391.8 278.6 278.6 391.8 80 496z" />
            <path d="M233.4 120.2L432 16l64 64L391.8 278.6 278.6 391.8 80 496 16 432 120.2 233.4 233.4 120.2z" />
    </Icon>
);

export default RugbyBall;