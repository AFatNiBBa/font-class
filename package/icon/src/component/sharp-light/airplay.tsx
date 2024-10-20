
import { Icon } from "../../index";

/**
 * A component that renders the `airplay` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=sharp-light airplay}
 * @preview ![airplay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/airplay.svg)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 64l512 0 0 320-101.5 0 26.9 24.2 8.7 7.8 65.9 0 32 0 0-32 0-320 0-32-32 0L32 32 0 32 0 64 0 384l0 32 32 0 65.9 0 8.7-7.8L133.5 384 32 384 32 64zM160 446.2L288 331 416 446.2l0 1.8-256 0 0-1.8zM128 480l32 0 256 0 32 0 0-32 0-16L288 288 128 432l0 16 0 32z" />
    </Icon>
);

export default Airplay;