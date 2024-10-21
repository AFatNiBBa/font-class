
import { Icon } from "../../index";

/**
 * A component that renders the `drumstick` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=solid drumstick}
 * @preview ![drumstick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/drumstick.svg)
 */
const Drumstick: typeof Icon = x => (
    <Icon {...x}>
        <path d="M150.6 287.8c6-6 9.4-14.1 9.4-22.6l0-89.2C160 78.8 238.8 0 336 0s176 78.8 176 176s-78.8 176-176 176l-89.2 0c-8.5 0-16.6 3.4-22.6 9.4l-26.8 26.8c-12.3 12.3-11.4 32.5-7.2 49.4c1.1 4.6 1.8 9.5 1.8 14.5c0 33.1-26.9 60-60 60s-60-26.9-60-60c0-6.3-5.7-12-12-12c-33.1 0-60-26.9-60-60s26.9-60 60-60c5 0 9.8 .6 14.5 1.8c16.9 4.2 37.1 5.2 49.4-7.2l26.8-26.8z" />
    </Icon>
);

export default Drumstick;