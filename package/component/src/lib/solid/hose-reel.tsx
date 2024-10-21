
import { Icon } from "../../index";

/**
 * A component that renders the `hose-reel` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose-reel?s=solid hose-reel}
 * @preview ![hose-reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hose-reel.svg)
 */
const HoseReel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 64c-106 0-192 86-192 192s86 192 192 192c40.8 0 78.6-12.7 109.7-34.4c14.5-10.1 34.4-6.6 44.6 7.9s6.6 34.4-7.9 44.6C424.8 495 374.3 512 320 512C178.6 512 64 397.4 64 256S178.6 0 320 0S576 114.6 576 256l0 96 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-2.3 0-11.5 80.2c7.8 1.1 13.7 7.8 13.7 15.8c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16c0-8.1 6-14.7 13.7-15.8L506.3 400l-2.3 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-96c0-106-86-192-192-192zM224 256a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 160a160 160 0 1 1 0-320 160 160 0 1 1 0 320zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default HoseReel;