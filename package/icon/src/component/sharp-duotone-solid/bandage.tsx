
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bandage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=sharp-duotone-solid bandage}
 * @preview ![bandage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2bDE2MCAwIDAtMzIwTDAgOTZ6bTE5MiAwbDAgMzIwIDI1NiAwIDAtMzIwTDE5MiA5NnpNMjk2IDIwOGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAwem0wIDk2YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTk2LTk2YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTAgOTZhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHpNNDgwIDk2bDAgMzIwIDE2MCAwIDAtMzIwTDQ4MCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiA5NmwtMzIgMCAwIDMyMCAzMiAwIDAtMzIwem0yODggMGwtMzIgMCAwIDMyMCAzMiAwIDAtMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416l160 0 0-320L0 96zm192 0l0 320 256 0 0-320L192 96zM296 208a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96-96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM480 96l0 320 160 0 0-320L480 96z" />
            <path d="M192 96l-32 0 0 320 32 0 0-320zm288 0l-32 0 0 320 32 0 0-320z" />
    </Icon>
);

export default Bandage;