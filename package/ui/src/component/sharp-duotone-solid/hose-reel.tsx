
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hose-reel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose-reel?s=sharp-duotone-solid hose-reel}
 * @preview ![hose-reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hose-reel.svg)
 */
const HoseReel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 141.4 114.6 256 256 256c54.3 0 104.8-17 146.3-45.9l-36.6-52.5C398.6 435.3 360.8 448 320 448c-106 0-192-86-192-192s86-192 192-192s192 86 192 192l0 96 64 0 0-96C576 114.6 461.4 0 320 0S64 114.6 64 256zm96 0a160 160 0 1 0 320 0 160 160 0 1 0 -320 0zm256 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zm-160 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M480 352l24 0 80 0 24 0 0 48-24 0-2.3 0-11.4 80 13.7 0 0 32-16 0-48 0-16 0 0-32 13.7 0-11.4-80-2.3 0-24 0 0-48z" />
    </Icon>
);

export default HoseReel;