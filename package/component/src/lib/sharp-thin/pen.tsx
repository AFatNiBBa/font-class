
import { Icon } from "../../index";

/**
 * A component that renders the `pen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=sharp-thin pen}
 * @preview ![pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen.svg)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512l4.4-17.6L40 352 380.7 11.3 392 0l11.3 11.3 97.4 97.4L512 120l-11.3 11.3L160 472 17.6 507.6 0 512zm151.8-54.4L411 198.3 313.7 101 54.4 360.2 22 490l129.8-32.5zM422.3 187l67-67L392 22.6l-67 67L422.3 187z" />
    </Icon>
);

export default Pen;