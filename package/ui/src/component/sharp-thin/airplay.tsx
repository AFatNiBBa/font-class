
import { Icon } from "../../index";

/**
 * A component that renders the `airplay` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=sharp-thin airplay}
 * @preview ![airplay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/airplay.svg)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 48l544 0 0 352-99.7 0 9.1 8.2 8.7 7.8 81.9 0 16 0 0-16 0-352 0-16-16 0L16 32 0 32 0 48 0 400l0 16 16 0 81.9 0 8.7-7.8 9.1-8.2L16 400 16 48zM144 464l0-24.9L288 309.5 432 439.1l0 24.9-288 0zm-16-32l0 32 0 16 16 0 288 0 16 0 0-16 0-32L288 288 128 432z" />
    </Icon>
);

export default Airplay;