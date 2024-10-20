
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=regular diamond}
 * @preview ![diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diamond.svg)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M249 50.9L50.9 249c-1.9 1.9-2.9 4.4-2.9 7s1 5.2 2.9 7L249 461.1c1.9 1.9 4.4 2.9 7 2.9s5.2-1 7-2.9L461.1 263c1.9-1.9 2.9-4.4 2.9-7s-1-5.2-2.9-7L263 50.9c-1.9-1.9-4.4-2.9-7-2.9s-5.2 1-7 2.9zM17 215L215 17C225.9 6.1 240.6 0 256 0s30.1 6.1 41 17L495 215c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41z" />
    </Icon>
);

export default Diamond;