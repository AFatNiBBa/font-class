
import { Icon } from "../../index";

/**
 * A component that renders the `bandage` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=sharp-light bandage}
 * @preview ![bandage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bandage.svg)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 128l0 256 128 0 0-256-128 0zm-32 0l-256 0 0 256 256 0 0-256zM160 384l0-256L32 128l0 256 128 0zm0-288l32 0 256 0 32 0 128 0 32 0 0 32 0 256 0 32-32 0-128 0-32 0-256 0-32 0L32 416 0 416l0-32L0 128 0 96l32 0 128 0zm112 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-72 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Bandage;