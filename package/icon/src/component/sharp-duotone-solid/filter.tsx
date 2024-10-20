
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=sharp-duotone-solid filter}
 * @preview ![filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/filter.svg)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 416V320L0 96V32H512V96L320 320V512L192 416z" />
    </Icon>
);

export default Filter;