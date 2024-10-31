
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cross` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=duotone cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 176l0 32c0 26.5 21.5 48 48 48l80 0 128 0 80 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-80 0 0-80c0-26.5-21.5-48-48-48L176 0c-26.5 0-48 21.5-48 48l0 80-80 0c-26.5 0-48 21.5-48 48zM128 288l0 176c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-176-128 0z" />
        <path d="M128 256H256v32H128V256z" />
    </Icon>
);

export default Cross;