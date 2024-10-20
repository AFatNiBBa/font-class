
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=light arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M171.3 4.7c-6.1-6.1-15.9-6.3-22.2-.4l-104 96c-6.5 6-6.9 16.1-.9 22.6s16.1 6.9 22.6 .9L144 52.5l0 404.8L75.3 388.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L176 457.4l0-402.7 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96z" />
    </Icon>
);

export default ArrowsUpDown;