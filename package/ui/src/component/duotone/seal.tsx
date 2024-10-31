
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=duotone seal}
 * @preview ![seal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/seal.svg)
 */
const Seal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M289.9 18.4c-18.7-18.7-49.1-18.7-67.9 0L176.5 64 112 64c-26.5 0-48 21.5-48 48l0 64.5L18.4 222.1c-18.7 18.7-18.7 49.1 0 67.9L64 335.5 64 400c0 26.5 21.5 48 48 48l64.5 0 45.6 45.6c18.7 18.7 49.1 18.7 67.9 0L335.5 448l64.5 0c26.5 0 48-21.5 48-48l0-64.5 45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176.5l0-64.5c0-26.5-21.5-48-48-48l-64.5 0L289.9 18.4z" />
    </Icon>
);

export default Seal;