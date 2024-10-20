
import { Icon } from "../../index";

/**
 * A component that renders the `sort` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=sharp-solid sort}
 * @preview ![sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sort.svg)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 32L0 192l0 32 320 0 0-32L160 32zm0 448L320 320l0-32L0 288l0 32L160 480z" />
    </Icon>
);

export default Sort;