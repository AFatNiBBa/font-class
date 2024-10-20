
import { Icon } from "../../index";

/**
 * A component that renders the `tent` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=sharp-light tent}
 * @preview ![tent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tent.svg)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32.1 512L0 512l2.9-32L32 160 288 0 544 176l29 304 3 32-32.1 0L32.1 512zM272 480l0-432.3L62.4 178.7 35 480l237 0zm32 0l101.4 0L304 288.4 304 480zm137.6 0l99.2 0L513.6 193.9 304 49.8 304 220 441.6 480z" />
    </Icon>
);

export default Tent;