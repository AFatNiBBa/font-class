
import { Icon } from "../../index";

/**
 * A component that renders the `autoprefixer` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/autoprefixer?s=brands autoprefixer}
 * @preview ![autoprefixer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/autoprefixer.svg)
 */
const Autoprefixer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M318.4 16l-161 480h77.5l25.4-81.4h119.5L405 496h77.5L318.4 16zm-40.3 341.9l41.2-130.4h1.5l40.9 130.4h-83.6zM640 405l-10-31.4L462.1 358l19.4 56.5L640 405zm-462.1-47L10 373.7 0 405l158.5 9.4 19.4-56.4z" />
    </Icon>
);

export default Autoprefixer;