
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-quartered` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-quartered?s=duotone shield-quartered}
 * @preview ![shield-quartered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-quartered.svg)
 */
const ShieldQuartered: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 140c.1 24 2.6 52.9 8.7 84L256 224c0-74.7 0-149.3 0-224c-.2 0-.5 0-.7 0c-4.4 .1-8.7 1.1-12.6 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2zm240.7 84c0 95.1 0 190.1 0 285.1c9 0 18.1-2 26.4-6C413.7 440.7 468.8 321.3 488 224l-231.3 0z" />
        <path d="M256.4 0l.3 0c4.6 0 9.2 1 13.4 2.9L458.4 82.8c22 9.3 38.4 31 38.3 57.2c-.1 24-2.6 52.9-8.7 84l-231.3 0 0-224L256 0s0 0 0 0l-.7 0 .7 0 .3 0zM229.6 503.2C99 440.7 44 321.3 24.7 224L256 224l0 285.1c-9 0-18.1-2-26.4-6z" />
    </Icon>
);

export default ShieldQuartered;