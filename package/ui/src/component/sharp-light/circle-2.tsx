
import { Icon } from "../../index";

/**
 * A component that renders the `circle-2` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-2?s=sharp-light circle-2}
 * @preview ![circle-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-2.svg)
 */
const Circle_2: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm-3.9-352l4.9 0c26 0 47 21 47 47c0 12-4.6 23.5-12.8 32.2L176 361.7l0 22.3 176 0 0-32-123 0 85.5-90.8c10.1-10.7 16.9-23.9 19.8-38.2l1.6-16c0-43.6-35.4-79-79-79l-4.9 0c-22.2 0-43.6 8.8-59.3 24.6L169.4 176 192 198.6l23.4-23.4c9.7-9.7 22.9-15.2 36.7-15.2z" />
    </Icon>
);

export default Circle_2;