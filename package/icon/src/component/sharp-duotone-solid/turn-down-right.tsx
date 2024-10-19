
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=sharp-duotone-solid turn-down-right}
 * @preview ![turn-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgODAgMCAyODhsMCA0OCA0OCAwIDI3MiAwIDAtOTZMOTYgMjQwIDk2IDgwbDAtNDhMMCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiA0NDhMNTEyIDI4OCAzNTIgMTI4bC0zMiAwIDAgMzIwIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 80 0 288l0 48 48 0 272 0 0-96L96 240 96 80l0-48L0 32z" />
            <path d="M352 448L512 288 352 128l-32 0 0 320 32 0z" />
    </Icon>
);

export default TurnDownRight;