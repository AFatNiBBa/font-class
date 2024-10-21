
import { Icon } from "../../index";

/**
 * A component that renders the `up-long` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=light up-long}
 * @preview ![up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/up-long.svg)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M88 160l-49.3 0c-3.7 0-6.7-3-6.7-6.7c0-1.9 .8-3.7 2.2-5L160 35.8 285.8 148.3c1.4 1.3 2.2 3.1 2.2 5c0 3.7-3 6.7-6.7 6.7L232 160c-17.7 0-32 14.3-32 32l0 272c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-272c0-17.7-14.3-32-32-32zM174 5.3C170.1 1.9 165.2 0 160 0s-10.1 1.9-14 5.3L12.9 124.5C4.7 131.8 0 142.3 0 153.3C0 174.7 17.3 192 38.7 192L56 192l32 0 0 32 0 240c0 26.5 21.5 48 48 48l48 0c26.5 0 48-21.5 48-48l0-240 0-32 32 0 17.3 0c21.4 0 38.7-17.3 38.7-38.7c0-11-4.7-21.5-12.9-28.8L174 5.3z" />
    </Icon>
);

export default UpLong;