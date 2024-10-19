
import { Icon } from "../../index";

/**
 * A component that renders the `battery-half` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-half?s=sharp-regular battery-half}
 * @preview ![battery-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDE0NGwwIDIyNEw0OCAzNjhsMC0yMjQgNDQ4IDB6TTQ4IDk2TDAgOTZsMCA0OEwwIDM2OGwwIDQ4IDQ4IDAgNDQ4IDAgNDggMCAwLTQ4IDAtNDggMzIgMCAwLTEyOC0zMiAwIDAtNDggMC00OC00OCAwTDQ4IDk2em0yNDAgOTZMOTYgMTkybDAgMTI4IDE5MiAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatteryHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 144l0 224L48 368l0-224 448 0zM48 96L0 96l0 48L0 368l0 48 48 0 448 0 48 0 0-48 0-48 32 0 0-128-32 0 0-48 0-48-48 0L48 96zm240 96L96 192l0 128 192 0 0-128z" />
    </Icon>
);

export default BatteryHalf;