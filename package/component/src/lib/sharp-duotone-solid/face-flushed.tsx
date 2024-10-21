
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=sharp-duotone-solid face-flushed}
 * @preview ![face-flushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-flushed.svg)
 */
const FaceFlushed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-32A72 72 0 1 1 88 224a72 72 0 1 1 144 0zM176 368l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zM424 224a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M160 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm192 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default FaceFlushed;