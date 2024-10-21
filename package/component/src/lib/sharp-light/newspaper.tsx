
import { Icon } from "../../index";

/**
 * A component that renders the `newspaper` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/newspaper?s=sharp-light newspaper}
 * @preview ![newspaper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/newspaper.svg)
 */
const Newspaper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32l16 0 384 0 16 0 0 16 0 416 0 16-16 0-368 0-16 0-48 0-48 0L0 480l0-16L0 112 0 96l16 0 48 0 0 32-32 0 0 320 32 0 32 0L96 48l0-16zm32 416l352 0 0-384L128 64l0 384zM384 96l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zm0 64l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zm0 64l16 0 32 0 16 0 0 32-16 0-32 0-16 0 0-32zM160 288l16 0 256 0 16 0 0 32-16 0-256 0-16 0 0-32zm0 64l16 0 256 0 16 0 0 32-16 0-256 0-16 0 0-32zm32-224l0 96 128 0 0-96-128 0zM160 96l32 0 128 0 32 0 0 32 0 96 0 32-32 0-128 0-32 0 0-32 0-96 0-32z" />
    </Icon>
);

export default Newspaper;