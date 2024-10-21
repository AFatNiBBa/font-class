
import { Icon } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=sharp-light feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 154.3C199.7 114.6 266 85.2 336.3 65c50.4-14.5 100.5-23.7 139.6-28.8c-5.2 39-14.3 89.1-28.8 139.5c-4.7 16.4-9.9 32.6-15.7 48.3l-120.7 0 37.6-37.6 11.3-11.3-22.6-22.6-11.3 11.3L116.4 373C96.1 345.5 91 310.2 98 272.2c8.1-44.3 32.4-88.3 62-118zM116.2 418.4c77.8 61.8 199.5 20.9 264.2-43.8c80.9-80.9 116.5-247.3 128.2-342.2c1.5-12.1 2.6-23 3.4-32.4c-9.4 .8-20.3 1.9-32.4 3.4c-95 11.8-261.3 47.4-342.2 128.2C72.7 196.3 31.7 318 93.6 395.8L14.3 475.1 3 486.4 25.6 509l11.3-11.3 79.3-79.3zM139 395.6L182.6 352l175.1 0c-29.6 29.6-73.7 53.9-118 62c-38 7-73.2 1.8-100.7-18.4zM384 320l-169.3 0 64-64 140 0c-10.2 23.5-21.7 45.2-34.6 64z" />
    </Icon>
);

export default FeatherPointed;