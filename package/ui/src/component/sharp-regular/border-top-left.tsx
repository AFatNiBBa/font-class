
import { Icon } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=sharp-regular border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 456l0 24 48 0 0-24L48 80l376 0 24 0 0-48-24 0L24 32 0 32 0 56 0 456zm96-40l0 64 64 0 0-64-64 0zm192 0l0 64 64 0 0-64-64 0zm-96 64l64 0 0-64-64 0 0 64zm192-64l0 64 64 0 0-64-64 0zm0-128l64 0 0-64-64 0 0 64zm0 32l0 64 64 0 0-64-64 0zm0-128l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default BorderTopLeft;