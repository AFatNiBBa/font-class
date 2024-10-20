
import { Icon } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=sharp-solid candy-bar}
 * @preview ![candy-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/candy-bar.svg)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 320l128 0 0-96L0 224l0 96zM0 448l128 0 0-96L0 352l0 96zm288 0l0-96-128 0 0 96 128 0zm0-224l-128 0 0 96 128 0 0-96zm0-160L160 64l0 128 128 0 0-128zm352 0L320 64l0 384 320 0 0-384zM33.1 192l94.9 0s0 0 0 0l0-32s0 0 0 0l0-62.9C113.6 111.3 93.8 120 72 120c-6.2 0-12.2-.7-18-2c1.3 5.8 2 11.8 2 18c0 21.8-8.7 41.6-22.9 56z" />
    </Icon>
);

export default CandyBar;