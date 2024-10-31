
import { Icon } from "../../index";

/**
 * A component that renders the `clone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=sharp-solid clone}
 * @preview ![clone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clone.svg)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 448L64 448l0-224 64 0 0-64-64 0L0 160l0 64L0 448l0 64 64 0 224 0 64 0 0-64 0-64-64 0 0 64zm224-96L512 0 160 0l0 352 352 0z" />
    </Icon>
);

export default Clone;