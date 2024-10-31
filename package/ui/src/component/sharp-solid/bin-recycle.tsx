
import { Icon } from "../../index";

/**
 * A component that renders the `bin-recycle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bin-recycle?s=sharp-solid bin-recycle}
 * @preview ![bin-recycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bin-recycle.svg)
 */
const BinRecycle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l576 0 0 64L0 96 0 32zm32 96l512 0L512 480 64 480 32 128zm256 88c2.2 0 4.3 1.1 5.5 2.9l33.8 48.3 40.8-25.5-35.2-50.3c-10.2-14.6-27-23.3-44.8-23.3s-34.6 8.7-44.8 23.3l-35.2 50.3 40.8 25.5 33.8-48.3c1.3-1.8 3.3-2.9 5.5-2.9zM180.4 281l-34.5 49.3c-6.4 9.1-9.8 20-9.8 31.2c0 30.1 24.4 54.4 54.4 54.4l73.6 0 0-48-73.6 0c-3.5 0-6.4-2.9-6.4-6.4c0-1.3 .4-2.6 1.2-3.7l36-51.4L180.4 281zM312 416l73.6 0c30.1 0 54.4-24.4 54.4-54.4c0-11.2-3.4-22.1-9.8-31.2L395.6 281l-40.8 25.5 36 51.4c.8 1.1 1.2 2.4 1.2 3.7c0 3.5-2.9 6.4-6.4 6.4L312 368l0 48z" />
    </Icon>
);

export default BinRecycle;