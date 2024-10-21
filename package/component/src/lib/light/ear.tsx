
import { Icon } from "../../index";

/**
 * A component that renders the `ear` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ear?s=light ear}
 * @preview ![ear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ear.svg)
 */
const Ear: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192l0 176c0 61.9 50.1 112 112 112s112-50.1 112-112c0-16.4 8.2-32.2 22.5-41.4C322.8 298.1 352 248.5 352 192zm32 0c0 67.8-35.1 127.4-88.2 161.5c-4.9 3.2-7.8 8.6-7.8 14.5c0 79.5-64.5 144-144 144S0 447.5 0 368L0 192C0 86 86 0 192 0S384 86 384 192zm-272 0l0 6.3c0 10.7 5.3 20.7 14.2 26.6l8.9 5.9c15.5 10.4 24.9 27.8 24.9 46.5c0 16.6-7.4 32.3-20.1 42.9l-33.7 28c-6.8 5.7-16.9 4.7-22.5-2s-4.7-16.9 2-22.5l33.7-28c5.4-4.5 8.6-11.2 8.6-18.3c0-8-4-15.4-10.6-19.9l-8.9-5.9C90.7 239.7 80 219.7 80 198.3l0-6.3c0-61.9 50.1-112 112-112s112 50.1 112 112l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default Ear;