
import { Icon } from "../../index";

/**
 * A component that renders the `hat-wizard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-wizard?s=sharp-thin hat-wizard}
 * @preview ![hat-wizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hat-wizard.svg)
 */
const HatWizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M426.9 20.4L384 192l74.3 208-17 0L368.9 197.4l-1.6-4.6 1.2-4.7L408 29.9 188.3 139.7 72.6 400l-17.5 0L176 128 413.2 9.4 432 0l-5.1 20.4zM496 448L16 448l0 48 480 0 0-48zM16 432l480 0 16 0 0 16 0 48 0 16-16 0L16 512 0 512l0-16 0-48 0-16 16 0zM280 144l0 24 24 0 8 0 0 16-8 0-24 0 0 24 0 8-16 0 0-8 0-24-24 0-8 0 0-16 8 0 24 0 0-24 0-8 16 0 0 8zM232 280l0 48 48 0 8 0 0 16-8 0-48 0 0 56-16 0 0-56-48 0-8 0 0-16 8 0 48 0 0-48 0-8 16 0 0 8z" />
    </Icon>
);

export default HatWizard;