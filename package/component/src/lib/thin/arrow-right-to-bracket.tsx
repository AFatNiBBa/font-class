
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=thin arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-right-to-bracket.svg)
 */
const ArrowRightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M213.7 114.3l136 136c3.1 3.1 3.1 8.2 0 11.3l-136 136c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 264 8 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l316.7 0L202.3 125.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zM328 464l96 0c39.8 0 72-32.2 72-72l0-272c0-39.8-32.2-72-72-72l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l96 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default ArrowRightToBracket;