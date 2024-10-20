
import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=sharp-solid filter}
 * @preview ![filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/filter.svg)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416V320L0 96V32H512V96L320 320V512L192 416z" />
    </Icon>
);

export default Filter;