
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=sharp-light arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M171.3 12.7L160.4 1.8 149.1 12.2l-104 96L33.4 119.1l21.7 23.5 11.8-10.9L144 60.5l0 388.8L75.3 380.7 64 369.4 41.4 392l11.3 11.3 96 96L160 510.6l11.3-11.3 96-96L278.6 392 256 369.4l-11.3 11.3L176 449.4l0-386.7 68.7 68.7L256 142.6 278.6 120l-11.3-11.3-96-96z" />
    </Icon>
);

export default ArrowsUpDown;