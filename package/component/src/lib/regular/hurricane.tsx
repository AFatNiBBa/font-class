
import { Icon } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=regular hurricane}
 * @preview ![hurricane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hurricane.svg)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 208C48 133.5 99 70.8 168 53l0 52.4c0 21.2 16 37.1 34.6 40.2C278.3 158.3 336 224.1 336 303.4c0 74.5-51 137.2-120 155l0-52.4c0-21.2-16-37.1-34.6-40.2C105.7 353.1 48 287.3 48 208zM216 42.1c0-22.7-20.1-43.4-45.6-38.7C73.5 21.1 0 105.9 0 208C0 309.2 72.3 393.5 168 412.2l0 57.1c0 22.7 20.1 43.4 45.6 38.7C310.5 490.3 384 405.5 384 303.4c0-101.2-72.3-185.5-168-204.2l0-57.1zM176 256a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default Hurricane;