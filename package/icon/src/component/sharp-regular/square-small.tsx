
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=sharp-regular square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDE0NGwwIDIyNEw0OCAzNjhsMC0yMjQgMjI0IDB6TTQ4IDk2TDAgOTZsMCA0OEwwIDM2OGwwIDQ4IDQ4IDAgMjI0IDAgNDggMCAwLTQ4IDAtMjI0IDAtNDgtNDggMEw0OCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 144l0 224L48 368l0-224 224 0zM48 96L0 96l0 48L0 368l0 48 48 0 224 0 48 0 0-48 0-224 0-48-48 0L48 96z" />
    </Icon>
);

export default SquareSmall;