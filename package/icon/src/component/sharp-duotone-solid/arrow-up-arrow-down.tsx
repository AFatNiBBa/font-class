
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-arrow-down?s=sharp-duotone-solid arrow-up-arrow-down}
 * @preview ![arrow-up-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNzQuNyAzMzZsMjIuNiAyMi42IDk2IDk2TDQxNiA0NzcuM2wyMi42LTIyLjYgOTYtOTZMNTU3LjMgMzM2IDUxMiAyOTAuN2wtMjIuNiAyMi42TDQ0OCAzNTQuNyA0NDggNjRsMC0zMi02NCAwIDAgMzIgMCAyOTAuNy00MS40LTQxLjRMMzIwIDI5MC43IDI3NC43IDMzNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAzNC43bDIyLjYgMjIuNiA5NiA5NkwzMDEuMyAxNzYgMjU2IDIyMS4zbC0yMi42LTIyLjZMMTkyIDE1Ny4zIDE5MiA0NDhsMCAzMi02NCAwIDAtMzIgMC0yOTAuN0w4Ni42IDE5OC42IDY0IDIyMS4zIDE4LjcgMTc2bDIyLjYtMjIuNiA5Ni05NkwxNjAgMzQuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowUpArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M274.7 336l22.6 22.6 96 96L416 477.3l22.6-22.6 96-96L557.3 336 512 290.7l-22.6 22.6L448 354.7 448 64l0-32-64 0 0 32 0 290.7-41.4-41.4L320 290.7 274.7 336z" />
            <path d="M160 34.7l22.6 22.6 96 96L301.3 176 256 221.3l-22.6-22.6L192 157.3 192 448l0 32-64 0 0-32 0-290.7L86.6 198.6 64 221.3 18.7 176l22.6-22.6 96-96L160 34.7z" />
    </Icon>
);

export default ArrowUpArrowDown;