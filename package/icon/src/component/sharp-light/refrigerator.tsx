
import { Icon } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=sharp-light refrigerator}
 * @preview ![refrigerator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/refrigerator.svg)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 32l0 128-64 0 0-48 0-16-32 0 0 16 0 48L32 160 32 32l320 0zM256 192l0 176 0 16 32 0 0-16 0-176 64 0 0 288L32 480l0-288 224 0zM32 0L0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-448 0-32L352 0 32 0z" />
    </Icon>
);

export default Refrigerator;