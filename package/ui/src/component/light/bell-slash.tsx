
import { Icon } from "../../index";

/**
 * A component that renders the `bell-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=light bell-slash}
 * @preview ![bell-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bell-slash.svg)
 */
const BellSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M378.8 384l-238.6 0c-6.8 0-12.3-5.5-12.3-12.3c0-3.3 1.3-6.4 3.6-8.7l2.8-2.8c33.4-33.4 53.5-77.5 57.1-124.2L160 211.2l0 9.9c0 43.7-17.4 85.6-48.3 116.6l-2.8 2.8c-8.3 8.3-13 19.6-13 31.3c0 24.5 19.8 44.3 44.3 44.3l279.1 0-40.5-32zM304 32.8C264.5 36.7 229.2 55 203.4 82.4l25.2 19.9C251.9 78.7 284.2 64 320 64c70.7 0 128 57.3 128 128l0 29.1c0 21.4 3.5 42.5 10.2 62.4l75.1 59.3c-.7-.8-1.5-1.7-2.3-2.5l-2.8-2.8C497.4 306.7 480 264.8 480 221.1l0-29.1c0-83-63.1-151.2-144-159.2L336 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16.8zM289.8 458.7c-2.9-8.3-12.1-12.7-20.4-9.8s-12.7 12.1-9.8 20.4c8.8 24.8 32.5 42.7 60.4 42.7s51.6-17.8 60.4-42.7c2.9-8.3-1.4-17.5-9.8-20.4s-17.5 1.4-20.4 9.8C345.8 471.1 333.9 480 320 480s-25.8-8.9-30.2-21.3zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default BellSlash;