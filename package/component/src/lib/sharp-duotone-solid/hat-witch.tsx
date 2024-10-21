
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-witch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-witch?s=sharp-duotone-solid hat-witch}
 * @preview ![hat-witch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hat-witch.svg)
 */
const HatWitch: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l96 0 128 0 32 0 64 0 32 0 128 0 96 0 0 32L448 512l-320 0L0 448l0-32z" />
        <path d="M96 416L224 128 440 0 544 88 512 192l-32-64-64 0-32 64 96 224-128 0 0-80 0-16-16 0-96 0-16 0 0 16 0 80L96 416zm160 0l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default HatWitch;