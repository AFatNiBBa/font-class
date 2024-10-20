
import { Icon } from "../../index";

/**
 * A component that renders the `hat-witch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-witch?s=sharp-solid hat-witch}
 * @preview ![hat-witch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hat-witch.svg)
 */
const HatWitch: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 128L112 384l112 0 0-80 0-16 16 0 96 0 16 0 0 16 0 80 112 0L384 192l32-64 64 0 32 64L544 88 440 0 224 128zm96 256l0-64-64 0 0 64 64 0zM0 416l0 32 128 64 320 0 128-64 0-32L0 416z" />
    </Icon>
);

export default HatWitch;