
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=sharp-solid dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L448 0l0 512L0 512 0 0zM368 304A144 144 0 1 0 80 304a144 144 0 1 0 288 0zM88 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM208 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM336 304c0 61.9-50.1 112-112 112c-56.4 0-103.1-41.7-110.9-96l62.9 0 16 0 0-32-16 0-62.9 0c7.8-54.3 54.4-96 110.9-96c61.9 0 112 50.1 112 112z" />
    </Icon>
);

export default Dryer;