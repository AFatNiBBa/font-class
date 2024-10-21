
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=sharp-regular chart-line-down}
 * @preview ![chart-line-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-line-down.svg)
 */
const ChartLineDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56l0-24L0 32 0 56 0 456l0 24 24 0 464 0 24 0 0-48-24 0L48 432 48 56zM344 320l112 0 24 0 0-24 0-112 0-24-48 0 0 24 0 54.1L321 127l-17-17-17 17-79 79-63-63-17-17L94.1 160l17 17 80 80 17 17 17-17 79-79L398.1 272 344 272l-24 0 0 48 24 0z" />
    </Icon>
);

export default ChartLineDown;