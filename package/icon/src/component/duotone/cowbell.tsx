
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=duotone cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 400c0 10.6 3.5 21 10.2 29.5C19.3 441.2 33.2 448 48 448l112 0 128 0 112 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-64-256C377.2 111 358 96 336 96l0-56c0-22.1-17.9-40-40-40L152 0c-22.1 0-40 17.9-40 40l0 56c-22 0-41.2 15-46.6 36.4l-64 256C.5 392.2 0 396.1 0 400zM160 48l128 0 0 48L160 96l0-48z" />
        <path d="M224 512c35.3 0 64-28.7 64-64H160c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Cowbell;