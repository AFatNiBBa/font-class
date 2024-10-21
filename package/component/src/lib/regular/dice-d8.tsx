
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=regular dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M239 7c9.4-9.4 24.6-9.4 33.9 0L505 239c9.4 9.4 9.4 24.6 0 33.9L273 505c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L239 7zM126.2 324.3L232 430.1l0-62L126.2 324.3zM280 368l0 62L385.8 324.3 280 368zM445.6 247.6L280 81.9l0 234.2 165.6-68.5zM232 81.9L66.4 247.6 232 316.1l0-234.2z" />
    </Icon>
);

export default DiceD8;