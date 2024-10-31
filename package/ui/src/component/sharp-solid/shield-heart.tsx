
import { Icon } from "../../index";

/**
 * A component that renders the `shield-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-heart?s=sharp-solid shield-heart}
 * @preview ![shield-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shield-heart.svg)
 */
const ShieldHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 5.7l11.5 4.4L475 90.2l19.2 7.4 1.2 20.6c2.9 49.7-4.9 125.6-37.3 199.8C425.4 392.8 367 467.1 268.6 509.4L256 514.8l-12.6-5.4C145 467.1 86.6 392.8 53.9 318C21.4 243.7 13.6 167.8 16.6 118.1l1.2-20.6L37 90.2l207.5-80L256 5.7zM144 221.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7L256 358.6l11.3-11.3 82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9c-33.8 0-61.3 27.4-61.3 61.3z" />
    </Icon>
);

export default ShieldHeart;