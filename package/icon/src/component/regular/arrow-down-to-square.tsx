
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-square` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-square?s=regular arrow-down-to-square}
 * @preview ![arrow-down-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-to-square.svg)
 */
const ArrowDownToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M385 233c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71L280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 246.1-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 345c9.4 9.4 24.6 9.4 33.9 0L385 233zM72 32C32.2 32 0 64.2 0 104L0 440c0 39.8 32.2 72 72 72l368 0c39.8 0 72-32.2 72-72l0-336c0-39.8-32.2-72-72-72l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24 10.7 24 24l0 336c0 13.3-10.7 24-24 24L72 464c-13.3 0-24-10.7-24-24l0-336c0-13.3 10.7-24 24-24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 32z" />
    </Icon>
);

export default ArrowDownToSquare;