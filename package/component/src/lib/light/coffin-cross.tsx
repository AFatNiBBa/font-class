
import { Icon } from "../../index";

/**
 * A component that renders the `coffin-cross` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin-cross?s=light coffin-cross}
 * @preview ![coffin-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/coffin-cross.svg)
 */
const CoffinCross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M35.6 136c-2.3 2.6-3.6 6-3.6 9.5c0 1.4 .2 2.7 .6 4L128.1 480l127.9 0 95.5-330.6c.4-1.3 .6-2.6 .6-4c0-3.5-1.3-6.9-3.6-9.5l-91-104-131 0-91 104zM11.5 114.9l91-104C108.5 4 117.3 0 126.5 0l131 0c9.2 0 18 4 24.1 10.9l91 104c7.4 8.5 11.5 19.3 11.5 30.6c0 4.4-.6 8.7-1.8 12.9L286.7 488.9c-4 13.7-16.5 23.1-30.7 23.1l-127.9 0c-14.3 0-26.8-9.4-30.7-23.1L1.8 158.3C.6 154.1 0 149.8 0 145.4c0-11.2 4.1-22.1 11.5-30.6zM208 112l0 64 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default CoffinCross;