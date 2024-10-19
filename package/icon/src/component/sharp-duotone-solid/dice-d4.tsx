
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=sharp-duotone-solid dice-d4}
 * @preview ![dice-d4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMEwyNDAgNTEyIDI0MCAwIDAgMzIweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjcyIDUxMlYwTDUxMiAzMjAgMjcyIDUxMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320L240 512 240 0 0 320z" />
            <path d="M272 512V0L512 320 272 512z" />
    </Icon>
);

export default DiceD4;