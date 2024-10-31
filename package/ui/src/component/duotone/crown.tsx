
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crown` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=duotone crown}
 * @preview ![crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crown.svg)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 136a40 40 0 1 0 80 0A40 40 0 1 0 0 136zM248 72a40 40 0 1 0 80-.1A40 40 0 1 0 248 72zm248 64a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M504 160l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106c-6.1 3.8-13.3 6-21 6s-14.9-2.2-21-6L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c-7.2 9.5-18.5 15.8-31.3 16L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c-12.8-.2-24.1-6.5-31.3-16z" />
    </Icon>
);

export default Crown;