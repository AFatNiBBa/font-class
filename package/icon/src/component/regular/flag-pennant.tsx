
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=regular flag-pennant}
 * @preview ![flag-pennant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flag-pennant.svg)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24l0 8L0 80 0 304l0 48L0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-137.1L432.9 213.4c9-3.2 15.1-11.8 15.1-21.4s-6-18.2-15.1-21.4L48 33.1 48 24zm0 60.1L350.1 192 48 299.9 48 84.1z" />
    </Icon>
);

export default FlagPennant;