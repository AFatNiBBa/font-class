
import { Icon } from "../../index";

/**
 * A component that renders the `square-root` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=thin square-root}
 * @preview ![square-root](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-root.svg)
 */
const SquareRoot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M386.6 48c-17.2 0-32.5 11-37.9 27.4L215.6 474.5c-1 3.1-3.8 5.2-7 5.4s-6.3-1.5-7.7-4.4L89.7 253.3C85.6 245.1 77.3 240 68.2 240L8 240c-4.4 0-8-3.6-8-8s3.6-8 8-8l60.2 0c15.2 0 29 8.6 35.8 22.1l102.5 205 127-380.9c7.6-22.9 29-38.3 53.1-38.3L568 32c4.4 0 8 3.6 8 8s-3.6 8-8 8L386.6 48z" />
    </Icon>
);

export default SquareRoot;