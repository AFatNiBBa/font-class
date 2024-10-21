
import { Icon } from "../../index";

/**
 * A component that renders the `podium` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=sharp-light podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 32l-80 0 0 32 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM176 64l-8 0c-26.5 0-48 21.5-48 48l0 48 312 0 16 0 0 32-16 0L16 192 0 192l0-32 16 0 72 0 0-48c0-44.2 35.8-80 80-80l8 0 0-32 32 0 80 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-80 0-32 0 0-32zM80 512L47.3 224l32.2 0 29.1 256 230.9 0 29.1-256 32.2 0L368 512 80 512z" />
    </Icon>
);

export default Podium;