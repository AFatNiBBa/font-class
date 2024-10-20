
import { Icon } from "../../index";

/**
 * A component that renders the `bandage` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=sharp-regular bandage}
 * @preview ![bandage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bandage.svg)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 144l0 224 144 0 0-224-144 0zM192 96l256 0 144 0 48 0 0 48 0 224 0 48-48 0-144 0-256 0L48 416 0 416l0-48L0 144 0 96l48 0 144 0zm0 272l0-224L48 144l0 224 144 0zm80-136a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM272 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Bandage;