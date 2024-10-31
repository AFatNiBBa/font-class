
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=duotone face-flushed}
 * @preview ![face-flushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-flushed.svg)
 */
const FaceFlushed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-32A72 72 0 1 1 88 224a72 72 0 1 1 144 0zM176 384c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zM424 224a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M160 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm192 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default FaceFlushed;