
import { Icon } from "../../index";

/**
 * A component that renders the `spade` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=regular spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path d="M437.7 242.9s0 0 0 0L256.4 55 74.2 242.9c0 0 0 0 0 0c-37 38.4-34.9 102.3 6.7 138c0 0 0 0 0 0l.3 .2c32 27.9 86 25.1 120.8-10.2l19.7-20.7c9.2-9.7 22-15.1 35.4-14.9s26 5.9 35 15.8l18.3 20.2c34.3 34.4 87.3 38 121.7 9.5c40.6-35.7 42.6-99.6 5.7-138zM233.5 9.7c12-13 33-13 45.9 0L472.2 209.5c55.9 57.9 52.9 153.8-9 207.8c-50.7 42.6-122.8 39.2-173 .2c-3.5-2.7-6.9-5.6-10.2-8.7l0 55.2 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-55.3c-3.1 2.9-6.4 5.7-9.8 8.4c-50.4 39.4-123.4 43-172.5 .3c-62.9-53.9-65.9-149.8-10-207.8L233.5 9.7z" />
    </Icon>
);

export default Spade;