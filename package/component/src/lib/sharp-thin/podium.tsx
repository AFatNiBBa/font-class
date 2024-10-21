
import { Icon } from "../../index";

/**
 * A component that renders the `podium` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=sharp-thin podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 16l-96 0 0 64 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zM192 0l96 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-96 0-16 0 0-16 0-24-8 0c-30.9 0-56 25.1-56 56l0 48 328 0 8 0 0 16-8 0L8 176l-8 0 0-16 8 0 88 0 0-48c0-39.8 32.2-72 72-72l8 0 0-24 0-16 16 0zM80 512L45.5 208l16.1 0L94.3 496l259.4 0 32.7-288 16.1 0L368 512 80 512z" />
    </Icon>
);

export default Podium;