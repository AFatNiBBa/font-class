
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-square` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-square?s=regular arrow-up-from-square}
 * @preview ![arrow-up-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up-from-square.svg)
 */
const ArrowUpFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M273 7c-9.4-9.4-24.6-9.4-33.9 0L127 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l71-71L232 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-246.1 71 71c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L273 7zM72 32C32.2 32 0 64.2 0 104L0 440c0 39.8 32.2 72 72 72l368 0c39.8 0 72-32.2 72-72l0-336c0-39.8-32.2-72-72-72l-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0c13.3 0 24 10.7 24 24l0 336c0 13.3-10.7 24-24 24L72 464c-13.3 0-24-10.7-24-24l0-336c0-13.3 10.7-24 24-24l8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0z" />
    </Icon>
);

export default ArrowUpFromSquare;