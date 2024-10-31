
import { Icon } from "../../index";

/**
 * A component that renders the `bandage` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=regular bandage}
 * @preview ![bandage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bandage.svg)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 144l0 224 112 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32l-112 0zM192 96l256 0 112 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80l-112 0-256 0L80 416c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l112 0zm0 272l0-224L80 144c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l112 0zm80-136a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM272 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Bandage;