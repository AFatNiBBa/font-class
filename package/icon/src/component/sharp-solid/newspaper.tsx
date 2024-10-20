
import { Icon } from "../../index";

/**
 * A component that renders the `newspaper` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/newspaper?s=sharp-solid newspaper}
 * @preview ![newspaper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/newspaper.svg)
 */
const Newspaper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32l32 0 352 0 32 0 0 32 0 384 0 32-32 0-320 0-32 0-48 0-48 0L0 480l0-32L0 128 0 96l64 0 0 32 0 288 16 0 16 0L96 64l0-32zm64 64l0 128 160 0 0-128L160 96zm224 0l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zm0 96l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zM160 288l0 32 16 0 256 0 16 0 0-32-16 0-256 0-16 0zm0 96l0 32 16 0 256 0 16 0 0-32-16 0-256 0-16 0z" />
    </Icon>
);

export default Newspaper;