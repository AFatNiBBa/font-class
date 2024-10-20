
import { Icon } from "../../index";

/**
 * A component that renders the `podium` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=sharp-regular podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 0L288 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L176 96l0-24-8 0c-22.1 0-40 17.9-40 40l0 32 296 0 24 0 0 48-24 0L24 192 0 192l0-48 24 0 56 0 0-32c0-48.6 39.4-88 88-88l8 0 0-24zM80 512L47.3 224l48.3 0 27.3 240 202.3 0 27.3-240 48.3 0L368 512 80 512z" />
    </Icon>
);

export default Podium;