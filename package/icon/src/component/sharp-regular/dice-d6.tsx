
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=sharp-regular dice-d6}
 * @preview ![dice-d6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dice-d6.svg)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M200 498.3L224 512l24-13.7L448 384l0-234.6 0-28-24.5-13.3L224 0 24.3 111.4 0 125l0 27.8L0 384 200 498.3zM48 356.1l0-175.3 152 88.9L200 443 48 356.1zM72.4 139.5L224.3 54.8l151.4 82.1L223.8 228.1 72.4 139.5zM400 178.3l0 177.9L248 443l0-173.4 152-91.3z" />
    </Icon>
);

export default DiceD6;