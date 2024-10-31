
import { Icon, generic } from "../../index";

/**
 * A component that renders the `won-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/won-sign?s=sharp-duotone-solid won-sign}
 * @preview ![won-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/won-sign.svg)
 */
const WonSign: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 42.3 0L56.6 224 32 224 0 224zm123 0c5.9 21.3 11.9 42.7 17.8 64l24.7 0 15.3-64L123 224zm108.2 64l49.5 0c-5.1-21.3-10.2-42.7-15.3-64l-18.9 0-15.3 64zm100-64c5.1 21.3 10.2 42.7 15.3 64l24.7 0c5.9-21.3 11.9-42.7 17.8-64l-57.8 0zm106.4 64l42.3 0 32 0 0-64-32 0-24.6 0-17.8 64z" />
        <path d="M3.2 32L121.2 456.6l6.5 23.4 24.3 0 8 0 25.2 0 5.9-24.5L256 184.7l64.9 270.8 5.9 24.5 25.2 0 8 0 24.3 0 6.5-23.4L508.8 32l-66.4 0L358 335.7 291.1 56.5 285.2 32 260 32l-8 0-25.2 0-5.9 24.5L154 335.7 69.7 32 3.2 32z" />
    </Icon>
);

export default WonSign;