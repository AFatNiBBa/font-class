
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-this-way-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-this-way-up?s=sharp-duotone-solid square-this-way-up}
 * @preview ![square-this-way-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-this-way-up.svg)
 */
const SquareThisWayUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM56 168l72-72 72 72 0 24-40 0 0 128-64 0 0-128-40 0 0-24zm8 216l320 0 0 32L64 416l0-32zM248 168l72-72 72 72 0 24-40 0 0 128-64 0 0-128-40 0 0-24z" />
        <path d="M56 168l0 24 40 0 0 128 64 0 0-128 40 0 0-24L128 96 56 168zm192 24l40 0 0 128 64 0 0-128 40 0 0-24L320 96l-72 72 0 24z" />
    </Icon>
);

export default SquareThisWayUp;