
import { Icon } from "../../index";

/**
 * A component that renders the `up-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-left?s=solid up-left}
 * @preview ![up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/up-left.svg)
 */
const UpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 80l240 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-72 72L372.7 340.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3l-41.4 41.4c-7.2 7.2-17.1 11.3-27.3 11.3s-20.1-4.1-27.3-11.3L142.6 302.6l-72 72c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-240c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default UpLeft;