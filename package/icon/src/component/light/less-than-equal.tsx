
import { Icon } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=light less-than-equal}
 * @preview ![less-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/less-than-equal.svg)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M406.1 62.8c8.2-3.3 12.1-12.7 8.8-20.9s-12.7-12.1-20.9-8.8l-352 144c-6 2.5-9.9 8.3-9.9 14.8s3.9 12.3 9.9 14.8l352 144c8.2 3.3 17.5-.6 20.9-8.7s-.6-17.5-8.8-20.9L90.3 192 406.1 62.8zM16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 448z" />
    </Icon>
);

export default LessThanEqual;