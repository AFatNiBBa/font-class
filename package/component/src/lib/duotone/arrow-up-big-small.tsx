
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-big-small` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-big-small?s=duotone arrow-up-big-small}
 * @preview ![arrow-up-big-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-big-small.svg)
 */
const ArrowUpBigSmall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M320 80l0 128c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48L368 32c-26.5 0-48 21.5-48 48zm0 288l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48z" />
        <path d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3 192 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-301.7L95.6 181.6c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32z" />
    </Icon>
);

export default ArrowUpBigSmall;