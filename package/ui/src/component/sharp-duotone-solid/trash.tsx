
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-duotone-solid trash}
 * @preview ![trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash.svg)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96z" />
        <path d="M304 0L144 0 128 32 0 32 0 96l448 0 0-64L320 32 304 0z" />
    </Icon>
);

export default Trash;