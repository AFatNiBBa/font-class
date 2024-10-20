
import { Icon } from "../../index";

/**
 * A component that renders the `bandage` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=light bandage}
 * @preview ![bandage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bandage.svg)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 128l0 256 80 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-80 0zm-32 0l-256 0 0 256 256 0 0-256zM160 384l0-256-80 0c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l80 0zm0-288l32 0 256 0 32 0 80 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80l-80 0-32 0-256 0-32 0-80 0c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l80 0zm112 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-72 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Bandage;