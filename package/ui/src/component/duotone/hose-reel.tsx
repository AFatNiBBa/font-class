
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hose-reel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose-reel?s=duotone hose-reel}
 * @preview ![hose-reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hose-reel.svg)
 */
const HoseReel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 141.4 114.6 256 256 256c54.3 0 104.8-17 146.3-45.9c14.5-10.1 18-30.1 7.9-44.6s-30.1-18-44.6-7.9C398.6 435.3 360.8 448 320 448c-106 0-192-86-192-192s86-192 192-192s192 86 192 192l0 96 64 0 0-96C576 114.6 461.4 0 320 0S64 114.6 64 256zm96 0a160 160 0 1 0 320 0 160 160 0 1 0 -320 0zm256 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zm-160 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M480 376c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-2.3 0-11.5 80.2c7.8 1.1 13.7 7.8 13.7 15.8c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16c0-8.1 6-14.7 13.7-15.8L506.3 400l-2.3 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default HoseReel;