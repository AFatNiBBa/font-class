
import { Icon } from "../../index";

/**
 * A component that renders the `square-person-confined` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-person-confined?s=sharp-solid square-person-confined}
 * @preview ![square-person-confined](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-person-confined.svg)
 */
const SquarePersonConfined: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM256 144a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm18.7 48l-9.4 9.4-16 16-9.4 9.4 0 13.3 0 66.7-41.4-41.4-51.2 8.3-24 48-12 24-12 24-12 24L76.2 416l71.6 0 8.8-17.7 12-24 12-24 4.1-8.3 54.7 54.7c12.4 12.4 29.1 19.3 46.6 19.3c36.4 0 65.9-29.5 65.9-65.9L352 224l0-32-32 0-32 0-13.3 0z" />
    </Icon>
);

export default SquarePersonConfined;