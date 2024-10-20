
import { Icon } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=solid border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-336c0-8.8 7.2-16 16-16l336 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32C35.8 32 0 67.8 0 112L0 448zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default BorderTopLeft;