
import { Icon, generic } from "../../index";

/**
 * A component that renders the `podium` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=duotone podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M44.4 192l359.1 0L374.3 455.1c-3.6 32.4-31 56.9-63.6 56.9l-173.4 0c-32.6 0-60-24.5-63.6-56.9L44.4 192z" />
        <path d="M182.4 72L168 72c-22.1 0-40 17.9-40 40l0 32 296 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 192c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0 0-32c0-48.6 39.4-88 88-88l14.4 0C190.7 9.7 206.2 0 224 0l64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-64 0c-17.8 0-33.3-9.7-41.6-24z" />
    </Icon>
);

export default Podium;