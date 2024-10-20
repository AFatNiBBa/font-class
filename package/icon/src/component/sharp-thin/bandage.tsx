
import { Icon } from "../../index";

/**
 * A component that renders the `bandage` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=sharp-thin bandage}
 * @preview ![bandage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bandage.svg)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 112l0 288 144 0 0-288-144 0zm-16 0l-288 0 0 288 288 0 0-288zM160 400l0-288L16 112l0 288 144 0zm0-304l16 0 288 0 16 0 144 0 16 0 0 16 0 288 0 16-16 0-144 0-16 0-288 0-16 0L16 416 0 416l0-16L0 112 0 96l16 0 144 0zm112 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-80 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Bandage;