
import { Icon } from "../../index";

/**
 * A component that renders the `bandage` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=thin bandage}
 * @preview ![bandage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bandage.svg)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 112l0 288 80 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64l-80 0zm-16 0l-288 0 0 288 288 0 0-288zM160 400l0-288-80 0c-35.3 0-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64l80 0zm0-304l16 0 288 0 16 0 80 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80l-80 0-16 0-288 0-16 0-80 0c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l80 0zm112 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-80 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Bandage;