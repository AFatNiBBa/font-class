
import { Icon } from "../../index";

/**
 * A component that renders the `cup-straw` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-straw?s=sharp-regular cup-straw}
 * @preview ![cup-straw](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cup-straw.svg)
 */
const CupStraw: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M205 0l-4.4 18.5L174.9 128l-94.7 0L32 128l-8 0L0 128l0 48 24 0 12 0 48.2 0 79.4 0 49.3 0 86.9 0 48.2 0 12 0 24 0 0-48-24 0-8 0-48.2 0-79.6 0L243 48l37 0 24 0 0-48L280 0 224 0 205 0zM38.7 208L64 512l256 0 25.3-304-48.2 0L275.8 464l-167.7 0L86.8 208l-48.2 0z" />
    </Icon>
);

export default CupStraw;