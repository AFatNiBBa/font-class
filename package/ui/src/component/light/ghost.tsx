
import { Icon } from "../../index";

/**
 * A component that renders the `ghost` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=light ghost}
 * @preview ![ghost](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ghost.svg)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M242.7 506c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l29.3-33.4c11.6-13.3 32.1-14 44.5-1.5l2.3 2.3c4.2 4.2 10 6.6 16 6.6c12.5 0 22.6-10.1 22.6-22.6L384 192C384 86 298 0 192 0S0 86 0 192L0 457.4C0 469.9 10.1 480 22.6 480c6 0 11.8-2.4 16-6.6l2.3-2.3c12.5-12.5 32.9-11.8 44.5 1.5L114.7 506c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l26.6-30.5c12.7-14.6 35.4-14.6 48.2 0L242.7 506zM32 438.1L32 192c0-88.4 71.6-160 160-160s160 71.6 160 160l0 246.1c-25.1-14-57.6-9.3-77.6 13.4L256 472.5l-15.8-18.1c-25.5-29.1-70.8-29.1-96.3 0L128 472.5l-18.4-21.1C89.6 428.7 57.1 424 32 438.1zM152 192a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm104 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Ghost;