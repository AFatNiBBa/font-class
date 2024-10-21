
import { Icon } from "../../index";

/**
 * A component that renders the `bed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=regular bed}
 * @preview ![bed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bed.svg)
 */
const Bed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56L0 360l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 264 0 280 0 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96 0-112c0-66.3-53.7-120-120-120l-176 0c-30.9 0-56 25.1-56 56l0 152L48 336 48 56zM592 248l0 88-256 0 0-152c0-4.4 3.6-8 8-8l176 0c39.8 0 72 32.2 72 72zM128 216a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm128 0A88 88 0 1 0 80 216a88 88 0 1 0 176 0z" />
    </Icon>
);

export default Bed;