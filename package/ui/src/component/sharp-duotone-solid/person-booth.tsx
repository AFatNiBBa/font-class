
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-booth` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-booth?s=sharp-duotone-solid person-booth}
 * @preview ![person-booth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-booth.svg)
 */
const PersonBooth: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 0l0 32 0 160 64 0 0-160 0-32L192 0zm0 320l0 160 0 32 64 0 0-32 0-160-64 0zm89 128l39 0 32 0 64 0 32 0 32 0 0-32 0-384 0-32L448 0 320 0 283.1 0l5.2 36.5 31.2 218.6L288.6 409.7 281 448zM512 0l0 32 0 448 0 32 64 0 0-32 0-448 0-32L512 0z" />
        <path d="M64 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM0 192l0-32 32 0 48 0 13.3 0 9.4 9.4L157.3 224l66.7 0 32 0 0 64-32 0-80 0-13.3 0-9.4-9.4-9.4-9.4 0 72.1 41.6 55.5 6.4 8.5 0 10.7 0 64 0 32-64 0 0-32 0-53.3L64 384l0 96 0 32L0 512l0-32L0 298.7s0 0 0 0L0 288l0-96z" />
    </Icon>
);

export default PersonBooth;