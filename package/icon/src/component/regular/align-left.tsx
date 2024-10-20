
import { Icon } from "../../index";

/**
 * A component that renders the `align-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=regular align-left}
 * @preview ![align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/align-left.svg)
 */
const AlignLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 40C10.7 40 0 50.7 0 64S10.7 88 24 88l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 40zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 168zM0 320c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 296c-13.3 0-24 10.7-24 24zM24 424c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 424z" />
    </Icon>
);

export default AlignLeft;