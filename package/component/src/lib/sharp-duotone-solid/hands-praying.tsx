
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-praying` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-praying?s=sharp-duotone-solid hands-praying}
 * @preview ![hands-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hands-praying.svg)
 */
const HandsPraying: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M336 208l0 112 0 112 256 80 48 0 0-144L528 326l0-102 0-9.4-5-7.9L395 6.8l-55 32.6L432 208.2 432 320l-32 0 0-112-64 0z" />
        <path d="M245 6.8l-128 200-5 7.9 0 9.4 0 102L0 368 0 512l48 0 256-80 0-112 0-112-64 0 0 112-32 0 0-111.8L300.1 39.3 245 6.8z" />
    </Icon>
);

export default HandsPraying;