
import { Icon } from "../../index";

/**
 * A component that renders the `cheese-swiss` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese-swiss?s=sharp-solid cheese-swiss}
 * @preview ![cheese-swiss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cheese-swiss.svg)
 */
const CheeseSwiss: typeof Icon = x => (
    <Icon {...x}>
        <path d="M141.8 145.7L0 256l512 0C512 132.3 411.7 32 288 32L217.1 87.2c4.4 7.2 6.9 15.7 6.9 24.8c0 26.5-21.5 48-48 48c-13.4 0-25.5-5.5-34.2-14.3zM416 288c0 26.5-21.5 48-48 48s-48-21.5-48-48L0 288 0 480l512 0 0-192-96 0zM176 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CheeseSwiss;