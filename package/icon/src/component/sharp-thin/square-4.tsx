
import { Icon } from "../../index";

/**
 * A component that renders the `square-4` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-4?s=sharp-thin square-4}
 * @preview ![square-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-4.svg)
 */
const Square_4: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zM288 192l-16 0 0 8 0 104-132.1 0 72-176-17.3 0-74 181-4.5 11 11.9 0 144 0 0 56 0 8 16 0 0-8 0-56 24 0 8 0 0-16-8 0-24 0 0-104 0-8z" />
    </Icon>
);

export default Square_4;