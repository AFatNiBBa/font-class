
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=light plus}
 * @preview ![plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/plus.svg)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 64c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 176L32 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l176 0 0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-176 0 0-176z" />
    </Icon>
);

export default Plus;