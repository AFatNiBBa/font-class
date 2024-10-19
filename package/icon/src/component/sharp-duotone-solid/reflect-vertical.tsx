
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=sharp-duotone-solid reflect-vertical}
 * @preview ![reflect-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAwbDAgMzJMMjU2IDE5MiA0MTYgMzJsMC0zMkw5NiAwem0wIDQ4MGwwIDMyIDMyMCAwIDAtMzJMMjU2IDMyMCA5NiA0ODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDIzMmwyNCAwIDQ2NCAwIDI0IDAgMCA0OC0yNCAwTDI0IDI4MCAwIDI4MGwwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 0l0 32L256 192 416 32l0-32L96 0zm0 480l0 32 320 0 0-32L256 320 96 480z" />
            <path d="M0 232l24 0 464 0 24 0 0 48-24 0L24 280 0 280l0-48z" />
    </Icon>
);

export default ReflectVertical;