
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-concierge` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-concierge?s=duotone bell-concierge}
 * @preview ![bell-concierge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bell-concierge.svg)
 */
const BellConcierge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 424c0 13.3 10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0L32 400l-8 0c-13.3 0-24 10.7-24 24zM192 88c0 13.3 10.7 24 24 24l16 0 0 33.3c7.9-.8 15.9-1.3 24-1.3c2 0 4 0 6.1 .1s4 .1 6 .2c4 .2 8 .5 11.9 1l0-33.3 16 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0-40 0c-13.3 0-24 10.7-24 24z" />
        <path d="M480 368c0-123.7-100.3-224-224-224S32 244.3 32 368v32H480V368z" />
    </Icon>
);

export default BellConcierge;