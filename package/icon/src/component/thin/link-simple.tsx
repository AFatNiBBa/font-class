
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=thin link-simple}
 * @preview ![link-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/link-simple.svg)
 */
const LinkSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 256C0 167.6 71.6 96 160 96l88 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-88 0C80.5 112 16 176.5 16 256s64.5 144 144 144l88 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-88 0C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160l-88 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l88 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-88 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l88 0c88.4 0 160 71.6 160 160zm-440-8l304 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-304 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default LinkSimple;