
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-arrow-up?s=sharp-duotone-solid trash-arrow-up}
 * @preview ![trash-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-arrow-up.svg)
 */
const TrashArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96zm78.1 168l17-17 80-80 17-17 17 17 80 80 17 17L304 297.9l-17-17-39-39L248 376l0 24-48 0 0-24 0-134.1-39 39-17 17L110.1 264z" />
        <path d="M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zm97 167l-17-17-17 17-80 80-17 17L144 297.9l17-17 39-39L200 376l0 24 48 0 0-24 0-134.1 39 39 17 17L337.9 264l-17-17-80-80z" />
    </Icon>
);

export default TrashArrowUp;