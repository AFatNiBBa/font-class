
import { Icon } from "../../index";

/**
 * A component that renders the `newspaper` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/newspaper?s=sharp-thin newspaper}
 * @preview ![newspaper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/newspaper.svg)
 */
const Newspaper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32l8 0 400 0 8 0 0 8 0 432 0 8-8 0-392 0-8 0-48 0L8 480l-8 0 0-8L0 136l0-8 8 0 56 0 0 16-48 0 0 320 40 0 40 0L96 40l0-8zm16 16l0 416 384 0 0-416L112 48zM352 96l8 0 80 0 8 0 0 16-8 0-80 0-8 0 0-16zm0 64l8 0 80 0 8 0 0 16-8 0-80 0-8 0 0-16zm0 64l8 0 80 0 8 0 0 16-8 0-80 0-8 0 0-16zM160 288l8 0 272 0 8 0 0 16-8 0-272 0-8 0 0-16zm0 64l8 0 272 0 8 0 0 16-8 0-272 0-8 0 0-16zm16-240l0 112 128 0 0-112-128 0zM160 96l16 0 128 0 16 0 0 16 0 112 0 16-16 0-128 0-16 0 0-16 0-112 0-16z" />
    </Icon>
);

export default Newspaper;