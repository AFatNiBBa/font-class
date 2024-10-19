
import { Icon, generic } from "../../index";

/**
 * A component that renders the `golf-club` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=sharp-duotone-solid golf-club}
 * @preview ![golf-club](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMwNGwwIDcyIDQ4IDAgMTYgMCAwIDMyLTE2IDBMMCA0MDhsMCAzMiA0OCAwIDE2IDAgMCAzMi0xNiAwTDAgNDcybDAgNDAgMjI0IDAgMzIgMCAxOS44IDAgOC44LTE3LjcgMjI0LTQ0OEw0NTEuNCAxNy43IDI2NCAzOTIuNWwwLS41TDAgMzA0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0MDhsMC0zMiA0OCAwIDE2IDAgMCAzMi0xNiAwTDAgNDA4em0wIDY0bDAtMzIgNDggMCAxNiAwIDAgMzItMTYgMEwwIDQ3MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const GolfClub: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304l0 72 48 0 16 0 0 32-16 0L0 408l0 32 48 0 16 0 0 32-16 0L0 472l0 40 224 0 32 0 19.8 0 8.8-17.7 224-448L451.4 17.7 264 392.5l0-.5L0 304z" />
            <path d="M0 408l0-32 48 0 16 0 0 32-16 0L0 408zm0 64l0-32 48 0 16 0 0 32-16 0L0 472z" />
    </Icon>
);

export default GolfClub;