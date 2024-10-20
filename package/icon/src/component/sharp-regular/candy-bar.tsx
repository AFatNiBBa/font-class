
import { Icon } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=sharp-regular candy-bar}
 * @preview ![candy-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/candy-bar.svg)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 320l0-96 128 0 0 96L0 320zM0 448l0-96 128 0 0 96L0 448zm288 0l-128 0 0-96 128 0 0-32-128 0 0-96 128 0 0-32-128 0 0-128 128 0 48 0 256 0 48 0 0 48 0 288 0 48-48 0-256 0-48 0zm48-336l0 288 256 0 0-288-256 0zM33.1 192C47.3 177.6 56 157.8 56 136c0-6.2-.7-12.2-2-18c5.8 1.3 11.8 2 18 2c21.8 0 41.6-8.7 56-22.9l0 62.9s0 0 0 0l0 32s0 0 0 0l-94.9 0z" />
    </Icon>
);

export default CandyBar;