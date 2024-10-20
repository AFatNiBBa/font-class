
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cucumber` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cucumber?s=sharp-duotone-solid cucumber}
 * @preview ![cucumber](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cucumber.svg)
 */
const Cucumber: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M120 280l48 0 0 48-48 0 0-48zm160-32l48 0 0 48-48 0 0-48zM376 88l48 0 0 48-48 0 0-48z" />
        <path d="M37.5 474.5c47.8 47.8 123.9 49.9 174.2 6.4L232 501.3 277.3 456l-20.1-20.1L435.9 257.1 456 277.3 501.3 232l-20.4-20.4c43.5-50.3 41.4-126.4-6.4-174.2c-50-50-131-50-181 0L172.1 158.9 152 138.7 106.7 184l20.1 20.1L37.5 293.5c-50 50-50 131 0 181zM376 88l48 0 0 48-48 0 0-48zM328 248l0 48-48 0 0-48 48 0zM168 280l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Cucumber;