
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=sharp-thin reflect-both}
 * @preview ![reflect-both](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/reflect-both.svg)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.3 180.7L256 192l-11.3-11.3L96 32l0-16L96 0l16 0L400 0l16 0 0 16 0 16L267.3 180.7zM400 25.4l0-9.4L112 16l0 9.4 144 144 144-144zM192 256l-11.3 11.3L32 416l-16 0L0 416l0-16L0 112 0 96l16 0 16 0L180.7 244.7 192 256zM16 112l0 288 9.4 0 144-144L25.4 112 16 112zM320 256l11.3-11.3L480 96l16 0 16 0 0 16 0 288 0 16-16 0-16 0L331.3 267.3 320 256zM496 112l-9.4 0-144 144 144 144 9.4 0 0-288zM256 320l11.3 11.3L416 480l0 16 0 16-16 0-288 0-16 0 0-16 0-16L244.7 331.3 256 320zM400 496l0-9.4-144-144-144 144 0 9.4 288 0z" />
    </Icon>
);

export default ReflectBoth;