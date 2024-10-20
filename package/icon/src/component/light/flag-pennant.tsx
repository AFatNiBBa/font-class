
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=light flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 16C32 7.2 24.8 0 16 0S0 7.2 0 16L0 32 0 64 0 320l0 32L0 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-145.1L432.9 213.2c9.1-3.1 15.1-11.6 15.1-21.2s-6.1-18.1-15.1-21.2L32 33.1 32 16zm0 50.9L396.1 192 32 317.1 32 66.9z" />
    </Icon>
);

export default FlagPennant;