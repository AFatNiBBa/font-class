
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=thin greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M36.9 47.4c-4.1-1.7-6-6.4-4.3-10.4s6.4-6 10.4-4.3l368 152c3 1.2 4.9 4.2 4.9 7.4s-2 6.2-4.9 7.4l-368 152c-4.1 1.7-8.8-.3-10.4-4.3s.3-8.8 4.3-10.4L387 192 36.9 47.4zM440 464c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l432 0z" />
    </Icon>
);

export default GreaterThanEqual;