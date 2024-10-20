
import { Icon } from "../../index";

/**
 * A component that renders the `speaker` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=sharp-regular speaker}
 * @preview ![speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/speaker.svg)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 48l0 416L48 464 48 48l288 0zM48 0L0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-416 0-48L336 0 48 0zM232 120a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM192 432a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM136 328a56 56 0 1 1 112 0 56 56 0 1 1 -112 0z" />
    </Icon>
);

export default Speaker;