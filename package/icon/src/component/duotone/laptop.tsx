
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=duotone laptop}
 * @preview ![laptop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/laptop.svg)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384C8.6 384 0 392.6 0 403.2zM64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32C92.7 32 64 60.7 64 96z" />
        <path d="M128 96H512V352H128V96z" />
    </Icon>
);

export default Laptop;