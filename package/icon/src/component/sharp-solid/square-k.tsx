
import { Icon } from "../../index";

/**
 * A component that renders the `square-k` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=sharp-solid square-k}
 * @preview ![square-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-k.svg)
 */
const SquareK: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM337.1 128l-1 1.1L238.3 238.3 330 376.7l4.8 7.3-57.6 0L205.1 275.2 176 307.7l0 52.3 0 24-48 0 0-24 0-61.5L128 152l0-24 48 0 0 24 0 83.8L190.1 220l82.5-92 64.5 0z" />
    </Icon>
);

export default SquareK;