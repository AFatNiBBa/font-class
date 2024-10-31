
import { Icon, generic } from "../../index";

/**
 * A component that renders the `escalator` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=duotone escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 448c0 35.3 28.7 64 64 64l96 0c15.5 0 30.5-5.6 42.1-15.8L472 288l72 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-96 0c-15.5 0-30.5 5.6-42.1 15.8L168 384l-72 0c-35.3 0-64 28.7-64 64z" />
        <path d="M256 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm64 192l0 16.4-128 112L192 192c0-35.3 28.7-64 64-64s64 28.7 64 64z" />
    </Icon>
);

export default Escalator;