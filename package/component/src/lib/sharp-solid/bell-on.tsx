
import { Icon } from "../../index";

/**
 * A component that renders the `bell-on` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=sharp-solid bell-on}
 * @preview ![bell-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bell-on.svg)
 */
const BellOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 0L288 0l0 51.2C215 66 160 130.6 160 208l0 88L96 368l0 48 448 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L352 0zm32 448l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3zM0 176l0 48 24 0 80 0 24 0 0-48-24 0-80 0L0 176zm536 0l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0zM608.2 50.7L586.7 7.8 565.3 18.5l-64 32L479.8 61.3l21.5 42.9 21.5-10.7 64-32 21.5-10.7zM53.3 61.5l64 32 21.5 10.7 21.5-42.9L138.7 50.5l-64-32L53.3 7.8 31.8 50.7 53.3 61.5z" />
    </Icon>
);

export default BellOn;