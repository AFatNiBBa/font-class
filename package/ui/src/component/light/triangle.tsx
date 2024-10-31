
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=light triangle}
 * @preview ![triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/triangle.svg)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M235.5 75.8c4.2-7.3 12-11.8 20.5-11.8s16.2 4.5 20.5 11.8l201 344.6c1.6 2.8 2.5 6 2.5 9.3c0 10.2-8.2 18.4-18.4 18.4L50.4 448C40.2 448 32 439.8 32 429.6c0-3.3 .9-6.4 2.5-9.3l201-344.6zM207.9 59.6L6.9 404.2C2.4 411.9 0 420.7 0 429.6C0 457.4 22.6 480 50.4 480l411.2 0c27.8 0 50.4-22.6 50.4-50.4c0-8.9-2.4-17.7-6.9-25.4L304.1 59.6C294.1 42.5 275.8 32 256 32s-38.1 10.5-48.1 27.6z" />
    </Icon>
);

export default Triangle;