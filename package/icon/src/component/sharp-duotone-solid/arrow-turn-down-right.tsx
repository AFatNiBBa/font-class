
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=sharp-duotone-solid arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjQgMCAyODhsMCAzMiAzMiAwIDM1NC43IDAgMzItMzJjLTEwLjctMTAuNy0yMS4zLTIxLjMtMzItMzJMNjQgMjU2IDY0IDY0bDAtMzJMMCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMzNiAxMTQuN2wyMi42IDIyLjYgMTI4IDEyOEw1MDkuMyAyODhsLTIyLjYgMjIuNi0xMjggMTI4TDMzNiA0NjEuMyAyOTAuNyA0MTZsMjIuNi0yMi42TDQxOC43IDI4OCAzMTMuNCAxODIuNiAyOTAuNyAxNjAgMzM2IDExNC43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 288l0 32 32 0 354.7 0 32-32c-10.7-10.7-21.3-21.3-32-32L64 256 64 64l0-32L0 32z" />
            <path d="M336 114.7l22.6 22.6 128 128L509.3 288l-22.6 22.6-128 128L336 461.3 290.7 416l22.6-22.6L418.7 288 313.4 182.6 290.7 160 336 114.7z" />
    </Icon>
);

export default ArrowTurnDownRight;