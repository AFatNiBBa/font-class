
import { Icon } from "../../index";

/**
 * A component that renders the `lollipop` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lollipop?s=regular lollipop}
 * @preview ![lollipop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lollipop.svg)
 */
const Lollipop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M210.8 334.8C265.3 314.2 304 261.6 304 200l0-8c0-61.9-50.1-112-112-112S80 130.1 80 192c0 39.8 32.2 72 72 72s72-32.2 72-72l0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-35.3 28.7-64 64-64s64 28.7 64 64l0 8c0 53-43 96-96 96l-8 0C94.6 296 48 249.4 48 192c0-79.5 64.5-144 144-144s144 64.5 144 144c0 73.2-54.6 133.6-125.2 142.8zM0 192C0 298 86 384 192 384c44.4 0 85.2-15 117.7-40.3L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L343.7 309.7C369 277.2 384 236.4 384 192C384 86 298 0 192 0S0 86 0 192z" />
    </Icon>
);

export default Lollipop;