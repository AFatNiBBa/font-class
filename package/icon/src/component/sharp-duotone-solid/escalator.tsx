
import { Icon, generic } from "../../index";

/**
 * A component that renders the `escalator` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=sharp-duotone-solid escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 384l0 128 64 0 96 0 24 0 18.1-15.8L472 288l72 0 64 0 0-128-64 0-96 0-24 0-18.1 15.8L168 384l-72 0-64 0z" />
        <path d="M256 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm64 128l0 80.4-128 112L192 128l128 0z" />
    </Icon>
);

export default Escalator;