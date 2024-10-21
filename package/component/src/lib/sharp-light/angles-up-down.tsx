
import { Icon } from "../../index";

/**
 * A component that renders the `angles-up-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up-down?s=sharp-light angles-up-down}
 * @preview ![angles-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/angles-up-down.svg)
 */
const AnglesUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M234 19.5l160 128 12.5 10-20 25-12.5-10L224 52.5 74 172.5l-12.5 10-20-25 12.5-10 160-128 10-8 10 8zm0 473l-10 8-10-8L54 364.5l-12.5-10 20-25 12.5 10 150 120 150-120 12.5-10 20 25-12.5 10-160 128z" />
    </Icon>
);

export default AnglesUpDown;