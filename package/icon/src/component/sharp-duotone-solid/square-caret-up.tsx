
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-up?s=sharp-duotone-solid square-caret-up}
 * @preview ![square-caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk2IDI4OEwyMjQgMTYwIDM1MiAyODhsMCAzMkw5NiAzMjBsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDMyMFYyODhMMjI0IDE2MCAzNTIgMjg4djMySDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 288L224 160 352 288l0 32L96 320l0-32z" />
            <path d="M96 320V288L224 160 352 288v32H96z" />
    </Icon>
);

export default SquareCaretUp;