
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dagger` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=sharp-duotone-solid dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 192l64 0 64 0 0 240-64 80-64-80 0-240z" />
        <path d="M224 32l0-32L160 0l0 32 0 96-80 0-32 0L0 128l0 48c0 26.5 21.5 48 48 48c20.9 0 38.7-13.4 45.3-32l98.7 0 98.7 0c6.6 18.6 24.4 32 45.3 32c26.5 0 48-21.5 48-48l0-48-48 0-32 0-80 0 0-96z" />
    </Icon>
);

export default Dagger;