
import { Icon } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=sharp-light box-heart}
 * @preview ![box-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/box-heart.svg)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M42.1 160L208 160l0-96L84.8 64 42.1 160zM208 192L32 192l0 256 384 0 0-256-176 0-32 0zM363.2 64L240 64l0 96 165.9 0L363.2 64zM64 32l320 0 64 144 0 272 0 32-32 0L32 480 0 480l0-32L0 176 64 32zm84 231.2c-14.2 14.2-13.4 37.5 1.7 50.7L224 378.8l74.3-64.8c15.2-13.2 15.9-36.5 1.7-50.7c-13.6-13.6-35.6-13.6-49.1 0l-15.5 15.5L224 290.1l-11.3-11.3-15.5-15.5c-13.6-13.6-35.6-13.6-49.1 0zm71.8-22.6l4.2 4.2 4.2-4.2c26.1-26.1 68.3-26.1 94.4 0c27.3 27.3 25.8 72.1-3.3 97.5l-84.8 74L224 421.2l-10.5-9.2-84.8-74c-29.1-25.4-30.6-70.2-3.3-97.5c26.1-26.1 68.3-26.1 94.4 0z" />
    </Icon>
);

export default BoxHeart;