
import { Icon } from "../../index";

/**
 * A component that renders the `tree-large` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-large?s=solid tree-large}
 * @preview ![tree-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/tree-large.svg)
 */
const TreeLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M62 169.4L210.6 5.9C214 2.1 218.9 0 224 0s10 2.1 13.4 5.9L386 169.4c3.9 4.2 6 9.8 6 15.5c0 12.7-10.3 23.1-23.1 23.1H344l75.5 105.7c2.9 4.1 4.5 9 4.5 14.1c0 13.4-10.9 24.2-24.2 24.2H368l76.2 122c2.5 4 3.8 8.5 3.8 13.2c0 13.7-11.1 24.9-24.9 24.9H24.9C11.1 512 0 500.9 0 487.1c0-4.7 1.3-9.2 3.8-13.2L80 352H48.2C34.8 352 24 341.1 24 327.8c0-5 1.6-10 4.5-14.1L104 208H79.1C66.3 208 56 197.7 56 184.9c0-5.7 2.1-11.3 6-15.5z" />
    </Icon>
);

export default TreeLarge;