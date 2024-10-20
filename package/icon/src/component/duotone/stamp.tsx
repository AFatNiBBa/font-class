
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stamp` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=duotone stamp}
 * @preview ![stamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/stamp.svg)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 416l8 0 56 0 0 32 320 0 0-32 56 0 8 0 0 48c0 26.5-21.5 48-48 48L80 512c-26.5 0-48-21.5-48-48l0-48z" />
        <path d="M312 201.8c0-17.4 9.2-33.2 19.9-47C344.5 138.5 352 118.1 352 96c0-53-43-96-96-96s-96 43-96 96c0 22.1 7.5 42.5 20.1 58.8c10.7 13.8 19.9 29.6 19.9 47c0 29.9-24.3 54.2-54.2 54.2L112 256C50.1 256 0 306.1 0 368l0 8c0 22.1 17.9 40 40 40l432 0c22.1 0 40-17.9 40-40l0-8c0-61.9-50.1-112-112-112l-33.8 0c-29.9 0-54.2-24.3-54.2-54.2z" />
    </Icon>
);

export default Stamp;