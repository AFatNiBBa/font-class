
import { Icon } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=sharp-solid border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 448l0 32 64 0 0-32L64 96l352 0 32 0 0-64-32 0L32 32 0 32 0 64 0 448zm160-32l-64 0 0 64 64 0 0-64zm192 0l-64 0 0 64 64 0 0-64zm-96 64l0-64-64 0 0 64 64 0zm192-64l-64 0 0 64 64 0 0-64zM384 288l64 0 0-64-64 0 0 64zm0 32l0 64 64 0 0-64-64 0zm0-128l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default BorderTopLeft;