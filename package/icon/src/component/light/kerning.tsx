
import { Icon } from "../../index";

/**
 * A component that renders the `kerning` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=light kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M454.3 23.2c4-7.9 .7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-240 480c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l240-480zm-424 81.7c-4-7.9-13.6-11.1-21.5-7.2s-11.1 13.6-7.2 21.5l144 288c2.7 5.4 8.3 8.8 14.3 8.8s11.6-3.4 14.3-8.8l144-288c4-7.9 .7-17.5-7.2-21.5s-17.5-.7-21.5 7.2L160 364.2 30.3 104.8zm320 302.3L385.9 336l188.2 0 35.6 71.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-144-288c-2.7-5.4-8.2-8.8-14.3-8.8s-11.6 3.4-14.3 8.8l-144 288c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2zM480 147.8L558.1 304l-156.2 0L480 147.8z" />
    </Icon>
);

export default Kerning;