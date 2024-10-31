
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-xmark?s=sharp-duotone-solid trash-xmark}
 * @preview ![trash-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-xmark.svg)
 */
const TrashXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96zm94.1 128L160 190.1l17 17 47 47 47-47 17-17L321.9 224l-17 17-47 47 47 47 17 17L288 385.9l-17-17-47-47-47 47-17 17L126.1 352l17-17 47-47-47-47-17-17z" />
        <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zM321.9 224l-17 17-47 47 47 47 17 17L288 385.9l-17-17-47-47-47 47-17 17L126.1 352l17-17 47-47-47-47-17-17L160 190.1l17 17 47 47 47-47 17-17L321.9 224z" />
    </Icon>
);

export default TrashXmark;