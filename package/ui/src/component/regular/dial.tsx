
import { Icon } from "../../index";

/**
 * A component that renders the `dial` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=regular dial}
 * @preview ![dial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dial.svg)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM208.8 208.8c37.9-37.9 96.2-43 139.6-15.1L271 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l77.4-77.4c27.8 43.4 22.8 101.7-15.1 139.6c-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4zm192.3-33.9A160 160 0 1 0 174.9 401.1 160 160 0 1 0 401.1 174.9zM576 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 96A32 32 0 1 0 64 96a32 32 0 1 0 64 0zm352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 480a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Dial;